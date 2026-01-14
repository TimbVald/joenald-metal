export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <main className="flex flex-col items-center justify-center text-center max-w-xl w-full">
        <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
        <p className="text-lg mb-8">
          Nous serions ravis de discuter de votre projet. Remplissez le formulaire ci-dessous
          ou contactez-nous directement.
        </p>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8 w-full max-w-lg text-left">
          <h2 className="text-2xl font-bold mb-4">Informations de Contact</h2>
          <p className="text-lg mb-2">
            <strong>Adresse :</strong> 33 Binders Rd, Cape Town, 7501, South Africa
          </p>
          <p className="text-lg mb-2">
            <strong>Email :</strong> famenijoel@gmail.com
          </p>
          <p className="text-lg mb-4">
            <strong>Téléphone :</strong> +27 63 492 3367
          </p>

          <h2 className="text-2xl font-bold mb-4">Horaires d'Ouverture</h2>
          <p className="text-lg mb-2">
            <strong>Lundi – Vendredi :</strong> 09h00 – 18h00
          </p>
          <p className="text-lg mb-2">
            <strong>Samedi :</strong> 10h00 – 14h00
          </p>
          <p className="text-lg">
            <strong>Dimanche :</strong> Fermé
          </p>
        </div>

        <form className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <div className="mb-4 text-left">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
              placeholder="Votre nom"
            />
          </div>
          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
              placeholder="Votre email"
            />
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
              placeholder="Votre message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
            >
              Envoyer
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
