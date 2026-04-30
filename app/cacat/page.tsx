"use client"

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Zap, 
  Droplets, 
  Moon, 
  Scale, 
  ArrowRight, 
  Download,
  Star
} from 'lucide-react';

// Componente mici de UI tip Shadcn (abstractizate)
const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-block bg-[#1a2e0d] text-[#7dc142] text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-[#2d4a1a] mb-6">
    {children}
  </div>
);

const Button = ({ children, className = "", primary = true }: any) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className={`px-8 py-4 rounded-lg font-bold transition-all text-center ${
      primary 
      ? "bg-[#7dc142] text-[#0a1a02] hover:bg-[#8ee04b] shadow-[0_0_20px_rgba(125,193,66,0.3)]" 
      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
    } ${className}`}
  >
    {children}
  </motion.button>
);

export default function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-200 selection:bg-[#7dc142] selection:text-black">
      <Head>
        <title>Active Boost - 10 Hack-uri pentru Glicemie</title>
      </Head>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#7dc142]/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <Badge>Active Boost — Sport & Nutriție</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              10 Hack-uri pentru o <br />
              <span className="text-[#7dc142]">Glicemie Stabilă</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light italic">
              Energie constantă · Pofte controlate · Greutate echilibrată
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Descoperă strategiile validate științific care îți stabilizează glicemia și îți transformă energia zilnică — fără diete restrictive.
            </p>

            {/* Bonus Box */}
            <div className="bg-[#1a2e0d] border border-[#2d4a1a] p-4 rounded-xl max-w-lg mx-auto mb-10 flex items-center gap-4 text-left">
              <div className="bg-[#7dc142] p-2 rounded-lg">
                <Droplets className="text-[#0a1a02]" size={24} />
              </div>
              <div>
                <p className="text-[#7dc142] text-xs font-bold uppercase tracking-wider">Bonus gratuit inclus</p>
                <p className="text-sm text-gray-200 font-medium italic">
                  <strong>Arta Hidratării</strong> — Maximizați energia (Valoare 99 lei)
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-gray-500 line-through text-lg">198 lei</span>
                <span className="text-[#7dc142] text-4xl font-bold tracking-tighter">99 lei</span>
              </div>
              <Button className="w-full md:w-auto text-xl">
                VREAU AMBELE GHIDURI ACUM
              </Button>
              <p className="text-xs text-gray-500 flex items-center gap-2">
                <Download size={14} /> Acces imediat PDF • Descarcă pe orice dispozitiv
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#141414] border-y border-white/5 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#7dc142] font-bold text-xs uppercase tracking-widest mb-2">Beneficii</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">Transformarea pe care o vei simți</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap />, title: "Energie Constantă", desc: "Fără căderi după masă sau ceață mentală" },
              { icon: <Star />, title: "Pofte Controlate", desc: "Scapă de nevoia compulsivă de dulce" },
              { icon: <Scale />, title: "Greutate Echilibrată", desc: "Gestionezi mai ușor kilogramele în plus" },
              { icon: <Moon />, title: "Somn mai Bun", desc: "Glicemie stabilă noaptea = odihnă reală" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-[#1c1c1c] border border-white/5 p-8 rounded-2xl"
              >
                <div className="text-[#7dc142] mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-2 uppercase text-sm">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-[#7dc142] font-bold text-xs uppercase tracking-widest mb-2">Curriculum</p>
            <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">Ce vei învăța din ghid</h2>
          </div>

          <div className="space-y-4">
            {[
              "Cum să mănânci în ordinea corectă — indiferent de meniu",
              "Mitul zahărului bun și rău — adevărul ascuns",
              "Diferența dintre Glucoză și Fructoză și impactul lor",
              "Protocolul de 10 minute după masă pentru a evita spike-ul",
              "Strategii aplicabile imediat (Acasă vs Restaurant)",
              "BONUS: Arta hidratării — ghid complet de revitalizare"
            ].map((text, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <div className="bg-[#1a2e0d] p-1 rounded-full border border-[#7dc142]/30">
                  <CheckCircle2 size={18} className="text-[#7dc142]" />
                </div>
                <span className="text-gray-300 font-medium">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-[#141414] border-t border-white/5 px-6">
        <div className="max-w-4xl mx-auto bg-[#1c1c1c] p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#7dc142]/10 blur-3xl rounded-full" />
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-32 h-40 md:w-48 md:h-64 bg-[#2a2a2a] rounded-2xl flex-shrink-0 border border-white/10 flex items-center justify-center italic text-gray-600 text-sm text-center p-4">
              [Poza Adrian]
            </div>
            <div>
              <p className="text-[#7dc142] font-bold text-xs uppercase tracking-widest mb-4">Povestea Active Boost</p>
              <h3 className="text-2xl font-bold text-white mb-4">"Problema nu era voința mea — ci glicemia."</h3>
              <p className="text-gray-400 leading-relaxed mb-6 italic">
                Ani la rând am trăit prizonierul poftelor. Energia era la pământ și nicio dietă nu funcționa. Am creat acest ghid ca să îți ofer scurtătura pe care eu nu am avut-o.
              </p>
              <p className="text-white font-bold">— Adrian, Fondator Active Boost</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            whileInView={{ scale: [0.95, 1] }}
            className="bg-[#1a2e0d] border border-[#2d4a1a] p-6 rounded-2xl mb-12 inline-block"
          >
            <p className="text-[#7dc142] text-sm font-bold uppercase mb-2">Ofertă Limitată</p>
            <h4 className="text-white text-xl font-bold mb-1">Ghid Glicemie + Bonus Hidratare</h4>
            <div className="flex justify-center items-center gap-3">
              <span className="text-gray-500 line-through">198 lei</span>
              <span className="text-[#7dc142] text-3xl font-black italic">99 lei</span>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tighter uppercase">
            Ești gata să îți recapeți <br /> controlul asupra energiei?
          </h2>
          
          <Button className="w-full md:w-auto text-xl group">
            VREAU GHIDUL PDF <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="mt-8 text-gray-500 text-sm italic">
            *Plată securizată. Link-ul de download vine instant pe email.
          </p>
        </div>
      </section>

      <footer className="py-10 border-t border-white/5 text-center text-gray-600 text-xs">
        <p>© {new Date().getFullYear()} Active Boost. Toate drepturile rezervate.</p>
      </footer>
    </div>
  );
}