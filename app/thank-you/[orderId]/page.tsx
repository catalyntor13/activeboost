// pages/thank-you.js
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/landing/Footer";

export default async function ThankYouPage() {

  
    // Poti accesa parametrii din URL (router.query) pentru a afisa detalii.
    
    return (
        <div className="font-opensans">
            <div className="grid grid-cols-5 w-full col-span-1">
                <div className="bg-[#269e95] w-full"></div>
              
                <div className="bg-[#269e95] w-full col-span-1 "></div>
            </div>
            <div className='lg:w-3xl mx-auto text-center p-3 lg:p-0'>
                <h1 className="lg:text-[30px] text-[24px] font-bold mt-10 mb-2">Felicitări! Comanda ta a fost preluată cu succes! 🎉</h1>
                <h2>Mă bucur că ai ales să investești în energia ta. Ești oficial în comunitatea <span className="font-bold">Active Boost!</span></h2>
                <div className=" space-y-2 my-10"> 
                    <h2 className="lg:text-[30px] text-[24px] text-base font-bold">📦 1. Pachetul Start Activ este pe drum!</h2>
                    <p className="font-medium">Colegii mei pregătesc comanda ta chiar acum.</p>

                    <p className="font-medium">Timp de livrare: Curierul va ajunge la tine în 2-4 zile lucrătoare.</p>

                    <p className="font-medium">Vei primi un SMS în ziua livrării</p>
                </div>

                <div className="font-medium ">
                    <h2 className="font-bold lg:text-[30px] text-[24px] mb-5 ">📧 2. Nu aștepta! Începe transformarea ACUM</h2>
                    <div>
                        <p>Până ajunge pachetul la tine, ai temă de casă! <span className="font-bold">Verifica-ti Email-ul (în 2-3 minute) </span> , unde ți-am trimis:</p>
                        <ul className="flex flex-col space-y-1 my-2">
                          <li>✅ Link-urile de descărcare pentru eBook-ul "10 Hack-uri pentru o glicemie stabilă".</li>
                          <li>✅ Bonusul "Arta Hidratării".</li>
                          <li>📄 Factura comenzii tale.</li>
                          <li>(⚠️ Nu uita să verifici și folderul Spam/Promotions dacă nu vezi mail-ul în Inbox).</li>
                        </ul>


                    </div>
               

                    
                </div>
                 
                 <div>
                  <h2 className="lg:text-[30px] text-[24px] font-bold mt-10 mb-5">📲 3. Hai să sărbătorim victoria!</h2>
                  <p>Ai făcut pasul pe care mulți îl amână. Fii mândru/ă de asta!
</p>

<p>Fă un screenshot acestei pagini.</p>
<p>Pune-l pe Story și dă-mi tag la @active.boost.</p>
<p>Scrie scurt: "Aștept comanda!" sau "Start Activ!"</p>
<p>Abia aștept să ajungă pachetul la tine și să îți văd reacția!</p>
                 </div>
                
                  
                 
                
            </div>
             <Footer/>
        </div>
    );
}