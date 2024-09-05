import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="relative bg-cover bg-center h-[500px] lg:h-[700px] flex items-center justify-center" 
      style={{ backgroundImage: "url('/images/hero1.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>

      <div className="relative z-10 text-center text-white animate-fadeInUp">
        {/* Heading with shadow and animation */}
        <h1 className="text-4xl lg:text-7xl font-extrabold text-white animate-slideInDown tracking-wide drop-shadow-md">
          Expert Dispatching Services!
        </h1>

        {/* Subtext */}
        <p className="mt-4 lg:mt-6 text-md lg:text-2xl text-gray-300 max-w-xl mx-auto leading-relaxed tracking-wide animate-slideInUp delay-200">
          Efficient, reliable truck dispatching with personalized service, competitive pricing, 
          and a focus on safety and sustainability.
        </p>

        {/* Call to Action Button */}
        <button className="mt-8 bg-[#7fe400] hover:bg-[#6fc100] text-black py-3 px-8 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-110 duration-300 ease-in-out animate-bounceIn">
          Learn More
        </button>
      </div>
    </section>
  );
}
