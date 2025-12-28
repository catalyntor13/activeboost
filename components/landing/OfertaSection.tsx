"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight, ShieldCheck, Gift, Truck } from "lucide-react"
import Link from "next/link"

const OfertaSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container - Split Layout on Desktop */}
        <Card className="rounded-[2rem] border-0 shadow-2xl overflow-hidden bg-background ring-1 ring-border/50">
          <div className="grid lg:grid-cols-12 min-h-[600px]">
            
            {/* LEFT SIDE: Value Proposition & Content (7 Cols) */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-center relative">
               {/* Background decoration */}
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8ecb40]/5 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
               
                  
                  <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                    Mic Dejun <span className="text-[#8ecb40]">START ACTIV</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground font-medium">
                    Provizii complete pentru 21 de Zile
                  </p>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    Transformă-ți diminețile haotice în momente de energie pură. Simplu, eficient și nutritiv.
                  </p>
                </div>

                {/* Feature Grid - More compact */}
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6 pt-4">
                  {[
                    { text: "21 Porții Start Activ", icon: Check },
                    { text: "Shaker Premium CADOU", icon: Gift },
                    { text: "Lingură dozaj inclusă", icon: Check },
                    { text: "eBook: Hack-uri Glicemie", icon: Gift },
                    { text: "eBook: Arta Hidratării", icon: Gift },
                    { text: "Transport Gratuit", icon: Truck },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="w-5 h-5 mt-1 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0 group-hover:bg-[#8ecb40] transition-colors duration-300">
                        <item.icon className="w-3 h-3 text-[#8ecb40] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-foreground/90">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="hidden lg:block pt-6">
                   <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 p-3 rounded-lg w-fit">
                      <ShieldCheck className="w-4 h-4 text-[#8ecb40]" />
                      <span>Garanție de returnare 30 de zile. Fără întrebări.</span>
                   </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Pricing & Action (5 Cols) */}
            <div className="lg:col-span-5 bg-muted/30 p-8 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/50 relative">
               
              <div className="space-y-8 text-center lg:text-left relative z-10">
                
                {/* Pricing Block */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Investiția ta în sănătate</p>
                  <div className="flex items-baseline justify-center lg:justify-start gap-2">
                    <span className="text-6xl font-black text-foreground tracking-tighter">520</span>
                    <span className="text-2xl font-bold text-muted-foreground">RON</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">≈ 24,7 RON / mic dejun complet</p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-border/60"></div>

                {/* CTA Block */}
                <div className="space-y-4">
                  <Link href='/checkout'>
                  <Button 
                    size="lg" 
                    className="w-full  cursor-pointer h-14 bg-[#8ecb40] hover:bg-[#8ecb40]/90 text-white font-bold text-lg shadow-xl shadow-[#8ecb40]/20 hover:shadow-[#8ecb40]/40 transition-all duration-300 rounded-xl"
                  >
                    Comandă Pachetul
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  </Link>
                  <p className="text-xs text-center pt-3 text-muted-foreground">
                    Plată sigură • Livrare 24/48h • Transport Gratuit
                  </p>
                </div>
                
                {/* Mobile Guarantee (shown only on small screens) */}
                <div className="lg:hidden flex justify-center pt-4">
                   <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ShieldCheck className="w-4 h-4 text-[#8ecb40]" />
                      <span>Garanție de returnare 30 de zile</span>
                   </div>
                </div>

              </div>
            </div>
          </div>
        </Card>

        {/* Bottom hook - cleaner */}
        <div className="mt-12 text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground">Încă stai pe gânduri?</h3>
          <p className="text-muted-foreground">
            Alătură-te celor peste 5,000 de clienți care și-au transformat diminețile.
          </p>
        </div>

      </div>
    </section>
  )
}

export default OfertaSection