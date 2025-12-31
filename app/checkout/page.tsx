'use client'; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler} from "react-hook-form"  
import Image from "next/image"
import { Loader2Icon } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Check, ShieldCheck, Lock, Gift, Truck } from "lucide-react"

const CheckoutPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  // 1. Creare schema

  const paymentSchema = z.object({
    firstName: z.string().min(2, "Prenumele este obligatoriu"),
    lastName: z.string().min(2, "Numele este obligatoriu"),
    email: z.string().email("Te rugăm să introduci un email valid"),
    adresa: z.string().min(5, "Adresa e prea scurta"),
    localitate: z.string().min(2, "Localitatea este obligatorie"),
    judet: z.string().min(2, "Judetul este obligatoriu"),
    phone: z.string().min(10, 'Telefon Invalid'),
    flavor: z.string().min(1, "Te rugăm să alegi o aromă"),
    
  })


  // 2. Transformam in typescript

  type paymentSchemaValues = z.infer<typeof paymentSchema>

  // 3. Detalii produs

   const product = {
    id: "Mic Dejun Start Active",
    description: 'desciere Program Start active',
    amount: '520.00'
   }

  // Lista de arome disponibile
  const flavors = [
    { id: "banana", name: "Banana" },
    { id: "capsuna", name: "Capsuna" },
    { id: "caffe latte", name: "Cafe Latte" },
    { id: "vanilie", name: "Vanilie" },
    { id: "fursecuri", name: "Fursecuri" },
    { id: "ciocolata fina", name: "Ciocolata Fina" },
    { id: "ciocolata alba zmeura", name: "Zmeura si Ciocolata Alba" },
    { id: "ciocolata si menta", name: "Ciocolata si Menta" },
  ]

  // 4. Initiem zod si hook form

  const { register, 
    handleSubmit, 
    setValue, 
    watch,
    formState : {errors, isSubmitting} ,} 
    = useForm<paymentSchemaValues>({ resolver: zodResolver(paymentSchema), 
    defaultValues: {
    firstName: "",
    lastName: "",
    email: "",
    adresa: "",
    localitate: "",
    judet: "",
    phone: "",
    flavor: "Vanilie",
    }
  })

  // "Ascultăm" valoarea din hook-form în loc să folosim un useState separat
const currentFlavor = watch("flavor");

// 5. Functia de onSubmit

