import { createClient } from '@supabase/supabase-js';

// Verificări pentru variabilele de mediu
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Supabase URL lipsește');
}
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Supabase Service Role Key lipsește');
}

// Exportăm direct clientul (obiectul), NU o funcție
export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);