"use client"

import Image from "next/image"

export default function PovestePage() {
    return (
        <>
  {/* SECTIUNEA POVESTE: Brand personal și empatie[cite: 1] */}
      <section className="py-24 bg-slate-950 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 p-8 rounded-[2rem] border border-white/5 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-40 h-52 bg-[#2a2a2a] rounded-2xl flex-shrink-0 border border-white/10 flex items-center justify-center italic text-gray-600">
            <Image className='rounded-2xl' src="/first.webp" alt="Adrian" width={160} height={208} />
          </div>
          <div >
            <h3 className="text-2xl font-bold mb-4 italic text-[#7dc142]">De ce am creat acest ghid</h3>
            <p className="text-gray-200 font-bold italic">"Ani la rând mă simțeam obosit tot timpul — deși dormeam 7-8 ore pe noapte."</p>
<p className="text-gray-200 text-sm italic">La ora 12-1 îmi venea să dorm. Consumam dulciuri după fiecare masă, energia îmi era la pământ, kilogramele se acumulau și nicio dietă nu ținea mai mult de câteva zile. <br/><br/>Credeam că trebuia să dorm mai mult și că programul încărcat era problema.
Până când am descoperit că problema nu era programul încărcat — ci glicemia.
Postând conținut pentru Active Boost, am dat peste cercetările lui Jessie Inchauspé (Glucose Goddess) și instant m-am identificat cu fiecare simptom descris. <br/><br/>Am înțeles cum funcționează spike-ul glicemic și de ce corpul meu reacționa așa. Am aplicat cele 10 hack-uri și în câteva zile poftele s-au diminuat, energia a revenit și mă simțeam din nou în control.
A fost o revelație — ceva atât de simplu cu un impact atât de mare în viața de zi cu zi.
Am creat acest ghid ca să îți ofer soluția reală la probleme pe care le-am avut și eu.
</p>
            <p className="mt-4 text-slate-100 font-bold">— Adrian, Fondator Active Boost {/*[cite: 1] */}</p>
          </div>
        </div>
      </section>
        </>
    )
}