import Head from 'next/head';
import Image from 'next/image';


export default function Footer() {
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-green-400">Company</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Contact Us</a></li>
            <li><a href="/privacypolicy" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Privacy Policy</a></li>
            <li><a href="/terms" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">FAQs & Help</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-green-400">Contact</h3>
          <p className="text-gray-400">230 OCEAN PKWY APT C5<br />BROOKLYN, NY 11218</p>
          <p className="text-gray-400 mt-2">(507) 677-5881
          </p>
          <p className="text-gray-400 mt-2">jordandispatch30@gmail.com</p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Gallery Section */}
    

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-green-400">Newsletter</h3>
          <p className="text-gray-400">Stay updated with the latest news and offers.</p>
          <form className="mt-6">
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-3 w-full rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button 
              type="submit" 
              className="bg-green-500 text-white py-3 mt-4 w-full rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © Novelty Logistics, All Rights Reserved.
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-green-400 mx-2 transition-colors duration-300">Home</a>
          <a href="#" className="text-gray-400 hover:text-green-400 mx-2 transition-colors duration-300">Cookies</a>
          <a href="#" className="text-gray-400 hover:text-green-400 mx-2 transition-colors duration-300">Help</a>
          <a href="#" className="text-gray-400 hover:text-green-400 mx-2 transition-colors duration-300">FAQs</a>
        </div>
        {/* Developed by Section */}
        <div className="mt-8 text-gray-400">
  Developed by 
  <a 
    href="https://www.linkedin.com/in/talib-raath" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-green-400 hover:text-green-600 transition-colors duration-300"
  >
    Talib Raath
  </a>
</div>

      </div>
    </footer>

    </>
  );
}
