"use client"


import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Check if the user is signed in (for demo purposes, we use localStorage)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsOpen(true); // Open modal if user is not signed in
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4 text-center">Verify Your Documents</h2>
        <p className="text-center mb-6">
          Login to Get Verified your Documents.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleVerify}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Verify Now
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
