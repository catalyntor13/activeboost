"use client"

import { Download, Droplets, } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroPage() {
    return (
        <>
        {/* SECTIUNEA HERO: Titlu, Subtitlu și Primul Call to Action */}
      <section className="relative max-w-7xl flex flex-col-reverse lg:flex-row justify-center mx-auto gap-16 py-16 px-6 lg:px-0 ">
        <div className="max-w-5xl my-auto">
          <Image src="/ebook.jpeg" alt="Hero Background" width={500} height={100} className="rounded-lg shadow-lg object-cover w-full h-auto" />
        </div>
        <div className="max-w-xl text-center w-full">
          <Image src="/logo.png" alt="Active Boost Logo" width={200} height={180} className="mx-auto " />
          <h1 className="text-xl  font-bold text-slate-800 mb-6 tracking-tight leading-[1.1]">
            Scapă de oboseală, pofte de dulce și <span className="text-[#7dc142]">kilograme în plus</span> — fără diete și fără restricții
          
          </h1>
          <p className="text-sm text-gray-400 mb-8 font-semibold ">
            Ghidul practic bazat pe știință, aplicabil imediat — acasă sau la restaurant.
          </p>
          
          {/* BOX BONUS: Evidențierea valorii adăugate gratuite[cite: 1] */}
          <div className="bg-slate-950 border border-[#2d4a1a] p-4 rounded-xl max-w-lg mx-auto mb-10 flex items-center gap-4 text-left">
            <div className="bg-[#7dc142] p-2 rounded-lg text-[#0a1a02]"><Droplets size={24} /></div>
            <div>
              <p className="text-[#7dc142] text-xs font-bold uppercase">Bonus gratuit inclus</p>
              <p className="text-sm text-gray-200"><strong>Arta Hidratării</strong> — Maximizați energia (Valoare 99 lei) </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-gray-500 line-through text-lg">198 lei</span>
              <span className="text-[#7dc142] text-4xl font-bold ">99 lei</span> 
            </div>
            <Link href="/checkout" className="group inline-block">
            <Button variant='destructive' className="bg-[#7dc142] cursor-pointer text-[#0a1a02] hover:bg-[#8ee04b] shadow-[0_0_20px_rgba(125,193,66,0.3)] text-xl  p-8 font-bold w-full lg:w-sm">VREAU AMBELE GHIDURI ACUM</Button>
            </Link>
            <p className="text-[10px] flex items-center gap-2 text-gray-500 uppercase tracking-widest tracking-tighter">
              <Download className="inline mr-1" size={12} />  Acces imediat PDF • Descarcă pe orice dispozitiv 
            </p>
          </div>
        </div>
      </section>
        </>
    )
}