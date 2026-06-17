import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-zinc-900 border border-zinc-800/80 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl metallic-glow-hover flex flex-col h-full transition-all duration-300">
      {/* Container d'image avec zoom au survol */}
      <div className="relative w-full h-52 overflow-hidden bg-zinc-950 shrink-0">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-90"
        />
        {/* Badge catégorie */}
        <span className="absolute top-4 right-4 bg-yellow-500/90 text-zinc-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm shadow-md">
          {service.category}
        </span>
      </div>

      {/* Contenu de la carte */}
      <div className="p-6 flex flex-col flex-grow text-left">
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-yellow-400 transition-colors">
          {service.name}
        </h3>
        <p className="text-zinc-400 text-sm mb-5 leading-relaxed line-clamp-3">
          {service.description}
        </p>

        {/* Aperçu des caractéristiques clés */}
        <div className="mb-6 mt-auto">
          <ul className="space-y-1.5 text-xs text-zinc-300">
            {service.features.slice(0, 3).map((feat, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0"></span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prix et CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80 mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">À partir de</span>
            <span className="text-xl font-black text-yellow-500 tracking-tight">{service.price}</span>
          </div>
          <Link 
            href={`/contact?service=${encodeURIComponent(service.id)}`} 
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-900 bg-yellow-500 hover:bg-yellow-400 transition-colors duration-300 rounded-xs shadow-sm hover:shadow"
          >
            Devis Express
          </Link>
        </div>
      </div>
    </div>
  );
}
