export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <main className="flex flex-col items-center justify-center text-center max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Nos Réalisations</h1>
        <p className="text-lg mb-8">
          Découvrez quelques-uns de nos projets métalliques sur mesure.
          Chaque réalisation témoigne de notre engagement envers la qualité et l'innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for project items */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Projet 1</h2>
            <p className="text-gray-700 dark:text-gray-300">Description courte du projet 1.</p>
            {/* Add image or link to project details */}
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Projet 2</h2>
            <p className="text-gray-700 dark:text-gray-300">Description courte du projet 2.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Projet 3</h2>
            <p className="text-gray-700 dark:text-gray-300">Description courte du projet 3.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
