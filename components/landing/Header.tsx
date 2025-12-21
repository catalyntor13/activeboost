"use client"
import { Button } from "@/components/ui/button"
const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              Acitveboost Logo
            </div>
            <nav className="hidden md:flex items-center  gap-8">
              <a
                href="#beneficii"
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                Beneficii
              </a>
              <a
                href="#nutritie"
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                Nutriție
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <a
                href="#faq"
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </a>
              <Button className="bg-[#8ecb40] hover:bg-[#8ecb40]/80 text-primary-foreground cursor-pointer shadow-lg shadow-primary/20">
                Comandă acum
              </Button>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header