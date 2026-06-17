import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 transition-colors duration-300">

      {/* Hero Section Premium avec effet parallaxe/fondu */}
      <section className="relative h-[90vh] min-h-[600px] w-full bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
            alt="Atelier Joenald Metal"
            fill
            priority
            className="object-cover opacity-15 dark:opacity-25 scale-105 transition-transform duration-10000 ease-out"
          />
          {/* Overlay dégradé métallique sombre ou clair */}
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-white/60 dark:via-zinc-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-zinc-950 via-transparent to-white dark:to-zinc-950"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in-up">
          <span className="text-yellow-600 dark:text-yellow-505 font-black uppercase tracking-widest text-xs sm:text-sm mb-4 inline-block bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20">
            L&apos;art de l&apos;ingénierie métallique
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white mb-8 tracking-tight leading-none">
            Précision Industrielle <br />
            <span className="bg-gradient-to-r from-yellow-600 via-orange-550 to-yellow-500 dark:from-yellow-400 dark:via-orange-500 dark:to-yellow-600 bg-clip-text text-transparent">
              Esthétique Unique
            </span>
          </h1>
          <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Votre partenaire d&apos;excellence pour les projets industriels et architecturaux au Cap. Conception sur mesure, fabrication de précision et pose haut de gamme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-zinc-950 font-bold px-10 py-4 rounded-sm transition-all duration-300 text-center uppercase tracking-wider text-xs shadow-lg shadow-yellow-500/15 hover:shadow-yellow-500/25"
            >
              Lancer mon projet
            </Link>
            <Link 
              href="/projects" 
              className="w-full sm:w-auto bg-transparent border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:text-zinc-950 hover:bg-zinc-950 hover:border-zinc-950 dark:hover:bg-white dark:hover:text-zinc-950 dark:hover:border-white font-bold px-10 py-3.5 rounded-sm transition-all duration-300 text-center uppercase tracking-wider text-xs"
            >
              Nos Réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Bandeau d'informations clés */}
      <div className="bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800/80 py-10 relative z-10 transition-colors duration-300">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-5 p-4 rounded-md hover:bg-zinc-150/50 dark:hover:bg-zinc-850/50 transition-colors">
            <div className="p-4 bg-yellow-500/10 rounded-md border border-yellow-500/20 text-yellow-600 dark:text-yellow-500 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="font-extrabold text-sm uppercase tracking-wider text-zinc-900 dark:text-white">Délais respectés</p>
              <p className="text-xs text-zinc-650 dark:text-zinc-400 mt-1">Planification rigoureuse et livraison en temps voulu.</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-4 rounded-md hover:bg-zinc-150/50 dark:hover:bg-zinc-850/50 transition-colors">
            <div className="p-4 bg-yellow-500/10 rounded-md border border-yellow-500/20 text-yellow-600 dark:text-yellow-500 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="font-extrabold text-sm uppercase tracking-wider text-zinc-900 dark:text-white">Qualité Certifiée</p>
              <p className="text-xs text-zinc-650 dark:text-zinc-400 mt-1">Conformité stricte aux normes de sécurité internationales.</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-4 rounded-md hover:bg-zinc-150/50 dark:hover:bg-zinc-850/50 transition-colors">
            <div className="p-4 bg-yellow-500/10 rounded-md border border-yellow-500/20 text-yellow-600 dark:text-yellow-500 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div>
              <p className="font-extrabold text-sm uppercase tracking-wider text-zinc-900 dark:text-white">Expertise Locale</p>
              <p className="text-xs text-zinc-650 dark:text-zinc-400 mt-1">Atelier moderne implanté au Cap pour un suivi de proximité.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services vedettes */}
      <section id="services" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-yellow-600 dark:text-yellow-500 font-extrabold text-xs uppercase tracking-widest">Nos compétences</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white uppercase tracking-tight mt-2">
              Services à l&apos;Affiche
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mt-6">
              Découvrez une sélection de nos prestations phares de conception et de métallurgie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 border-b-2 border-yellow-500 pb-2 text-yellow-650 dark:text-yellow-500 font-bold uppercase tracking-wider text-xs hover:text-yellow-500 transition-colors"
            >
              <span>Découvrir tous nos services</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Processus de fabrication */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800/50 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-yellow-600 dark:text-yellow-500 font-extrabold text-xs uppercase tracking-widest">Rigueur opérationnelle</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white uppercase tracking-tight mt-2">
              Notre Processus de Travail
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mt-6">
              De l&apos;étude initiale à l&apos;installation finale, découvrez les étapes clés de réussite de votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", name: "Étude & Conception 3D", desc: "Modélisation précise de votre structure et choix des nuances de métaux optimales." },
              { step: "02", name: "Découpe & Pliage CNC", desc: "Opérations de haute précision sur nos machines à commande numérique dernier cri." },
              { step: "03", name: "Soudage & Assemblage", desc: "Soudage de précision TIG/MIG réalisé par des artisans soudeurs certifiés." },
              { step: "04", name: "Traitement & Pose", desc: "Revêtement anticorrosion et installation sur site par nos équipes spécialisées." }
            ].map((proc, index) => (
              <div key={index} className="bg-white dark:bg-zinc-950 p-8 rounded-lg border border-zinc-200 dark:border-zinc-800 relative group hover:border-yellow-500/50 transition-all duration-300">
                <span className="text-4xl font-black text-yellow-500/15 dark:text-yellow-500/20 group-hover:text-yellow-500/40 transition-colors block mb-4">
                  {proc.step}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{proc.name}</h3>
                <p className="text-sm text-zinc-605 dark:text-zinc-400 leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipements de Haute Technologie */}
      <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-yellow-600 dark:text-yellow-500 font-extrabold text-xs uppercase tracking-widest">Technologie & Performance</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2 mb-6">
                Un Parc Machine de Pointe
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mb-8 rounded-full"></div>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 font-medium">
                Pour garantir la précision de nos ouvrages de ferronnerie d&apos;art et de nos structures industrielles, nous investissons continuellement dans l&apos;outillage technologique.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 text-sm">
                Chaque pièce est découpée, pliée et assemblée avec une tolérance minimale, garantissant une intégration parfaite sur vos chantiers.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-2 h-16 bg-yellow-500 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white">Découpe Laser CNC</h4>
                    <p className="text-xs text-zinc-550 dark:text-zinc-400 mt-1">Précision chirurgicale sur plaques d&apos;acier, inox et aluminium.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-16 bg-yellow-500 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white">Plieuse CNC</h4>
                    <p className="text-xs text-zinc-550 dark:text-zinc-400 mt-1">Pliage géométrique parfait pour des angles impeccables.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 sm:h-125 w-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2670&auto=format&fit=crop"
                alt="Machine de découpe laser CNC"
                fill
                className="object-cover opacity-90 dark:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-zinc-900/95 backdrop-blur border border-zinc-200 dark:border-zinc-850 p-6 rounded-md">
                <p className="text-xs text-yellow-600 dark:text-yellow-550 font-bold uppercase tracking-widest">Investissement</p>
                <p className="text-sm text-zinc-850 dark:text-white font-bold mt-1">Précision sub-millimétrique sur tous types de métaux.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À Propos & Histoire */}
      <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-850/50 transition-colors duration-300">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 lg:h-125 w-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl order-last lg:order-first">
            <Image
              src="/images/jm.jpeg"
              alt="L&apos;équipe Joenald Metal"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-100 dark:from-zinc-900 via-transparent to-transparent"></div>
          </div>
          <div>
            <span className="text-yellow-600 dark:text-yellow-500 font-extrabold text-xs uppercase tracking-widest">Qui sommes-nous ?</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2 mb-6">
              L&apos;Ingénierie au Service de Votre Vision
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mb-8 rounded-full"></div>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 font-medium">
              Né avec l&apos;ambition de redéfinir les standards de la métallurgie locale, Joenald Metal allie savoir-faire artisanal traditionnel et technologies de pointe.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 text-sm">
              Notre équipe d&apos;ingénieurs et de techniciens qualifiés s&apos;engage quotidiennement à respecter les normes de qualité et de sécurité les plus strictes. Nous accompagnons nos clients du croquis initial jusqu&apos;à l&apos;installation sur site.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="border-l-4 border-yellow-500 pl-4">
                <span className="block text-4xl font-black text-zinc-900 dark:text-white">150+</span>
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Projets Livrés</span>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <span className="block text-4xl font-black text-zinc-900 dark:text-white">100%</span>
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Satisfaction Client</span>
              </div>
            </div>

            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 bg-zinc-900 text-white hover:bg-yellow-500 hover:text-zinc-950 dark:bg-white dark:text-zinc-950 dark:hover:bg-yellow-550 transition-colors uppercase tracking-wider text-xs rounded-sm shadow-md px-8 py-3.5"
            >
              Découvrir notre histoire
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages Clients */}
      <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-yellow-600 dark:text-yellow-500 font-extrabold text-xs uppercase tracking-widest">Confiance & Partenariat</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white uppercase tracking-tight mt-2">
              Témoignages Clients
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mt-6">
              Ce que nos clients et partenaires de la construction d&apos;Afrique du Sud disent de notre travail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Joenald Metal a réalisé les garde-corps et la structure d'escalier métallique de notre nouveau complexe résidentiel au Cap. Le travail de pliage CNC est parfait, et le traitement de surface résiste à l'air marin.",
                author: "Jean-Pierre Du Toit",
                role: "Directeur de Projet, Cape Build Ltd"
              },
              {
                quote: "Un professionnalisme rare. Le devis a été clair, les délais de livraison de notre hangar métallique industriel ont été parfaitement respectés, et la pose a été effectuée dans le respect strict des règles de sécurité.",
                author: "Sarah Mendelson",
                role: "Propriétaire, Industrial Logistics Services"
              },
              {
                quote: "La ferronnerie d'art de Joenald Metal a apporté une plus-value incroyable à notre hôtel. Leurs pièces personnalisées ont un design soigné et une finition digne de la haute joaillerie métallique.",
                author: "Marcus Vance",
                role: "Architecte d'intérieur principal, Vance Design"
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 p-8 rounded-lg flex flex-col justify-between hover:border-yellow-550/30 dark:hover:border-yellow-500/30 transition-all duration-300 shadow-sm">
                <div className="mb-6">
                  {/* Icône Guillemet */}
                  <span className="text-5xl font-black text-yellow-500/25 leading-none">&ldquo;</span>
                  <p className="text-sm text-zinc-650 dark:text-zinc-300 italic leading-relaxed mt-2">{t.quote}</p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white text-sm">{t.author}</h4>
                  <p className="text-xs text-yellow-600 dark:text-yellow-550 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action de contact */}
      <section className="bg-gradient-to-br from-yellow-500 via-orange-600 to-yellow-600 py-20 text-zinc-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 uppercase">
            Vous avez un projet en tête ?
          </h2>
          <p className="text-zinc-900 text-base md:text-lg mb-10 leading-relaxed font-bold">
            Qu&apos;il s&apos;agisse d&apos;une pièce de design sur mesure ou d&apos;une structure industrielle d&apos;envergure, nous mettons notre savoir-faire à votre service.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-zinc-950 text-white hover:bg-zinc-900 font-extrabold px-10 py-4.5 rounded-sm transition-colors uppercase tracking-wider text-xs shadow-xl"
          >
            Obtenir un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  );
}
