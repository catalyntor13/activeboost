"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCheckIcon, CheckCircle, ArrowRight, X, CheckIcon } from "lucide-react"
                import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Footer from "../sectiuni/Footer"
import Image from "next/image"

export default function Home() {

  const FormulaShake = [
    {id: 1, title: '18 g proteine de înaltă calitate / porție'},
    {id: 2, title: '25 vitamine și minerale esențiale'},
    {id: 3, title: 'Ingrediente din surse vegane'},
    {id: 4, title: 'Fără gluten'},
    {id: 5, title: 'Fără coloranți sau arome artificiale'},
    {id: 6, title: 'Îndulcitor din sursă naturală'},
    {id: 7, title: '21 porții / pachet'},
  ]


    const ProteinDrink = [
    {id: 1, title: '15 g proteine de calitate / porție'},
    {id: 2, title: '22 vitamine și minerale cheie'},
    {id: 3, title: 'Vitamine din complexul B (energie & metabolism)'},
    {id: 4, title: 'Fără zahăr'},
    {id: 5, title: 'Potrivit pentru vegetarieni'},
    {id: 6, title: '21 porții / pachet'},
  ]


  const FAQ = [
    {id: 1, title: 'Este START ACTIV un înlocuitor permanent al micului dejun?', raspuns: 'Nu. START ACTIV este o soluție practică pentru diminețile aglomerate, când nu ai timp să gătești. În weekend sau în zilele mai liniștite, poți consuma fără probleme un mic dejun gătit alături de familie.'},
    {id: 2, title: 'Trebuie să consum START ACTIV zilnic?', raspuns: 'Nu este obligatoriu. Pachetul de 21 de porții este gândit pentru zilele lucrătoare, când ai nevoie de un mic dejun rapid și echilibrat.'},

     {id: 3, title: 'Mă va ajuta să slăbesc?', raspuns: 'START ACTIV te poate ajuta indirect, prin: aport ridicat de proteine, control mai bun al foamei, energie constantă fără gustări nesănătoase., Rezultatele diferă de la persoană la persoană și depind de stilul de viață.'},

    {id: 4, title: 'Este potrivit dacă am probleme cu digestia sau balonare?', raspuns: 'Multe persoane observă o digestie mai ușoară dimineața, datorită compoziției echilibrate.  Dacă ai afecțiuni medicale sau intoleranțe, recomandăm să consulți medicul.'},

      {id: 5, title: 'Conține zahăr?', raspuns: 'Nu conține zahăr adăugat. Produsele sunt îndulcite cu îndulcitor din sursă naturală.'},

      {id: 6, title: 'Conține gluten?', raspuns: 'Nu. START ACTIV nu conține gluten.'},
      {id: 7, title: 'Este potrivit pentru vegetarieni?', raspuns: 'Da. Produsele sunt potrivite pentru vegetarieni și conțin ingrediente din surse vegane'},

       {id: 8, title: 'Cum se prepară?', raspuns: 'Simplu: , 1. Adaugi 300 ml apă sau lapte vegetal, 2. Adaugi 2 măsuri de Formula 1 + 2 măsuri de Protein Drink Mix, 3. Agiți în shaker , Totul durează aprox. 30 de secunde'},

       {id: 9, title: 'Când este cel mai bine să îl consum?', raspuns: 'Dimineața, la micul dejun. Poate fi consumat și ca masă ușoară atunci când ești pe fugă.'},

       {id: 10, title: 'Pot consuma START ACTIV dacă fac sport?', raspuns: 'Da. Conținutul ridicat de proteine îl face potrivit și pentru persoanele active.'},
       {id: 11, title: 'Ce se întâmplă dacă nu sunt mulțumit?', raspuns: 'Ai garanție de returnare 30 de zile. Dacă produsul nu este potrivit pentru tine, îl poți returna conform politicii afișate pe site.'},

  ]



  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image alt="Active Boost Logo" width={100} height={100} style={{
          width: '200px', // Sau 'auto' dacă vrei să fie fluid
          height: 'auto', // Asta e cheia! Păstrează proporția corectă
        }} src='/activeboost.png'/>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#beneficii" className="text-[#4b4c4b] hover:text-[#8ecb40] transition-colors">
                Beneficii
              </a>
              <a href="#nutritie" className="text-[#4b4c4b] hover:text-[#8ecb40] transition-colors">
                Nutriție
              </a>
              <a href="#contact" className="text-[#4b4c4b] hover:text-[#8ecb40] transition-colors">
                Contact
              </a>
               <a href="#faq" className="text-[#4b4c4b] hover:text-[#8ecb40] transition-colors">
               FAQ
              </a>
              <Button className="bg-[#8ecb40] hover:bg-[#7ab535] text-white">Comandă acum</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Section 1 - Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              

              <h1 className="text-4xl lg:text-4xl font-bold text-[#4b4c4b] mb-6 leading-tight text-balance">
               <span className="uppercase">Start Activ</span>  - Micul dejun gustos și super nutritiv, care te ține sătul și plin de energie până la prânz{" "}
       
              </h1>

              <h2 className="text-xl lg:text-2xl text-[#4b4c4b]/80 mb-8 leading-relaxed text-pretty">
                Un shake proteic complet, bogat în proteine, fibre, vitamine și minerale – totul la doar 215 calorii.{" "}
         
              </h2>

              <div className="bg-[#8ecb40]/5 border-l-4 border-[#8ecb40] p-6 rounded-lg mb-8">
                <p className="text-lg text-[#4b4c4b] font-medium">
                  Dacă dimineața sari peste micul dejun sau alegi covrigi, patiserie ori sandvișuri pe fugă, Start Activ este alternativa simplă și sănătoasă pentru tine.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#8ecb40] hover:bg-[#7ab535] text-white text-lg px-8 py-6">
                  Cumpara acum
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-[#4b4c4b] border-[#4b4c4b] hover:bg-[#4b4c4b] hover:text-white text-lg px-8 py-6 bg-transparent"
                >
                  Află mai multe
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#8ecb40]/20 to-[#8ecb40]/5">
               <Image width={600} height={550} alt="photo" src='/photo.jpeg'
                
               />

               
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Hook/Brand Section */}
      <section className="bg-[#8ecb40] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
           De ce micul dejun clasic nu îți oferă energia de care ai nevoie
          </h3>
    
        </div>
      </section>

           {/* Section 2 - Hook/Brand Section */}

      {/* Section 3 - Problem vs Solution Section */}
      <section id="beneficii" className="bg-[#4b4c4b]/5 py-20 border-y border-[#4b4c4b]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem Side */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#4b4c4b]">
                De ce micul dejun clasic nu îți oferă energia de care ai nevoie
              </h2>
              <div className="space-y-4 text-[#4b4c4b]/70">
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <p>
                    Covrigii și patiseriile sunt pline de zahăr și carbohidrați simpli care îți dau energie rapidă, dar
                    te lasă epuizat după 2 ore.
                  </p>
                  <span>→ zahăr și carbohidrați simpli                                        
→ energie rapidă, urmată de oboseală
</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <p> Pierzi 15–20 de minute în fiecare dimineață pregătind și consumând micul dejun</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <p>
                    Te simți greoi, fără energie și apare pofta de gustări nesănătoase.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <p>Calorii multe, nutrienți puțini</p>
                  <span>→ calorii goale care favorizează îngrășarea</span>
                </div>
              </div>
            </div>

            {/* Solution Side */}
            <div className="bg-white p-8 rounded-2xl border-2 border-[#8ecb40] shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#4b4c4b]">Soluția START ACTIV</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#8ecb40]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4b4c4b] mb-1">24g Proteine de Calitate</h4>
                    <p className="text-[#4b4c4b]/70 text-sm">
                      Energie susținută până la prânz, fără căderi bruște de energie sau foame.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#8ecb40]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4b4c4b] mb-1">Gata în 30 de Secunde</h4>
                    <p className="text-[#4b4c4b]/70 text-sm">
                      Preparat instant - economisești timp prețios în fiecare dimineață.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#8ecb40]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4b4c4b] mb-1">Nutriție Completă</h4>
                    <p className="text-[#4b4c4b]/70 text-sm">
                      Vitamine, minerale și fibre - tot ce ai nevoie pentru o zi productivă.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#8ecb40]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4b4c4b] mb-1">Doar 215 Calorii</h4>
                    <p className="text-[#4b4c4b]/70 text-sm">
                      Mic dejun echilibrat care te ajută să menții greutatea ideală.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       {/* Section 3 - Problem vs Solution Section */}

      {/* Section 4 - Ce contine Shakeul Section */}
      <section id="nutritie" className="py-20 bg-[#8ecb40]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-center pb-10">
          <h2>Ce conține Micul Dejun START ACTIV</h2>
           <p>Două produse premium Herbalife complementare care formează un mic dejun complet și echilibrat</p>
           </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* First Card*/}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4b4c4b] mb-6">🥤 Formula 1 – Shake Nutritiv</h2>
             

              <div className="space-y-6">
                {FormulaShake.map((shake) => (
                 
                    <Card key={shake.id}>
                         <CardContent>
                           <p>{shake.title}</p>
                          </CardContent>
                    </Card>
                  

                ))}
              </div>
            </div>

               {/* First Card*/}

                  {/* Second Card*/}

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4b4c4b] mb-6">💪 Protein Drink Mix</h2>
              <div className="space-y-6">
                {ProteinDrink.map((drink) => (
                 
                    <Card key={drink.id}>
                         <CardContent>
                           <p>{drink.title}</p>
                          </CardContent>
                    </Card>
                  

                ))}
              </div>
            </div>

            {/* Second Card*/}
          </div>
        </div>
      </section>
  {/* Section 4 - Ce contine Shakeul Section */}

       {/* Section 5 - Cum se integreaza Programul Start active */}
          
           <section className="py-20" id="integrare-program">
            <div className="max-w-6xl mx-auto text-center">
              <h1>Cum se integreazǎ Micul dejun START ACTIV în rutina ta zilnicǎ</h1>
              <p>START ACTIV nu este despre a renunța la mâncarea gătită sau la mesele în familie.</p>
              <p>Este despre a avea o soluție sănătoasă atunci când ești pe fugă.</p>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <Card>
  <CardHeader>
    <CardTitle>🏃‍♂️ Zilele aglomerate (luni–vineri)</CardTitle>
   
  </CardHeader>
  <CardContent>
     <ul>
      <li>Dimineți pe fugă</li>
      <li>Copiii trebuie duși la școală</li>
      <li>Drumul spre serviciu</li>
      <li>Puțin timp pentru tine</li>
    </ul>
  </CardContent>
  <CardFooter>
    <h2>👉 Start ACTIV</h2>
    <p>Micul dejun rapid care îți oferă energie și sațietate fără compromisuri.</p>
  </CardFooter>
