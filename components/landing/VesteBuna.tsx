"use client "

import { FaArrowDown } from "react-icons/fa";

export default function VesteBuna() {
    return (
        <>
        <section className="py-24 border-y border-white/5 bg-slate-100 px-6">
        <div className="max-w-6xl flex flex-col items-center mx-auto text-center gap-6">
            <h1 className="text-[#7dc142] text-center font-bold text-xs uppercase tracking-widest ">Vestea bună</h1>
          <h2 className="text-center text-2xl lg:text-4xl font-bold text-slate-950  uppercase tracking-tighter ">Toate au o singură cauză</h2>
           <p className="text-gray-400">Nu e vina ta. E biologie.</p>

           <div className="text-[#7dc142] font-bold"><FaArrowDown/></div>

           <div className="border-1  border-gray-400 max-w-xl rounded-lg  text-xl  p-8">
             <h3 className="text-red-500 font-bold text-4xl mb-2 uppercase tracking-tight ">Spike Glicemic</h3>
            <p className="text-slate-950 font-semibold max-w-sm text-sm">Creșterea bruscă a zahărului din sânge după masă</p>
           </div>
           <p className="text-gray-500 max-w-2xl font-medium text-sm lg:text-base">Când glicemia urcă și cade brusc, corpul răspunde cu oboseală, foame, pofte și acumulare de grăsime. Dacă înveți să controlezi asta, controlezi totul.</p>
        </div>

        </section>
        </>
    )
}