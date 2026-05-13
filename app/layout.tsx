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
  title: 'eBook-ul care te scapă de Oboseală, Pofte de Dulce și Kilograme în Plus',

    description: "Descoperă ghidul practic bazat pe știință care îți stabilizează glicemia și îți transformă energia zilnică — fără diete restrictive, fără frustrări. 10 hack-uri simple, aplicabile imediat acasă sau la restaurant. Bonus gratuit inclus: Arta Hidratării (valoare 99 lei). Doar 99 lei",

  keywords: ["glicemie stabila",
  "cum sa iti stabilizezi glicemia",
  "spike glicemic ce este",
  "pofte de dulce cauza",
  "oboseala dupa masa",
  "cum sa slabesti fara dieta",
  "energie constanta toata ziua",
  "hack-uri glicemie",
  "glucose goddess romana",
  "ghid glicemie romana",
  "ebook nutritie romania",
  "cum sa mananci corect",
  "ordinea alimentelor in farfurie",
  "insulina si glicemie",
  "cum sa controlezi glicemia natural",
  "Active Boost Romania",
  "ebook sanatate romania",
  "nutritie si energie",
  "slabire fara dieta restrictiva",
  "hidratare si energie",
  "biohacking romania",
  "longevitate nutritie romania",
  "sanatate metabolica",
  "cum sa eviti spike glicemic",
  "oboseala cronica cauza"
],
  authors: [{ name: "Active Boost" }],
  openGraph: {
     title: 'eBook-ul care te scapă de Oboseală, Pofte de Dulce și Kilograme în Plus',
   
       description: "Descoperă ghidul practic bazat pe știință care îți stabilizează glicemia și îți transformă energia zilnică — fără diete restrictive, fără frustrări. 10 hack-uri simple, aplicabile imediat acasă sau la restaurant. Bonus gratuit inclus: Arta Hidratării (valoare 99 lei). Doar 99 lei",
       
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
