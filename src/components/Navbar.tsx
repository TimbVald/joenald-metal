"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full font-sans">
      {/* Top Bar - Official/Corporate feel */}
      <div className="bg-zinc-900 text-zinc-300 py-2 text-xs border-b border-zinc-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              famenijoel@gmail.com
            </span>
            <span className="hidden md:flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +27 63 492 3367
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Facebook</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo - Corporate Bold */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.jpg" alt="Joenald Metal Logo" width={40} height={40} className="rounded-sm" />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold text-zinc-900 leading-none tracking-tight">JOENALD</span>
              <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">Metal Engineering</span>
            </div>
          </Link>

          {/* Desktop Menu - Structured */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-zinc-600">
            {["Home", "About", "Our Services", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `#${item.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="hover:text-zinc-900 py-2 border-b-2 border-transparent hover:border-zinc-900 transition-all uppercase text-xs tracking-wide"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#contact" className="bg-zinc-900 text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wide hover:bg-zinc-800 transition-colors rounded-sm shadow-sm">
              Request a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-zinc-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100 py-4 absolute w-full shadow-xl z-50">
            <div className="container mx-auto px-6 flex flex-col space-y-2">
              {["Home", "About", "Our Services", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `#${item.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-zinc-700 font-medium py-3 border-b border-zinc-50 hover:bg-zinc-50 px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="#contact" onClick={() => setIsOpen(false)} className="block w-full bg-zinc-900 text-white text-center py-3 font-bold uppercase text-sm rounded-sm">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
