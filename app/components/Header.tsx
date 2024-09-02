"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Header() {
  const router = useRouter();

  // Check if the user is logged in by checking for a token in localStorage
  const isLoggedIn = typeof window !== 'undefined' && !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    router.push('/signin'); // Redirect to the signin page
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#0a1128] text-white text-sm py-2">
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
      <div className="bg-[#020c1b] text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image 
              src="/images/logo.jpg" 
              alt="Novelty Logistics Logo" 
              width={120} 
              height={60} 
              className="object-contain"
            />
          </Link>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li><Link href="/" className="hover:text-[#7fe400]">Home</Link></li>
              <li><Link href="/#about" className="hover:text-[#7fe400]">About</Link></li>
              <li><Link href="/#services" className="hover:text-[#7fe400]">Services</Link></li>
              <li><Link href="/#portfolio" className="hover:text-[#7fe400]">Portfolio</Link></li>
              <li><Link href="/#team" className="hover:text-[#7fe400]">Team</Link></li>
              
              {/* Show Verification link only if the user is logged in */}
              {isLoggedIn && (
                <li><Link href="/googleform" className="hover:text-[#7fe400]">Verification</Link></li>
              )}

              <li>
                <Link href="#contact">
                  <button className="bg-[#7fe400] hover:bg-[#6fc100] text-black py-2 px-4 rounded">
                    Contact
                  </button>
                </Link>
              </li>

              {/* Show Sign In/Sign Out option based on the logged-in status */}
              <li>
                {!isLoggedIn ? (
                  <Link href="/signin" className="hover:text-[#7fe400]">Sign In</Link>
                ) : (
                  <button onClick={handleLogout} className="hover:text-[#7fe400]">Logout</button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
