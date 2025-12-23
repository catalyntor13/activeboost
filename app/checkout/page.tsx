'use client'; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, Controller } from "react-hook-form"  
import Image from "next/image"
import { Loader2Icon } from 'lucide-react';
import Link from 'next/link';
import { FaCheckCircle } from "react-icons/fa";

import { Checkbox } from "@/components/ui/checkbox"

export default function CheckoutPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
 

  // Validare Date Nume si Email cu Zod

  const registerSchema = z.object({
    nume: z.string().min(2, "Numele este obligatoriu (min. 2 caractere)"),
    email: z.string().email("Te rugăm să introduci un email valid"),
    adresa_client: z.string().min(2, "Adresa dumneavostra e obligatorie"),
    terms: z.boolean().refine(val => val === true, {
    message: "Trebuie să fii de acord cu termenii și condițiile pentru a continua."
  }),

  })

  // Infer the type from the schema
type RegisterFormValues = z.infer<typeof registerSchema>

 // Datele produsului (de obicei, acestea vin din context sau props)
  const product = {
    id: 'prod_digital_1',
    description: '10 Hack-uri Simple Pentru o Glicemie Stabilă + Ebook: Arta Hidratarii ',
    amount: '49.00', // ATENȚIE: String cu 2 zecimale
  };

 // Initam react hook form si zod
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nume: "",
      email: "", 
      adresa_client: "",
      terms: false, // <-- VALOAREA IMPLICITĂ
    },
  })

 

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    setError(null);

    try {
      const response = await fetch('/api/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.nume,
          email: data.email,
          addresa: data.adresa_client,
          amount: product.amount,
          description: product.description,
          productId: product.id,
        }),
      });
      
      if(!response) {
        throw new Error('Eroare la crearea comenzii pe server');
      }

      const result = (await response.json()) as { checkoutUrl ?: string; error?: string};

      if(result.checkoutUrl) {
        router.push(result.checkoutUrl);
      } else {
        setError(result.error || 'Nu am primit URL de checkout');
      }
 
    } catch (err) {
      setError(err instanceof Error ? err.message: "O erroare necunoscuta");
    }

  }

   return (
      <>
        <div className="lg:w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start my-10">
                <div className="p-5 lg:p-0">
                    <Image className="mx-auto" src='/checkoutfoto.webp' alt="Checkout Photo" width={600} height={600} />
                      
                      <p className="font-sans text-center text-2xl my-5">Valoare Totală: <span className="text-red-500 font-bold line-through">149 RON</span></p>
  

                    <div className="text-center font-bold font-sans text-2xl">
                       <h2>🔥 Prețul Tău Azi </h2>
                       <h2>(Ofertă Limitată): <span className="text-[#8ecb40]">{product.amount} RON!</span></h2>
                    </div>

                    <div className="my-5 text-lg font-opensans">
                        <h2 className="font-bold  font-opensans mb-3 text-xl">Sumarul Comenzii:</h2>
                         <div className='flex items-start lg:items-center'>
                          <FaCheckCircle className="text-[#8ecb40] lg:text-xl text-3xl mr-2 " />
                           <p className="font-bold">  Ghidul Principal: <span className="text-[#8ecb40] mx-1">"10 Hack-uri Simple Pentru o Glicemie Stabilă" </span></p>
                        
                         </div>
                        <p>Planul tău complet, pas cu pas, pentru a prelua controlul asupra energiei și a poftelor.</p>

                    </div>
                    
                     <div className="my-5 text-lg font-opensans">
                        <h2 className="font-bold mb-3 text-xl">Bonusul Gratuit:</h2>
                         <p className="font-bold flex items-start"><FaCheckCircle className="text-blue-400 text-xl  rounded-full flex-none mt-1 mr-2" />Mini-Ghidul: <span className="text-blue-400 mx-1">"Arta Hidratării" </span></p>
                         <p>Ghidul tău practic pentru a-ți optimiza hidratarea, un element cheie pentru un metabolism sănătos.</p>
                    </div>
                </div>
                <div className="w-sm">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="border-2 border-solid rounded-md p-6">
                        <h2 className="text-blue-400 font-semibold font-sans text-center">Unde Îți Trimitem Ghidul?</h2>
                        <h3 className="text-xs font-extralight font-sans text-center mb-4">Acces pe Viață (Plată Unică)</h3>
                          
                          <div className="flex flex-col gap-3">
                        <input 
                           {...register('nume')}
                        className={ errors.email? "border-2 border-solid p-2 rounded-md border-red-500" : "border-2 border-solid p-2 rounded-md"} type="text" name="nume" placeholder="Numele Tau..."></input>

                              {/* Errori Mesaje */}

                               {errors.nume && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                 
                  {errors.nume.message}
                </p>
              )}
     {/* Errori Mesaje */}
                        <input 
                         {...register('email')}
                        className={ errors.email? "border-2 border-solid p-2 rounded-md border-red-500" : "border-2 border-solid p-2 rounded-md"} type="email" name="email" placeholder="Adresa de Email.."></input>

                             {/* Errori Mesaje */}

                               {errors.email && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                 
                  {errors.email.message}
                </p>
              )}
                      

                          <div className="flex items-center mt-4">
    {/* Textul - Lățime minimă, dar nu se extinde */}
    <div className="uppercase text-sm font-sans font-semibold text-[#4b4c4b] whitespace-nowrap pr-2">
        Date facturare
    </div>
    
    {/* Linia - Ocupă tot spațiul rămas (flex-1) */}
    <div className="border-t border-gray-300 w-full flex-1"></div>
