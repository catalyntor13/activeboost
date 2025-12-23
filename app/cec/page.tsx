"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Check, ShieldCheck, Lock, Gift, Truck } from "lucide-react"

const CheckoutPage = () => {
  // State pentru aroma selectată
  const [selectedFlavor, setSelectedFlavor] = useState<string>("vanilie")

  // Lista de arome disponibile
  const flavors = [
    { id: "vanilie", name: "Vanilie Fină" },
    { id: "ciocolata", name: "Ciocolată Delicioasă" },
    { id: "capsuni", name: "Căpșuni Proaspete" },
    { id: "biscuiti", name: "Biscuiți & Frișcă" },
  ]

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-3xl font-bold text-center mb-10 text-foreground">
          Finalizează Comanda
        </h1>

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
                      onClick={() => setSelectedFlavor(flavor.name)}
                      className={`
                        cursor-pointer rounded-xl border-2 p-4 flex items-center justify-between transition-all duration-200
                        ${selectedFlavor === flavor.name 
                          ? "border-[#8ecb40] bg-[#8ecb40]/5 shadow-sm" 
                          : "border-border hover:border-muted-foreground/30 bg-background"}
                      `}
                    >
                      <span className="font-medium text-sm">{flavor.name}</span>
                      {selectedFlavor === flavor.name && (
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
                    <Input id="firstName" placeholder="Ion" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nume</Label>
                    <Input id="lastName" placeholder="Popescu" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ion@exemplu.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" type="tel" placeholder="07xx xxx xxx" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Adresa completă</Label>
                  <Input id="address" placeholder="Strada, Număr, Bloc, Scara..." />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Localitate</Label>
                    <Input id="city" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="county">Județ</Label>
                    <Input id="county" />
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
                    <div className="relative w-20 h-24 bg-muted rounded-lg overflow-hidden shrink-0 border border-border">
                       <Image 
                         src="/formula1s.png" 
                         alt="Produs" 
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
                        Aromă: {selectedFlavor}
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
                  <Button 
                    className="w-full h-14 text-lg font-bold bg-[#8ecb40] hover:bg-[#8ecb40]/90 shadow-xl shadow-[#8ecb40]/20"
                  >
                    Plătește în Siguranță
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
      </div>
    </div>
  )
}

export default CheckoutPage