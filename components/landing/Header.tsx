"use client"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
const Header = () => {

  const [open, isOpen] = useState(false)

const navItems = [
  { name: 'Beneficii', href: "#beneficii"},
  { name: 'Nutritie', href: "#nutritie"},
  { name: 'FAQ', href: "#faq"},
  { name: 'Oferta', href: "#oferta"},
]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between mx-5 lg:mx-0 ">
            <div className="flex items-center gap-2">
              <Image width={130} height={130} alt="Active Boost - Logo" src='/logo.png'>
                  
              </Image>
            </div>
              
                {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
           { navItems.map((navItem) =>(

            <div>
            <a href={navItem.href} className="text-slate-900 font-medium hover:text-slate-500 cursor-pointer" key={navItem.name}>
              {navItem.name}
            </a>
               
 
              </div>
           ) )}
               <Link href='/checkout'>
              <Button className="bg-[#8ecb40] hover:bg-[#8ecb40]/80 text-primary-foreground cursor-pointer shadow-lg shadow-primary/20">
                Comandă acum
              </Button>
              </Link>
        </nav>
        

  {/* Desktop Nav */}

   
                 {/* Mobile Nav */}
    <Sheet open={open} onOpenChange={isOpen}>
  <SheetTrigger className="lg:hidden ">
    { open ? <X/> : <Menu/> }
  </SheetTrigger>
  <SheetContent className="bg-[#8ecb40]" side="left">
   <nav className="lg:hidden flex flex-col items-center gap-6 my-10 ">
           { navItems.map((navItem) =>(
            <a href={navItem.href} onClick={() => {isOpen(false)}} className="text-slate-100 text-xl font-semibold" key={navItem.name}>
              {navItem.name}
            </a>
           ) )}

           <Link href='/checkout'>
              <Button className="bg-primary font-semibold hover:bg-[#8ecb40]/80 text-primary-foreground cursor-pointer shadow-lg shadow-primary/20">
                Comandă acum
              </Button>
              </Link>
        </nav>
  </SheetContent>
</Sheet>
      </div>
      
     {/* Mobile Nav */}
          
        </div>
      </header>
    </>
  )
}

export default Header