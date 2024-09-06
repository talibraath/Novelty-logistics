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
        <meta name="keywords" content="novelty logistics, truck dispatcher, truck expert, logistics solutions, trucking services, truck dispatch services, trucks, dispatch services" />
        <meta name="author" content="Novelty Logistics" />
        <meta property="og:title" content="About Us - Novelty Logistics Truck Dispatching Experts" />
        <meta property="og:description" content="Discover Novelty Logistics, the leading truck dispatch experts providing efficient, reliable, and cost-effective logistics solutions for trucking businesses." />
        <meta property="og:image" content="/images/office.jpg" />
        <meta property="og:url" content="https://noveltylogistics.vercel.app/about_noveltylogistics" />
        <meta property="og:type" content="website" />
      </Head>

      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image 
              src="/images/office.jpg" 
              alt="About Novelty Logistics" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-semibold text-green-500 mb-2">ABOUT NOVELTY LOGISTICS</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Welcome to <span className="text-green-500">Novelty Logistics</span>, your trusted <span className="text-green-500">Truck Dispatcher</span> and <span className="text-green-500">Logistics Expert</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At <strong>Novelty Logistics</strong>, we specialize in offering professional <strong>truck dispatch services</strong> for companies of all sizes. Our experienced team ensures that your trucking business operates smoothly and efficiently, helping you save time, reduce costs, and improve operational efficiency. With years of experience in the industry, we are recognized as <em>experts in logistics solutions</em> and <em>dispatch services</em> across the nation.
            </p>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Our expert <strong>truck dispatchers</strong> at <strong>Novelty Logistics</strong> work closely with trucking companies to ensure that every truck is on the most efficient route, maximizing profitability. We tailor our services to meet the specific needs of each trucking company, from owner-operators to large fleet managers. Whether you&apos;re looking for reliable truck dispatch services or need assistance with logistics planning, our team is here to support your success.
            </p>

            <ul className="text-gray-700 text-lg mb-6 space-y-3 list-disc pl-5">
              <li>Expert Truck Dispatching Solutions</li>
              <li>Efficient Resource Allocation for Logistics</li>
              <li>Tailored Service Customization</li>
              <li>Transparent Pricing & Cost-Effectiveness</li>
              <li>24/7 Reliable Customer Support</li>
              <li>Nationwide Service for All Truck Types and Sizes</li>
              <li>Compliance with Freight and Transportation Regulations</li>
            </ul>
            <a 
              href="/about_noveltylogistics" 
              className="inline-block bg-green-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
            >
              Read More About Our Truck Dispatch Services
            </a>
          </div>
          
        </div>

        {/* Additional Content Section */}
        <div className="container mx-auto mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Novelty Logistics for Your Truck Dispatching Needs?</h2>
          <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            At <strong>Novelty Logistics</strong>, we understand the complexities of managing trucks and drivers on the road. Our <strong>dispatch services</strong> are designed to simplify the process, whether you&apos;re a small trucking company or a large enterprise. We ensure that every truck is on the right route, carrying the right load, at the right time. With <em>years of expertise</em> in the industry, our team helps you navigate the challenges of logistics management.
          </p>
          <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            Our <strong>dispatchers</strong> take pride in offering personalized service, ensuring that your trucking business receives the attention it deserves. From load matching to route optimization, our <em>logistics experts</em> make your operations more profitable and efficient.
          </p>
        </div>
      </section>
    </>
  );
}