const onSubmit: SubmitHandler<paymentSchemaValues> = async (data) => {
  setError(null);

  try {
    const response = await fetch ('/api/orders/create', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });

     if(!response.ok) throw new Error('Eroare la crearea comenzii');

     const result = await response.json();

     // Mollie checkout URL
    if (result.checkoutUrl) {
      router.push(result.checkoutUrl);
    } else {
        setError(result.error || 'Nu am primit URL de checkout');
      }

  } catch (error) {
    setError("A apărut o problemă. Te rugăm să încerci din nou.");
  }
}


  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-3xl font-bold text-center mb-10 text-foreground">
          Finalizează Comanda
        </h1>
     <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* --- LEFT COLUMN: Form & Customization (7 Cols) --- */}
          <div className="lg:col-span-7 space-y-8">
             
            {/* 1. Alegerea Aromei */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8ecb40] text-white text-sm font-bold">1</span>
                  Alege Aroma Preferată
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {flavors.map((flavor) => (
                    <div
                      key={flavor.id}
                      // Când dai click, trimiți valoarea direct în formularul Zod
                      onClick={() => setValue("flavor", flavor.name, {shouldValidate: true})}
                      className={`
                        cursor-pointer rounded-xl border-2 p-3 flex items-center justify-between transition-all duration-200
                        ${currentFlavor === flavor.name 
                          ? "border-[#8ecb40] bg-[#8ecb40]/5 shadow-sm" 
                          : "border-border hover:border-muted-foreground/30 bg-background"}
                      `}
                    >
                      <span className="font-medium text-sm">{flavor.name}</span>
                      {currentFlavor === flavor.name && (
                        <div className="w-5 h-5 bg-[#8ecb40] rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 2. Date Livrare & Facturare */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold">2</span>
                   Detalii Livrare
                </CardTitle>
              </CardHeader>
             
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prenume</Label>
                    <Input  {...register('firstName')} name='firstName' type='text' placeholder="Ion" />
                    {errors.firstName && <span className="text-xs text-red-500">{errors.firstName.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nume</Label>
                    <Input {...register('lastName')} name='lastName' placeholder="Popescu" />
                    {errors.lastName && <span className="text-xs text-red-500">{errors.lastName.message}</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input  {...register('email')} type="email" name='email' placeholder="ion@exemplu.com" />
                   
                   {errors.email && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                 
                  {errors.email.message}
                </p>
              )}
                </div>

                

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input  {...register('phone')} name='phone'  type="tel" placeholder="07xx xxx xxx" />
                  {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Adresa completă</Label>
                  <Input {...register('adresa')} name='adresa' placeholder="Strada, Număr, Bloc, Scara..." />
                  {errors.adresa && <span className="text-xs text-red-500">{errors.adresa.message}</span>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Localitate</Label>
                    <Input  {...register('localitate')} name='localitate' />
                    {errors.localitate && <span className="text-xs text-red-500">{errors.localitate.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="county">Județ</Label>
                    <Input {...register('judet')} name='judet' />
                    {errors.judet && <span className="text-xs text-red-500">{errors.judet.message}</span>}
                  </div>
                </div>
              </CardContent>
            </Card>
         
          </div>

          {/* --- RIGHT COLUMN: Order Summary (5 Cols) --- */}
          <div className="lg:col-span-5">
            <div className="sticky top-8">
              <Card className="border-2 border-[#8ecb40]/20 shadow-xl overflow-hidden">
                <div className="bg-[#8ecb40]/10 p-4 border-b border-[#8ecb40]/20">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                        <Lock className="w-4 h-4 text-[#8ecb40]" />
                        Rezumat Comandă
                    </h3>
                </div>
                
                <CardContent className="p-6 space-y-6">
                  {/* Produs Principal */}
                  <div className="flex gap-4">
                    <div className="relative w-20 h-24 bg-muted rounded-lg overflow-hidden shrink-0 ">
                       <Image 
                         src="/checkout_photo.jpeg" 
                         alt="Produs Start Activ Active Boost" 
                         fill 
                         className="object-contain p-1"
                       />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-foreground">Pachet Start Activ</h4>
                        <span className="font-bold">520 RON</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Cantitate: 1</p>
                      <span className="text-xs bg-[#8ecb40]/10 text-[#8ecb40] border-[#8ecb40]/20">
                        Aromă: {currentFlavor}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  {/* Bonusuri */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Bonusuri Incluse</p>

                    <div className="flex items-center justify-between group">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                             <Gift className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium">Lingură dozaj inclusă </span>
                       </div>
                       <span className="text-sm font-bold text-[#8ecb40]">CADOU</span>
                    </div>

                    <div className="flex items-center justify-between group">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                             <Gift className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium">Shaker Premium </span>
                       </div>
                       <span className="text-sm font-bold text-[#8ecb40]">CADOU</span>
                    </div>
                    
                    <div className="flex items-center justify-between group">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                             <Gift className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium">eBook: Hack-uri Glicemie</span>
                       </div>
                       <span className="text-sm font-bold text-[#8ecb40]">GRATIS</span>
                    </div>

                    <div className="flex items-center justify-between group">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                             <Gift className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium">eBook: Arta Hidratării</span>
                       </div>
                       <span className="text-sm font-bold text-[#8ecb40]">GRATIS</span>
                    </div>

                    <div className="flex items-center justify-between group">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                             <Truck className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium">Transport Rapid</span>
                       </div>
                       <span className="text-sm font-bold text-[#8ecb40]">GRATIS</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Total */}
                  <div className="flex items-center justify-between py-2">
                    <span className="text-lg font-medium text-muted-foreground">Total de plată</span>
                    <span className="text-3xl font-black text-foreground">520 RON</span>
                  </div>

                  {/* Buton Finalizare */}

                  {error && (
  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-4">
    ⚠️ {error}
  </div>
)}
                  <Button 
                  type='submit'
                    className="w-full cursor-pointer h-14 text-lg font-bold bg-[#8ecb40] hover:bg-[#8ecb40]/90 shadow-xl shadow-[#8ecb40]/20"
                  >
                     {isSubmitting ? <Loader2Icon className="animate-spin"> Se proceseaza </Loader2Icon> : 'Plătește in siguranta'}
                    <ShieldCheck className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground px-4">
                    Prin plasarea comenzii ești de acord cu termenii și condițiile noastre.
                  </p>

                </CardContent>
                
                {/* Footer cu Trust Badges */}
                <CardFooter className="bg-muted/30 p-4 border-t border-border flex justify-center gap-6 grayscale opacity-70">
                   {/* Poti pune aici imagini cu Visa/Mastercard, sau text */}
                   <span className="text-xs font-bold flex items-center gap-1"><Lock className="w-3 h-3"/> SSL Encrypted</span>
                   <span className="text-xs font-bold">30 Days Return</span>
                </CardFooter>
              </Card>
            </div>
          </div>

        </div>
        </form>
      </div>
    </div>
  )
}

export default CheckoutPage