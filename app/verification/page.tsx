"use client";

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function VerificationPage() {
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  // Simulate loading state for demonstration
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulating a 1-second loading time
  }, []);

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Verification - Novelty Logistics</title>
          <meta
            name="description"
            content="Verify your information with Novelty Logistics by filling out the verification form and uploading necessary documents. Quick and secure verification process for all users."
          />
          <meta name="keywords" content="verification, logistics verification, verify documents, trucking verification, Novelty Logistics" />
          <meta property="og:title" content="Verification - Novelty Logistics" />
          <meta property="og:description" content="Complete the verification process by submitting your documents securely through the form." />
          <meta property="og:url" content="https://noveltylogistics.vercel.app/verification" />
          <meta property="og:type" content="website" />
        </Head>
        <Header />
        <section className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600 border-solid"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Verification - Novelty Logistics</title>
        <meta
          name="description"
          content="Verify your identity with Novelty Logistics. Please fill out the verification form and upload your necessary documents to ensure secure and quick processing."
        />
        <meta name="keywords" content="verification, logistics verification, verify documents, trucking, Novelty Logistics" />
        <meta property="og:title" content="Verification - Novelty Logistics" />
        <meta property="og:description" content="Submit your documents securely through the verification form for quick processing." />
        <meta property="og:url" content="https://noveltylogistics.vercel.app/verification" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <section className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center py-10">
        <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-lg animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-center text-indigo-600">
            Verification
          </h2>
          <p className="mb-8 text-center text-gray-600 lg:text-lg">
            Please click the button below to fill out the verification form and upload your documents securely.
          </p>
          <div className="mb-6 text-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfFKYznArHAGo3rpxltnWopvvSnBOX0MfUjQxaP4TS5VKqxhw/viewform?usp=sf_link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button 
                type="button" 
                className="py-4 px-6 rounded-lg bg-[#7fe400] text-black font-bold hover:bg-[#6fc100] focus:outline-none focus:ring-2 focus:ring-green-300 transition-all ease-in-out duration-300 transform hover:scale-105 shadow-md"
                aria-label="Open Verification Form"
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
