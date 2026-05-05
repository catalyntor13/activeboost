"use client"

import { Zap, Star, Scale, Moon } from "lucide-react"
import { motion } from "framer-motion"


export default function BeneficiiSection() {


    return (
        <>
        {/* SECTIUNEA BENEFICII: Transformarea resimțită de client */}
      <section className="py-24 bg-slate-950 border-y border-white/5 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[#7dc142] text-center font-bold text-xs uppercase tracking-widest mb-2">Te regăsești?</h1>
          <h2 className="text-center text-3xl font-bold text-white mb-16 uppercase tracking-tighter ">Simți cel puțin unul dintre acestea?</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '😴', title: "Lipsă de energie", desc: "Obosit chiar și după o noapte bună de somn" },
              { icon: '🍫', title: "Pofte de dulce", desc: "O nevoie constantă de ceva dulce după mese" },
              { icon: '🤤', title: "Foame permanentă", desc: "Mănânci și după o oră ți-e foame din nou" },
              { icon: '⚖️', title: "Greutate în plus", desc: "Dai jos kilograme și le pui înapoi imediat" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-slate-900 border border-white/5 p-8 rounded-2xl"
              >
                <div className="text-[#7dc142] mb-4 text-3xl">{item.icon}</div>
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