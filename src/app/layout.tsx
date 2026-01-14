import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "JOENALD METAL | Ferronnerie d'Art & Design",
  description: "Créations métalliques sur mesure, design contemporain et savoir-faire artisanal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className="antialiased bg-zinc-50 text-zinc-900 font-sans"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
