import { FaTruck, FaHandshake, FaFileInvoice, FaClipboardCheck } from 'react-icons/fa'; // Example icons from react-icons
import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Truck Dispatching Services - Novelty Logistics</title>
        <meta name="description" content="Explore Novelty Logistics' premium services, including load matching, dispatching, paperwork management, and real-time monitoring. Our expert truck dispatchers help trucking businesses succeed." />
        <meta name="keywords" content="truck dispatching services, logistics services, load matching, dispatching paperwork, driver monitoring, trucking business" />
        <meta name="author" content="Novelty Logistics" />
        <meta property="og:title" content="Truck Dispatching Services - Novelty Logistics" />
        <meta property="og:description" content="Premium truck dispatch services including load matching, dispatching, and paperwork management." />
        <meta property="og:url" content="https://noveltylogistics.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>

      <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
            Our Premium Truck Dispatching Services
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            We offer a wide range of expert dispatch services to help you streamline your trucking operations, maximize efficiency, and ensure timely deliveries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white backdrop-blur-lg bg-opacity-40 p-8 shadow-lg rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex justify-center mb-6 text-green-500">
                  <service.icon size={50} className="text-green-500"  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
            
          </div>
        </div>
      </section>
    </>
  );
}

const servicesData = [
  {
    title: 'Finding Loads',
    description: 'We help truckers find customized loads based on their earnings goals, desired travel distances, and preferred routes, whether local or across state lines. Our load matching is tailored to maximize profitability and minimize downtime.',
    icon: FaTruck,
  },
  {
    title: 'Assigning Loads',
    description: 'Our personal dispatchers work closely with drivers to assign loads that meet their preferences. We focus on building long-term, successful relationships with both drivers and clients.',
    icon: FaHandshake,
  },
  {
    title: 'Billing Paperwork',
    description: 'We handle all your trucking paperwork, including Bills of Lading (BOL), invoicing, and factoring information, ensuring that you can focus on driving while we take care of the administrative details.',
    icon: FaFileInvoice,
  },
  {
    title: 'Factoring & Invoicing',
    description: 'Dealing with delayed payments from brokers or shippers? We provide factoring services to ensure you get paid promptly. Our invoicing management makes sure no payment is missed.',
    icon: FaClipboardCheck,
  },
  {
    title: 'Driver Response Unit',
    description: 'Our team of trained dispatchers monitors your trucks in real-time, ensuring smooth deliveries and providing immediate response if any issues arise during transit.',
    icon: FaTruck,
  },
  {
    title: 'Personal Dispatchers',
    description: 'Get assigned a dedicated dispatcher who knows your preferences and can help you optimize loads and routes for maximum earnings and efficiency. Build better client relationships with our tailored services.',
    icon: FaHandshake,
  },
  {
    title: 'Invoicing & Paperwork',
    description: 'Our full invoicing and paperwork management support ensures no details are overlooked. We make sure your documentation is accurate and delivered on time.',
    icon: FaFileInvoice,
  },
  {
    title: 'Monitoring & Response',
    description: 'We provide real-time driver monitoring and fast response times, ensuring that any issues during delivery are handled quickly to avoid delays or missed deadlines.',
    icon: FaClipboardCheck,
  },
];
