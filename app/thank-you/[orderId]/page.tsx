// pages/thank-you.js
import Link from "next/link";
import Image from "next/image";

export default async function ThankYouPage() {

  
    // Poti accesa parametrii din URL (router.query) pentru a afisa detalii.
    
    return (
        <div className="font-opensans">
            <div className="grid grid-cols-5 w-full col-span-1">
                <div className="bg-[#269e95] w-full"></div>
                <div className="bg-[#8ecb40] text-[#4b4c4b] w-full uppercase text-center lg:col-span-3 col-span-5 font-bold ">Felicitari! ai facut primul pas!</div>
                <div className="bg-[#269e95] w-full col-span-1 "></div>
            </div>
            <div className='lg:w-3xl mx-auto text-center p-3 lg:p-0'>
                <h1 className="lg:text-[47px] text-[24px]  font-bold my-10">Îți Mulțumesc <span className="text-[#8ecb40] ">Pentru încredere!</span></h1>
                
                <div className=" space-y-2 my-10"> 
                    <h2 className="lg:text-[20px] text-base font-bold">Ce Urmeaza Acum?</h2>
                    <p className="font-medium"><span className="font-bold">1. Verifica-ti Email-ul: </span> În următoarele 2-3 minute, vei primi un email de la noi care conține link-ul securizat pentru a descărca ghidul <span className="font-bold text-[#8ecb40]">"10 Hack-uri Simple"</span> și bonusul <span className="font-bold text-blue-500">"Arta Hidratării".</span></p>

                    <p className="font-medium"><span className="font-bold">2. Verifică și folderul Spam/Promoții </span> Uneori, din prea mult entuziasm, email-ul ajunge din greșeală acolo. Dacă nu îl găsești în inbox, te rog să verifici și în aceste foldere.</p>

                    <p className="font-medium"><span className="font-bold">3. Salveaza Ghidul: </span> Odată descărcat, salvează PDF-ul pe telefon sau laptop pentru a-l avea mereu la îndemână.</p>
                </div>

                <div className="font-medium ">
                    <h2 className="font-bold lg:text-[30px] text-[24px] mb-5 ">Un Ultim Pas: <span className="text-[#8ecb40]">Împărtășește Entuziasmul!</span></h2>
                    <div>
                        <p>Cel mai mare compliment pe care mi-l poți face este să inspiri și pe altcineva</p>

<p>Fă un <span className="font-bold">screenshot</span> acestei pagini sau copertei eBook-ului și distribuie-l într-un   
<span className="font-bold ml-0.5">Story pe Instagram</span>, dându-mi tag la <span className="text-blue-500 font-bold">@active.boost.</span></p>
<p className="mt-5"><span className="font-bold">Voi redistribui cele mai faine postări în Story-ul meu!</span></p>
<p>Hai să arătăm împreună și altora că există o cale mai simplă spre o viață plină de energie.</p>
                    </div>
                    <Link href='https://www.instagram.com'>
                    <button className="bg-[#8ecb40] border-2 rounded-full p-3 font-medium my-5 cursor-pointer">Deschide Instagram Acum</button>
                    </Link>

                    
                </div>
                 <div className="grid lg:grid-cols-3 grid-cols-1 lg:justify-items-start justify-items-center gap-4 space-y-5 mb-15 lg:mb-0">
                         <div>
                          <Image src='/activeboost.png' alt="Activeboost" width={250} height={150}  />
                         </div>
                
                         <div className="flex flex-col lg:text-sm text-[12px] font-light justify-center items-center text-center font-opensans ">
                          <p className="font-normal">Copyright © IDTORO S.R.L. | Active Boost</p>
                          <p ><span className="font-semibold">CUI:</span> RO51431636</p>
                          <p><span className="font-normal">Nr. Reg. Com.:</span> J2024051439004</p>
                          <p>Bld. Dem Radulescu 15, Bloc X2, Scara A, Etaj 5, Ap. 37</p>
                          <p>Mun. Ramnicu Valcea, Județ Valcea, România</p>
                          <p><span className="font-normal">Email:</span><span className="ml-1">activeboostfitclub@gmail.com</span></p>
                          <p><span className="font-normal">Telefon:</span><span className="ml-1">0748904680</span></p>
                         </div>
                          <div className="flex items-center gap-5 justify-center mx-auto">
                        <span>
                          <Link href='https://www.facebook.com/activeboost.fitclub'>
                          <Image src='/facebook.png' alt="FacebookIcon"
                            width={35}
                            height={35}/>
                            </Link>
                        </span>
                        <span>
                           <Link href='https://www.instagram.com/active.boost/'>
                          <Image src='/instagram.png' alt="InstagramIcon"
                            width={35}
                            height={35}/>
                            </Link>
                        </span>
                        <span>
                          <Link href='https://www.youtube.com/@youractiveboost?cbrd=1'>
                          <Image src='/youtube.png' alt="YoutubeIcon"
                            width={35}
                            height={35}/>
                            </Link>
                            </span>
                             <span>
                              <Link href='tiktok.com/@activeboost.fitclub'>
                          <Image src='/tik-tok.png' alt="TikTokIcon"
                            width={35}
                            height={35}/>
                             </Link>
                            </span>
                           
                       </div>
                       </div>
                
                       <div className="lg:w-4xl mx-auto">
                        <div className="flex flex-col lg:flex-row justify-evenly gap-4">
                          <div className="mx-auto">
                            <Link href='https://consumer-redress.ec.europa.eu/index_ro'>
                            <Image src='/litigi.webp' alt="Ligitii" width={250} height={250} />
                            </Link>
                          </div>
                          <div className="mx-auto">
                          <Link href='https://anpc.ro/'>
                           <Image src='/anpc.webp' alt="Ligitii" width={250} height={250} />
                           </Link>
                        </div>
                        </div>
                       </div>
                        
                        <div className="flex">
                       <div className="mx-auto space-x-2 my-5">
                         <Link className="w-full text-[11px] lg:text-base uppercase font-bold text-blue-500" href='/politica_de_confidentialitate'>Politica de Confidentialitate</Link>
                         <strong>|</strong>
                         <Link className="w-full text-[11px] lg:text-base flex-2 uppercase font-bold text-blue-500" href='/termeni_si_conditii'>Termeni si conditii</Link>
                       </div>
                </div>
                       <div className="lg:w-xl mx-auto my-2">
                        <p className="text-[11px] text-center">Acest site nu este parte a website-ului Facebook™ sau a companiei Meta Platforms, Inc. În plus, acest site NU este susținut sau aprobat de Meta în niciun fel. FACEBOOK™ este o marcă înregistrată a Meta Platforms, Inc.</p>
                       </div>
                
            </div>
        </div>
    );
}