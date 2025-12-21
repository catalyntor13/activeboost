"use client"
import Image from 'next/image'

import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-[#f6f7f3] w-full'>
    <div className='lg:w-6xl p-4 lg:p-0 mx-auto'>
      <Image
       alt='Activeboost Logo'
       src='/activeboost.png'
       width={200}
       height={200}
       className='mx-auto'
      
      />
     <h1 className='lg:text-4xl text-[#4b4c4b] font-jakarta sm:text-5xl text-2xl lg:max-w-3xl sm:max-w-4xl mx-auto mb-6 font-extrabold  text-center tracking-tighter'>Ești mereu pe fugă dimineața, iar micul tău dejun constă în sandwich-uri, covrigi sau produse de patiserie? <span className='font-bold text-red-500'>OPREȘTE-TE!</span></h1>
     <h2 className='text-base lg:text-2xl font-medium lg:w-5xl mb-3 text-center mx-auto tracking-tighter font-sans text-[#4b4c4b] '>Am o alternativă pentru tine, mult mai sănătoasă, care îți oferă 24g proteine, vitamine, minerale, fibre și doar 215 calorii. Pe lângă toate astea, îl poți lua cu tine să îl bei în drum spre serviciu.</h2>
     <h3 className='text-sm lg:text-xl sm:text-xl my-6 text-center tracking-tighter font-sans font-semibold text-[#8ecb40] '>Îți prezint Programul START ACTIV: Un Mic Dejun Sănătos gata în 30 secunde </h3>

     
      
      <div className='flex flex-col justify-center items-center mb-4 '>
        <Link href='/checkout'><button  className="font-semibold text-lg lg:text-xl bg-[#8ecb40ff] shadow-[2px_2px_2px_0_#707070] p-4 transition-all duration-300 ease-out hover:-translate-y-2 shadow-2xl hover:shadow-lg border-2 border-[#8ecb40ff] border-solid mt-5 mb-2 cursor-pointer text-gray-700">Cumpara eBook-ul la doar 49 RON</button></Link>
        <p className='font-light lg:text-xs text-[11px] tracking-tighter font-opensans text-center'>Achiziție 100% Sigură și Garantată. Primești eBook-ul pe email în 2 minute.</p>
      </div>
     
     
     <h2 className='font-bold text-center font-sans  '>🔥 OFERTĂ SPECIALĂ DE LANSARE! Ghidul tău la 49 RON (redus de la 69 RON).</h2>
    
     <div className='my-5 flex justify-center items-center'>
        <Image src='/visa.png' alt='Visa' width={150} height={150} />
     </div>
    <div className='border-solid border-3 shadow-md bg-[#eef3ed] lg:p-7 p-4 lg:w-4xl  w-full mx-auto'>
     <p className='text-xl lg:text-2xl text-start lg:text-center font-bold text-[#4b4c4b] font-jakarta '>Prins în același cerc vicios?</p>
     <p className='text-xl lg:text-2xl lg:text-center font-bold  mb-5 text-[#4b4c4b] font-jakarta'>Oboseală, pofte necontrolate și creștere în greutate...😔</p>
     <ul className='text-start font-normal text-[16px] lg:text-xl lg:space-y-2 space-y-4 font-sans ' >
      <li>⛔ Te simți obosit și fără energie, mai ales după masa de prânz?</li>
      <li>⛔ Balonarea și disconfortul abdominal sunt o prezență constantă în viața ta?</li>
      <li>⛔ Simți că nu ai control asupra poftei de dulce, oricât ai încerca?</li>
      <li>⛔ Te lupți cu kilogramele în plus și te-ai săturat de diete complicate și de sfaturile nerealiste ale influencerilor?</li>
     </ul>
   </div>

   <div className='my-4 lg:my-2'>
 
    <p className='text-xl p-2 lg:text-3xl font-extrabold lg:my-5 my-10 text-center text-[#4b4c4b] font-jakarta'>Dar Dacă Ai Putea <span className='underline underline-offset-1'>Să Scapi Definitiv</span> De <span className='text-red-600'>Pofta de Dulce</span> De După Masă, Să Te Simți <span className='text-[#8ecb40]'>Plin De Energie</span> și Mai <span className='text-[#8ecb40]'>Sănătos Ca Niciodată</span>?</p>
   <p className=' font-normal  text-xl tracking-tighter text-center font-sans'>...Totul fără diete extreme, ore nesfârșite la sală sau sentimentul că ești mereu privat de ceva?</p>
   </div>
    </div>
    </div>
  )
}

export default Header