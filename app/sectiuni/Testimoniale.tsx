"use client"

import { useState } from "react"
import { StaticImageData } from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,

} from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image"
import imagineCard1 from '@/public/ct.jpeg'
import imagineCard2 from '@/public/dg.jpeg'
import imagineCard3 from '@/public/rv.jpeg'
import imagineCard4 from '@/public/aa.jpeg'
import imagineCard5 from '@/public/ac.jpeg'
import imagineCard6 from '@/public/mt.jpeg'
import facebookIcon from '@/public/facebook.png'
import instagramIcon from '@/public/instagram.png'


const Testimoniale = () => {

  interface Review {
  id: number
  descriere: string
  nume: string
  socialRef: string
  dataRecenzie: string
  img: string | StaticImageData
  socialIcon: string | StaticImageData
}
  
  const [open, setOpen] = useState(false)
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);



  const PeopleReviews = [
    {id: 1, descriere: "Ca programator, energia mea fluctua dramatic, iar concentrarea scădea masiv după prânz. Căutam o soluție logică, fără vrăjeli. Am dat peste ghidul ăsta și am zis să încerc. Explicația din spatele spike-urilor glicemice a avut sens imediat. Am aplicat regula cu micul dejun sărat și diferența de claritate mentală în a doua parte a zilei este uluitoare. Un ghid direct la subiect, exact ce aveam nevoie.", nume: "Catalin T", socialRef: "@catalyn13", dataRecenzie: "15-06-2025" , img: imagineCard1, socialIcon: instagramIcon  },
      {id: 2, descriere: "Între job și copil, mâncam haotic și, sincer, dulciurile erau refugiul meu. Evident, cântarul o luase razna. Ghidul ăsta a fost o revelație. Nu mi-a zis ce SĂ NU mănânc, ci m-a învățat CUM să mănânc. Am înțeles că poftele mele nu erau o lipsă de voință, ci o reacție chimică. Am început să slăbesc fără să mă înfometez, doar fiind mai atentă la ordinea meselor. Simplu și de impact!", nume: "Daniela G", socialRef: "@danielageorgiana", dataRecenzie: "15-06-2025", img: imagineCard2, socialIcon: instagramIcon  },
        {id: 3, descriere: "Ca și Wellness Coach, sunt mereu în căutare de resurse simple și corecte științific pe care să le pot recomanda. Ghidul '10 Hack-uri' este exact asta. Reușește să explice principii metabolice complexe într-un limbaj accesibil, fără a sacrifica acuratețea. L-aș recomanda fără ezitare oricărui client care se luptă cu poftele și lipsa de energie. Este un punct de plecare excelent.", nume: "Robert V", socialRef: "@veverobert", dataRecenzie: "15-06-2025", img: imagineCard3, socialIcon: instagramIcon  },
          {id: 4, descriere: "Cu doi copii mici, serile mă găseau epuizată și, invariabil, cu mâna în borcanul cu ciocolată. Orice 'dietă' care implica rețete complicate era exclusă. Am cumpărat ghidul pentru că promitea simplitate. Hack-ul cu 'îmbrăcatul carbohidraților' a fost o revelație. Pentru prima dată în ani, am reușit să trec o seară fără să simt nevoia aia chinuitoare de dulce. Pentru o mamă, asta înseamnă enorm.", nume: "Adella A", socialRef: "@adella.ade.77", dataRecenzie: "15-06-2025", img: imagineCard4, socialIcon: facebookIcon  },
            {id: 5, descriere: "După niște probleme de sănătate, am citit zeci de cărți și articole despre nutriție. Când am dat peste ghidul ăsta, eram curios să văd dacă e doar o altă 'compilație' de pe internet. Am rămas surprins. Informațiile sunt extrem de corecte, bazate pe știință reală, dar explicate într-un mod incredibil de simplu și practic. Pot să confirm 100% că metoda funcționează. E ca un scurt manual de utilizare a propriului corp.", nume: "Alex C", socialRef: "@alex.ciurci.96", dataRecenzie: "15-06-2025", img: imagineCard5, socialIcon: facebookIcon },
              {id: 6, descriere: "Credeam că trebuie să mă resemnez cu grăsimea de pe burtă și poftele de după-amiază. Am cumpărat ghidul fără mari speranțe. M-a cucerit simplitatea. Nu mi s-a cerut să gătesc altceva, ci doar să fiu atentă la cum combin alimentele mele obișnuite. Doar fiind atentă la ce pun primul în farfurie, am scăpat de balonare și pofta de dulce a dispărut. Niciodată nu e prea târziu să înveți.", nume: "Mariuta T", socialRef: "@mariutat.64", dataRecenzie: "15-06-2025", img: imagineCard6, socialIcon: facebookIcon },
  ]


  return (
   <div className='lg:w-6xl w-full  lg:mx-auto'>
    <div className="my-10">
       <div className="h-1 w-[10%] bg-[#8ecb40] mx-auto mb-2 mt-10 lg:mt-0  " />
    <h1 className='text-center text-3xl font-bold font-jakarta text-[#4b4c4b] '>Ce Spun Cei Care <span className='text-[#8ecb40]'>Au Încercat Deja Metoda:</span></h1>
     <div className="h-1 w-[10%] bg-[#8ecb40] mx-auto mt-3" />
    </div>
   
     <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 justify-items-center my-15 gap-4'>
     
       { PeopleReviews.map((peopleReview) => {

          // Limitează textul la 170 caractere, de exemplu
                const shortText =
          peopleReview.descriere.length > 170
            ? peopleReview.descriere.slice(0, 170) + "..."
            : peopleReview.descriere;

            return (
           <Card className="shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out w-xs sm:w-full sm:mx-10   " key={peopleReview.id} >
  <CardContent >
    <p className="font-sans text-[#4b4c4b]">{shortText}</p>
    <button onClick={() => {
      setSelectedReview(peopleReview)
      setOpen(true)
    }}  className="mt-3 mb-5 font-semibold cursor-pointer hover:text-gray-600">Read More</button>
  </CardContent>
  <CardFooter className="flex justify-between items-center">
     <div className="flex items-center gap-3">
   
        <Image className="border-2 rounded-full" src={peopleReview.img} alt={peopleReview.nume} width={60} height={60} />
   
      <div className="flex flex-col">
        <span className="font-bold">{peopleReview.nume}</span>
        <span>{peopleReview.socialRef}</span>
        <span className="font-opensans text-[#4b4c4b] ">{peopleReview.dataRecenzie}</span>
      </div>
     </div>
    <div>
      <Image src={peopleReview.socialIcon} alt={peopleReview.nume} width={40} height={40}/>
    </div>
  </CardFooter>
</Card>
        )})}

{/* 🔹 Modal global pentru text complet */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto ">
          <DialogHeader>

            { selectedReview && (
              <>
                <DialogDescription className="text-[16px] ">
              {selectedReview?.descriere}
            </DialogDescription>
            <div className="flex items-center justify-between my-3">
              <div className="flex items-center gap-3">
   
        <Image className="border-2 rounded-full" src={selectedReview?.img} alt={selectedReview?.nume} width={60} height={60} />
   
      <div className="flex flex-col">
        <span className="font-bold">{selectedReview?.nume}</span>
        <span>{selectedReview?.socialRef}</span>
        <span>{selectedReview?.dataRecenzie}</span>
      </div>
     </div>
    <div>
      <Image src={selectedReview?.socialIcon} alt={selectedReview?.nume} width={40} height={40}/>
    </div>
            </div>
              </>
            )}
          
          </DialogHeader>
        </DialogContent>
      </Dialog>
      
      
     </div>

     <div className="bg-[#fbf9f3] border-2 border-solid rounded-md lg:py-15 lg:px-20 p-3 m-2 sm:m-20 sm:p-15">
        <div className="text-center text-2xl lg:text-3xl font-bold mb-5 font-jakarta text-[#4b4c4b]">
          <p>Este Timpul Pentru un</p>
          <p><span className="underline text-[#8ecb40]font-semibold">RESET TOTAL</span> al Corpului Tau!</p>
        </div>

        <div className="text-[17px] lg:text-xl space-y-4 font-opensans font-medium text-[#4b4c4b]">
          <p>Primești acces instantaneu la <span className="font-bold">Ghidul Principal </span> <span className="text-[#8ecb40] font-bold">"10 Hack-uri Pentru o Glicemie Stabilă"</span>

plus <span className="font-bold">Bonusul</span> <span className="text-blue-500 font-bold">"Arta Hidratării".</span></p>

<p>Toată această valoare, care în mod normal ar fi <span className="font-bold line-through">148 RON</span>, este a ta astăzi la prețul special de lansare de <span className="font-bold">doar 49 RON</span>.</p>

<p>Apasă pe butonul de mai jos și începe transformarea ta în următoarele 5 minute.</p>
        </div>
         <div className='flex flex-col justify-center items-center mb-4 lg:w-xl w-full mx-auto'>
       <Link href='/checkout'> <button  className="font-semibold text-[16px] lg:text-2xl bg-[#8ecb40ff] shadow-[2px_2px_2px_0_#707070] p-4 transition-all duration-300 ease-out hover:-translate-y-2 shadow-2xl hover:shadow-lg border-2 border-[#8ecb40ff] border-solid mt-5 mb-2 cursor-pointer text-gray-700">DA, Vreau Acces Acum la Doar 49 RON!</button></Link>
        <p className='font-light lg:text-sm text-[11px] text-center tracking-tighter font-sans'>Achiziție 100% Sigură și Garantată. Primești eBook-ul pe email în 2 minute.</p>
      </div>
         
        
          <div className='my-5 flex justify-center items-center'>
                 <Image src='/visa.png' alt='Visa' width={150} height={150} />
              </div>
     </div>
   </div>
  )
}

export default Testimoniale