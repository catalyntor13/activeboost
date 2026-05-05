"use client"


import { FaCheckCircle } from "react-icons/fa";


export default function PentruCine () {
    return (
        <>
        <section className="max-w-6xl mx-auto p-16">
            <div className="text-center mb-10">

               
                <h1 className="text-[#7dc142] font-bold text-xs uppercase tracking-widest text-xs mb-2">Pentru cine este ?</h1>
                <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter">Acest ghid e pentru tine dacă...</h2>
            </div>
              
              <div className="flex justify-center">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                <div>
                   
                        <FaCheckCircle className="text-[#7dc142] mb-2" size={24} />
                        <h3 className="font-bold text-slate-900 tracking-tigher mb-1">Te simți obosit frecvent</h3>
                        <p className="font-medium text-slate-700">Chiar dacă dormi suficient</p>
                    
                </div>
                <div>
                         <FaCheckCircle className="text-[#7dc142] mb-2" size={24} />
                        <h3 className="font-bold text-slate-900 tracking-tigher mb-1">Ai pofte de dulce</h3>
                        <p className="font-medium text-slate-700">Pe care nu reușești să le controlezi</p>
                   
                </div>
                <div>
                         <FaCheckCircle className="text-[#7dc142] mb-2" size={24} />
                        <h3 className="font-bold text-slate-900 tracking-tigher mb-1"   >Energia fluctuează</h3>
                        <p className="font-medium text-slate-700">Urcări și căderi dramatice în zi</p>
                    
                </div>
                <div>
                        <FaCheckCircle className="text-[#7dc142] mb-2" size={24} />
                        <h3 className="font-bold text-slate-900 tracking-tigher mb-1">Vrei să slăbești</h3>
                        <p className="font-medium text-slate-700">Dar dietele restrictive nu funcționează</p>
                    
                </div>
            </div>
              </div>
          
        </section>
        </>
    )
}