import mollieClient from '@/lib/mollie';
import { supabaseServer } from '@/lib/supabaseServer';
import { NextRequest, NextResponse } from 'next/server';
import { PaymentStatus } from '@mollie/api-client';

// --- MODIFICARE 1: Importăm transporterul nostru ---
import { transporter } from '@/lib/nodemailer';

// (Am șters importul Resend)

interface MolliePaymentMetadata {
  order_id: string;
}

// (Am șters inițializarea Resend)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const paymentId = formData.get('id') as string;

    if (!paymentId) {
      console.warn('Webhook primit fără ID de plată');
      return new Response('OK (No ID)', { status: 200 });
    }

    console.log(`Webhook primit pentru plata: ${paymentId}`);

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
        .select('nume_client, email_client, status, email_sent')
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
      const htmlBody = `
        <h1>Salut ${order.nume_client},!</h1>
        <p>Sunt Adrian și vreau să te felicit personal! Ai făcut primul și cel mai important pas către o viață cu mai multă energie și control. Sunt foarte mândru de decizia ta.
</p>

<p>Gata cu așteptarea. Găsești mai jos link-urile securizate pentru a descărca pachetul tău complet:</p>
<strong>Gata cu așteptarea. Găsești mai jos link-urile securizate pentru a descărca pachetul tău complet:</strong></br></br>
        
<a href='${link1}'>
<button> Descarca aici Ghid Arta Hidratarii</button>
</a>
</br></br>
<a href='${link2}'>
<button>Descarca aici Ghid 10 Hackuri Simple</button>
</a>

<p>Îți recomand să salvezi ambele fișiere PDF pe telefon sau laptop pentru a le avea mereu la îndemână. Acesta este doar începutul călătoriei noastre împreună.
</p>

<p>Spor la citit! </p>
<p>Cu drag, Adrian Fondator, Active Boost</p>

<p><strong>P.S.: O Invitație Specială Doar Pentru Tine...</strong></p>

<p>După ce vei parcurge ghidul, s-ar putea să te gândești: "Este excelent, dar aș vrea o soluție și mai rapidă și mai structurată pentru zilele aglomerate."</p>

<p>Tocmai de aceea, pregătesc lansarea programului premium "Start Activ" - soluția mea completă de nutriție (cu sprijinul coach-ului Robert și al rezultatelor sale dovedite) pentru cei care vor comoditate maximă și rezultate ghidate.
</p>

<p>Ca mulțumire pentru încrederea acordată, ești invitat să te înscrii pe lista de așteptare exclusivă. Vei fi primul care află când se lansează și vei primi o ofertă specială, rezervată doar membrilor fondatori.</p>

<button>DA, Vreau să mă înscriu pe Lista de Așteptare!</button>


      `;

      await transporter.sendMail({
        from: `"Activeboost" <${process.env.SMTP_USER}>`, // Emailul tău (expeditorul)
        to: order.email_client, // Emailul clientului
        subject: `Felicitări! Ghidul tău Active Boost a sosit! 🔥`,
        html: htmlBody,
      });
      // --- Sfârșitul modificării ---

      console.log(`Email (Nodemailer) trimis către ${order.email_client}`);

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