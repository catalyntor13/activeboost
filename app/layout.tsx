import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Plus_Jakarta_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
})

const Jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"]
})


const OpenSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: 'Start Activ - Micul Dejun Nutritiv la doar 215 Calorii | Active Boost',
  description: "Descoperă Start Activ: Micul dejun gustos și super nutritiv, bogat în proteine, fibre, vitamine și minerale. Tot ce are nevoie corpul tău într-o singură masă delicioasă in doar 215 calorii. Optimizează-ți sănătatea de la prima oră. Află mai multe!",
  keywords: ["Active Boost Romania", "Start Activ mic dejun", "Protocol Start Activ", "Produse Active Boost", "mic dejun nutritiv", "shake proteic slabit", "inlocuitor de masa sanatos", "mic dejun bogat in proteine si fibre", "suplimente vitamine si minerale mic dejun", "Welness", "shake nutritiv 200 calorii", "ce sa mananci la micul dejun ca sa ai energie", "mic dejun rapid pentru oameni ocupati", "cum sa slabesti fara sa iti fie foame dimineata", "mic dejun pentru energie si concentrare", "cel mai bun shake proteic pentru digestie", "mic dejun fara zahar adaugat", "cum sa controlezi glicemia la micul dejun", "optimizare metabolica mic dejun", "biohacking romania nutritie", "hrana pentru creier dimineata", "longevitate prin nutritie", "sanatatea microbiomului mic dejun"],
  authors: [{ name: "Active Boost" }],
  openGraph: {
    title: "Start Activ - Micul Dejun Nutritiv la doar 215 Calorii | Active Boost",
    description: "Descoperă Start Activ: Micul dejun gustos și super nutritiv, bogat în proteine, fibre, vitamine și minerale. Tot ce are nevoie corpul tău într-o singură masă delicioasă in doar 215 calorii. Optimizează-ți sănătatea de la prima oră. Află mai multe!",
    url: "https://www.activeboost.ro/",
    siteName: "Active Boost",
    images: [
      {
        url: "https://www.activeboost.ro/logo.png",
        width: 1200,
        height: 630,
        alt: "Active Boost"
      }
    ],
    locale: "ro_RO",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${DancingScript.variable} ${Jakarta.variable} ${OpenSans.variable} antialiased`}
      >
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
