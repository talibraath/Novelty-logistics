"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function VerificationPage() {
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to the sign-in page if not logged in
      router.push('/signin');
    } else {
      // If logged in, set loading to false to render the page
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    // While checking authentication, render nothing or a loading spinner
    return null; // Or you could return a loading spinner component
  }

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-lg">
          <h2 className="text-4xl font-extrabold mb-6 text-center text-indigo-600">Verification</h2>
          <p className="mb-8 text-center text-gray-600">
            Please provide your details and upload the required documents for verification.
          </p>
          <form>
            {/* Your form fields */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-4 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">Upload Documents</label>
              <input
                type="file"
                className="w-full p-4 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:outline-none"
                multiple
                required
              />
              <small className="block mt-2 text-gray-500">
                Accepted formats: PDF, JPG, PNG. Max size: 5MB.
              </small>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">Document Type</label>
              <select
                className="w-full p-4 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:outline-none"
                required
              >
                <option value="">Select document type</option>
                <option value="passport">Passport</option>
                <option value="id">ID Card</option>
                <option value="driver_license">Driver's License</option>
                <option value="utility_bill">Utility Bill</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">Additional Notes</label>
              <textarea
                placeholder="Enter any additional information"
                className="w-full p-4 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:outline-none"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none transition ease-in-out duration-150"
            >
              Submit for Verification
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
