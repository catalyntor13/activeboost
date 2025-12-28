"use client"

import Image from "next/image"

import { Button } from "../ui/button"
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react"
import Link from "next/link"
const HeroSection = () => {
  return (
      <>
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8ecb40] border border-primary/20">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Micul dejun perfect</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance tracking-tight">
                <span className="uppercase bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Start Activ
                </span>
              </h1>

              <h2 className="text-2xl  font-semibold text-foreground/90 leading-snug text-pretty">
                Micul dejun gustos și super nutritiv, care te ține sătul și plin de energie până la prânz
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Un <span className="uppercase font-bold">shake proteic</span> complet, bogat în proteine, fibre, vitamine și minerale – totul la doar{" "}
                <span className="font-semibold text-foreground">215 calorii</span>.
              </p>

                <div className="relative lg:hidden md:hidden aspect-square rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                <Image
                  width={600}
                  height={600}
                  alt="START ACTIV Product"
                  src="/photo.jpeg"
                  className="object-cover  w-full h-full"
                />
              </div>

              <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20 p-6 rounded-2xl backdrop-blur-sm">
                <p className="text-base text-foreground font-medium leading-relaxed">
                  Dacă dimineața sari peste micul dejun sau alegi covrigi, patiserie ori sandvișuri pe fugă, Start Activ
                  este alternativa simplă și sănătoasă pentru tine.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <Link className="lg:w-[45%]" href='/checkout'>
                <Button
                  size="lg"
                  className="bg-[#8ecb40] w-full hover:bg-[#8ecb40]/80 cursor-pointer text-primary-foreground text-base px-8 py-6 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all"
                >
                  Cumpără acum
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
               </Link>
                 <p className="text-xs text-center lg:text-start text-muted-foreground">
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

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative hidden lg:flex aspect-square rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                <Image
                  width={600}
                  height={600}
                  alt="START ACTIV Product"
                  src="/photo.jpeg"
                  className="object-cover  w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#8ecb40] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl  font-bold text-primary-foreground mb-4 text-balance leading-tight tracking-tight">
            De ce micul dejun clasic nu îți oferă energia de care ai nevoie ?
          </h3>
        </div>
      </section>
      </>
  )
}

export default HeroSection