import { createMollieClient } from '@mollie/api-client';

// Verifică dacă cheia API este setată
if (!process.env.MOLLIE_API_KEY) {
  throw new Error('MOLLIE_API_KEY nu este definit în variabilele de mediu');
}

const mollieClient = createMollieClient({
  apiKey: process.env.MOLLIE_API_KEY,
});

export default mollieClient;