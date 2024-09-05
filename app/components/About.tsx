import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image 
            src="/images/office.jpg" 
            alt="About Us" 
            width={500} 
            height={300} 
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-xl font-semibold text-green-500 mb-2">ABOUT US</h3>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Welcome to <span className="text-green-500">Novelty Logistics</span>
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            At our truck dispatching company, we are dedicated to providing top-tier dispatch 
            services tailored to the unique needs of trucking businesses across the nation. 
            Our commitment to transparent pricing and unwavering support sets us apart in the industry.
          </p>
          <ul className="text-gray-700 text-lg mb-6 space-y-3">
            <li>➔ Efficiency</li>
            <li>➔ Resource Allocation</li>
            <li>➔ Customization</li>
            <li>➔ Cost-Effectiveness</li>
            <li>➔ Tailored Support</li>
            <li>➔ 24/7 Service</li>
          </ul>
          <a 
            href="/about" 
            className="inline-block bg-green-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
          >
            Read More
          </a>
        </div>
        
      </div>
    </section>
  );
}
