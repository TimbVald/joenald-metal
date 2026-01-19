import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative w-full h-48">
        <Image
          src={service.image}
          alt={service.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{service.name}</h3>
        <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-500">{service.price}</span>
          <Link href={`/services/${service.id}`} className="bg-zinc-900 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-600 transition-colors duration-300">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
