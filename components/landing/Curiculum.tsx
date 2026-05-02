"use client"

import { CheckCircle2} from "lucide-react"
import { motion } from "framer-motion"

export default function CuriculumPage() {
    return (
        <>
    {/* SECTIUNEA CURRICULUM: Ce conține ghidul propriu-zis[cite: 1] */}
     <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-[#7dc142] font-bold text-xs uppercase tracking-widest mb-2">Curriculum</p>
            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter">Ce vei învăța din ghid</h2>
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
                <span className="text-slate-800 font-medium">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        </>
    )
}