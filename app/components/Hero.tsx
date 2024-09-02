
import Image from 'next/image';

export default function Hero() {
    return (
      <section 
        className="bg-cover bg-center h-[450px] flex items-center justify-center" 
        style={{ backgroundImage: "url('/images/hero1.jpg')" }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Expert Dispatching Services!</h1>
          <p className="mt-4 text-lg">
            Efficient, reliable truck dispatching with personalized service, competitive pricing, 
            and a focus on safety and sustainability.
          </p>
        </div>
      </section>
    );
  }
  