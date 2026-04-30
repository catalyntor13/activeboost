"use client"

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Play, 
  Layers, 
  Zap, 
  Smartphone, 
  Video, 
  Clock, 
  Check,
  Send,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

// Culori noi: Background: #0a0a0a | Accent: #bef264 (Lime deschis)

const AccentBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 bg-[#bef264]/10 text-[#bef264] text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-[#bef264]/20 mb-8">
    <div className="w-1.5 h-1.5 rounded-full bg-[#bef264] animate-pulse" />
    {children}
  </div>
);

const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-[#111] border border-white/5 p-8 rounded-3xl hover:border-[#bef264]/30 transition-all group"
  >
    <div className="w-12 h-12 bg-[#bef264] text-black rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default function VideoServiceLanding() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans">
      <Head>
        <title>Edit Pro | Servicii de Editare Video Premium</title>
      </Head>

      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-[#bef264] font-black text-2xl tracking-tighter italic">EDIT.PRO</div>
          <button className="bg-[#bef264] text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-[#d9f99d] transition-colors">
            CERE OFERTĂ
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#bef264]/10 blur-[120px] -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AccentBadge>Disponibil pentru proiecte noi</AccentBadge>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[0.9]">
              VIDEO EDITING <br />
              <span className="text-[#bef264] italic underline decoration-white/10">CARE CONVERTEȘTE</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Transformăm filmările tale brute în conținut viral de înaltă calitate. Specializați în YouTube, Reels și Reclame Performante.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="w-full md:w-auto bg-[#bef264] text-black px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(190,242,100,0.4)] transition-all">
                VEZI SHOWREEL <Play size={20} fill="currentColor" />
              </button>
              <button className="w-full md:w-auto bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                Pachete Servicii
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Mockup */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video bg-[#111] rounded-[2rem] border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity">
               <h3 className="text-2xl font-bold text-white">Showreel 2024</h3>
               <p className="text-[#bef264]">Visual Storytelling & Motion Graphics</p>
            </div>
            <Play size={80} className="text-[#bef264] opacity-50" />
            {/* Aici ar veni playerul video */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Smartphone}
              title="Short-Form Content"
              desc="Reels, TikTok și Shorts optimizate pentru retenție maximă și algoritmi."
            />
            <ServiceCard 
              icon={Video}
              title="YouTube Mastery"
              desc="Editare long-form cu storytelling avansat, color grading și sound design."
            />
            <ServiceCard 
              icon={Zap}
              title="Video Ads"
              desc="Reclame dinamice create special pentru a genera vânzări și click-uri."
            />
          </div>
        </div>
      </section>

      {/* Process / Workflow */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16">CUM LUCRĂM?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {[
              { step: "01", title: "Upload", icon: <Send /> },
              { step: "02", title: "Magic", icon: <Layers /> },
              { step: "03", title: "Delivery", icon: <Check /> }
            ].map((item, i) => (
              <div key={i} className="relative z-10">
                <div className="w-20 h-20 bg-[#111] border border-[#bef264]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#bef264]">
                  {item.icon}
                </div>
                <span className="text-[#bef264] font-mono font-bold text-sm">{item.step}</span>
                <h4 className="text-white text-xl font-bold mt-2">{item.title}</h4>
              </div>
            ))}
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-20 right-20 h-[1px] bg-white/5 -z-0" />
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#111] to-[#050505] p-12 md:p-20 rounded-[3rem] border border-white/5 text-center relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#bef264]/5 blur-[80px] rounded-full" />
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">GATA SĂ FACEM <br/> CEVA EPIC?</h2>
          <p className="text-gray-400 mb-10 text-lg">Pachete începând de la 499€ / lună</p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#bef264] text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
              REZERVĂ UN CALL <Clock size={20} />
            </button>
            <button className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
              WHATSAPP <ExternalLink size={20} />
            </button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Color Grading', 'Sound Design', 'Motion FX', 'Thumbnails'].map((tag) => (
              <div key={tag} className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <Check size={14} className="text-[#bef264]" /> {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="text-[#bef264] font-black text-xl italic">EDIT.PRO</div>
        <div className="flex gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-[#bef264] transition-colors">Portofoliu</a>
          <a href="#" className="hover:text-[#bef264] transition-colors">Servicii</a>
          <a href="#" className="hover:text-[#bef264] transition-colors">Contact</a>
        </div>
        <div className="text-gray-600 text-xs tracking-widest uppercase">
          © 2024 Creat pentru performanță
        </div>
      </footer>
    </div>
  );
}