"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full font-sans sticky top-0 z-50">
      {/* Top Bar - Disparaît doucement au scroll pour laisser place à la navbar principale */}
      <div 
        className={`bg-zinc-950 text-zinc-400 py-2 text-xs border-b border-zinc-900 transition-all duration-300 ${
          scrolled ? "h-0 py-0 overflow-hidden opacity-0 border-none" : "h-auto opacity-100"
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <a href="mailto:famenijoel@gmail.com" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              famenijoel@gmail.com
            </a>
            <a href="tel:+27634923367" className="hidden md:flex items-center gap-2 hover:text-yellow-500 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +27 63 492 3367
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-yellow-500 transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-yellow-500 transition-colors">Facebook</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar with glassmorphism */}
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? "bg-zinc-950/90 dark:bg-zinc-950/90 text-white shadow-lg backdrop-blur-md border-b border-zinc-800/50 py-3" 
            : "bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-900 py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
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
              <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${scrolled ? "text-white" : "text-zinc-900 dark:text-white"}`}>
                JOENALD<span className="text-yellow-500">.</span>
              </span>
              <span className="text-[9px] font-bold text-yellow-500 tracking-widest uppercase">Metal Engineering</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
            {[
              { name: "Accueil", href: "/" },
              { name: "À Propos", href: "/about" },
              { name: "Services & Projets", href: "/projects" },
              { name: "Contact", href: "/contact" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 group ${
                  scrolled 
                    ? "text-zinc-300 hover:text-white" 
                    : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-bold uppercase tracking-wider text-zinc-900 rounded-sm group bg-gradient-to-br from-yellow-500 to-orange-600 group-hover:from-yellow-500 group-hover:to-orange-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300"
            >
              <span className={`relative px-5 py-2 transition-all ease-in duration-75 rounded-xs group-hover:bg-opacity-0 ${
                scrolled ? "bg-zinc-950 text-white" : "bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white"
              }`}>
                Demander un devis
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden focus:outline-none p-2 rounded-md transition-colors ${
              scrolled ? "text-white hover:bg-zinc-800" : "text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 py-4 absolute w-full shadow-2xl z-50 animate-fade-in">
            <div className="container mx-auto px-6 flex flex-col space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "À Propos", href: "/about" },
                { name: "Services & Projets", href: "/projects" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-zinc-800 dark:text-zinc-200 font-bold uppercase tracking-wider text-xs py-3 border-b border-zinc-50 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900 px-3 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)} 
                  className="block w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-center py-3 font-bold uppercase text-xs tracking-wider rounded-sm shadow-md"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
