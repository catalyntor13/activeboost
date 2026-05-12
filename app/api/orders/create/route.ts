"use server"

import { NextRequest, NextResponse } from "next/server"
import { db } from "@/db"
import { orders } from "@/db/schema"
import { eq } from "drizzle-orm"
import { createMollieClient} from "@mollie/api-client"
import { z } from "zod"

// Creem clientul Mollie o singură dată, nu la fiecare request
const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! })

// Prețul e definit pe server — clientul nu trimite prețul niciodată
// Altfel cineva poate modifica requestul și plăti 0.01€
const PRICE = 99.00;
const PRODUCT_NAME = "Pachet eBook-uri";
const PRODUCT_ID = 1;



// Schema Zod validează ce vine din formularul tău
const checkoutSchema = z.object({
  firstName: z.string().min(2),
  lastName:  z.string().min(2),
  email:     z.string().email(),
  phone:     z.string().min(10),
  adresa:    z.string().min(5),
  localitate: z.string().min(2),
  judet:     z.string().min(2),
});

export async function POST(req: NextRequest) {
  try {



  // 1. Validare cu Zod — dacă datele sunt invalide, oprim totul aici
   const body = await req.json();
    const result = checkoutSchema.safeParse(body);
    if (!result.success) {
      // result.error.flatten() îți dă erorile per câmp, util pentru debugging
      console.error("[orders/create] Date invalide:", result.error.flatten());
      return NextResponse.json(
        { error: "Date invalide", details: result.error.flatten() },
        { status: 400 }
      );
    }


    // De aici încolo TypeScript știe exact ce tip are validatedData
    const validatedData = result.data;
    
    // 2. Creem comanda cu status pending în baza de date
    const newOrder = await db
      .insert(orders)
      .values({
        customer_name: `${validatedData.firstName} ${validatedData.lastName}`,
        customer_email: validatedData.email,
        customer_phone: validatedData.phone,
        customer_address: `${validatedData.adresa}, ${validatedData.localitate}, ${validatedData.judet}`,
        paymentStatus: "pending",
        orderDetails: {
          productID: PRODUCT_ID,
          productName: PRODUCT_NAME,
          priceSnapshot: PRICE, // prețul e de pe server, nu din request
        },
      })
      .returning({ insertedId: orders.id });

    const orderId = newOrder[0].insertedId;


    // 3. Creăm plata la Mollie
    const payment = await mollie.payments.create({
      amount: {
        currency: "RON",
        value: PRICE.toFixed(2), // Mollie vrea "29.99" ca string
      },
      description: `${PRODUCT_NAME} - comanda #${orderId}`,
      redirectUrl: `${process.env.NEXT_PUBLIC_URL}/thank-you/${orderId}`,
      webhookUrl: `${process.env.NEXT_PUBLIC_URL}/api/webhooks/mollie`,
      metadata: {
        orderId: String(orderId), // webhook-ul va citi asta
      },
    });


     // 4. Salvăm mollieOrderId în comanda din DB
    await db
      .update(orders)
      .set({ mollieOrderId: payment.id })
      .where(eq(orders.id, orderId));

    // 5. Returnăm URL-ul de plată unde frontend-ul va face redirect
    return NextResponse.json({ checkoutUrl: payment.getCheckoutUrl() });


  } catch (error) {
    console.error("[orders/create] Eroare:", error);
    return NextResponse.json(
      { error: "Eroare la crearea comenzii" },
      { status: 500 }
    );
}
}