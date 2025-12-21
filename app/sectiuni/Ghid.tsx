"use client"
import Image from "next/image"
import { FaCheckSquare, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
const Ghid = () => {
  return (

     <div className='bg-[#f6f7f3] w-full py-10 '>
    <div className='lg:max-w-6xl  lg:mx-auto'>
      <h1 className='text-center text-2xl px-5 lg:text-4xl font-extrabold mb-10 tracking-tight text-[#4b4c4b] font-jakarta'>Îți Prezint Ghidul Care <span className='text-[#8ecb40] '>Schimbă Totul:</span> </h1>

      <div className='grid grid-cols-1 p-5 lg:grid-cols-2 sm:grid-cols-2 sm:gap-4 sm:items-center'>
        <div className="border-solid border-4 shadow-[2px_2px_2px_0_#707070] border-white mx-auto">
          <Image src='/third.webp'
           alt="thirdPhoto"
           width={400}
           height={400}
           />
        </div>
        <div className="my-5 ">
          <p className="mb-5 text-base tracking-tight font-medium font-opensans">Am condensat <span className="text-[#8ecb40] font-semibold">informații din ani de cercetare științifică</span> și le-am filtrat prin <span className="text-[#8ecb40] font-semibold">experiența mea personală</span> într-un ghid digital simplu, pas cu pas: "<span className="text-[#8ecb40] font-semibold">10 Hack-uri Simple Pentru o Glicemie Stabilă".</span>

</p>
<p className="text-base tracking-tight font-medium font-opensans">Acesta nu este o altă dietă complicată. Este un <span className="text-[#8ecb40] font-semibold">set de "unelte"</span> practice pe care le poți folosi începând de azi pentru a prelua controlul asupra energiei, a greutății și a poftelor tale, mâncând în continuare alimente delicioase.</p>
        </div>
      </div>

      <div className="p-5 lg:p-0">
        <div className="mt-15">
              <h2 className="text-center  text-2xl lg:text-4xl font-bold tracking-tight text-[#4b4c4b] font-jakarta">Iată Doar O Mică Parte </h2>
        <p className="text-center text-2xl lg:text-4xl font-bold tracking-tight text-[#4b4c4b] font-jakarta">Din <span className="text-[#8ecb40] font-semibold">Secretele</span> pe care le vei descoperi în ghid:</p>
        </div>
    

      <ul className="my-5 space-y-5 text-base font-opensans text-[#4b4c4b] ">
        
    <li className="flex gap-2 tracking-tight items-start">
    <FaCheckSquare className="text-[#8ecb40] text-lg flex-none mt-1" /> 
    <p className="text-[#4b4c4b] font-medium">
        <span className="font-bold">SECRETUL #1:</span> Cum să mănânci paste, pâine sau cartofi fără să te simți balonat sau adormit după, aplicând o regulă simplă de ordonare a alimentelor.
    </p>
</li>
        <li className="flex items-start  gap-2 tracking-tight">
            <FaCheckSquare className="text-[#8ecb40] text-xl flex-none mt-1" /> 
          <p className="text-[#4b4c4b] font-medium">
            <span className="font-bold">TRUCUL "SCUTULUI PROTECTOR":</span> O metodă de 30 de secunde de a-ți pregăti stomacul înainte de o masă copioasă, care poate reduce spike-ul glicemic cu până la 75%.
          </p>


        </li>
        <li className="flex items-start gap-2 tracking-tight" >
            <FaCheckSquare className="text-[#8ecb40] text-xl flex-none mt-1" /> 
          <p className="text-[#4b4c4b] font-medium"><span className="font-bold">DE CE MICUL TĂU DEJUN "SĂNĂTOS"</span> (cu cereale și suc de fructe) îți sabotează de fapt întreaga zi și ce să mănânci în schimb pentru energie constantă.</p>
          </li>
       
        <li className="flex items-start gap-2 tracking-tight">
        <FaCheckSquare className="text-[#8ecb40] text-xl flex-none mt-1" /> 
           <p className="text-[#4b4c4b] font-medium"> 
          <span className="font-bold">BĂUTURA "MAGICĂ" de 10 secunde, pe care o ai deja în bucătărie</span>, ce poate aplatiza curba glicemiei de la o felie de pizza sau o prăjitură.</p>
           </li>
        <li className="flex items-start gap-2 tracking-tight">
          <FaCheckSquare className="text-[#8ecb40] text-xl flex-none mt-1" /> 
          <p className="text-[#4b4c4b] font-medium">
          <span className="font-bold tracking-tight">REGULA DE AUR a deserturilor:</span> Cum și <b>CÂND </b>să mănânci ceva dulce pentru a minimiza impactul negativ asupra corpului tău. (Un indiciu: NICIODATĂ pe stomacul gol!)</p>
          </li>
        <li className="flex items-start  gap-2 tracking-tight">
           <FaCheckSquare className="text-[#8ecb40] text-xl flex-none mt-1" /> 
            <p className="text-[#4b4c4b] font-medium">
          <span className="font-bold tracking-tight">METODA "ÎMBRACĂ-ȚI CARBOHIDRAȚII"</span>: Cum să transformi un fruct dintr-un "inamic" al siluetei într-un "aliat" al energiei tale, adăugând un singur ingredient.</p>
            </li>
      </ul>
      <div className='flex flex-col justify-center items-center mb-4 lg:w-xl w-full mx-auto'>
       <Link href='/checkout'><button  className="font-semibold font-jakarta text-lg lg:text-2xl bg-[#8ecb40ff] shadow-[2px_2px_2px_0_#707070] p-4 transition-all duration-300 ease-out hover:-translate-y-2 shadow-2xl hover:shadow-lg border-2 border-[#8ecb40ff] border-solid mt-5 mb-2 cursor-pointer text-[#4b4c4b]">Cumpara eBook-ul la doar 49 RON</button></Link> 
        <p className='font-light text-[11px] lg:text-sm font-opensans tracking-tighter '>Achiziție 100% Sigură și Garantată. Primești eBook-ul pe email în 2 minute.</p>
      </div>
       <div className='my-5 flex justify-center items-center'>
              <Image src='/visa.png' alt='Visa' width={150} height={150} />
           </div>
      </div>

      <div className="bg-[#eef3ed] border-solid border-1 rounded-md shadow-md border-[#444444] p-5 m-4 ">
        <h2 className="text-center lg:text-4xl text-2xl font-semibold mb-5 font-jakarta text-[#4b4c4b]">Acest Ghid Este Pentru Tine Daca...</h2>
        <ul className="space-y-5 font-opensans text-[#4b4c4b]">
          
          <li className="flex items-start gap-1">
            <FaCheckCircle className="text-[#8ecb40] flex-none mt-1 lg:text-xl text-base" />
            <p className="lg:text-xl text-base font-medium"> 
              <span className="font-bold">...te-ai săturat să te simți obosit și fără vlagă</span> după fiecare masă și cauți o sursă de energie naturală și constantă.</p>
           </li>
          <li className="flex items-start gap-1">
            <FaCheckCircle className="text-[#8ecb40] flex-none mt-1 lg:text-xl text-base" />
            <p className="lg:text-xl text-base font-medium"><span className="font-bold">...iubești mâncarea și urăști dietele restrictive,</span> dar vrei să găsești o cale de a te bucura de alimentele preferate fără vinovăție și fără kilograme în plus.</p>
            </li>
          <li className="flex items-start gap-1">
            <FaCheckCircle className="text-[#8ecb40] flex-none mt-1 lg:text-xl text-base" />
            <p className="lg:text-xl text-base font-medium"><span className="font-bold">...ești o persoană ocupată </span>, un părinte sau un profesionist, și ai nevoie de soluții simple și rapide, nu de reguli complicate care îți consumă tot timpul.</p>
            </li>
          <li className="flex items-start gap-1">
            <FaCheckCircle className="text-[#8ecb40] flex-none mt-1 lg:text-xl text-base" />
            <p className="lg:text-xl text-base font-medium"><span className="font-bold">...vrei să înțelegi în sfârșit semnalele pe care ți le transmite corpul tău </span> și să înveți cum să lucrezi cu el, nu împotriva lui.</p>
            </li>
          <li className="flex items-start gap-1">
            <FaCheckCircle className="text-[#8ecb40] flex-none mt-1 lg:text-xl text-base" />

            <p className="lg:text-xl text-base font-medium"><span className="font-bold">...ești gata să renunți la soluțiile 'minune' care eșuează pe termen lung</span> și să adopți un stil de viață sustenabil, care îți aduce rezultate reale.</p>
            </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Ghid