</Card>
                  </div>
                  <div>
                                    <Card>
  <CardHeader>
    <CardTitle>🏃‍♂️ Zilele aglomerate (luni–vineri)</CardTitle>
  </CardHeader>
  <CardContent>
    <ul>
      <li>Dimineți liniștite</li>
      <li>Mic dejun gătit</li>
      <li>Omletă, iaurt, legume</li>
      <li>Timp petrecut cu cei dragi</li>
    </ul>
  </CardContent>
  <CardFooter>
    
    <p>👉 Mese normale, fără presiune, fără reguli stricte</p>
  </CardFooter>
</Card>
                  </div>
                </div>

                <div>
                  <p> START ACTIV nu înlocuiește mâncarea adevărată.</p>
                  <p> Îți oferă o alternativă corectă atunci când timpul nu este de partea ta.</p>

                  <p className="py-10">Pachetul de 21 de porții este gândit pentru zilele lucrătoare, când ai nevoie de o soluție rapidă și eficientă. Este alternativa sanatoasǎ la micul dejun de tip Fast-Food sau Patiserie!</p>
                </div>
                  
                  <div>
                    <h2>Micro-beneficii</h2>
                    <ul>
                      <li> Fără obligații zilnice</li>
                      <li>Fără diete extreme</li>
                      <li>Fără sentimentul de „ținut regim”</li>
                    </ul>
                  </div>
               
            </div>
           </section>

         {/* Section 5 - Cum se integreaza Programul Start active */}

      {/* Section 6 - The Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-[#8ecb40]/5 to-white border-2 border-[#8ecb40] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-gradient-to-r from-[#8ecb40] via-[#7ab535] to-[#8ecb40]"></div>

            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#8ecb40]/10 border border-[#8ecb40]/20 text-[#8ecb40] text-sm font-medium">
              Ofertă 
            </div>

            <h2 className="text-3xl font-bold mb-4 text-[#4b4c4b]">Mic Dejun START ACTIV – Provizii pentru 21 de Zile</h2>
            <p className="text-[#4b4c4b]/70 mb-8">
              Începe-ți diminețile cu un mic dejun complet, simplu și eficient
            </p>

            <div className="text-5xl font-bold  text-[#4b4c4b]">
              520 RON <span className="text-lg text-[#4b4c4b]/50 font-normal ">/ pachet</span>
            </div>
             <h3 className="pb-5 text-sm">≈ 24,7 RON / mic dejun</h3>


            <div className="grid text-left gap-4 max-w-sm mx-auto mb-10">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0">
                  <CheckCheckIcon className="w-3 h-3 text-[#8ecb40]" />
                </div>
                <span className="text-[#4b4c4b] text-sm">Mic Dejun Start Activ 21 de Porții</span>
              </div>
              
               <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0">
                  <CheckCheckIcon className="w-3 h-3 text-[#8ecb40]" />
                </div>
                <span className="text-[#4b4c4b] text-sm">Garanție de Returnare - 30 de Zile</span>
              </div>
               Shaker + lingură de dozaj CADOU
                eBook CADOU: 10 Hack-uri pentru o Glicemie Stabilă
                eBook CADOU: Arta Hidratării
                Transport gratuit
            </div>

            <p className="text-sm">Comanzi fără riscuri.
 Dacă nu ești mulțumit, poți returna produsele în 30 de zile.</p>

            <Button
              size="lg"
              className="w-full md:w-auto px-10 py-6 bg-[#8ecb40] hover:bg-[#7ab535] text-white font-bold rounded-lg transition flex items-center justify-center gap-2 mx-auto text-lg"
            >
              Comandă Acum <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-sm">Stoc limitat • Livrare rapidă • Plată sigură
</p>
            
          </div>
        </div>
      </section>

      
      {/* Section 6 - The Offer Section */}

      {/* Section 7 -  CTA Section */}
      <section className="py-20 bg-[#4b4c4b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
            Transformă-ți dimineața începând de mâine
          </h2>
          <p className="text-xl text-white/80 mb-8 text-pretty">
            Alătură-te miilor de profesioniști care au descoperit secretul unui mic dejun sănătos și rapid
          </p>
          <Button size="lg" className="bg-[#8ecb40] hover:bg-[#7ab535] text-white text-lg px-12 py-6">
            Comandă START ACTIV
          </Button>
        </div>
      </section>

          {/* Section 7 -  CTA Section */}


          {/* Section 8 - FAQ Section */}
               
               <section className="py-20" id="faq">

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  
                    <h1>Întrebări frecvente despre START ACTIV</h1>

   



   
      {FAQ.map((question) => (
         <Accordion type="single" collapsible key={question.id} className="w-full">

          <AccordionItem value="item-1">
           <AccordionTrigger>
             {question.title}
            <AccordionContent>
              {question.raspuns}
            </AccordionContent>
           </AccordionTrigger>
        </AccordionItem>
         </Accordion>

      ))}


                  
                  </div> 

                   
 


               </section>

            {/* Section 8 - FAQ Section */}

      {/* Footer */}
      <Footer/>
    </div>
  )
}
