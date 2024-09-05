import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import Services from '../app/components/Services';
import Contact from '../app/components/Contact';
import Footer from '../app/components/Footer';
import Team from '../app/components/Team';
import About from '../app/components/About';




export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team/>
      <Contact />
      <Footer />
    </>
  );
}
