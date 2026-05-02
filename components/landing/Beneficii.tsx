"use client"

import { Zap, Star, Scale, Moon } from "lucide-react"
import { motion } from "framer-motion"


export default function BeneficiiSection() {


    return (
        <>
        {/* SECTIUNEA BENEFICII: Transformarea resimțită de client */}
      <section className="py-24 bg-slate-950 border-y border-white/5 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[#7dc142] text-center font-bold text-xs uppercase tracking-widest mb-2">Beneficii</h1>
          <h2 className="text-center text-3xl font-bold text-white mb-16 uppercase tracking-tighter ">Transformarea pe care o vei simți</h2>
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
                className="bg-slate-900 border border-white/5 p-8 rounded-2xl"
              >
                <div className="text-[#7dc142] mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-2 uppercase text-sm">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        </>
    )
}