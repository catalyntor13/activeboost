import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className='lg:w-5xl w-xs sm:w-2xl  lg:mx-auto'>
      
      <h1 className='font-bold text-3xl text-center my-10'>Garanția Noastră 100% <span className='text-green-500 '>"Fără Riscuri"</span></h1>
       
       <div className='flex flex-col lg:flex-row items-center justify-between my-10'>
        <div className="lg:w-2xl flex justify-center">
          <Image src='/garantie.webp'
           alt="garantie"
           width={200}
           height={200}
          />
        </div>
        <div className="lg:w-2xl">
          <p className="text-xl tracking-tight">Sunt atât de încrezător în valoarea pe care o vei primi, încât îți ofer o garanție completă. Dacă în termen de 14 zile de la achiziție consideri că ghidul nu te-a ajutat, trimite-mi un email și îți voi returna 100% din suma plătită, fără întrebări suplimentare. Nu ai absolut nimic de pierdut.</p>
        </div>
       </div>

       <div className="grid lg:grid-cols-3 grid-cols-1 lg:justify-items-start justify-items-center gap-4 space-y-5 mb-15 lg:mb-0">
         <div>
          <Image src='/activeboost.png' alt="Activeboost" width={300} height={300}  />
         </div>

         <div className="flex flex-col text-sm justify-center items-center text-center ">
          <p>Copyright © IDTORO S.R.L. | Active Boost</p>
          <p>CUI: RO51431636</p>
          <p>Nr. Reg. Com.: J2024051439004</p>
          <p>Bld. Dem Radulescu 15, Bloc X2, Scara A, Etaj 5, Ap. 37</p>
          <p>Mun. Ramnicu Valcea, Județ Valcea, România</p>
          <p><span className="font-semibold">Email:</span><span className="ml-1">activeboostfitclub@gmail.com</span></p>
          <p><span className="font-semibold">Telefon:</span><span className="ml-1">0748904680</span></p>
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
        <div className="flex flex-col lg:flex-row justify-center gap-4">
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

       <div className="lg:w-3xl w-full mx-auto my-5">
        <div className="flex justify-center gap-5">
         <Link  href='www.google.com'><p className="text-blue-500 font-semibold">POLITICA DE CONFIDENȚIALITATE </p></Link>
         <Link href='www.google.com'><span className="text-blue-500 font-semibold">TERMENI ȘI CONDIȚII</span></Link>
        </div>
       </div>

       <div className="lg:w-xl mx-auto my-5">
        <p className="text-xs text-center">Acest site nu este parte a website-ului Facebook™ sau a companiei Meta Platforms, Inc. În plus, acest site NU este susținut sau aprobat de Meta în niciun fel. FACEBOOK™ este o marcă înregistrată a Meta Platforms, Inc.</p>
       </div>

      
    </div>
  )
}

export default Footer