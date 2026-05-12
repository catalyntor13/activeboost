// lib/generate-invoice-number.ts — versiunea sigură
import { db } from "@/db";
import { orders } from "@/db/schema";
import { isNotNull, count, eq } from "drizzle-orm";
import { sql } from "drizzle-orm";

export async function generateInvoiceNumberSafe(orderId: number): Promise<string> {
  // Tranzacție cu lock — PostgreSQL garantează că nu rulează simultan
  const result = await db.transaction(async (tx) => {
    // LOCK: blochează alte tranzacții care încearcă același lucru
    await tx.execute(sql`LOCK TABLE orders IN SHARE ROW EXCLUSIVE MODE`);

    const [countResult] = await tx
      .select({ total: count() })
      .from(orders)
      .where(isNotNull(orders.invoiceNumber));

    const nextNumber = (countResult?.total ?? 0) + 1;
    const year = new Date().getFullYear();
    const invoiceNumber = `${year}-${String(nextNumber).padStart(4, "0")}`;

    // Actualizăm direct în tranzacție
    await tx
      .update(orders)
      .set({
        paymentStatus: "paid",
        updatedAt: new Date(),
        invoiceNumber,
      })
      .where(eq(orders.id, orderId));

    return invoiceNumber;
  });

  return result;
}