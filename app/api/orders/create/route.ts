import { NextResponse } from 'next/server';
import { db } from '@/db'; 
import { orders } from '@/db/schema'; 
import { mollieClient } from '@/lib/mollie'; 
import { eq } from 'drizzle-orm';
import { z } from 'zod';

// Definim schema de validare (identică cu cea de pe frontend pentru siguranță)
const checkoutSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  adresa: z.string().min(5),
  localitate: z.string().min(2),
  judet: z.string().min(2),
  flavor: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // 1. Validăm datele primite de la frontend
    const validatedData = checkoutSchema.parse(body);

    // 2. Calculăm prețul 
       const PRICE = 520;

    // 3. Inserăm comanda în Neon (Status: pending)
    // Folosim .returning() pentru a primi înapoi ID-ul generat (ex: 1, 2, 3...)
    const newOrder = await db.insert(orders).values({
      customer_name: `${validatedData.firstName} ${validatedData.lastName}`,
      customer_email: validatedData.email,
      customer_phone: validatedData.phone,
      customer_address: `${validatedData.adresa}, ${validatedData.localitate}, ${validatedData.judet}`,
      paymentStatus: 'pending',
      
      // Snapshot-ul comenzii (JSONB)
      orderDetails: {
        productID: 1,
        productName: "Pachet Start Activ",
        selectedFlavor: validatedData.flavor,
        priceSnapshot: PRICE // e bine să știi cât costa la momentul plății
      }
    }).returning({ insertedId: orders.id });

    const orderId = newOrder[0].insertedId;

    // 4. Creăm plata în Mollie
    const payment = await mollieClient.payments.create({
      amount: {
        currency: 'RON',
        value: PRICE.toFixed(2), // Mollie vrea string "520.00"
      },
      description: `Pachet Mic Dejun Start Activ`,
      
      // URL unde se întoarce clientul după plată (Success page)
      redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you/${orderId}`,
      
      // URL unde Mollie trimite notificarea (Webhook) - E CRITIC PENTRU STATUS
      // Notă: Localhost nu merge pentru webhook-uri fără ngrok. 
      webhookUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhooks/mollie`,
      
      // Metadata ne ajută să știm în webhook a cui e plata
      metadata: {
        internalOrderId: orderId,
      },
    });

    // 5. Updatăm comanda în Neon cu ID-ul de la Mollie
    // Asta ne permite să legăm plata de comandă
    await db.update(orders)
      .set({ mollieOrderId: payment.id })
      .where(eq(orders.id, orderId));

    // 6. Returnăm linkul de plată către frontend
    return NextResponse.json({ 
      checkoutUrl: payment.getCheckoutUrl() 
    });

  } catch (error) {
    console.error("Eroare la creare comanda:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Date invalide", details: error.issues }, { status: 400 });
    }

    return NextResponse.json({ error: "Eroare internă server" }, { status: 500 });
  }
}