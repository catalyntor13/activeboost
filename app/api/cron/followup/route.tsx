import { NextResponse } from 'next/server';
import { db } from '@/db';
import { orders } from '@/db/schema';
import { and, eq, lte } from 'drizzle-orm';
import { transporter } from '@/lib/nodemailer';
import { render } from '@react-email/render';
import { EmailFollowUp } from '@/emails/EmailFollowUp';

export async function GET(req: Request) {

  // 1. Securitate simplă: Verificăm dacă apelul vine de la Vercel (sau un secret key)
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  
  const fiveDaysAgo = new Date();
  fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

  const pendingFollowups = await db.select().from(orders).where(
    and(
      eq(orders.paymentStatus, 'paid'),
      eq(orders.follow_up_sent, false),
      lte(orders.createdAt, fiveDaysAgo)
    )
  );

  for (const order of pendingFollowups) {
    // Trimite email-ul de feedback aici cu transporter.sendMail(...)
    try {

      const firstName = order.customer_name.split(' ')[0];
      const htmlBody = await render(<EmailFollowUp customer_firstName={firstName}/>);

     await transporter.sendMail({
        from: `"Active Boost" <${process.env.SMTP_USER}>`,
        to: order.customer_email,
        subject: "Cum ți se pare ghidul? 🤔",
        html: htmlBody,
      });

    } catch (err) {
    console.error(`Eroare la trimiterea către ${orders.customer_email}`, err);
    }

    // Marcare ca trimis
    await db.update(orders)
      .set({ follow_up_sent: true })
      .where(eq(orders.id, order.id));
  }

  return Response.json({ processed: pendingFollowups.length });
}