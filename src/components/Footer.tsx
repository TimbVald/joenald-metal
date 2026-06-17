"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-zinc-950 text-zinc-400 pt-24 pb-12 border-t border-zinc-900 overflow-hidden">
      {/* Ligne lumineuse métallique supérieure */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10">
        {/* Colonne 1 : Logo & Slogan */}
        <div className="flex flex-col space-y-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-md border border-yellow-500/30 p-0.5">
              <Image 
                src="/images/logo.jpg" 
                alt="Joenald Metal Logo" 
                width={42} 
                height={42} 
                className="rounded-sm transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-black tracking-tight text-white">
                JOENALD<span className="text-yellow-500">.</span>
              </span>
              <span className="text-[9px] font-bold text-yellow-500 tracking-widest uppercase">Metal Engineering</span>
            </div>
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Votre partenaire de confiance pour tous vos projets d&apos;ingénierie et de fabrication métallique au Cap. Conception, fabrication et installation aux normes internationales.
          </p>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-yellow-500 after:mt-2">
            Services
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Structures Métalliques", href: "/projects" },
              { name: "Ferronnerie d'Art", href: "/projects" },
              { name: "Sécurité & Clôtures", href: "/projects" },
              { name: "Mobilier Industriel", href: "/projects" },
              { name: "Soudure & Réparation", href: "/projects" },
              { name: "Découpe & Pliage", href: "/projects" }
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-sm text-zinc-400 hover:text-yellow-500 transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">&rsaquo;</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 : Contact (Coordonnées corrigées) */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-yellow-500 after:mt-2">
            Contact
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="text-sm text-zinc-400 leading-relaxed">
                33 Binders Rd, Parow East, Cape Town, 7501, South Africa
              </span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <a href="tel:+27634923367" className="text-sm text-zinc-400 hover:text-yellow-500 transition-colors">
                +27 63 492 3367
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href="mailto:famenijoel@gmail.com" className="text-sm text-zinc-400 hover:text-yellow-500 transition-colors break-all">
                famenijoel@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 4 : Réseaux sociaux & Newsletter */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-yellow-500 after:mt-2">
            Suivez-nous
          </h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="w-10 h-10 rounded-md bg-zinc-900 border border-zinc-850 hover:border-yellow-500 text-zinc-400 hover:text-yellow-500 flex items-center justify-center transition-all duration-300" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" className="w-10 h-10 rounded-md bg-zinc-900 border border-zinc-850 hover:border-yellow-500 text-zinc-400 hover:text-yellow-500 flex items-center justify-center transition-all duration-300" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Notre atelier est ouvert du lundi au vendredi de 9h à 18h et le samedi de 10h à 14h.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-xs text-zinc-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} Joenald Metal Engineering. Tous droits réservés.
        </p>
        <div className="flex gap-6 text-xs text-zinc-500">
          <Link href="#" className="hover:text-yellow-500 transition-colors">Mentions légales</Link>
          <Link href="#" className="hover:text-yellow-500 transition-colors">Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
