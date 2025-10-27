
import Image from 'next/image'

import CountdownTimer from '../componente/countDownTimer'

const Header = () => {
  return (
    <div className='bg-[#f6f7f3] w-full'>
    <div className='lg:w-6xl p-5 lg:p-0 mx-auto'>
      <Image
       alt='Activeboost Logo'
       src='/activeboost.png'
       width='180'
       height='180'
       className='mx-auto'
      
      />
     <h1 className='lg:text-5xl sm:text-5xl text-xl lg:max-w-3xl sm:max-w-4xl mx-auto mb-6 font-bold  text-center tracking-tighter'>Simți că nicio masă nu e completă fără <span className='text-green-500'>"ceva dulce"</span> la final?</h1>
     <h2 className='text-xl lg:w-5xl mb-3  text-center mx-auto font-semibold tracking-tighter'>Hai să îți prezint <span className='text-green-500'>10 Hack-uri Simple </span>care îți elimină definitiv pofta de dulce și te ajută să slăbești natural.</h2>
     <h3 className=' text-sm lg:text-2xl sm:text-xl my-6 text-center tracking-tighter'>…fără diete restrictive, exerciții fizice extreme sau număratul caloriilor.</h3>

     <video 
     className='lg:w-3xl sm:w-xl mx-auto' src='/video2.mp4' controls
       poster='video.gif'>
        
     </video>
      
      <div className='flex flex-col justify-center items-center mb-4 '>
        <button  className="font-semibold text-2xl bg-[#8ecb40ff] shadow-[2px_2px_2px_0_#707070] p-4 transition-all duration-300 ease-out hover:-translate-y-2 shadow-2xl hover:shadow-lg border-2 border-[#8ecb40ff] border-solid mt-5 mb-2 cursor-pointer text-gray-700">Cumpara eBook-ul la doar 49 RON</button>
        <p className='font-light lg:text-sm text-xs tracking-tighter '>Achiziție 100% Sigură și Garantată. Primești eBook-ul pe email în 2 minute.</p>
      </div>
     
     
     <h2 className='font-bold text-center '>🔥 OFERTĂ SPECIALĂ DE LANSARE! Ghidul tău la 49 RON (redus de la 69 RON).</h2>
     <div>
      <CountdownTimer/>
     </div>
     <div className='my-5 flex justify-center items-center'>
        <Image src='/neptopia.png' alt='Neptopia' width={350} height={350} />
     </div>
    <div className='border-solid border-3 shadow-md bg-[#eef3ed] lg:p-7 p-4 lg:w-4xl  w-full mx-auto'>
     <p className='text-xl lg:text-2xl text-start lg:text-center font-bold '>Prins în același cerc vicios?</p>
     <p className='text-xl lg:text-2xl lg:text-center font-bold  mb-5'>Oboseală, pofte necontrolate și creștere în greutate...😔</p>
     <ul className='text-start text-[15px] lg:text-xl lg:space-y-2 space-y-4'>
      <li>⛔ Te simți obosit și fără energie, mai ales după masa de prânz?</li>
      <li>⛔ Balonarea și disconfortul abdominal sunt o prezență constantă în viața ta?</li>
      <li>⛔ Simți că nu ai control asupra poftei de dulce, oricât ai încerca?</li>
      <li>⛔ Te lupți cu kilogramele în plus și te-ai săturat de diete complicate și de sfaturile nerealiste ale influencerilor?</li>
     </ul>
   </div>

   <div className='my-4'>
 
    <p className=' text-xl lg:text-3xl font-bold lg:my-5 my-15 text-center'>Dar Dacă Ai Putea <span className='underline underline-offset-1'>Să Scapi Definitiv</span> De <span className='text-red-600'>Pofta de Dulce</span> De După Masă, Să Te Simți <span className='text-green-500'>Plin De Energie</span> și Mai <span className='text-green-500'>Sănătos Ca Niciodată</span>?</p>
   <p className=' font-semibold  text-xl tracking-tighter text-center'>...Totul fără diete extreme, ore nesfârșite la sală sau sentimentul că ești mereu privat de ceva?</p>
   </div>
    </div>
    </div>
  )
}

export default Header