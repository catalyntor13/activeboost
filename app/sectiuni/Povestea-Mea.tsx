import Image from "next/image"

const PovesteaMea = () => {
  return (

    <div className='bg-[#f6f7f3] w-full py-2 lg:py-10'>
    <div className="lg:max-w-6xl p-4 lg:p-0 lg:mx-auto">
      
      <div className="text-center font-bold text-2xl lg:text-4xl mb-10  text-[#4b4c4b] font-jakarta">
        <h1>Povestea Mea:</h1>
        <h2>Lupta Mea cu <span className="text-red-500">Zahărul</span></h2>
        <h2>(și Cum <span className="text-[#8ecb40]">Am Câștigat</span>)</h2>
      </div>

   <div className='flex-col'>
   <div className="flex flex-col lg:flex-row sm:flex-row items-center justify-center gap-10 mb-10">
    <div className="border-solid border-4 shadow-[2px_2px_2px_0_#707070] border-white">
      <Image
       src='/first.webp'
       alt="firstImage"
       width={350}
       height={350}
       className="w-full"
      />
    </div>
    <div className="lg:w-lg font-opensans font-medium text-[#4b4c4b] ">
      <p className="text-[18px] tracking-tight mb-5">Numele meu este Adrian și, pentru mult timp, am trăit într-un cerc vicios pe care nu știam cum să-l rup. Fiecare masă, oricât de sănătoasă părea, se termina cu aceeași poftă incontrolabilă de 'ceva dulce'.
       </p>

       <p className="text-[18px] tracking-tight mb-5">
        După-amiezile mele erau un coșmar de oboseală și balonare, iar kilogramele se adunau frustrant, deși încercam tot felul de diete complicate și sfaturi de la 'experți'. Mă simțeam blocat și ajunsesem să cred că pur și simplu 'așa sunt eu' și că îmi lipsește voința.
       </p>

<p className="text-[18px]  tracking-tight mb-5">Până într-o zi, când, aproape renunțând la idee, am dat peste munca unui biochimist francez și am înțeles <span className="text-[#8ecb40] font-semibold">adevărata</span> cauză a problemelor mele.</p>

<p className="text-[18px]  tracking-tight ">
  Nu era lenea sau lipsa de voință, ci haosul creat de <span className="text-[#8ecb40] font-semibold">spike-urile glicemice </span>în corpul meu după fiecare masă. A fost ca și cum cineva a aprins brusc lumina într-o cameră întunecată.
Am realizat că nu trebuia să renunț la mâncărurile care îmi plăceau, ci doar să învăț cum să le <span className="text-[#8ecb40] font-semibold">mănânc inteligent</span>.
</p>

    </div>
   </div>

   <div className="flex flex-col lg:flex-row sm:flex-row items-center justify-center gap-2">
    <div className="lg:w-lg font-opensans font-medium text-[#4b4c4b]  ">
      <p className="text-[18px]  mb-5 tracking-tight">Am început să aplic câteva dintre aceste 'hack-uri' simple, fără diete drastice sau ore chinuitoare la sală. Rezultatele au apărut aproape imediat.</p>
<p className="text-[18px]  mb-5 tracking-tight">Poftele au dispărut. Balonarea s-a evaporat. Energia a revenit constant pe parcursul întregii zile, iar kilogramele au început să scadă natural, ca un efect secundar.</p>
<p className="text-[18px]  mb-5 tracking-tight">Pentru prima dată, am simțit că am preluat cu adevărat controlul. Am redevenit soțul și tatăl plin de viață și energie pe care mi-l doream pentru familia mea.</p>
<p className="text-[18px]  mb-5 tracking-tight">De aceea am creat acest ghid. Am simplificat informații bazate pe <span className="text-[#8ecb40] font-semibold">ani de cercetare științifică</span> în pași pe care i-am <span className="text-[#8ecb40] font-semibold"></span>testat personal și pe care oricine îi poate aplica. </p>
<p className="text-[18px] text-[#8ecb40] font-semibold tracking-tight">Dacă eu am putut, sunt convins că poți și tu..</p>
    </div>
    <div>
      <Image className="border-solid border-4 shadow-[2px_2px_2px_0_#707070] border-white" src='/second.webp' alt="secondImage" width={350} height={350}/>
    </div>
   </div>
   </div>
    </div>
    </div>
  )
}

export default PovesteaMea