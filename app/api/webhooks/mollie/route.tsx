
import mollieClient from '@/lib/mollie';
import { supabaseServer } from '@/lib/supabaseServer';
import { NextRequest } from 'next/server';
import { PaymentStatus } from '@mollie/api-client';
import { render } from '@react-email/render';
import { EmailConfirmarePlata } from '@/emails/EmailConfirmarePlata'

// Importăm transporterul nostru ---
import { transporter } from '@/lib/nodemailer';

interface MolliePaymentMetadata {
  order_id: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const paymentId = formData.get('id') as string;

    if (!paymentId) {
      console.warn('Webhook primit fără ID de plată');
      return new Response('OK (No ID)', { status: 200 });
    }

    const payment = await mollieClient.payments.get(paymentId);
    const metadata = payment.metadata as MolliePaymentMetadata;
    const orderId = metadata?.order_id;

    if (!orderId) {
      throw new Error(`Webhook pentru ${paymentId} nu are order_id!`);
    }

    // --- Logica pentru PLATA REUȘITĂ ---
    if (payment.status === PaymentStatus.paid) {
      console.log(`Plata reușită pentru comanda: ${orderId}`);

      // 1. Verificăm starea comenzii
      const { data: order, error: orderError } = await supabaseServer
        .from('clienti')
        .select('id, nume_client, email_client, status, email_sent')
        .eq('id', orderId)
        .single();

      if (orderError) {
        throw new Error(`Comanda ${orderId} nu a fost găsită: ${orderError.message}`);
      }

      // 2. Verificăm dacă emailul a fost deja trimis
      if (order.email_sent === true) {
        console.log(`Email pentru comanda ${orderId} a fost deja trimis. Ignorăm.`);
        return new Response('OK (Email deja trimis)', { status: 200 });
      }

      // 3. Preluăm linkurile Google Drive
      const link1 = process.env.PDF_LINK_1;
      const link2 = process.env.PDF_LINK_2;
    


      if (!link1 || !link2 ) {
        throw new Error('Link-urile PDF (PDF_LINK_1 / PDF_LINK_2) nu sunt setate în .env');
      }

      // --- MODIFICARE 2: Folosim transporter.sendMail ---
      const htmlBody = await render(
        <EmailConfirmarePlata
          numeClient={order.nume_client}
          linkGhid1={link1}
          linkGhid2={link2}
          orderId={order.id}
      
        />
      );

      await transporter.sendMail({
        from: `"Active boost" <${process.env.SMTP_USER}>`, // Emailul tău (expeditorul)
        to: order.email_client, // Emailul clientului
        subject: `Felicitări! Ghidul tău Active Boost a sosit! 🔥`,
        html: htmlBody,
      });
      // --- Sfârșitul modificării ---

      console.log(`Email trimis către ${order.email_client}`);

      // 5. Actualizăm comanda în DB (setăm status ȘI email_sent)
      await supabaseServer
        .from('clienti')
        .update({ status: 'paid', email_sent: true })
        .eq('id', orderId);

    } else if (payment.status === PaymentStatus.failed) {
      // ... (logica ta pentru plată eșuată)
      console.log(`Plata eșuată pentru comanda: ${orderId}`);
      await supabaseServer
        .from('clienti')
        .update({ status: 'failed' })
        .eq('id', orderId);
    }

    return new Response('OK', { status: 200 });

  } catch (error) {
    console.error('Eroare la procesarea webhook-ului Mollie:', error);
    return new Response('Webhook Error', { status: 500 });
  }
}