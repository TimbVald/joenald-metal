export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <main className="flex flex-col items-center justify-center text-center max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">À Propos de Joenald Metal</h1>
        <p className="text-lg mb-4">
          Joenald Metal est une entreprise spécialisée dans la fabrication et la conception de structures métalliques.
          Nous réalisons différents travaux en métal avec professionnalisme, précision et souci du détail.
          Notre objectif est d’offrir à nos clients un service de qualité, des réalisations durables et un accompagnement personnalisé, afin de répondre efficacement à leurs besoins.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Nos Activités</h2>
        <ul className="list-disc list-inside text-lg text-left max-w-2xl mx-auto">
          <li>Fabrication de fer forgé</li>
          <li>Conception et réalisation d’escaliers métalliques</li>
          <li>Fabrication de portails métalliques</li>
          <li>Fabrication de fenêtres et cadres métalliques</li>
          <li>Réalisation de structures métalliques sur mesure</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">Nos Services</h2>
        <ul className="list-disc list-inside text-lg text-left max-w-2xl mx-auto">
          <li>Conception et fabrication métallique</li>
          <li>Livraison planifiée</li>
          <li>Assistance et service client</li>
          <li>Suivi et accompagnement des projets</li>
        </ul>
      </main>
    </div>
  );
}
