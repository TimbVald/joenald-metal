import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <main className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Services & Projects</h1>
        <p className="text-lg mb-8">
          Explore our comprehensive range of metalwork services and see how we bring your visions to life.
          Each service is backed by our commitment to quality, innovation, and precision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </main>
    </div>
  );
}
