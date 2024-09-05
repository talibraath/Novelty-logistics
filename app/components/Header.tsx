"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const isLoggedIn = typeof window !== 'undefined' && !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/signin');
  };

  // Add a scroll event listener to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#1a202c] shadow-lg' : 'bg-[#4a5568] bg-opacity-80'}`}>
      {/* Top Bar */}
      <div className="bg-[#2d3748] text-white text-xs lg:text-sm py-1 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>230 OCEAN PKWY APT C5 BROOKLYN, NY 11218</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>(347) 544-9476</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>ronniedispatch20@gmail.com</span>
            </div>
          </div>
          <div className="flex space-x-3">
            <Link href="https://twitter.com" passHref><FaTwitter className="hover:text-gray-400" /></Link>
            <Link href="https://facebook.com" passHref><FaFacebookF className="hover:text-gray-400" /></Link>
            <Link href="https://linkedin.com" passHref><FaLinkedinIn className="hover:text-gray-400" /></Link>
            <Link href="https://instagram.com" passHref><FaInstagram className="hover:text-gray-400" /></Link>
            <Link href="https://youtube.com" passHref><FaYoutube className="hover:text-gray-400" /></Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`container mx-auto flex justify-between items-center py-2 px-5 lg:px-8 transition-colors duration-500 ${isScrolled ? 'bg-opacity-100 text-white' : 'bg-opacity-80 text-white'}`}>
        <Link href="/">
          <Image 
            src="/images/logo.jpg" 
            alt="Novelty Logistics Logo" 
            width={100} 
            height={50} 
            className="object-contain transition-transform transform hover:scale-105"
          />
        </Link>
        <nav>
          <ul className="flex space-x-4 text-sm lg:text-base font-semibold">
            <li><Link href="/" className="hover:text-[#7fe400] transition-colors duration-300">Home</Link></li>
            <li><Link href="/#about" className="hover:text-[#7fe400] transition-colors duration-300">About</Link></li>
            <li><Link href="/#services" className="hover:text-[#7fe400] transition-colors duration-300">Services</Link></li>
            <li><Link href="/#portfolio" className="hover:text-[#7fe400] transition-colors duration-300">Portfolio</Link></li>
            <li><Link href="/#team" className="hover:text-[#7fe400] transition-colors duration-300">Team</Link></li>
            
            {/* Show Verification link only if the user is logged in */}
            {isLoggedIn && (
              <li><Link href="/googleform" className="hover:text-[#7fe400] transition-colors duration-300">Verification</Link></li>
            )}

            <li>
              <Link href="#contact">
                <button className="bg-[#7fe400] hover:bg-[#6fc100] text-black py-1.5 px-4 rounded-full transition-all duration-300">
                  Contact
                </button>
              </Link>
            </li>

            {/* Show Sign In/Sign Out option based on the logged-in status */}
            <li>
              {!isLoggedIn ? (
                <Link href="/signin" className="hover:text-[#7fe400] transition-colors duration-300">Sign In</Link>
              ) : (
                <button onClick={handleLogout} className="hover:text-[#7fe400] transition-colors duration-300">Logout</button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
