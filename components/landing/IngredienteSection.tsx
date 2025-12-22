"use client"


import { Card, CardContent } from "@/components/ui/card"
import { Check, Zap } from "lucide-react"
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
      </Card>

    </div>
        </div>
      </section>
    </>
  )
}

export default IngredienteSection