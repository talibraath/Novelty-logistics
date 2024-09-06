import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Head from 'next/head';

export default function Team() {
  return (

    <>

<Head>
        <title>Truck Dispatching Services & Charges - Novelty Logistics</title>
        <meta name="description" content="Explore Novelty Logistics' competitive truck dispatching charges for various trucks, including box trucks, reefer trucks, dry vans, and flatbed trucks. Get the best rates for your business needs." />
        <meta name="keywords" content="truck dispatching services, truck charges, box truck, reefer truck, dry van, flatbed truck, stepdeck truck, hotshot trucking" />
        <meta name="author" content="Novelty Logistics" />
        <meta property="og:title" content="Truck Dispatching Services & Charges - Novelty Logistics" />
        <meta property="og:description" content="Check out the truck dispatching charges for different types of trucks at Novelty Logistics, including box trucks, dry vans, reefer trucks, and more." />
        <meta property="og:url" content="https://noveltylogistics.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
    <section id="team" className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-12">Meet Our Guide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Team Member 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/avator.jpg"
              alt="Jordan"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-800">Jordan</h3>
              <p className="text-gray-500 mb-4">Team Lead</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-green-500 hover:text-green-600 transition-colors">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-green-500 hover:text-green-600 transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-green-500 hover:text-green-600 transition-colors">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/avator.jpg"
              alt="Annie"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-800">Annie</h3>
              <p className="text-gray-500 mb-4">Logistics Coordinator</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-green-500 hover:text-green-600 transition-colors">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-green-500 hover:text-green-600 transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-green-500 hover:text-green-600 transition-colors">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/avator.jpg"
              alt="Ronnie"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-800">Ronnie</h3>
              <p className="text-gray-500 mb-4">Dispatcher</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-green-500 hover:text-green-600 transition-colors">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-green-500 hover:text-green-600 transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-green-500 hover:text-green-600 transition-colors">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/avator.jpg"
              alt="Marina"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-800">Marina</h3>
              <p className="text-gray-500 mb-4">Sales Head</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-green-500 hover:text-green-600 transition-colors">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-green-500 hover:text-green-600 transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-green-500 hover:text-green-600 transition-colors">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
