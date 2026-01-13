// app/api/webhooks/mollie/route.ts
import { db } from '@/db';
import { orders } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { mollieClient } from '@/lib/mollie';
import { renderToStream } from '@react-pdf/renderer';
import { render } from '@react-email/render';
import { InvoicePDF } from '@/components/Invoice'; // Componenta ta
import EmailConfirmarePlata from '@/emails/EmailConfirmarePlata'; // Componenta ta
import { transporter } from '@/lib/nodemailer';

// Definește un tip pentru metadata ta
interface MyPaymentMetadata {
  internalOrderId: string | number;
}

export async function POST(req: Request) {
  const text = await req.text();
  const params = new URLSearchParams(text);
  const paymentId = params.get('id');

  if (!paymentId) return new Response('No ID', { status: 400 });

  const payment = await mollieClient.payments.get(paymentId);
  const metadata = payment.metadata as unknown as MyPaymentMetadata; // Cast aici

 const orderId = Number(metadata.internalOrderId);

  // 1. Căutăm comanda în Neon
  const [order] = await db.select().from(orders).where(eq(orders.id, orderId)).limit(1);

  if (!order) return new Response('Order not found', { status: 404 });

  // 2. Verificăm dacă e plătită și dacă NU am trimis email-ul deja
  if (payment.status === 'paid' && !order.email_sent) {
    
    // --- GENERARE PDF ---
    const invoiceProps = {
      orderId: order.id.toString(),
      date: new Date().toLocaleDateString('ro-RO'),
      numeClient: order.customer_name,
      emailClient: order.customer_email,
      adresaClient: order.customer_address,
      telefonClient: order.customer_phone,
      amount: `${payment.amount.value} RON`,
      produs: "Pachet Mic Dejun Start Activ"
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

    // --- TRIMITERE EMAIL ---
    await transporter.sendMail({
      from: `"Active Boost" <${process.env.SMTP_USER}>`,
      to: order.customer_email,
      subject: `Felicitări! Ghidul tău Active Boost a sosit! 🔥`,
      html: htmlBody,
      attachments: [{
        filename: `Factura_${orderId}.pdf`,
        content: pdfBuffer,
        contentType: 'application/pdf'
      }]
    });

    // 3. Update Status în Neon: Paid + Email Sent
    await db.update(orders)
      .set({ 
        paymentStatus: 'paid', 
        email_sent: true,
        updatedAt: new Date()
      })
      .where(eq(orders.id, orderId));

  } else {
    // Update status simplu (failed, canceled, etc.)
    await db.update(orders)
      .set({ paymentStatus: payment.status, updatedAt: new Date() })
      .where(eq(orders.id, orderId));
  }

  return new Response('OK', { status: 200 });
}