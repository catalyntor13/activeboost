"use client"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {  X, Sparkles, Clock, Zap, Shield } from "lucide-react"

const BeneficiiSection = () => {
  return (
    <> 
    <section id="beneficii" className="bg-gradient-to-b from-muted/50 to-background py-24 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Problem Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-destructive/80 border border-destructive/20 text-xs font-semibold text-white uppercase tracking-wide">
                  Problema
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Micul dejun tradițional
                </h2>
              </div>

              <div className="space-y-4">
                <Card className="border-destructive/20 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-destructive/80 flex items-center justify-center shrink-0">
                        <X className="w-5 h-5 text-white" />
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium text-foreground">
                          Covrigii și patiseriile sunt pline de zahăr și carbohidrați simpli
                        </p>
                        <p className="text-sm text-muted-foreground">→ Energie rapidă, urmată de oboseală după 2 ore</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-destructive/20 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-destructive/80 flex items-center justify-center shrink-0">
                        <X className="w-5 h-5 text-white" />
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium text-foreground">Pierzi 15–20 de minute în fiecare dimineață</p>
                        <p className="text-sm text-muted-foreground">→ Timp prețios pierdut pregătind și consumând</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-destructive/20 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-destructive/80 flex items-center justify-center shrink-0">
                        <X className="w-5 h-5 text-white" />
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium text-foreground">Te simți greoi, fără energie</p>
                        <p className="text-sm text-muted-foreground">→ Apare pofta de gustări nesănătoase</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-destructive/20 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-destructive/80 flex items-center justify-center shrink-0">
                        <X className="w-5 h-5 text-white" />
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium text-foreground">Calorii multe, nutrienți puțini</p>
                        <p className="text-sm text-muted-foreground">→ Calorii goale care favorizează îngrășarea</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-primary/5 shadow-2xl hover:shadow-primary/10 transition-all">
                <CardHeader className="space-y-4">
                  <div className="inline-block w-fit px-3 py-1 rounded-full bg-[#8ecb40] border border-primary/20 text-xs font-semibold text-white uppercase tracking-wide">
                    Soluția
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground">START ACTIV</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#8ecb40] flex items-center justify-center shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2 text-lg">24g Proteine de Calitate</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Energie susținută până la prânz, fără căderi bruște de energie sau foame.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#8ecb40] flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2 text-lg">Gata în 30 de Secunde</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Preparat instant - economisești timp prețios în fiecare dimineață.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#8ecb40] flex items-center justify-center shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2 text-lg">Nutriție Completă</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Vitamine, minerale și fibre - tot ce ai nevoie pentru o zi productivă.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#8ecb40] flex items-center justify-center shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2 text-lg">Doar 215 Calorii</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Mic dejun echilibrat care te ajută să menții greutatea ideală.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BeneficiiSection