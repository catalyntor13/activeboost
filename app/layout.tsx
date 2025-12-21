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
  title: 'Ghid "10 Hack-uri" pentru Glicemie Stabilă - Scapă de Pofte și Oboseală | Active Boost',
  description: "Descoperă 10 hack-uri simple bazate pe știință pentru a-ți stabiliza glicemia, a scăpa de pofta de dulce și a-ți recâștiga energia. Începe transformarea ta azi!",
  keywords: ["Stabilizarea glicemie", "Controlul glicemiei", "Scăderea glicemiei", "Hack-uri glicemie", "Echilibrare glicemică", "Ghid glicemie stabilă", "eBook nutriție", "Dieta Slabire", "Nutritie", "Welness"],
  authors: [{ name: "Activeboost" }],
  openGraph: {
    title: "Ghid 10 Hack-uri pentru Glicemie Stabilă",
    description: "Descoperă 10 hack-uri simple bazate pe știință pentru a-ți stabiliza glicemia, a scăpa de pofta de dulce și a-ți recâștiga energia. Începe transformarea ta azi",
    url: "https://www.activeboost.roo/",
    siteName: "ActiveBoost",
    images: [
      {
        url: "https://www.activeboost.ro/activeboost.png",
        width: 1200,
        height: 630,
        alt: "ActiveBoost"
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
