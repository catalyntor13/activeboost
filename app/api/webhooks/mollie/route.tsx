import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { orders } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createMollieClient } from "@mollie/api-client";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { renderToStream } from '@react-pdf/renderer';
import { InvoicePDF } from '@/components/Invoice';
import EmailConfirmarePlata from "@/emails/EmailConfirmarePlata";
import { generateInvoiceNumberSafe } from "@/lib/generate-inovice-number";

const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! });
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    // 1. Mollie trimite form-data, NU json
    //    Dacă faci req.json() aici nu vei găsi nimic niciodată
    const formData = await req.formData();
    const paymentId = formData.get("id") as string;
    

    if (!paymentId) {
      console.error("[webhook] Lipsește paymentId din request");
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    // 2. Verificăm statusul direct la Mollie — nu ne bazăm pe ce zice request-ul
    const payment = await mollie.payments.get(paymentId);


    // 3. Dacă nu e paid, returnăm 200 fără să facem nimic
    //    200 e important — altfel Mollie retrimite webhook-ul la nesfârșit
    if (payment.status !== "paid") {
      return NextResponse.json({ received: true });
    }

    // 4. Luăm orderId din metadata — l-am salvat la creare
    const orderId = Number((payment.metadata as Record<string, string>)?.orderId);

    if (!orderId) {
      console.error("[webhook] orderId lipsește din metadata Mollie");
      return NextResponse.json({ error: "Missing orderId" }, { status: 400 });
    }

    // 5. Preluăm comanda din Neon
    const [order] = await db
      .select()
      .from(orders)
      .where(eq(orders.id, orderId));

    if (!order) {
      console.error("[webhook] Comanda nu există în DB:", orderId);
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // 6. Protecție împotriva dublei procesări
    //    Mollie poate trimite același webhook de mai multe ori
    if (order.paymentStatus === "paid") {
    
      return NextResponse.json({ received: true });
    }

    const invoiceNumber = await generateInvoiceNumberSafe(orderId);
    // 7. Actualizăm statusul comenzii în Neon
    await db
      .update(orders)
      .set({
        paymentStatus: "paid",
        updatedAt: new Date(),
        invoiceNumber,
      })
      .where(eq(orders.id, orderId));


      // 8. Generam PDF sau orice altceva ai nevoie pentru email
      const invoiceProps = {
      orderId: order.id.toString(),
      invoiceNumber,
      date: new Date().toLocaleDateString('ro-RO'),
      numeClient: order.customer_name,
      emailClient: order.customer_email,
      adresaClient: order.customer_address,
      telefonClient: order.customer_phone,
      amount: `${payment.amount.value} RON`,
      produs: "Pachet eBook Active Boost"
    };

      const pdfStream = await renderToStream(<InvoicePDF {...invoiceProps} />);
    const chunks: any[] = [];
    for await (const chunk of pdfStream) { chunks.push(chunk); }
    const pdfBuffer = Buffer.concat(chunks);

    // --- GENERARE HTML EMAIL ---
    const htmlBody = await render(
      <EmailConfirmarePlata 
        numeClient={order.customer_name}
        linkGhid1={process.env.PDF_LINK_1!}
        linkGhid2={process.env.PDF_LINK_2!}
        oId={order.id.toString()}
      />
    );
  

    // 9. Trimitem email-ul prin Resend
    const { data, error: resendError } = await resend.emails.send({
      from: "Active Boost <onboarding@resend.dev>", // ← domeniu verificat în Resend dashboard
      to: 'activeboostfitclub@gmail.com',
      subject: `Confirmare comandă #${order.id}`,
      html: htmlBody,
      attachments: [{
        filename: `Factura_${orderId}.pdf`,
        content: pdfBuffer,
        contentType: 'application/pdf'
      }]
    });

    // 10. Actualizăm câmpul email_sent din schema ta
    //     Util ca să știi dacă emailul a ajuns sau nu, direct din DB
    if (resendError) {
      console.error("[webhook] Eroare Resend:", JSON.stringify(resendError));
      await db
        .update(orders)
        .set({ email_sent: false })
        .where(eq(orders.id, orderId));
    } else {
      
      await db
        .update(orders)
        .set({ email_sent: true })
        .where(eq(orders.id, orderId));
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error("[webhook] Eroare generală:", error);
    // Returnăm 200 chiar și la eroare internă
    // Altfel Mollie intră în retry loop și trimite webhook-ul de zeci de ori
    return NextResponse.json({ received: true });
  }
}