'use client';

import { useState, useMemo } from 'react';
import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import Image from 'next/image';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('name-asc');

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(services.map((service) => service.category)))];
  }, []);

  const filteredServices = useMemo(() => {
    return selectedCategory === 'All'
      ? services
      : services.filter((service) => service.category === selectedCategory);
  }, [selectedCategory]);

  const sortedServices = useMemo(() => {
    const sortableServices = [...filteredServices];

    switch (sortOption) {
      case 'price-asc':
        sortableServices.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('R ', '').replace(/\s/g, ''));
          const priceB = parseFloat(b.price.replace('R ', '').replace(/\s/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        sortableServices.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('R ', '').replace(/\s/g, ''));
          const priceB = parseFloat(b.price.replace('R ', '').replace(/\s/g, ''));
          return priceB - priceA;
        });
        break;
      case 'name-asc':
        sortableServices.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sortableServices.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    return sortableServices;
  }, [filteredServices, sortOption]);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100 font-sans">
      
      {/* En-tête immersif */}
      <section className="relative py-24 bg-zinc-900 border-b border-zinc-800/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=2670&auto=format&fit=crop"
            alt="Profils en acier"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <span className="text-yellow-500 font-extrabold text-xs uppercase tracking-widest bg-yellow-500/10 px-4 py-1 rounded-full">
            Nos Prestations
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tight uppercase">
            Services & Réalisations
          </h1>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          <p className="text-zinc-400 text-base md:text-lg mt-6 leading-relaxed">
            Parcourez notre gamme complète de services d&apos;ingénierie métallique. Chaque projet bénéficie de notre précision technique et de notre engagement qualité.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="container mx-auto px-6 py-20 flex-grow max-w-6xl">
        {/* Filtres et tris */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
          
          {/* Boutons de catégories */}
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
            {categories.map((category) => {
              const label = category === 'All' ? 'Tous' : category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-300 border ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-zinc-950 border-yellow-500 shadow-md shadow-yellow-500/10'
                      : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Tri */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <label htmlFor="sort" className="text-xs font-bold uppercase tracking-wider text-zinc-500 shrink-0">
              Trier par
            </label>
            <div className="relative w-full md:w-48">
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="block w-full bg-zinc-950 border border-zinc-800 text-zinc-300 py-2.5 px-4 pr-10 rounded-sm text-xs font-bold uppercase tracking-wider leading-tight focus:outline-none focus:border-yellow-500 focus:text-white transition-all appearance-none cursor-pointer"
                aria-label="Trier par"
              >
                <option value="name-asc">Nom: A-Z</option>
                <option value="name-desc">Nom: Z-A</option>
                <option value="price-asc">Prix: Croissant</option>
                <option value="price-desc">Prix: Décroissant</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Grille de projets/services */}
        {sortedServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {sortedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-900 border border-zinc-850 rounded-lg">
            <svg className="w-12 h-12 text-zinc-650 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-zinc-400 font-bold uppercase tracking-wider text-sm">Aucun service trouvé pour cette catégorie</p>
          </div>
        )}
      </main>
    </div>
  );
}
