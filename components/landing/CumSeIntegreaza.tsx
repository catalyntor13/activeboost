"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, Zap, Coffee, Clock, Utensils, CalendarDays, Ban } from "lucide-react"

const CumSeIntegreaza = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background" id="integrare-program">
      {/* Background decoration elements - subtil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance">
            Cum se integrează <span className="text-[#8ecb40] mr-2">START ACTIV</span> în rutina ta
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
            Nu renunța la mesele în familie. Doar adaugă o soluție inteligentă pentru momentele când timpul nu este de partea ta.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 mb-20 items-stretch">
          
          {/* Card: Zile Aglomerate (Focus pe Solutie) */}
          <Card className="flex flex-col border-2 border-primary/20 bg-gradient-to-b from-card to-primary/5 shadow-xl shadow-primary/5 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group">
           
            
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between mb-2">
                 <div className="p-3 bg-primary/10 rounded-xl w-fit">
                    <Zap className="w-6 h-6 text-primary" />
                 </div>
                 <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">Luni – Vineri</span>
              </div>
              <CardTitle className="text-2xl font-bold">Zilele Aglomerate</CardTitle>
              <p className="text-muted-foreground">Când fiecare minut contează</p>
            </CardHeader>
            
            <CardContent className="flex-grow pt-6">
              <ul className="space-y-4">
                {[
                  "Dimineți pe fugă, alarma sună târziu",
                  "Copiii trebuie pregătiți și duși la școală",
                  "Traficul spre serviciu",
                  "Zero timp pentru gătit"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-muted-foreground">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="block p-0">
               <div className="bg-[#8ecb40] text-primary-foreground p-6 m-1 rounded-b-lg md:rounded-lg md:m-4 flex flex-col sm:flex-row items-center gap-4 justify-between shadow-lg">
                  <div>
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      Soluția START ACTIV
                    </h4>
                    <p className="text-primary-foreground/80 text-sm">Shake rapid, energie maximă, sațietate.</p>
                  </div>
                  <div className="bg-white/20 p-2 rounded-full">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
               </div>
            </CardFooter>
          </Card>

          {/* Card: Weekend (Relaxare) */}
          <Card className="flex flex-col border border-border bg-card/50 hover:bg-card hover:shadow-lg transition-all duration-300">
             <CardHeader className="pb-2">
              <div className="flex items-center justify-between mb-2">
                 <div className="p-3 bg-secondary rounded-xl w-fit">
                    <Coffee className="w-6 h-6 text-foreground/70" />
                 </div>
                 <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-3 py-1 rounded-full">Sâmbătă – Duminică</span>
              </div>
              <CardTitle className="text-2xl font-bold">Weekend-uri Liniștite</CardTitle>
              <p className="text-muted-foreground">Timp pentru tine și familie</p>
            </CardHeader>

            <CardContent className="flex-grow pt-6">
              <ul className="space-y-4">
                {[
                  "Trezire naturală, fără alarmă",
                  "Mic dejun gătit (omletă, clătite)",
                  "Timp de calitate cu cei dragi",
                  "Mese luate pe îndelete"
                ].map((item, i) => (
                  <li key={i} className="flex items-center font-semibold gap-3 text-muted-foreground">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter className="mt-auto pt-6 border-t border-border/50 bg-secondary/30">
                <p className="text-sm text-muted-foreground flex items-center gap-2 italic">
                  <Utensils className="w-4 h-4" />
                  Mănâncă normal, fără reguli stricte și fără vinovăție.
                </p>
            </CardFooter>
          </Card>
        </div>

        {/* Bottom Section - Context & Benefits */}
        <div className="max-w-4xl mx-auto">
          {/* Main Message Box */}
          <div className="bg-gradient-to-r from-muted/50 to-background border border-border rounded-2xl p-8 text-center mb-12">
            <h3 className="text-xl font-semibold mb-3">START ACTIV nu înlocuiește mâncarea adevărată</h3>
            <p className="text-muted-foreground mb-6">
              Este alternativa <span className="text-primary font-medium">sănătoasă și corectă</span> la patiserie sau fast-food atunci când ești contra cronometru.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-background border px-4 py-2 rounded-full">
               <Clock className="w-4 h-4 text-primary" />
               <span>Pachetul de 21 de porții acoperă exact zilele lucrătoare dintr-o lună.</span>
            </div>
          </div>

          {/* Micro-Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Ban, text: "Fără obligații zilnice", sub: "Bei doar când ai nevoie" },
              { icon: CheckCircle2, text: "Fără diete extreme", sub: "Echilibru, nu restricții" },
              { icon: Utensils, text: "Nu este 'regim'", sub: "Este nutriție funcțională" },
            ].map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary mb-3 opacity-80" />
                <span className="font-bold text-foreground block mb-1">{benefit.text}</span>
                <span className="text-xs text-muted-foreground">{benefit.sub}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default CumSeIntegreaza