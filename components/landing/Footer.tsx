"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <>
        {/* FOOTER & CTA FINAL[cite: 1] */}
     <footer className="flex flex-col  gap-4 items-center justify-center py-10 border-t border-white/5 text-center bg-slate-950 text-slate-200 uppercase font-medium text-sm">
        <p>© {new Date().getFullYear()} Active Boost. Toate drepturile rezervate.</p>

        <div className="flex items-center  ">
            <Link href='https://www.anpc.ro/'>
             <Image src="/anpc.webp" alt="ANPC Logo" width={200} height={24} className="mx-auto " /></Link>
            <Link href='https://www.litigi.ro/'>
            <Image src="/litigi.webp" alt="Litigi Logo" width={200} height={24} className="mx-auto " />
            </Link>
           
            

        </div>
      </footer>
        </>
    )
}