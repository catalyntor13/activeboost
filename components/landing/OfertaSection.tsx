"use client"

import { Button } from "@/components/ui/button"
import { Card} from "@/components/ui/card"
import { CheckCircle, ArrowRight, } from "lucide-react"



const OfertaSection = () => {
  return (
    <>
     <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/30 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none"></div>

            <div className="relative">
              <div className="h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>

              <div className="p-10 text-center space-y-8">
                <div className="inline-block px-4 py-2 rounded-full bg-primary border border-primary/30 text-secondary text-sm font-bold uppercase tracking-wide">
                  Ofertă Specială
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    Mic Dejun <span className="text-[#8ecb40]">START ACTIV</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">Provizii pentru 21 de Zile</p>
                  <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Începe-ți diminețile cu un mic dejun complet, simplu și eficient
                  </p>
                </div>

                <div className="py-6">
                  <div className="text-6xl font-bold text-foreground mb-2">
                    520 <span className="text-2xl">RON</span>
                  </div>
                  <p className="text-sm text-muted-foreground">≈ 24,7 RON / mic dejun</p>
                </div>

                <div className="grid gap-4 max-w-md mx-auto text-left">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-6 h-6 rounded-full bg-[#8ecb40] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Mic Dejun Start Activ 21 de Porții</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-6 h-6 rounded-full bg-[#8ecb40] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Garanție de Returnare - 30 de Zile</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-6 h-6 rounded-full bg-[#8ecb40] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Shaker + lingură de dozaj CADOU</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-6 h-6 rounded-full bg-[#8ecb40] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      eBook CADOU: 10 Hack-uri Glicemie Stabilă
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-6 h-6 rounded-full bg-[#8ecb40] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">eBook CADOU: Arta Hidratării</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-6 h-6 rounded-full bg-[#8ecb40] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Transport gratuit</span>
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Comanzi fără riscuri. Dacă nu ești mulțumit, poți returna produsele în 30 de zile.
                  </p>

                  <Button
                    size="lg"
                    className="w-full md:w-auto px-12 cursor-pointer py-7 bg-[#8ecb40] hover:bg-[#8ecb40]/90 text-primary-foreground font-bold text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all"
                  >
                    Comandă Acum
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>

                  <p className="text-xs text-muted-foreground">Stoc limitat • Livrare rapidă • Plată sigură</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

        <section className="py-24 bg-[#8ecb40]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold text-secondary leading-tight text-balance tracking-tight">
            Transformă-ți dimineața începând de mâine
          </h2>
          <p className="text-xl text-secondary-foreground/80 leading-relaxed text-pretty max-w-2xl mx-auto">
            Alătură-te miilor de profesioniști care au descoperit secretul unui mic dejun sănătos și rapid
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80 cursor-pointer text-primary-foreground font-bold text-lg px-12 py-7 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all"
          >
            Începe acum
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}

export default OfertaSection