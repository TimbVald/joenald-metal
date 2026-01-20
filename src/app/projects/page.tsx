'use client';

import { useState, useMemo } from 'react';
import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('name-asc'); // Default sort by name A-Z

  const categories = ['All', ...new Set(services.map((service) => service.category))];

  const filteredServices = useMemo(() => {
    return selectedCategory === 'All'
      ? services
      : services.filter((service) => service.category === selectedCategory);
  }, [selectedCategory]);

  const sortedServices = useMemo(() => {
    let sortableServices = [...filteredServices];

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <main className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Services & Projects</h1>
        <p className="text-lg mb-8">
          Explore our comprehensive range of metalwork services and see how we bring your visions to life.
          Each service is backed by our commitment to quality, innovation, and precision.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 w-full">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300
                  ${selectedCategory === category
                    ? 'bg-yellow-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="relative">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="block appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-700 focus:border-yellow-500"
              aria-label="Sort by"
            >
              <option value="name-asc">Name: A-Z</option>
              <option value="name-desc">Name: Z-A</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {sortedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </main>
    </div>
  );
}
