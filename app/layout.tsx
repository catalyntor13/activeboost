import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Plus_Jakarta_Sans, Open_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Activeboost",
  description: "Ghid pentru controlul glicemiei",
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
      </body>
    </html>
  );
}
