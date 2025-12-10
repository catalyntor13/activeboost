import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, CheckCircle, ArrowRight, X } from "lucide-react"
import Footer from "../sectiuni/Footer"
import Image from "next/image"

export default function Home() {
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
              <Button className="bg-[#8ecb40] hover:bg-[#7ab535] text-white">Comandă acum</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              

              <h1 className="text-4xl lg:text-5xl font-bold text-[#4b4c4b] mb-6 leading-tight text-balance">
                Ești mereu pe fugă dimineața și ajungi să mănânci doar covrigi sau patiserie?{" "}
                <span className="text-red-500">STOP!</span>
              </h1>

              <h2 className="text-xl lg:text-2xl text-[#4b4c4b]/80 mb-8 leading-relaxed text-pretty">
                Descoperă alternativa care îți hrănește corpul, nu doar îți păcălește foamea. Primești{" "}
                <span className="font-bold text-[#8ecb40]">24g proteine</span>, vitamine, fibre și energie pură în doar{" "}
                <span className="font-bold">215 calorii</span>.
              </h2>

              <div className="bg-[#8ecb40]/5 border-l-4 border-[#8ecb40] p-6 rounded-lg mb-8">
                <p className="text-lg text-[#4b4c4b] font-medium">
                  <span className="text-[#8ecb40] font-bold">Bonus:</span> Îl prepari instant și îl bei în drum spre
                  birou.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#8ecb40] hover:bg-[#7ab535] text-white text-lg px-8 py-6">
                  Începe acum
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

      {/* Hook/Brand Section */}
      <section className="bg-[#8ecb40] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Fă cunoștință cu Programul START ACTIV
          </h3>
          <p className="text-xl text-white/90 text-pretty max-w-3xl mx-auto">
            Micul tău dejun sănătos, gata în 30 de secunde
          </p>
        </div>
      </section>

      {/* Problem vs Solution Section */}
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
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <p>Pierzi 15-20 minute în fiecare dimineață pregătind și consumând un mic dejun tradițional.</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <p>
                    Te simți greoi și lipsit de energie, cu poftă constantă de gustări nesănătoase înainte de prânz.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <p>Aportul caloric ridicat fără beneficii nutriționale reale - doar calorii goale care te îngrașă.</p>
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

      {/* Nutrition Facts Section */}
      <section id="nutritie" className="py-20 bg-[#8ecb40]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4b4c4b] mb-6">Mai mult decât un simplu shake</h2>
              <p className="text-lg text-[#4b4c4b]/80 mb-8 leading-relaxed">
                START ACTIV este formulat pentru a-ți oferi exact ce ai nevoie pentru o zi productivă. Fără zahăr
                adăugat, fără compromisuri.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#8ecb40] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4b4c4b] mb-1">Proteine de calitate</h4>
                    <p className="text-[#4b4c4b]/70">24g proteine pentru sațietate și energie</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#8ecb40] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4b4c4b] mb-1">Vitamine esențiale</h4>
                    <p className="text-[#4b4c4b]/70">Complex de vitamine pentru sistem imunitar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#8ecb40] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4b4c4b] mb-1">Fibre naturale</h4>
                    <p className="text-[#4b4c4b]/70">Pentru digestie sănătoasă și sațietate prelungită</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-white shadow-xl">
                <h3 className="text-2xl font-bold text-[#4b4c4b] mb-6 text-center">Informații Nutriționale</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-[#4b4c4b] font-medium">Calorii</span>
                    <span className="text-2xl font-bold text-[#8ecb40]">215</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-[#4b4c4b] font-medium">Proteine</span>
                    <span className="text-2xl font-bold text-[#8ecb40]">24g</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-[#4b4c4b] font-medium">Fibre</span>
                    <span className="text-xl font-bold text-[#4b4c4b]">5g</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-[#4b4c4b] font-medium">Vitamine & Minerale</span>
                    <span className="text-xl font-bold text-[#4b4c4b]">20+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#4b4c4b] font-medium">Zahăr adăugat</span>
                    <span className="text-xl font-bold text-[#4b4c4b]">0g</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-[#8ecb40]/5 to-white border-2 border-[#8ecb40] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-gradient-to-r from-[#8ecb40] via-[#7ab535] to-[#8ecb40]"></div>

            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#8ecb40]/10 border border-[#8ecb40]/20 text-[#8ecb40] text-sm font-medium">
              Ofertă Limitată
            </div>

            <h2 className="text-3xl font-bold mb-4 text-[#4b4c4b]">Pachet START ACTIV - Provizii pentru 30 de Zile</h2>
            <p className="text-[#4b4c4b]/70 mb-8">
              Începe transformarea ta cu un aport complet pentru o lună întreagă.
            </p>

            <div className="text-5xl font-bold mb-6 text-[#4b4c4b]">
              520 RON <span className="text-lg text-[#4b4c4b]/50 font-normal ">/ pachet</span>
            </div>


            <div className="grid text-left gap-4 max-w-sm mx-auto mb-10">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3 h-3 text-[#8ecb40]" />
                </div>
                <span className="text-[#4b4c4b] text-sm">Mic Dejun Start Activ 21 de Porții</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3 h-3 text-[#8ecb40]" />
                </div>
                <span className="text-[#4b4c4b] text-sm">Shaker + Lingură de Dozaj</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3 h-3 text-[#8ecb40]" />
                </div>
                <span className="text-[#4b4c4b] text-sm">eBook: 10 Hack-uri pentru o Glicemie Stabilǎ</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3 h-3 text-[#8ecb40]" />
                </div>
                <span className="text-[#4b4c4b] text-sm">eBook: Arta Hidratǎrii</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3 h-3 text-[#8ecb40]" />
                </div>
                <span className="text-[#4b4c4b] text-sm">Transport Gratuit</span>
              </div>
               <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8ecb40]/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3 h-3 text-[#8ecb40]" />
                </div>
                <span className="text-[#4b4c4b] text-sm">Garanție de Returnare - 30 de Zile</span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full md:w-auto px-10 py-6 bg-[#8ecb40] hover:bg-[#7ab535] text-white font-bold rounded-lg transition flex items-center justify-center gap-2 mx-auto text-lg"
            >
              Comandă Acum <ArrowRight className="w-5 h-5" />
            </Button>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <Footer/>
    </div>
  )
}
