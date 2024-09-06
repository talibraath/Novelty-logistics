import Image from 'next/image';
import Header from '../components/Header'; // Assuming Header is a component
import Footer from '../components/Footer'; // Assuming Footer is a component
import Head from 'next/head';

export default function About() {
    return (
      <>
        <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Novelty Logistics",
            "url": "https://noveltylogistics.vercel.app",
            "logo": "https://noveltylogistics.vercel.app/logo.png",
            "sameAs": [
              "https://twitter.com/noveltylogistics",
              "https://linkedin.com/company/noveltylogistics"
            ]
          })}
        </script>
          <title>About Us - Novelty Logistics</title>
          <meta 
            name="description" 
            content="Learn more about Novelty Logistics, a top-tier provider of truck dispatching services. Our focus is on transparency, efficiency, and 24/7 support for trucking businesses nationwide." 
          />
          <meta 
            name="keywords" 
            content="truck dispatching, trucking services, logistics support, trucking industry, 24/7 dispatch service, trucking business" 
          />
          <meta property="og:title" content="About Us - Novelty Logistics" />
          <meta property="og:description" content="Novelty Logistics offers premier truck dispatching services for trucking businesses across the nation. Explore our commitment to efficiency and customer satisfaction." />
          <meta property="og:url" content="https://noveltylogistics.vercel.app/about" />
          <meta property="og:type" content="website" />
        </Head>

        {/* Header */}
        <Header />

        {/* Add padding to adjust content below the navbar */}
        <section id="about" className="pt-36 md:pt-32 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12">
            
            {/* Text Section */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-semibold text-green-600 mb-4">ABOUT US</h3>
              <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
                Welcome to <span className="text-green-600">Novelty Logistics</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Novelty Logistics, we are dedicated to providing top-tier dispatch 
                services tailored to the unique needs of trucking businesses across the nation. 
                Our commitment to transparent pricing and unwavering support sets us apart in the industry.
              </p>
              <ul className="text-lg text-gray-700 mb-6 space-y-2">
                <li>➔ Efficiency</li>
                <li>➔ Resource Allocation</li>
                <li>➔ Customization</li>
                <li>➔ Cost-Effectiveness</li>
                <li>➔ Tailored Support</li>
                <li>➔ 24/7 Service</li>
              </ul>
              <a 
                href="#contact" 
                className="inline-block bg-green-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
              >
                Learn More
              </a>
            </div>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <Image 
                src="/images/office.jpg"  // Make sure this image exists and is correctly linked
                alt="Novelty Logistics Office"
                width={600}
                height={400}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              
              {/* Mission Text */}
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-extrabold text-green-600 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our mission is simple: to help trucking businesses grow by handling all the complexities 
                  of dispatching and load management. With a focus on transparency, efficiency, and unparalleled 
                  support, we aim to reduce downtime and enhance operational efficiency for every driver or fleet we serve.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By partnering with top brokers and shippers, we ensure that your truck is always loaded and earning. 
                  Our experienced dispatchers take care of all the back-office work, from negotiating rates to managing 
                  billing and paperwork, so that you can focus on driving.
                </p>
              </div>

              {/* Mission Image */}
              <div className="w-full md:w-1/2">
                <Image 
                  src="/images/truck.jpg"  // Make sure this image exists
                  alt="Trucking Business at Novelty Logistics"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </>
    );
}
