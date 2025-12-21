"use client"


import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"


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
            <h2 className="text-4xl font-bold text-foreground leading-tight tracking-tight">
              Ce conține Micul Dejun START ACTIV
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Două produse premium Herbalife complementare care formează un mic dejun complet și echilibrat
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* First Card */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="text-4xl">🥤</span> Formula 1
                </h3>
                <p className="text-muted-foreground">Shake Nutritiv</p>
              </div>

              <div className="space-y-3">
                {FormulaShake.map((shake) => (
                  <Card
                    key={shake.id}
                    className="border-border/50 bg-card hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <CardContent className="py-4">
                      <div className="flex items-center gap-3">
                        <Check className="text-white bg-[#8ecb40]"/>
                        <p className="text-foreground font-bold">{shake.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Second Card */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="text-4xl">💪</span> Protein Drink Mix
                </h3>
                <p className="text-muted-foreground">Supliment proteic</p>
              </div>

              <div className="space-y-3">
                {ProteinDrink.map((drink) => (
                  <Card
                    key={drink.id}
                    className="border-border/50 bg-card hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <CardContent className="py-4">
                      <div className="flex items-center gap-3">
                        <Check className="text-white bg-[#8ecb40]"/>
                        <p className="text-foreground font-bold">{drink.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IngredienteSection