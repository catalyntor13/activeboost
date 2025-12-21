"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"



const FaqSection = () => {

    const FAQ = [
    {
      id: 1,
      title: "Este START ACTIV un înlocuitor permanent al micului dejun?",
      raspuns:
        "Nu. START ACTIV este o soluție practică pentru diminețile aglomerate, când nu ai timp să gătești. În weekend sau în zilele mai liniștite, poți consuma fără probleme un mic dejun gătit alături de familie.",
    },
    {
      id: 2,
      title: "Trebuie să consum START ACTIV zilnic?",
      raspuns:
        "Nu este obligatoriu. Pachetul de 21 de porții este gândit pentru zilele lucrătoare, când ai nevoie de un mic dejun rapid și echilibrat.",
    },

    {
      id: 3,
      title: "Mă va ajuta să slăbesc?",
      raspuns:
        "START ACTIV te poate ajuta indirect, prin: aport ridicat de proteine, control mai bun al foamei, energie constantă fără gustări nesănătoase., Rezultatele diferă de la persoană la persoană și depind de stilul de viață.",
    },

    {
      id: 4,
      title: "Este potrivit dacă am probleme cu digestia sau balonare?",
      raspuns:
        "Multe persoane observă o digestie mai ușoară dimineața, datorită compoziției echilibrate.  Dacă ai afecțiuni medicale sau intoleranțe, recomandăm să consulți medicul.",
    },

    {
      id: 5,
      title: "Conține zahăr?",
      raspuns: "Nu conține zahăr adăugat. Produsele sunt îndulcite cu îndulcitor din sursă naturală.",
    },

    { id: 6, title: "Conține gluten?", raspuns: "Nu. START ACTIV nu conține gluten." },
    {
      id: 7,
      title: "Este potrivit pentru vegetarieni?",
      raspuns: "Da. Produsele sunt potrivite pentru vegetarieni și conțin ingrediente din surse vegane",
    },

    {
      id: 8,
      title: "Cum se prepară?",
      raspuns:
        "Simplu: , 1. Adaugi 300 ml apă sau lapte vegetal, 2. Adaugi 2 măsuri de Formula 1 + 2 măsuri de Protein Drink Mix, 3. Agiți în shaker , Totul durează aprox. 30 de secunde",
    },

    {
      id: 9,
      title: "Când este cel mai bine să îl consum?",
      raspuns: "Dimineața, la micul dejun. Poate fi consumat și ca masă ușoară atunci când ești pe fugă.",
    },

    {
      id: 10,
      title: "Pot consuma START ACTIV dacă fac sport?",
      raspuns: "Da. Conținutul ridicat de proteine îl face potrivit și pentru persoanele active.",
    },
    {
      id: 11,
      title: "Ce se întâmplă dacă nu sunt mulțumit?",
      raspuns:
        "Ai garanție de returnare 30 de zile. Dacă produsul nu este potrivit pentru tine, îl poți returna conform politicii afișate pe site.",
    },
  ]

  return (
    <>
    <section id="faq" className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Întrebări frecvente
            </h2>
            <p className="text-lg text-muted-foreground">Tot ce trebuie să știi despre START ACTIV</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {FAQ.map((item) => (
              <AccordionItem
                key={item.id}
                value={`item-${item.id}`}
                className="border border-border rounded-xl bg-card px-6 hover:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.raspuns}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}

export default FaqSection