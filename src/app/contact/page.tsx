'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

// Composant FAQ Accordéon
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800/80 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-white text-sm md:text-base hover:text-yellow-500 transition-colors duration-200">
          {question}
        </span>
        <span className="text-yellow-500 text-xl font-bold ml-4">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-60 mt-3 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-zinc-400 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// Formulaire enveloppé pour l'utilisation sécurisée de useSearchParams (évite les erreurs de build SSR Next.js)
function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi réussi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-850 p-8 rounded-lg shadow-xl relative overflow-hidden">
      {/* Effet lumineux métallique */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-500 to-orange-500"></div>

      {submitStatus === 'success' ? (
        <div className="text-center py-12 animate-fade-in">
          <div className="w-16 h-16 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-500/20">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Message Envoyé !</h3>
          <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
            Merci pour votre demande. Nos ingénieurs l&apos;étudient avec attention et vous recontacteront sous 24h à 48h.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="mt-8 bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-sm hover:bg-zinc-700 transition-colors"
          >
            Nouveau message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-xl font-bold text-white tracking-tight">Envoyer un Message</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-yellow-500 rounded-sm py-3 px-4 text-sm text-white focus:outline-none transition-all placeholder:text-zinc-600"
                placeholder="Ex. Jean Du Toit"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">
                Adresse Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-yellow-500 rounded-sm py-3 px-4 text-sm text-white focus:outline-none transition-all placeholder:text-zinc-600"
                placeholder="Ex. jean@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-yellow-500 rounded-sm py-3 px-4 text-sm text-white focus:outline-none transition-all placeholder:text-zinc-600"
                placeholder="Ex. +27 63 492 3367"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">
                Service Demandé
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-yellow-500 rounded-sm py-3 px-4 text-sm text-zinc-300 focus:outline-none transition-all cursor-pointer"
              >
                <option value="">Sélectionnez un service</option>
                <option value="metal-structures">Structures Métalliques</option>
                <option value="art-metalwork">Ferronnerie d&apos;Art</option>
                <option value="security-fencing">Sécurité & Clôtures</option>
                <option value="industrial-furniture">Mobilier Industriel</option>
                <option value="welding-repair">Soudure & Réparation</option>
                <option value="cutting-bending">Découpe & Pliage</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">
              Description de votre Projet
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-yellow-500 rounded-sm py-3 px-4 text-sm text-white focus:outline-none transition-all placeholder:text-zinc-600"
              placeholder="Précisez les dimensions, matériaux et contraintes de pose..."
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-zinc-950 font-black px-10 py-3.5 rounded-sm transition-all text-center uppercase tracking-wider text-xs shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer la Demande'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100 font-sans">
      
      {/* En-tête immersif */}
      <section className="relative py-24 bg-zinc-900 border-b border-zinc-800/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
            alt="Bureau moderne métallique"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <span className="text-yellow-500 font-extrabold text-xs uppercase tracking-widest bg-yellow-500/10 px-4 py-1 rounded-full">
            Devis & Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tight uppercase">
            Discutons de Votre Projet
          </h1>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          <p className="text-zinc-400 text-base md:text-lg mt-6 leading-relaxed">
            Une question ou une étude de prix ? Remplissez notre formulaire ou venez nous rencontrer directement dans notre atelier du Cap.
          </p>
        </div>
      </section>

      {/* Zone principale */}
      <main className="container mx-auto px-6 py-20 max-w-6xl flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulaire de Contact avec Suspense */}
          <div className="order-last lg:order-first">
            <Suspense fallback={
              <div className="bg-zinc-900 border border-zinc-850 p-8 rounded-lg animate-pulse h-96 flex items-center justify-center">
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Chargement du formulaire...</span>
              </div>
            }>
              <ContactFormContent />
            </Suspense>
          </div>

          {/* Coordonnées & Carte Google Maps */}
          <div className="space-y-10">
            <div className="bg-zinc-900 border border-zinc-850 p-8 rounded-lg shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-yellow-500/30"></div>
              
              <h3 className="text-xl font-bold text-white mb-6">Coordonnées de l&apos;Atelier</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-950 border border-zinc-800 text-yellow-500 rounded-sm shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Adresse</h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                      33 Binders Rd, Parow East, Cape Town, 7501, South Africa
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-950 border border-zinc-800 text-yellow-500 rounded-sm shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Téléphone</h4>
                    <p className="text-zinc-400 text-sm mt-1">
                      <a href="tel:+27634923367" className="hover:text-yellow-500 transition-colors">
                        +27 63 492 3367
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-950 border border-zinc-800 text-yellow-500 rounded-sm shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Email</h4>
                    <p className="text-zinc-400 text-sm mt-1 break-all">
                      <a href="mailto:famenijoel@gmail.com" className="hover:text-yellow-500 transition-colors">
                        famenijoel@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-zinc-800 pt-6 mt-6">
                  <div className="p-3 bg-zinc-950 border border-zinc-800 text-yellow-500 rounded-sm shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Horaires d&apos;Ouverture</h4>
                    <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                      Lundi – Vendredi : 09h00 – 18h00 <br />
                      Samedi : 10h00 – 14h00 <br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte Google Maps optimisée */}
            <div className="w-full overflow-hidden rounded-lg border border-zinc-850 shadow-xl relative h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.47705074313!2d18.6105812!3d-33.9031197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5a7c0e63a3c1%3A0x788147f7c865d549!2s33%20Binders%20Rd%2C%20Parow%20East%2C%20Cape%20Town%2C%207501%2C%20Afrique%20du%20Sud!5e0!3m2!1sfr!2scm!4v1769056272362!5m2!1sfr!2scm"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adresse de Joenald Metal"
                className="absolute inset-0 opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Section FAQ Accordéon */}
        <section className="mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-extrabold text-xs uppercase tracking-widest">Des réponses à vos questions</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-2">
              Foire Aux Questions
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="bg-zinc-900 border border-zinc-850 rounded-lg p-8 space-y-4">
            <FAQItem
              question="Quels types de métaux traitez-vous dans votre atelier ?"
              answer="Nous travaillons principalement l'acier de construction (au carbone), l'acier inoxydable (inox 304 et 316, idéal pour les zones côtières) et l'aluminium pour sa légèreté et sa résistance à la corrosion. Nous pouvons appliquer différentes finitions : peinture thermolaquée, galvanisation à chaud ou vernis brut."
            />
            <FAQItem
              question="Comment obtenir un devis pour un projet métallique sur mesure ?"
              answer="Il vous suffit de remplir le formulaire ci-dessus en décrivant votre projet ou de nous appeler directement. Pour des conceptions complexes, nous pouvons réaliser une étude de faisabilité et modéliser votre structure en 3D (CAO) afin de vous fournir un chiffrage ultra-précis. Nos devis sont entièrement gratuits."
            />
            <FAQItem
              question="Quels sont vos délais moyens de fabrication et de livraison ?"
              answer="Nos délais dépendent de l'envergure du projet. Pour de la ferronnerie classique (grille, garde-corps simple), comptez entre 2 et 3 semaines. Pour des structures métalliques industrielles lourdes ou des escaliers de design complexes, le délai moyen est de 4 à 6 semaines après approbation des plans d'exécution."
            />
            <FAQItem
              question="Proposez-vous l'installation de vos ouvrages sur site ?"
              answer="Oui, absolument. Nous disposons d'équipes de poseurs professionnels et qualifiés. Ils se déplacent directement sur vos chantiers ou résidences au Cap et dans ses environs pour assurer une installation solide, de niveau, et conforme aux normes de sécurité mécanique locales."
            />
          </div>
        </section>
      </main>
    </div>
  );
}
