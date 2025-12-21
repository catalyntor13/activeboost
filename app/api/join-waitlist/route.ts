import { NextRequest, NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabaseServer'

export async function GET(request: NextRequest) {

    // Luam id din Parametri
    const searchParamas = request.nextUrl.searchParams;
    const id = searchParamas.get('id');


    if(!id) {
        return NextResponse.json({ error: `ID Lipsa`}, { status: 400})
    }

    // 2. Actualizăm Supabase 
  const { error } = await supabaseServer
    .from('clienti')
    .update({ waitlist: true }) 
    .eq('id', id);

  if (error) {
    console.error('Eroare waitlist', error);
    return NextResponse.json({ error: 'Eroare server' }, { status: 500 });
  }

  // 3. Redirecționăm clientul către o pagină frumoasă din site-ul tău
  // Trebuie să creezi pagina /waitlist-success în app/
  return NextResponse.redirect(new URL('/waitlist-success', request.url));
}