import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Team from './components/Team';
import About from './components/About';
import Modal from './components/Modal'; // Import the modal component
import TruckCharges from "./components/TruckCharges";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <TruckCharges/>
      <Services />
      <Team />
      <Contact />
      <Footer />

      {/* Modal that opens when the user is not signed in */}
      <Modal />
    </>
  );
}
