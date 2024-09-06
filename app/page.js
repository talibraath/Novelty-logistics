import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Team from './components/Team';
import About from './components/About';
import Modal from './components/Modal'; // Import the modal component
import TruckCharges from "./components/TruckCharges";
import Head from 'next/head'; // Import Head for meta tags

export default function Home() {
  return (
    <>
      <Head>
        <title>Novelty Logistics - Expert Truck Dispatching Services</title>
        <meta 
          name="description" 
          content="Novelty Logistics provides top-tier truck dispatching services to trucking businesses across the nation. Explore our range of services, including load management, personalized dispatching, and cost-effective solutions." 
        />
        <meta 
          name="keywords" 
          content="truck dispatching, logistics services, trucking solutions, dispatching services, load management, Novelty Logistics, truck charges, personalized dispatch" 
        />
        <meta name="author" content="Novelty Logistics" />
        <meta property="og:title" content="Novelty Logistics - Expert Truck Dispatching Services" />
        <meta property="og:description" content="Explore Novelty Logistics' truck dispatching services, tailored to meet the unique needs of trucking businesses nationwide. Efficient, reliable, and transparent pricing." />
        <meta property="og:url" content="https://noveltylogistics.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      <Hero />
      
      {/* About Section */}
      <About />

      {/* Truck Charges Section */}
      <TruckCharges />

      {/* Services Section */}
      <Services />

      {/* Team Section */}
      <Team />

      {/* Contact Section */}
      <Contact />

      <Footer />

      {/* Modal that opens when the user is not signed in */}
      <Modal />
    </>
  );
}
