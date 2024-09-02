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
            Please click the button below to fill out the verification form and upload your documents.
          </p>
          <div className="mb-6 text-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfFKYznArHAGo3rpxltnWopvvSnBOX0MfUjQxaP4TS5VKqxhw/viewform?usp=sf_link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button 
                type="button" 
                className="py-4 px-6 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none transition ease-in-out duration-150"
              >
                Open Verification Form
              </button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
