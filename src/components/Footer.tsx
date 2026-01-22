"use client";

import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-900 text-zinc-300 pt-20 pb-8 border-t-4 border-yellow-500">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Joenald Metal Engineering</h3>
          <p className="text-zinc-400 text-sm">
            Votre partenaire de confiance pour l'ingénierie et la fabrication métallique.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="text-zinc-400 hover:text-yellow-500 transition-colors duration-300">
                Conception & Ingénierie
              </a>
            </li>
            <li>
              <a href="#services" className="text-zinc-400 hover:text-yellow-500 transition-colors duration-300">
                Fabrication Métallique
              </a>
            </li>
            <li>
              <a href="#services" className="text-zinc-400 hover:text-yellow-500 transition-colors duration-300">
                Installation & Maintenance
              </a>
            </li>
            <li>
              <a href="#services" className="text-zinc-400 hover:text-yellow-500 transition-colors duration-300">
                Découpe Laser & Pliage
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <p className="text-zinc-400 text-sm">
            Adresse: 123 Rue de l'Acier, Zone Industrielle, 75000 Paris, France
          </p>
          <p className="text-zinc-400 text-sm mt-2">Téléphone: +33 1 23 45 67 89</p>
          <p className="text-zinc-400 text-sm mt-2">Email: contact@joenaldmetal.fr</p>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-zinc-400 hover:text-yellow-500 transition-colors duration-300">
              Facebook
            </a>
            <a href="#" className="text-zinc-400 hover:text-yellow-500 transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-zinc-400 hover:text-yellow-500 transition-colors duration-300">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-zinc-800 text-center text-xs text-zinc-500">
        <p>&copy; 2026 Joenald Metal Engineering. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
