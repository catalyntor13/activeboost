import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className='lg:w-5xl w-xs sm:w-2xl mx-auto '>
    
       
 

       <div className="grid lg:grid-cols-3 grid-cols-1 lg:justify-items-start justify-items-center gap-4 space-y-5 mb-15 mt:0 lg:mt-15 lg:mb-0">
         <div>
          <Image src='/activeboost.png' alt="Activeboost" width={200} height={150}  />
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
         <Link className="w-full text-[9px] lg:text-base uppercase font-bold text-blue-500" target="_blank" 
  rel="noopener noreferrer" href='/politica_de_confidentialitate'>Politica de Confidentialitate</Link>
         <strong className="text-[9px] lg:text-base">|</strong>
         <Link className="w-full text-[9px] lg:text-base flex-2 uppercase font-bold text-blue-500" target="_blank" 
  rel="noopener noreferrer" href='/termeni_si_conditii'>Termeni si conditii</Link>
       </div>
</div>
       <div className="lg:w-xl mx-auto my-2">
        <p className="text-[11px] text-center">Acest site nu este parte a website-ului Facebook™ sau a companiei Meta Platforms, Inc. În plus, acest site NU este susținut sau aprobat de Meta în niciun fel. FACEBOOK™ este o marcă înregistrată a Meta Platforms, Inc.</p>
       </div>

      
    </div>
  )
}

export default Footer