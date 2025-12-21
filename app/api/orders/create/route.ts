import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';
import mollieClient from '@/lib/mollie';


export async function POST(request: NextRequest) {
  try {
    const { name, email, addresa, amount, description, productId } = await request.json();

    // 1. Creează comanda în Supabase cu status 'pending'
    const { data: order, error: supabaseError } = await supabaseServer
      .from('clienti')
      .insert({
        nume_client: name,
        email_client: email,
        adresa_client: addresa,
        produs_id: productId,
        status: 'pending',
        email_sent: false,
      })
      .select()
      .single();

    if (supabaseError || !order) {
      throw new Error(`Eroare Supabase: ${supabaseError?.message}`);
    }

    const orderId = order.id; // Acesta este ID-ul UUID din Supabase
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // 2. Creează plata în Mollie
    const payment = await mollieClient.payments.create({
      amount: {
        value: amount, 
        currency: 'RON',
      },
      description: description,
      redirectUrl: `${baseUrl}/thank-you/${orderId}`, // Trimite ID-ul comenzii din DB
      webhookUrl: `${baseUrl}/api/webhooks/mollie`,
      metadata: {
        order_id: orderId, // Trimite ID-ul din DB către Mollie
      },
    });

    // 3. Salvează ID-ul plății Mollie înapoi în comanda Supabase
    await supabaseServer
      .from('clienti')
      .update({ mollie_payment_id: payment.id })
      .eq('id', orderId);

    // 4. Trimite URL-ul de checkout către frontend
    const checkoutUrl = payment.getCheckoutUrl();
    if (!checkoutUrl) {
      throw new Error('Nu s-a putut obține URL-ul de checkout Mollie');
    }

    return NextResponse.json({ checkoutUrl });

  } catch (error) {
    console.error('Eroare la crearea comenzii:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Eroare internă' },
      { status: 500 }
    );
  }
}