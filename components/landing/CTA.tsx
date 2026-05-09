"use client"

import { ArrowRight, Download } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import Link from "next/link"

export default function CTASection() {
    return (
        <>
        <section className="py-24 px-6 text-center ">
        <div className="max-w-2xl border-1 border-gray-300 rounded-2xl py-5 mx-auto">
        
          
          <h2 className="text-lg font-bold text-slate-900 mb-8 tracking-tighter uppercase">
            Ești gata să îți recapeți  controlul asupra energiei?
          </h2>
            <motion.div 
            whileInView={{ scale: [0.95, 1] }}
            className="p-6 rounded-2xl  inline-block"
          >
            <p className="text-[#7dc142] text-sm font-bold uppercase mb-2">Ofertă Limitată</p>
            <h4 className="text-slate-950 text-xl font-bold mb-1">Ghid Glicemie + Bonus Hidratare</h4>
            <div className="flex justify-center items-center gap-3">
              <span className="text-gray-500 line-through">198 lei</span>
              <span className="text-slate-950 text-3xl font-black ">99 lei</span>
            </div>
          </motion.div>
          <Link href="/checkout" className="group">
          <Button className="bg-[#7dc142] cursor-pointer text-[#0a1a02] hover:bg-[#8ee04b] w-full shadow-[0_0_20px_rgba(125,193,66,0.3)] text-xl  p-8 font-bold w-full lg:w-xs">
            VREAU GHIDUL PDF <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          </Link>
          <p className="text-[10px] flex items-center justify-center mt-3 gap-2 text-gray-500 uppercase tracking-widest tracking-tighter ">
              <Download className="inline mr-1" size={12} />  Acces imediat PDF • Descarcă pe orice dispozitiv 
            </p>
        </div>
      </section>
        </>
    )
}