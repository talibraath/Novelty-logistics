import Image from 'next/image';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Novelty Logistics Truck Dispatcher Experts</title>
        <meta
          name="description"
          content="Novelty Logistics provides expert truck dispatching services, ensuring efficiency, cost-effectiveness, and tailored support for trucking companies nationwide. Partner with experienced truck dispatchers."
        />
        <meta name="keywords" content="novelty logistics, truck dispatcher, truck expert, logistics solutions, trucking services" />
        <meta name="author" content="Novelty Logistics" />
        <meta property="og:title" content="About Us - Novelty Logistics Truck Dispatching Experts" />
        <meta property="og:description" content="Discover Novelty Logistics, the leading truck dispatch experts providing efficient, reliable, and cost-effective logistics solutions for trucking businesses." />
        <meta property="og:image" content="/images/office.jpg" />
        <meta property="og:url" content="https://noveltylogistics.vercel.app/about_noveltylogistics" />
        <meta property="og:type" content="website" />
      </Head>

      <section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image 
              src="/images/office.jpg" 
              alt="About Novelty Logistics" 
              width={500} 
              height={300} 
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-semibold text-green-500 mb-2">ABOUT NOVELTY LOGISTICS</h3>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Welcome to <span className="text-green-500">Novelty Logistics</span>, your trusted <span className="text-green-500">Truck Dispatcher</span> and <span className="text-green-500">Logistics Expert</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At <strong>Novelty Logistics</strong>, we specialize in offering professional <strong>truck dispatch services</strong> for companies of all sizes. Our experienced team ensures that your trucking business operates smoothly and efficiently, helping you save time, reduce costs, and improve operational efficiency. 
              With years of experience in the industry, we are recognized as <em>experts in logistics solutions</em> and <em>dispatch services</em> across the nation.
            </p>
            <ul className="text-gray-700 text-lg mb-6 space-y-3">
              <li>➔ Expert Truck Dispatching Solutions</li>
              <li>➔ Efficient Resource Allocation for Logistics</li>
              <li>➔ Tailored Service Customization</li>
              <li>➔ Transparent Pricing & Cost-Effectiveness</li>
              <li>➔ 24/7 Reliable Customer Support</li>
            </ul>
            <a 
              href="/about_noveltylogistics" 
              className="inline-block bg-green-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
            >
              Read More About Our Truck Dispatch Services
            </a>
          </div>
          
        </div>
      </section>
    </>
  );
}