</div>
                   <input 
                           {...register('adresa_client')}
                        className={ errors.adresa_client? "border-2 border-solid p-2 rounded-md border-red-500" : "border-2 border-solid p-2 rounded-md"} type="text" name="adresa_client" placeholder="Adresa dumneavoastra"></input>

                              {/* Errori Mesaje */}


                               {errors.adresa_client && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                 
                  {errors.adresa_client.message}
                </p>
              )}
     {/* Errori Mesaje */}

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
             <div className="w-1/5 text-right text-sm font-semibold text-blue-700 leading-tight">
                <span className="block">RON</span>
                <span className="block">49.00</span>
            </div>
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
<div className="flex flex-col justify-center">
    
        <button type='submit' className='p-2 w-full cursor-pointer hover:bg-green-400 bg-[#8ecb40] font-bold' disabled={isSubmitting}>
          {isSubmitting ? <Loader2Icon className="animate-spin"> Se proceseaza </Loader2Icon> : 'Plătește Acum'}
        </button>
         <p className="text-[11px] my-2 text-center font-sans font-extralight">Achiziție 100% Sigură și Garantată. Primești eBook-ul pe email în 2 minute.</p>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
</div>
<div className="flex items-start my-5 gap-2 ">
  <Controller name='terms' control={control} render={({ field}) => (

    <Checkbox  className={errors.terms? 'mt-1 border-2 border-red-400' : 'mt-1 border-2 border-gray-400'}
     checked={field.value}
     onCheckedChange={field.onChange}

    />
    
  )} />
    
    
    <p className=" font-opensans text-[14px] ">Am citit și sunt de acord cu <Link href='/termeni_si_conditii' className='text-blue-500 underline'>Termenii și Condițiile </Link>și cu <Link className='text-blue-500 underline' href="/politica_de_confidentialitate">Politica de Confidențialitate</Link> a site-ului.</p>


    
</div>

{errors.terms && (
                <p className="text-sm text-center text-red-500 flex items-center gap-1">
                 
                  {errors.terms.message}
                </p>
              )}
{error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}


                        
                    </div>
                    </form>
                </div>
            </div>
        </div>
      </>
    )
}