import { FaTruck, FaHandshake, FaFileInvoice, FaClipboardCheck } from 'react-icons/fa'; // Example icons from react-icons

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
          Our Premium Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-lg bg-opacity-40 p-8 shadow-lg rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-6 text-green-500">
                <service.icon size={50} className="text-green-500" />
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
  );
}

const servicesData = [
  {
    title: 'Finding Loads',
    description: 'Customized load matching based on your desired earnings, travel distance, and preferred hauling locations, whether local or interstate.',
    icon: FaTruck,
  },
  {
    title: 'Assigning Loads',
    description: 'Building successful relationships through dedicated personal dispatchers and personalized rapport for client success.',
    icon: FaHandshake,
  },
  {
    title: 'Billing Paperwork',
    description: 'Email all paperwork (BOL, invoicing, factoring info) after delivery for forwarding to the broker, saving you time and inconvenience.',
    icon: FaFileInvoice,
  },
  {
    title: 'Factoring & Invoicing',
    description: 'Assisting truckers and managing, covering in overcoming delayed payment challenges from shippers and brokers.',
    icon: FaClipboardCheck,
  },
  {
    title: 'Driver Response Unit',
    description: 'Trained dispatchers ensure streamlined delivery operations by constantly monitoring trucks on the road.',
    icon: FaTruck,
  },
  {
    title: 'Personal Dispatchers',
    description: 'Providing personalized dispatch services to help drivers maximize their loads and build client relationships.',
    icon: FaHandshake,
  },
  {
    title: 'Invoicing & Paperwork',
    description: 'Full support for invoicing and paperwork management, ensuring no detail is left behind.',
    icon: FaFileInvoice,
  },
  {
    title: 'Monitoring & Response',
    description: 'Real-time monitoring and response support for all drivers, ensuring smooth deliveries.',
    icon: FaClipboardCheck,
  },
];
