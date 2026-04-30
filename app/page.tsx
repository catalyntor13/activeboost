import BeneficiiSection from "@/components/landing/Beneficii";
import CTASection from "@/components/landing/CTA";
import CuriculumPage from "@/components/landing/Curiculum";
import Footer from "@/components/landing/Footer";
import HeroPage from "@/components/landing/Hero";
import PovestePage from "@/components/landing/Poveste";

 

export default function Home() {

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-200 font-jakarta">
      <HeroPage />
      <BeneficiiSection />
      <CuriculumPage />
      <PovestePage />
      <CTASection />
      <Footer/>
    </div>
  );
}
