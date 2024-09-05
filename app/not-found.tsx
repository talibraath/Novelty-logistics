// pages/404.js
"use client"
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import { useRouter } from 'next/navigation';

export default function Custom404() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  return (
    <>
        <Header/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Page does not exist</h1>
        <p className="mb-6 text-gray-600">
          Oops! It seems like the page you’re looking for doesn’t exist.
        </p>
        <button
          onClick={goToHome}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Go Back to Home
        </button>
      </div>
    </div>

    <Footer/>
    </>

  );
}
