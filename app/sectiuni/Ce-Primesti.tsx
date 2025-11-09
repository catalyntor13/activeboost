"use client"
import Image from "next/image"
import Link from "next/link"

const CePrimesti = () => {
  return (
    <div className="lg:w-6xl lg:mx-auto ">
      <h1 className='text-center lg:text-4xl text-xl p-3 font-bold text-[#4b4c4b] my-10 font-jakarta'>Ce Primești Imediat <span className="text-[#8ecb40]">Ce Comanzi:</span></h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 p-3 justify-items-center gap-10'>
        <div className="border-solid border-4 shadow-[2px_2px_2px_0_#707070] border-white">
          <Image src='/four.webp'
          alt="fourIMG"
          width={500}
          height={500}
           />
        </div>
        <div className="text-center space-y-2 font-opensans text-[#4b4c4b] ">
        
            <h2 className="text-3xl font-bold">Ghidul Principal:</h2>
            <p className="text-3xl font-bold text-[#8ecb40]">"10 Hack-uri Simple Pentru o Glicemie Stabilă"</p>
            <p className="text-3xl font-bold">(PDF, 50 pagini)</p>
            <p className="lg:text-3xl sm:text-2xl text-2xl font-dancing-script font-bold">Planul tău complet, pas cu pas, pentru a prelua controlul asupra energiei și a poftelor.</p>
            <p className="text-2xl font-dancing-script  font-semibold">Valoare: 99 RON</p>
        
        </div>
        <div className="border-solid border-4 shadow-[2px_2px_2px_0_#707070] border-white">
          <Image
           src='/five.webp'
           alt="fivePhoto"
           width={500}
           height={500}        
            />
        </div>
        <div className="text-center space-y-1 font-sans text-[#4b4c4b]">
           <h2 className="text-2xl font-bold">BONUS GRATUIT:</h2>
            <p className="text-2xl font-bold w-full">Mini-Ghidul <span className="text-blue-500">"Arta Hidratării" </span></p>
            <p className="text-2xl font-bold">(PDF, 10 pagini)</p>
            <p className="lg:text-3xl sm:text-2xl text-2xl font-dancing-script font-bold px-3">Ghidul tău practic pentru a-ți optimiza hidratarea, un element cheie pentru un metabolism sănătos.</p>
            <p className="text-2xl font-dancing-script font-semibold">Valoare: 49 RON</p>
        
        </div>
      </div>

      <div className="bg-[#fbf9f3] border-solid border-1 flex flex-col justify-center my-5 lg:my-15  mx-auto lg:p-5">
        <div className="text-center lg:text-3xl text-2xl mt-5 font-sans text-[#4b4c4b]">
          <p className="uppercase">Valoare Totală: <span className="font-bold line-through">148 RON</span></p>
          <p className="uppercase">Prețul Tău Azi (Ofertă Limitată):</p>
          <p className="font-bold underline uppercase">Doar 49 RON!</p>
        </div>
 <div className='flex flex-col justify-center items-center mb-4 lg:w-xl mx-auto mt-10'>
        <Link href='/checkout'><button  className="font-semibold lg:text-2xl text-xl bg-[#8ecb40ff] shadow-[2px_2px_2px_0_#707070] p-4 transition-all duration-300 ease-out hover:-translate-y-2 shadow-2xl hover:shadow-lg border-2 border-[#8ecb40ff] border-solid mt-5 mb-2 cursor-pointer text-gray-700">Cumpara eBook-ul la doar 49 RON</button></Link>
        <p className='font-light lg:text-sm text-[11px] text-center tracking-tighter font-opensans '>Achiziție 100% Sigură și Garantată. Primești eBook-ul pe email în 2 minute.</p>
      </div>
<div className='my-5 flex justify-center items-center'>
        <Image src='/visa.png' alt='Neptopia' width={150} height={150} />
     </div>
      </div>
    </div>
  )
}

export default CePrimesti