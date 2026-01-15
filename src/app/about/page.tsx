export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <main className="flex flex-col items-center justify-center text-center max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About Joenald Metal</h1>
        <p className="text-lg mb-4">
          Joenald Metal is a company specializing in the manufacture and design of metal structures.
          We carry out various metal works with professionalism, precision, and attention to detail.
          Our objective is to offer our clients quality service, durable achievements, and personalized support, in order to effectively meet their needs.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Our Activities</h2>
        <ul className="list-disc list-inside text-lg text-left max-w-2xl mx-auto">
          <li>Wrought iron manufacturing</li>
          <li>Design and construction of metal stairs</li>
          <li>Manufacturing of metal gates</li>
          <li>Manufacturing of metal windows and frames</li>
          <li>Realization of custom metal structures</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-lg text-left max-w-2xl mx-auto">
          <li>Metal design and manufacturing</li>
          <li>Scheduled delivery</li>
          <li>Assistance and customer service</li>
          <li>Project monitoring and support</li>
        </ul>
      </main>
    </div>
  );
}
