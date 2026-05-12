"use client"

import Link from "next/link";
import Footer from "@/components/landing/Footer"
import { motion } from "framer-motion"
import { Mail, Zap, Trophy, Check, ArrowRight } from "lucide-react"


export default function ThankYouPage() {
    const steps = [
        {
            icon: Mail,
            number: "1",
            title: "Ghidul tău e în drum spre inbox!",
            description: "Verifică-ți emailul în 2-3 minute — vei găsi butonul de descărcare pentru ambele ghiduri",
            warning: "Nu uita să verifici și folderul Spam/Promotions dacă nu îl vezi în Inbox."
        },
        {
            icon: Zap,
            number: "2",
            title: "Nu aștepta! Începe transformarea ACUM",
            description: "Deschide ghidul și aplică primul hack chiar azi. Rezultatele apar în câteva zile — nu săptămâni."
        },
        {
            icon: Trophy,
            number: "3",
            title: "Hai să sărbătorim victoria!",
            description: "Ai făcut pasul pe care mulți îl amână. Fii mândru/ă de asta!",
            extra: "Fă un screenshot acestei pagini și pune-l pe Story cu tag-ul @active.boost"
        }
    ]

    const services = [
        "Reels & TikToks cu experți din nișa ta",
        "Postări și administrare social media",
        "Creare website sau landing page",
        "Management complet — tu te ocupi de business, noi de online"
    ]

    return (
        <div className="font-opensans min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="py-16 px-6 text-center border-b border-white/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-950 mb-4">
                            Felicitări! 🎉
                        </h1>
                        <p className="text-xl text-slate-700 mb-2">
                            Comanda ta a fost preluată cu succes!
                        </p>
                        <p className="text-lg text-gray-600">
                            Mă bucur că ai ales să investești în energia ta. Ești oficial în comunitatea <span className="font-bold text-[#7dc142]">Active Boost!</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="pb-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-[#7dc142] font-bold text-xs uppercase tracking-widest mb-6">Ce trebuie să faci acum?</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="border border-gray-300 rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="bg-[#7dc142] p-3 rounded-lg text-white flex-shrink-0">
                                            <Icon size={24} />
                                        </div>
                                        <div className="bg-[#7dc142] text-white font-bold text-lg rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                                            {step.number}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-950 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3">
                                        {step.description}
                                    </p>
                                    {step.warning && (
                                        <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg mb-3">
                                            ⚠️ {step.warning}
                                        </p>
                                    )}
                                    {step.extra && (
                                        <p className="text-sm text-[#7dc142] font-medium">
                                            📸 {step.extra}
                                        </p>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-6 bg-slate-950 border-y border-white/5">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-[#7dc142] font-bold text-xs uppercase tracking-widest mb-4">Lucrezi cu conținut sau ai un business?</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 uppercase tracking-tighter">
                            Hai să lucrăm împreună
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Echipa din spatele Active Boost creează și administrează prezența online a business-urilor din 2023. Dacă îți place ce vezi pe Active Boost și vrei același tip de conținut pentru nișa ta — noi ne ocupăm de tot:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <div className="bg-[#7dc142] rounded-full p-2 flex-shrink-0">
                                    <Check size={16} className="text-slate-950" />
                                </div>
                                <p className="text-white">{service}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="https://idtoro.vercel.app" target="_blank">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#7dc142] text-slate-950 font-bold py-4 px-8 rounded-lg hover:bg-[#8ee04b] transition-colors flex items-center gap-2 mx-auto shadow-lg"
                            >
                                Vezi portofoliul și rezultatele
                                <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}