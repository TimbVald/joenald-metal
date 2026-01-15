import Image from 'next/image';
import { services } from '@/data/services';

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <main className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Services & Projects</h1>
        <p className="text-lg mb-8">
          Explore our comprehensive range of metalwork services and see how we bring your visions to life.
          Each service is backed by our commitment to quality, innovation, and precision.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {services.map((service) => (
            <div key={service.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row transform transition-transform hover:scale-105 duration-300">
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <Image
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              </div>
              <div className="p-6 md:w-1/2 text-left">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-3">{service.name}</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-500">{service.price}</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Client Benefits:</h3>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
                <a href={`#contact`} className="inline-block bg-zinc-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors duration-300">
                  Request a Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
