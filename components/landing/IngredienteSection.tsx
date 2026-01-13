"use client"


import { Card, CardContent } from "@/components/ui/card"
import { Check, Zap, CircleArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image"


const IngredienteSection = () => {

 const FormulaShake = [
    { id: 1, title: "18 g proteine de înaltă calitate / porție" },
    { id: 2, title: "25 vitamine și minerale esențiale" },
    { id: 3, title: "Ingrediente din surse vegane" },
    { id: 4, title: "Fără gluten" },
    { id: 5, title: "Fără coloranți sau arome artificiale" },
    { id: 6, title: "Îndulcitor din sursă naturală" },
    { id: 7, title: "21 porții / pachet" },
  ]

  const ProteinDrink = [
    { id: 1, title: "15 g proteine de calitate / porție" },
    { id: 2, title: "22 vitamine și minerale cheie" },
    { id: 3, title: "Vitamine din complexul B (energie & metabolism)" },
    { id: 4, title: "Fără zahăr" },
    { id: 5, title: "Potrivit pentru vegetarieni" },
    { id: 6, title: "21 porții / pachet" },
  ]
     
  return (
    <>
     <section id="nutritie" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Ce conține Micul Dejun START ACTIV
            </h2>
            <p className="text-sm lg:text-lg text-muted-foreground leading-relaxed">
              Două produse premium Herbalife complementare care formează un mic dejun complet și echilibrat
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
      
      {/* --- Card 1: Formula 1 --- */}
      <Card className="border border-border/50 shadow-lg bg-background hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col sm:flex-row h-full">
            
            {/* Partea de Text (Stânga) */}
            <div className="p-8 flex-1 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                   <span className="bg-orange-100 text-orange-600 p-2 rounded-lg text-2xl">🥤</span>
                   <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Baza Nutriției</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Formula 1</h3>
                <p className="text-muted-foreground text-sm font-medium">Shake Nutritiv Complet</p>
              </div>

              {/* Lista cu beneficii */}
              <ul className="space-y-3">
                {FormulaShake.map((shake) => (
                  <li key={shake.id} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#8ecb40]" />
                    </div>
                    <span className="text-sm text-foreground/80">{shake.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partea de Imagine (Dreapta / Fundal) */}
            <div className="p-6 flex items-center justify-center sm:w-1/3 relative group">
                
                
                
                {/* Imaginea Principală */}
                <div className="w-full h-64 sm:h-auto sm:w-3/5 ">
                <Image 
    src='/formula1s.png' 
    alt='Formula 1 Shake' 
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-105 pr-3"
  />
                 
                </div>
            </div>
   

          </div>
          
        </CardContent>
        <Dialog>
                  <DialogTrigger asChild>
                    <button className="flex items-center cursor-pointer justify-between mx-auto w-4/5 p-5 rounded-[1.5rem] bg-green-200 text-slate-900 hover:bg-green-100 transition-all group/btn">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                          <CircleArrowRight className="w-5 h-5 text-slate-800 group-hover/btn:text-green-500 transition-colors" />
                        </div>
                        <span className="text-sm font-bold tracking-wide">Lista Ingrediente</span>
                      </div>
                     
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] md:max-w-2xl rounded-[2rem] md:rounded-[2.5rem] max-h-[90vh] overflow-y-auto p-6 md:p-10">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-black italic">Ingrediente Formula 1 (Denumiri Comerciale)</DialogTitle>
                    </DialogHeader>
                    <p className="text-slate-600 font-medium leading-relaxed">
                     <span className="font-bold">Baza Proteică:</span>  Proteină vegetală de înaltă calitate (Izolat proteic din soia).
                    </p>
                    <p className="text-slate-600  font-medium leading-relaxed">
                    <span className="font-bold">Sursă de Energie:</span>  Carbohidrați cu eliberare controlată (Fructoză naturală).
                    </p>
                  
                    <p className="text-slate-600 font-medium leading-relaxed">
                    <span className="font-bold">Complex de Fibre:</span>   Amestec optim de fibre prebiotice și digestive (Inulină, fibre din ovăz fără gluten și pudră de semințe de in).
                    </p>
                    <p className="text-slate-600  font-medium leading-relaxed">
                     <span className="font-bold">Mix Esențial de Minerale:</span>  Complex mineral complet (Calciu, Magneziu, Fier, Zinc, Seleniu, Mangan, Crom, Iod, Cupru).

                    </p>
                    <p className="text-slate-600  font-medium leading-relaxed">
                     <span className="font-bold">Pachet Multivitaminic (25 de Vitamine):</span>  Vitaminele A, C, D, E, K și întreg grupul de Vitamine B (B1, B2, B6, B12, Niacină, Acid Folic, Biotină, Acid Pantotenic).
                    </p>
                    <p className="text-slate-600 font-medium leading-relaxed">
                    <span className="font-bold">Amestec de Super-Fructe și Plante:</span>  Mix botanic antioxidant (Pudră de Papaya, Rodie, Afine și Pătrunjel).
                    </p>
                    <p className="text-slate-600  font-medium leading-relaxed">
                   <span className="font-bold">Îndulcitor Natural:</span>    Extract pur din frunze de Stevia.
                    </p>
                    <p className="text-slate-600 font-medium leading-relaxed">
                    <span className="font-bold">Textură și Omogenizare:</span>  Lecitină naturală și agenți de îngroșare naturali (Gumă de xantan și guar).
                    </p>
                      <p className="text-slate-600 font-medium leading-relaxed">
               <span className="font-bold">Informații Alergeni:</span> Conține soia și ovăz fără gluten.
                    </p>
                  </DialogContent>
                </Dialog>
      </Card>


      {/* --- Card 2: Protein Drink Mix --- */}
      <Card className="border border-border/50 shadow-lg bg-background hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col sm:flex-row h-full">
            
            {/* Partea de Text */}
            <div className="p-8 flex-1 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                   <span className="bg-blue-100 text-blue-600 p-2 rounded-lg text-2xl">💪</span>
                   <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Performanță</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Protein Drink Mix</h3>
                <p className="text-muted-foreground text-sm font-medium">Supliment Proteic Avansat</p>
              </div>

              <ul className="space-y-3">
                {ProteinDrink.map((protein) => (
                  <li key={protein.id} className="flex items-start gap-3">
                     <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Zap className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm text-foreground/80">{protein.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partea de Imagine */}
               <div className="p-6 flex items-center justify-center sm:w-2/4 relative group">
                
                
                
                {/* Imaginea Principală */}
                <div className="w-full h-64 sm:h-auto sm:w-3/5 ">
                <Image 
    src='/protein.png' 
    alt='Protein PDM Shake' 
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-105 "
  />
                 
                </div>
            </div>


          </div>
        </CardContent>
         <Dialog>
                  <DialogTrigger asChild>
                    <button className="flex items-center cursor-pointer justify-between mx-auto w-4/5 p-5 rounded-[1.5rem] bg-green-200 text-slate-900 hover:bg-green-100 transition-all group/btn">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                          <CircleArrowRight className="w-5 h-5 text-slate-800 group-hover/btn:text-green-500 transition-colors" />
                        </div>
                        <span className="text-sm font-bold tracking-wide">Lista Ingrediente</span>
                      </div>
                     
                    </button>
                  </DialogTrigger>
                  <DialogContent className="rounded-[2.5rem]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-black italic">Ingrediente Protein Drink Mix (Denumiri Comerciale)</DialogTitle>
                    </DialogHeader>
                    <p className="text-slate-600 font-medium leading-relaxed">
                     <span className="font-bold mr-1.5">Mix Proteic Premium:</span>Combinație de proteine cu absorbție lentă și rapidă (Izolat proteic din soia și cazeinat de calciu din lapte).

                    </p>
                    <p className="text-slate-600  font-medium leading-relaxed">
                    <span className="font-bold mr-1.5">Sursă de Energie:</span>Carbohidrați complecși pentru susținerea antrenamentelor (Maltodextrină).
                    </p>
                  
                    <p className="text-slate-600 font-medium leading-relaxed">
                    <span className="font-bold mr-1.5">Grăsimi Sănătoase:</span>Infuzie de acizi grași din surse vegetale (Ulei de floarea-soarelui).
                    </p>
                    <p className="text-slate-600  font-medium leading-relaxed">
                     <span className="font-bold mr-1.5">Complex de Minerale Esențiale:</span>Amestec echilibrat de electroliți și minerale (Magneziu, Calciu, Potasiu, Zinc, Mangan, Cupru, Iod, Seleniu).

                    </p>
                    <p className="text-slate-600  font-medium leading-relaxed">
                     <span className="font-bold mr-1.5">Sursă Vitală de Vitamine:</span>Mix complet de 12 vitamine esențiale (Vitaminele A, C, D3, E și complexul de Vitamine B: B1, B2, B3, B5, B6, B12, Acid Folic și Biotină).
                    </p>
                    <p className="text-slate-600 font-medium leading-relaxed">
                    <span className="font-bold mr-1.5">Textură Fină și Omogenizare:</span>Stabilizatori naturali (Gumă de guar și xantan) și lecitină vegetală pentru o consistență cremoasă.
                    </p>
                    <p className="text-slate-600  font-medium leading-relaxed">
                   <span className="font-bold mr-1.5">Îndulcitor:</span>Sucraloză (pentru un gust excelent fără adaos de zahăr).
                    </p>
          
                      <p className="text-slate-600 font-medium leading-relaxed">
               <span className="font-bold mr-1.5">Informații Alergeni:</span>Conține soia și ovăz fără gluten.
                    </p>
                  </DialogContent>
                </Dialog>
      </Card>

    </div>
        </div>
      </section>
    </>
  )
}

export default IngredienteSection