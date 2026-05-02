"use client"

import { ArrowRight, Download } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"

export default function CTASection() {
    return (
        <>
        <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            whileInView={{ scale: [0.95, 1] }}
            className="bg-slate-950 border border-[#2d4a1a] p-6 rounded-2xl mb-12 inline-block"
          >
            <p className="text-[#7dc142] text-sm font-bold uppercase mb-2">Ofertă Limitată</p>
            <h4 className="text-white text-xl font-bold mb-1">Ghid Glicemie + Bonus Hidratare</h4>
            <div className="flex justify-center items-center gap-3">
              <span className="text-gray-500 line-through">198 lei</span>
              <span className="text-[#7dc142] text-3xl font-black italic">99 lei</span>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tighter uppercase">
            Ești gata să îți recapeți <br /> controlul asupra energiei?
          </h2>
          
          <Button className="bg-[#7dc142] cursor-pointer text-[#0a1a02] hover:bg-[#8ee04b] shadow-[0_0_20px_rgba(125,193,66,0.3)] text-xl  p-8 font-bold w-full lg:w-xs">
            VREAU GHIDUL PDF <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="mt-8 text-gray-600 text-sm italic">
            *Plată securizată. Link-ul de download vine instant pe email.
          </p>
        </div>
      </section>
        </>
    )
}