"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#1a202c] shadow-lg' : 'bg-transparent'}`}>
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
              <span>(507) 677-5881</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>  jordandispatch30@gmail.com</span>
            </div>
          </div>
          <div className="flex space-x-3">
            <Link href="https://twitter.com" passHref><FaTwitter className="hover:text-gray-400 transition-colors duration-300" /></Link>
            <Link href="https://facebook.com" passHref><FaFacebookF className="hover:text-gray-400 transition-colors duration-300" /></Link>
            <Link href="https://linkedin.com" passHref><FaLinkedinIn className="hover:text-gray-400 transition-colors duration-300" /></Link>
            <Link href="https://instagram.com" passHref><FaInstagram className="hover:text-gray-400 transition-colors duration-300" /></Link>
            <Link href="https://youtube.com" passHref><FaYoutube className="hover:text-gray-400 transition-colors duration-300" /></Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`container mx-auto flex justify-between items-center py-4 px-5 lg:px-8 transition-colors duration-500 ${isScrolled ? 'bg-[#1a202c] text-white' : 'bg-transparent text-white'}`}>
        <Link href="/">
          <Image 
            src="/images/logo.jpg" 
            alt="Novelty Logistics Logo" 
            width={100} 
            height={50} 
            className="object-contain transition-transform transform hover:scale-105"
          />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none z-50">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Backdrop Blur Effect */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-40 transition-opacity duration-300 ease-in-out" onClick={toggleMenu}></div>
        )}

        {/* Navigation Links with Glassmorphism and Smooth Animation */}
        <nav className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#1a202c] bg-opacity-90 backdrop-blur-md shadow-xl transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50 lg:relative lg:translate-x-0 lg:flex lg:items-center lg:space-x-4 text-sm lg:text-base font-semibold lg:bg-transparent`}>
          <ul className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-4 items-center mt-24 lg:mt-0 px-5 lg:px-0">
            <li onClick={handleLinkClick} className="hover:scale-105 transition-transform duration-300">
              <Link href="/" className="hover:text-[#7fe400] transition-colors duration-300">Home</Link>
            </li>
            <li onClick={handleLinkClick} className="hover:scale-105 transition-transform duration-300">
              <Link href="/verification" className="hover:text-[#7fe400] transition-colors duration-300">Verification</Link>
            </li>
            <li onClick={handleLinkClick} className="hover:scale-105 transition-transform duration-300">
              <Link href="/#trucks" className="hover:text-[#7fe400] transition-colors duration-300">Trucks</Link>
            </li>
            <li onClick={handleLinkClick} className="hover:scale-105 transition-transform duration-300">
              <Link href="/#services" className="hover:text-[#7fe400] transition-colors duration-300">Services</Link>
            </li>
            <li onClick={handleLinkClick} className="hover:scale-105 transition-transform duration-300">
              <Link href="/#team" className="hover:text-[#7fe400] transition-colors duration-300">Team</Link>
            </li>
            <li onClick={handleLinkClick} className="hover:scale-105 transition-transform duration-300">
              <Link href="/#about" className="hover:text-[#7fe400] transition-colors duration-300">About</Link>
            </li>
            

            <li onClick={handleLinkClick}>
              <Link href="#contact">
                <button className="bg-[#7fe400] hover:bg-[#6fc100] text-black py-1.5 px-4 rounded-full transition-transform transform hover:scale-105 duration-300">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
