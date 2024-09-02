import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-cover bg-center bg-no-repeat py-16" style={{ backgroundImage: "url('/image/hero.jpg')" }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          
          {/* Contact Information */}
          <div className="w-full md:w-1/2 bg-black bg-opacity-50 p-10 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-4">CONTACT</h3>
            <h2 className="text-4xl font-bold mb-6">Online Contact With Us</h2>
            <p className="mb-6">
              For online assistance, you can reach out to us through various channels, 
              including email, telephone support, and online case submissions, tailored to 
              your specific needs and concerns.
            </p>
            <a href="#" className="border border-white text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black">
              Read More
            </a>
          </div>
          
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-black bg-opacity-50 p-10 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded-lg bg-transparent border border-white placeholder-gray-300 text-white" 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 rounded-lg bg-transparent border border-white placeholder-gray-300 text-white" 
                />
              </div>
              <input 
                type="text" 
                placeholder="Phone Number" 
                className="w-full p-3 rounded-lg bg-transparent border border-white placeholder-gray-300 text-white mb-4" 
              />
              <textarea 
                placeholder="Special Request" 
                className="w-full p-3 rounded-lg bg-transparent border border-white placeholder-gray-300 text-white mb-4" 
                rows = {5}
              ></textarea>
              <div className="flex items-center mb-4">
                <input 
                  type="checkbox" 
                  id="opt-in" 
                  className="mr-2" 
                />
                <label htmlFor="opt-in" className="text-gray-300">OPT-in me for text message</label>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
