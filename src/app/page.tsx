
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-zinc-800">

      {/* Corporate Hero - Structured & Informative */}
      <section className="relative h-150 w-full bg-zinc-900">
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
            <span className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-2 block">Leader in Metalwork</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Technical Excellence & <br /> Metal Solutions
            </h1>
            <p className="text-zinc-200 text-lg mb-8 leading-relaxed">
              Trusted partner for your industrial and architectural projects in South Africa.
              Design, manufacturing, and installation to international standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-yellow-500 text-zinc-900 font-bold px-8 py-3 rounded-sm hover:bg-yellow-400 transition-colors text-center">
                Start a Project
              </a>
              <a href="#services" className="bg-transparent border border-white text-white font-bold px-8 py-3 rounded-sm hover:bg-white hover:text-zinc-900 transition-all text-center">
                Our Services
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
              <p className="font-bold text-sm uppercase">Respected Deadlines</p>
              <p className="text-xs text-zinc-400">Rigorous Planning</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-zinc-700 rounded-full text-yellow-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="font-bold text-sm uppercase">Certified Quality</p>
              <p className="text-xs text-zinc-400">Safety Standards</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-zinc-700 rounded-full text-yellow-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div>
              <p className="font-bold text-sm uppercase">Local Expertise</p>
              <p className="text-xs text-zinc-400">Based in Cape Town</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid (IAPSC style) */}
      <section id="our-services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 uppercase tracking-tight mb-4 after:content-[''] after:block after:w-16 after:h-1 after:bg-yellow-500 after:mx-auto after:mt-4">
              Our Areas of Expertise
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              We offer a comprehensive range of services to meet the needs of residential, commercial, and industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Metal Structures", desc: "Frameworks, hangars, and load-bearing structures for industrial buildings." },
              { title: "Art Metalwork", desc: "Custom stairs, railings, and gates with unique designs." },
              { title: "Security & Fencing", desc: "Robust solutions for securing residential and professional perimeters." },
              { title: "Industrial Furniture", desc: "Creation of durable metal and wood furniture for modern layouts." },
              { title: "Welding & Repair", desc: "On-site maintenance and repair services by our certified experts." },
              { title: "Cutting & Bending", desc: "Precise shaping of sheets and profiles according to your specifications." },
            ].map((service, idx) => (
              <div key={idx} className="bg-slate-50 p-8 border border-slate-100 hover:shadow-lg hover:border-yellow-500 transition-all group">
                <div className="w-12 h-12 bg-zinc-900 group-hover:bg-yellow-500 text-white transition-colors flex items-center justify-center rounded mb-6">
                  <span className="font-bold text-xl">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-yellow-600 transition-colors">{service.title}</h3>
                <p className="text-zinc-600 mb-6 text-sm">{service.desc}</p>
                <a href="#" className="text-zinc-900 font-semibold text-sm uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <span className="text-yellow-500">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate About Section */}
      <section id="about" className="py-20 bg-zinc-100">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-125 w-full shadow-2xl rounded-sm overflow-hidden border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
              alt="Workshop Team"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-indigo-900 font-bold uppercase tracking-widest mb-2">Who are we?</h4>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">Technical Expertise at the Service of Your Vision</h2>
            <div className="h-1 w-20 bg-yellow-500 mb-8"></div>
            <p className="text-zinc-700 leading-relaxed mb-6">
              Founded with the vision of transforming the local metallurgical industry, Joenald Metal combines traditional craftsmanship and modern technologies.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-8">
              Our team of qualified engineers and technicians is committed to respecting the highest standards of quality and safety.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-zinc-900 pl-4">
                <span className="block text-3xl font-bold text-zinc-900">150+</span>
                <span className="text-sm text-zinc-600">Projects Delivered</span>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <span className="block text-3xl font-bold text-zinc-900">100%</span>
                <span className="text-sm text-zinc-600">Client Satisfaction</span>
              </div>
            </div>

            <a href="#contact" className="bg-zinc-900 text-white px-8 py-3 rounded-sm font-semibold hover:bg-zinc-800">
              Our Team
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
              Your trusted partner for all metalwork and steel construction projects. Quality, durability, and precision.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wide mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Careers</a></li>
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
            <p className="text-xs text-zinc-400 mb-4">Subscribe to our newsletter for updates.</p>
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
