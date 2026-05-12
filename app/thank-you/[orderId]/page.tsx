import { db } from "@/db"; // Importă instanța ta de Drizzle
import { orders } from "@/db/schema"; // Importă schema tabelului de comenzi
import { eq, and } from "drizzle-orm";
import { notFound } from "next/navigation";
import ThankYouClient from "./ThankYouClient";

// Definirea tipului pentru parametri (în Next.js 15+ params este Promise)
interface PageProps {
  params: Promise<{ orderId: string }>;
}

export default async function ThankYouPage({ params }: PageProps) {
  // 1. Așteptăm ID-ul din URL
  const { orderId } = await params;


  // Convert orderId from string to number
  const id = parseInt(orderId, 10);

    if (isNaN(id)) {
    notFound();
  }

  // 2. Căutăm comanda în baza de date Neon
  // Verificăm și statusul să fie 'paid' pentru a evita accesul celor care au dat cancel la plată
  const order = await db.query.orders.findFirst({
    where: and(
      eq(orders.id, id),
      eq(orders.paymentStatus, "paid")
    ),
  });

  // 3. Dacă nu există comanda sau nu e plătită, aruncăm un 404
  if (!order) {
    notFound(); 
  }

  // 4. Dacă am ajuns aici, înseamnă că ID-ul e valid și plătit.
  // Poți randa HTML-ul tău liniștit.
  return (
    <ThankYouClient />
  );
}