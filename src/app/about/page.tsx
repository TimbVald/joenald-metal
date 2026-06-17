import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 font-sans transition-colors duration-300">
      
      {/* En-tête de page premium */}
      <section className="relative py-24 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517420712362-90ad0267a0ac?q=80&w=2670&auto=format&fit=crop"
            alt="Atelier de pliage de tôles"
            fill
            className="object-cover opacity-5 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <span className="text-yellow-600 dark:text-yellow-500 font-extrabold text-xs uppercase tracking-widest bg-yellow-500/10 px-4 py-1 rounded-full">
            Notre ADN
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mt-4 tracking-tight uppercase">
            À Propos de Joenald Metal
          </h1>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mt-6 leading-relaxed">
            Joenald Metal est un leader reconnu dans la conception, la fabrication de précision et la pose de structures métalliques de pointe et de ferronnerie d&apos;art au Cap.
          </p>
        </div>
      </section>

      {/* Section Histoire & Vision */}
      <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-yellow-600 dark:text-yellow-500 font-extrabold text-xs uppercase tracking-widest">Notre Mission</span>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mt-2 mb-6">
                Associer le Savoir-Faire Industriel à la Beauté du Métal
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 text-sm">
                Fondé il y a plus d&apos;une décennie au Cap, notre atelier a pour vocation d&apos;offrir des solutions métallurgiques robustes, durables et à haute valeur esthétique pour les professionnels du bâtiment, les industriels et les particuliers exigeants.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 text-sm">
                Qu&apos;il s&apos;agisse de structures porteuses massives pour des hangars commerciaux ou de rampes d&apos;escalier complexes en fer forgé aux finitions polies, chaque pièce qui sort de notre atelier est soumise à un contrôle de qualité rigoureux.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-sm">
                  <h4 className="font-extrabold text-yellow-600 dark:text-yellow-500 text-lg">Qualité de Pointe</h4>
                  <p className="text-xs text-zinc-550 dark:text-zinc-400 mt-1">Matériaux certifiés de haute résistance.</p>
                </div>
                <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-sm">
                  <h4 className="font-extrabold text-yellow-600 dark:text-yellow-500 text-lg">Sur Mesure</h4>
                  <p className="text-xs text-zinc-550 dark:text-zinc-400 mt-1">Conception adaptée à chaque contrainte.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[450px] w-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-850 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
                alt="Travail de soudage TIG"
                fill
                className="object-cover opacity-90 dark:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Chronologie */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-yellow-600 dark:text-yellow-500 font-extrabold text-xs uppercase tracking-widest">Une décennie d&apos;évolution</span>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mt-2">Notre Chronologie</h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-32">
            {[
              { year: "2014", title: "Fondation de Joenald Metal", desc: "Création de notre premier petit atelier au Cap, spécialisé en ferronnerie d'art de proximité." },
              { year: "2018", title: "Transition Industrielle", desc: "Acquisition de notre première plieuse CNC et développement de nos services de structures métalliques commerciales." },
              { year: "2021", title: "Nouveau Pôle de Découpe Laser", desc: "Investissement dans un banc de découpe laser de haute précision, nous permettant de sous-traiter pour de grands projets." },
              { year: "2025", title: "Engagement Écologique & Expansion", desc: "Utilisation de peintures thermo-laquées sans solvants et franchissement de la barre des 150 grands projets livrés." }
            ].map((milestone, idx) => (
              <div key={idx} className="mb-12 relative pl-8 group">
                {/* Repère temporel sur la ligne */}
                <div className="absolute -left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-zinc-900 border-2 border-yellow-500 group-hover:bg-yellow-500 transition-colors duration-300"></div>
                <div className="absolute left-[-130px] top-1 hidden md:block w-24 text-right">
                  <span className="text-lg font-black text-yellow-600 dark:text-yellow-500">{milestone.year}</span>
                </div>
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 p-6 rounded-lg group-hover:border-yellow-550/20 dark:group-hover:border-yellow-500/20 transition-all duration-300 shadow-sm">
                  <span className="text-xs text-yellow-600 dark:text-yellow-500 font-bold md:hidden block mb-1">{milestone.year}</span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{milestone.title}</h3>
                  <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <span className="text-yellow-600 dark:text-yellow-500 font-extrabold text-xs uppercase tracking-widest">Nos Fondations</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white uppercase tracking-tight mt-2">
              Valeurs Fondamentales
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sécurité Absolue",
                desc: "Toutes nos structures et garde-corps respectent scrupuleusement les exigences structurelles de sécurité SABS afin de garantir la sérénité de nos clients."
              },
              {
                title: "Précision Millimétrique",
                desc: "De la modélisation CAO 3D jusqu'à la découpe CNC, notre culture d'entreprise met en avant le zéro défaut et l'ajustement géométrique rigoureux."
              },
              {
                title: "Matériaux d'Origine Contrôlée",
                desc: "Nous sélectionnons nos nuances d'acier, d'acier inoxydable et d'aluminium auprès de fonderies locales réputées pour leur durabilité mécanique."
              }
            ].map((val, idx) => (
              <div key={idx} className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-805/80 p-8 rounded-lg text-center hover:border-yellow-500/20 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 text-yellow-650 dark:text-yellow-500 flex items-center justify-center mx-auto mb-6 border border-yellow-500/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{val.title}</h3>
                <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-600 py-16 text-zinc-950 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-extrabold mb-4 uppercase">Envie de travailler avec nous ?</h2>
          <p className="text-zinc-900 mb-8 font-bold text-sm md:text-base">
            Découvrez nos réalisations en détails ou prenez contact dès aujourd&apos;hui avec nos ingénieurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects" 
              className="bg-zinc-950 text-white font-bold px-8 py-3.5 hover:bg-zinc-900 transition-colors uppercase tracking-wider text-xs rounded-sm shadow-md"
            >
              Consulter nos Projets
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white font-bold px-8 py-3 transition-all uppercase tracking-wider text-xs rounded-sm"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
