import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import BeneficiiSection from "@/components/landing/BeneficiiSection";
import CumSeIntegreaza from "@/components/landing/CumSeIntegreaza";
import FaqSection from "@/components/landing/FaqSection";
import IngredienteSection from "@/components/landing/IngredienteSection";
import OfertaSection from "@/components/landing/OfertaSection";
import Footer from "../components/landing/Footer";


 

export default function Home() {

  return (
    <div className="min-h-screen bg-background font-jakarta">
       <Header/>
      <HeroSection/>
      <BeneficiiSection/>
      <IngredienteSection/>
      <CumSeIntegreaza/>
      <OfertaSection/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}
