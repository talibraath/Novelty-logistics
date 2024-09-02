import Image from 'next/image';

export default function About() {
    return (
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image src="/images/office.jpg"  alt="About Us" width={500} height={300} />
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-green-600 mb-2">ABOUT US</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-green-600">Novelty Logistics</span>
            </h2>
            <p className="text-gray-700 mb-6">
              At our truck dispatching company, we are dedicated to providing top-tier dispatch 
              services tailored to the unique needs of trucking businesses across the nation. 
              Our commitment to transparent pricing and unwavering support sets us apart in the industry.
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>➔ Efficiency</li>
              <li>➔ Resource Allocation</li>
              <li>➔ Customization</li>
              <li>➔ Cost-Effectiveness</li>
              <li>➔ Tailored Support</li>
              <li>➔ 24/7 Service</li>
            </ul>
            <a href="#" className="inline-block bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700">
              Read More
            </a>
          </div>
          
        </div>
      </section>
    );
  }
  