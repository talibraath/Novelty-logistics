"use client";
import Head from 'next/head';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check local storage to see if the user has visited before
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem('hasVisited', 'true'); // Set the flag so it doesn't show again
    }
  }, []);

  // Redirect to the verification page
  const handleVerify = () => {
    setIsOpen(false);
    router.push('/verification'); // Adjust the path to your verification page
  };

  // Close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null; // Don't render modal if it's closed

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-1/3">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center text-gray-900">
          Verify Your Documents
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-700 mb-6">
        Verify your documents for full access to our services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleVerify}
            className="bg-green-600 text-white w-full sm:w-auto px-4 py-3 rounded-lg hover:bg-green-700 transition duration-200 shadow-md"
          >
            Verify Now
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-600 text-white w-full sm:w-auto px-4 py-3 rounded-lg hover:bg-gray-700 transition duration-200 shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
