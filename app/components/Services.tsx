import { FaTruck, FaHandshake, FaFileInvoice, FaClipboardCheck } from 'react-icons/fa'; // Example icons from react-icons

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
          Our Premium Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          <div className="bg-white backdrop-blur-lg bg-opacity-70 p-8 shadow-lg rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-6 text-green-500">
              <FaTruck size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Finding Loads</h3>
            <p className="text-gray-600">
              Customized load matching based on your desired earnings, travel distance, and preferred hauling locations, whether local or interstate.
            </p>
          </div>

          <div className="bg-white backdrop-blur-lg bg-opacity-70 p-8 shadow-lg rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-6 text-green-500">
              <FaHandshake size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Assigning Loads</h3>
            <p className="text-gray-600">
              Building successful relationships through dedicated personal dispatchers and personalized rapport for client success.
            </p>
          </div>

          <div className="bg-white backdrop-blur-lg bg-opacity-70 p-8 shadow-lg rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-6 text-green-500">
              <FaFileInvoice size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Billing Paperwork</h3>
            <p className="text-gray-600">
              Email all paperwork (BOL, invoicing, factoring info) after delivery for forwarding to the broker, saving you time and inconvenience.
            </p>
          </div>

          <div className="bg-white backdrop-blur-lg bg-opacity-70 p-8 shadow-lg rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-6 text-green-500">
              <FaClipboardCheck size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Factoring & Invoicing</h3>
            <p className="text-gray-600">
              Assisting truckers and managing, covering in overcoming delayed payment challenges from shippers and brokers.
            </p>
          </div>

          <div className="bg-white backdrop-blur-lg bg-opacity-70 p-8 shadow-lg rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-6 text-green-500">
              <FaTruck size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Driver Response Unit</h3>
            <p className="text-gray-600">
              Trained dispatchers ensure streamlined delivery operations by constantly monitoring trucks on the road.
            </p>
          </div>

          <div className="bg-white backdrop-blur-lg bg-opacity-70 p-8 shadow-lg rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-6 text-green-500">
              <FaHandshake size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Dispatchers</h3>
            <p className="text-gray-600">
              Providing personalized dispatch services to help drivers maximize their loads and build client relationships.
            </p>
          </div>

          <div className="bg-white backdrop-blur-lg bg-opacity-70 p-8 shadow-lg rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-6 text-green-500">
              <FaFileInvoice size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Invoicing & Paperwork</h3>
            <p className="text-gray-600">
              Full support for invoicing and paperwork management, ensuring no detail is left behind.
            </p>
          </div>

          <div className="bg-white backdrop-blur-lg bg-opacity-70 p-8 shadow-lg rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-6 text-green-500">
              <FaClipboardCheck size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Monitoring & Response</h3>
            <p className="text-gray-600">
              Real-time monitoring and response support for all drivers, ensuring smooth deliveries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
