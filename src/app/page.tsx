import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

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

      {/* Dynamic Services Grid */}
      <section id="our-services" className="py-20 bg-zinc-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white uppercase tracking-tight mb-4 after:content-[''] after:block after:w-16 after:h-1 after:bg-yellow-500 after:mx-auto after:mt-4">
              Our Featured Services
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Explore a selection of our high-quality metalwork services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="bg-yellow-500 text-zinc-900 font-bold px-8 py-3 rounded-sm hover:bg-yellow-400 transition-colors text-center">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate About Section */}
      <section id="about" className="py-20 bg-zinc-100">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-125 w-full shadow-2xl rounded-sm overflow-hidden border-4 border-white">
            <Image
              src="/images/jm.jpeg"
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
    </div>
  );
}
