import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';
import { transporter } from '@/lib/nodemailer';
import { render } from '@react-email/render';
import { EmailFollowUp } from '@/emails/EmailFollowUp'; 

export async function GET(request: Request) {
  // 1. Securitate simplă: Verificăm dacă apelul vine de la Vercel (sau un secret key)
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // 2. Calculăm data de acum 5 zile
  const fiveDaysAgo = new Date();
  fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
  
  // Convertim în format ISO pentru Supabase (ex: 2023-10-25T...)
  const dateString = fiveDaysAgo.toISOString().split('T')[0]; // Luăm doar data YYYY-MM-DD

  // 3. Căutăm clienții care:
  // - Au plătit (status = paid)
  // - NU au primit follow-up (follow_up = false)
  // - Au fost creați (sau au plătit) înainte sau în ziua de referință
  // Notă: Logica exactă de dată depinde de cum stochezi data plății. 
  // Aici presupunem 'created_at' ca dată a comenzii.
  
  const { data: clients, error } = await supabaseServer
    .from('clienti')
    .select('*')
    .eq('status', 'paid')
    .eq('follow_up', false)
    .lt('created_at', dateString + 'T23:59:59'); // Mai vechi de 3 zile

  if (error || !clients || clients.length === 0) {
    return NextResponse.json({ message: 'Niciun client de procesat.' });
  }

  // 4. Trimitem email-urile
  for (const client of clients) {
    try {
      const htmlBody = await render(<EmailFollowUp numeClient={client.nume_client} />);
      
      await transporter.sendMail({
        from: `"Active Boost" <${process.env.SMTP_USER}>`,
        to: client.email_client,
        subject: "Cum ți se pare ghidul? 🤔",
        html: htmlBody,
      });

      // 5. Marcam în DB că am trimis
      await supabaseServer
        .from('clienti')
        .update({ follow_up: true })
        .eq('id', client.id);

    } catch (err) {
      console.error(`Eroare la trimiterea către ${client.email_client}`, err);
    }
  }

  return NextResponse.json({ success: true, processed: clients.length });
}