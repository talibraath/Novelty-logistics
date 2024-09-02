"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // Explicitly typing error state as string or null
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { // Correctly typing the event
    e.preventDefault();

    try {
      const res = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save the token in localStorage
        localStorage.setItem('token', data.token);

        // Redirect to the home page
        router.push('/');
      } else {
        // If there was an error, display it
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Sign In</h2>
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none transition ease-in-out duration-150"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot your password?
            </a>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <a href="/signup" className="text-indigo-600 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignIn;
