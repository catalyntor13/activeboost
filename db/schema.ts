import { pgTable, serial, text, integer, jsonb, timestamp, boolean } from 'drizzle-orm/pg-core';




export const orders = pgTable("orders", {
    id: serial('id').primaryKey(),
    customer_name: text('customer_name').notNull(), 
    customer_email: text('customer_email').notNull(),
    customer_phone: text('customer_phone').notNull(),
    customer_address: text('customer_address').notNull(),
    mollieOrderId: text('mollie_order_id').unique(),
    paymentStatus: text('payment_status').default('pending'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
    email_sent: boolean('email_sent').default(false),
    follow_up_sent: boolean('follow_up_sent').default(false),
    orderDetails: jsonb('order_details').notNull().$type<{
        productID: number,
        productName: string,
        selectedFlavor: string,
        priceSnapshot: number
    }>(),


})

export const products = pgTable("products", {
    id: serial('id').primaryKey(),
    productName: text('name').notNull(),
    productPrice: integer('price').notNull(),
    description: text('description'),
    variants: jsonb('variants').$type<string[]>(),
})