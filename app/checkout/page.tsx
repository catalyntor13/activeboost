"use client"
import Image from "next/image"

import { FaCheckCircle } from "react-icons/fa";

import { Checkbox } from "@/components/ui/checkbox"


export default function CheckoutPage() {
    return (

       <div>
        <div className="lg:w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start my-10">
                <div className="p-5 lg:p-0">
                    <Image className="mx-auto" src='/checkoutfoto.webp' alt="Checkout Photo" width={600} height={600} />
                      
                      <p className="font-sans text-center text-2xl my-5">Valoare Totală: <span className="text-red-500 font-bold line-through">148 RON</span></p>
  

                    <div className="text-center font-bold font-sans text-2xl">
                       <h2>🔥 Prețul Tău Azi </h2>
                       <h2>(Ofertă Limitată): <span className="text-green-400">49 RON!</span></h2>
                    </div>

                    <div className="my-5 text-lg font-sans">
                        <h2 className="font-bold  font-sans mb-3 text-xl">Sumarul Comenzii:</h2>

                        <p className="font-bold flex"> <FaCheckCircle className="text-green-400 text-xl flex-none mt-1 mr-2" /> Ghidul Principal: <span className="text-green-400 mx-1"> "10 Hack-uri Simple Pentru o Glicemie Stabilă" </span></p>
                        <p>Planul tău complet, pas cu pas, pentru a prelua controlul asupra energiei și a poftelor.</p>

                    </div>
                     <div className="my-5 text-lg font-sans">
                        <h2 className="font-bold mb-3 text-xl">Bonusul Gratuit:</h2>
                         <p className="font-bold flex items-start"><FaCheckCircle className="text-blue-400 text-xl  rounded-full flex-none mt-1 mr-2" />Mini-Ghidul: <span className="text-blue-400 mx-1">"Arta Hidratării" </span></p>
                         <p>Ghidul tău practic pentru a-ți optimiza hidratarea, un element cheie pentru un metabolism sănătos.</p>
                    </div>
                </div>
                <div className="w-sm">
                    <div className="border-2 border-solid rounded-md p-6">
                        <h2 className="text-blue-400 font-semibold font-sans text-center">Unde Îți Trimitem Ghidul?</h2>
                        <h3 className="text-xs font-extralight font-sans text-center mb-4">Acces pe Viață (Plată Unică)</h3>
                          
                          <div className="flex flex-col gap-3">
                        <input className="border-2 border-solid p-2 rounded-md" type="text" name="yourname" placeholder="Numele Tau..."></input>
                        <input className="border-2 border-solid p-2 rounded-md" type="email" name="youremail" placeholder="Adresa de Email.."></input>
                        </div>

                        <div className="flex items-center mt-4">
    {/* Textul - Lățime minimă, dar nu se extinde */}
    <div className="uppercase text-sm font-sans font-semibold text-[#4b4c4b] whitespace-nowrap pr-2">
        Detalii de Plata
    </div>
    
    {/* Linia - Ocupă tot spațiul rămas (flex-1) */}
    <div className="border-t border-gray-300 w-full flex-1"></div>
</div>

                        <div className="mx-auto bg-white p-4">
    {/* Sectiunea 1: Articole de baza (de deasupra) */}
    <div>
        {/* Titluri */}
        <div className="flex justify-between font-semibold border-b-2 border-solid text-gray-700 mb-2">
            <span className="w-3/5 text-[#4b4c4b]">Produs</span>
            <span className="w-1/5 text-right">Quantity</span>
            <span className="w-1/5 text-right pr-1">Preț</span>
        </div>
        {/* Produsul 1 */}
        <div className="flex justify-between items-start pt-1">
            <div className="w-3/5 flex items-center">
                {/* Aici ar fi input-ul radio, l-am simulat cu un cerc */}
                <span className="w-4 h-4 rounded-full border-4 border-blue-500 bg-white mr-2 flex-shrink-0"></span>
                <p className="font-bold text-sm leading-tight">10 Hack-uri Simple Pentru o Glicemie Stabilă</p>
            </div>
            <span className="w-1/5 text-right text-sm">1</span>
            <span className="w-1/5 text-right font-semibold text-blue-700 text-sm">RON49.00</span>
        </div>
    </div>

    {/* Order Summary / Subtotal */}
    <div className="border-b border-gray-300 pt-3 pb-3 mb-3 ">

        <div className="flex items-center my-2">
    {/* Linia din Stânga - Ocupă jumătate din spațiul rămas */}
    <div className="border-t border-gray-300 w-full flex-1"></div>

    {/* Textul - Centrat și separat de linii prin padding */}
    <h3 className="text-center font-semibold text-gray-600 mx-4 whitespace-nowrap">
        Order Summary
    </h3>
    
    {/* Linia din Dreapta - Ocupă jumătate din spațiul rămas */}
    <div className="border-t border-gray-300 w-full flex-1"></div>
</div>
        {/* Titluri Order Summary */}
        <div className="flex justify-between font-semibold text-gray-700 mb-2 border-b-2 border-solid">
            <span className="w-3/5">Produs</span>
            <span className="w-1/5 text-right">Quantity</span>
            <span className="w-1/5 text-right">Suma</span>
        </div>
        
        {/* Detalii Produs Order Summary */}
        <div className="flex justify-between pt-1">
            <p className="w-3/5 text-sm">10 Hack-uri Simple Pentru o Glicemie Stabilă</p>
            <span className="w-1/5 text-right text-sm">1</span>
            <div className="w-1/5 text-right text-sm font-semibold text-blue-700 leading-tight">
                <span className="block">RON</span>
                <span className="block">49.00</span>
            </div>
        </div>
    </div>
    
    {/* Order Total */}
    <div className="flex justify-between font-bold text-lg pt-2">
        <span>Order Total</span>
        <span className="text-blue-700">RON49.00</span>
    </div>
</div>                    
<div className="flex justify-center">
    <button className="border-2 border-solid w-2/4 cursor-pointer bg-green-500 text-white font-bold">Plateste</button>
</div>
<div className="flex items-start my-5 gap-2 ">
    <Checkbox className="mt-1"/>
    <p className=" font-sans text-[14px] ">Am citit și sunt de acord cu Termenii și Condițiile și cu Politica de Confidențialitate a site-ului.</p>
</div>

<p className="text-xs text-center font-sans font-extralight">Achiziție 100% Sigură și Garantată. Primești eBook-ul pe email în 2 minute.</p>
                        
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}