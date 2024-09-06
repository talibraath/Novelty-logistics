import Image from 'next/image';
import Head from 'next/head';

export default function Hero() {
  return (
    <>
      <Head>
        <title>Expert Truck Dispatching Services - Novelty Logistics</title>
        <meta 
          name="description" 
          content="Novelty Logistics provides expert truck dispatching services that prioritize efficiency, reliability, and personalized service. Discover how our competitive pricing and focus on safety make us the best choice for trucking businesses nationwide." 
        />
        <meta name="keywords" content="truck dispatching, expert dispatching services, truck dispatcher, novelty logistics, trucking solutions, logistics services" />
        <meta name="author" content="Novelty Logistics" />
        <meta property="og:title" content="Expert Truck Dispatching Services - Novelty Logistics" />
        <meta property="og:description" content="Get expert truck dispatching services with Novelty Logistics. Efficient, reliable, and focused on safety, our dispatchers provide personalized service tailored to your trucking business needs." />
        <meta property="og:image" content="/images/hero1.jpg" />
        <meta property="og:url" content="https://noveltylogistics.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>

      <section 
        className="relative bg-cover bg-center h-[500px] lg:h-[700px] flex items-center justify-center" 
        style={{ backgroundImage: "url('/images/hero1.jpg')" }}
        aria-label="Hero section featuring expert truck dispatching services"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>

        <div className="relative z-10 text-center text-white animate-fadeInUp">
          {/* SEO-Optimized Heading */}
          <h1 className="text-4xl lg:text-7xl font-extrabold text-white animate-slideInDown tracking-wide drop-shadow-md">
            Expert Truck Dispatching Services
          </h1>

          {/* Subtext with Keywords */}
          <p className="mt-4 lg:mt-6 text-md lg:text-2xl text-gray-300 max-w-xl mx-auto leading-relaxed tracking-wide animate-slideInUp delay-200">
            Providing <strong>efficient</strong> and <strong>reliable truck dispatching</strong> with personalized service, competitive pricing, 
            and a focus on safety and sustainability for trucking businesses nationwide.
          </p>

          {/* Call to Action Button */}
          <a href="/services" aria-label="Learn more about our truck dispatching services">
            <button className="mt-8 bg-[#7fe400] hover:bg-[#6fc100] text-black py-3 px-8 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-110 duration-300 ease-in-out animate-bounceIn">
              Learn More
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
