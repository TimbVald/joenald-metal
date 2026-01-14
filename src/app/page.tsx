
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-zinc-800">

      {/* Corporate Hero - Structured & Informative */}
      <section className="relative h-[600px] w-full bg-zinc-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
            alt="Joenald Metal Workshop"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 max-w-2xl border-l-4 border-yellow-500 shadow-xl">
            <span className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-2 block">Leader en Ferronnerie</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Excellence technique & <br /> Solutions métalliques
            </h1>
            <p className="text-zinc-200 text-lg mb-8 leading-relaxed">
              Partenaire de confiance pour vos projets industriels et architecturaux en Afrique du Sud.
              Conception, fabrication et installation aux normes internationales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-yellow-500 text-zinc-900 font-bold px-8 py-3 rounded-sm hover:bg-yellow-400 transition-colors text-center">
                Démarrer un projet
              </a>
              <a href="#services" className="bg-transparent border border-white text-white font-bold px-8 py-3 rounded-sm hover:bg-white hover:text-zinc-900 transition-all text-center">
                Nos Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <div className="bg-zinc-800 text-white py-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-zinc-700 rounded-full text-yellow-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="font-bold text-sm uppercase">Délais Respectés</p>
              <p className="text-xs text-zinc-400">Planification rigoureuse</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-zinc-700 rounded-full text-yellow-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="font-bold text-sm uppercase">Qualité Certifiée</p>
              <p className="text-xs text-zinc-400">Normes de sécurité</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-zinc-700 rounded-full text-yellow-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div>
              <p className="font-bold text-sm uppercase">Expertise Locale</p>
              <p className="text-xs text-zinc-400">Basé au Cap</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid (IAPSC style) */}
      <section id="nos-services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 uppercase tracking-tight mb-4 after:content-[''] after:block after:w-16 after:h-1 after:bg-yellow-500 after:mx-auto after:mt-4">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Nous offrons une gamme complète de services pour répondre aux besoins des secteurs résidentiels, commerciaux et industriels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Structures Métalliques", desc: "Charpentes, hangars et structures porteuses pour bâtiments industriels." },
              { title: "Ferronnerie d'Art", desc: "Escaliers, garde-corps et portails sur mesure au design unique." },
              { title: "Sécurité & Clôtures", desc: "Solutions robustes pour la sécurisation de périmètres résidentiels et professionnels." },
              { title: "Mobilier Industriel", desc: "Création de mobilier durable en métal et bois pour aménagements modernes." },
              { title: "Soudure & Réparation", desc: "Services de maintenance et réparation sur site par nos experts certifiés." },
              { title: "Découpe & Pliage", desc: "Façonnage précis de tôles et profilés selon vos spécifications." },
            ].map((service, idx) => (
              <div key={idx} className="bg-slate-50 p-8 border border-slate-100 hover:shadow-lg hover:border-yellow-500 transition-all group">
                <div className="w-12 h-12 bg-zinc-900 group-hover:bg-yellow-500 text-white transition-colors flex items-center justify-center rounded mb-6">
                  <span className="font-bold text-xl">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-yellow-600 transition-colors">{service.title}</h3>
                <p className="text-zinc-600 mb-6 text-sm">{service.desc}</p>
                <a href="#" className="text-zinc-900 font-semibold text-sm uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                  En savoir plus <span className="text-yellow-500">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate About Section */}
      <section id="a-propos" className="py-20 bg-zinc-100">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] w-full shadow-2xl rounded-sm overflow-hidden border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
              alt="Workshop Team"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-indigo-900 font-bold uppercase tracking-widest mb-2">Qui sommes-nous ?</h4>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">L'Expertise Technique au Service de Votre Vision</h2>
            <div className="h-1 w-20 bg-yellow-500 mb-8"></div>
            <p className="text-zinc-700 leading-relaxed mb-6">
              Fondée avec la vision de transformer l'industrie métallurgique locale, Joenald Metal combine savoir-faire artisanal traditionnel et technologies modernes.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-8">
              Notre équipe d'ingénieurs et techniciens qualifiés s'engage à respecter les plus hauts standards de qualité et de sécurité.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-zinc-900 pl-4">
                <span className="block text-3xl font-bold text-zinc-900">150+</span>
                <span className="text-sm text-zinc-600">Projets Livrés</span>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <span className="block text-3xl font-bold text-zinc-900">100%</span>
                <span className="text-sm text-zinc-600">Satisfaction Client</span>
              </div>
            </div>

            <a href="#contact" className="bg-zinc-900 text-white px-8 py-3 rounded-sm font-semibold hover:bg-zinc-800">
              Notre Équipe
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Structured Four Columns */}
      <footer id="contact" className="bg-zinc-900 text-zinc-300 pt-20 pb-8 border-t-4 border-yellow-500">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center text-zinc-900 font-bold rounded">JM</div>
              <span className="text-xl font-bold text-white">JOENALD METAL</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Votre partenaire de confiance pour tous travaux de ferronnerie et construction métallique. Qualité, durabilité et précision.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wide mb-6">Liens Rapides</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Accueil</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">À Propos</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Projets</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Carrières</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wide mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-500">📍</span>
                33 Binders Rd, Cape Town
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500">📞</span>
                +27 63 492 3367
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500">✉️</span>
                famenijoel@gmail.com
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wide mb-6">Newsletter</h4>
            <p className="text-xs text-zinc-400 mb-4">Abonnez-vous pour suivre nos actualités.</p>
            <div className="flex">
              <input type="email" placeholder="Votre email" className="bg-zinc-800 border-none text-sm p-2 w-full focus:ring-1 focus:ring-yellow-500 outline-none rounded-l-sm" />
              <button className="bg-yellow-500 text-zinc-900 px-4 font-bold rounded-r-sm hover:bg-yellow-400">OK</button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 pt-8 border-t border-zinc-800 text-center text-xs text-zinc-500">
          <p>&copy; 2026 Joenald Metal Engineering. Tous droits réservés.</p>
        </div>
      </footer>

    </div>
  );
}
