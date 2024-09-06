import Image from "next/image";
import boxTruckImage from "../../public/images/boxTruckImage.jpg"; // Replace with actual image path
import dryVanImage from "../../public/images/dryVanImage.jpg"; // Replace with actual image path
import reeferTruckImage from "../../public/images/reeferTruckImage.jpg"; // Replace with actual image path
import flatbedTruckImage from "../../public/images/flatbedTruckImage.jpg"; // Replace with actual image path
import flatbedHotshotImage from "../../public/images/flatbedHotshotImage.jpg"; // Replace with actual image path
import stepdeckImage from "../../public/images/stepdeckImage.jpg"; // Replace with actual image path
import Head from "next/head";

export default function TruckCharges() {
  const trucks = [
    {
      name: "Box Truck",
      charge: "7%",
      image: boxTruckImage,
      description: "Box trucks are ideal for small to medium-sized loads, offering flexibility in urban and rural areas."
    },
    {
      name: "Dry Van",
      charge: "4%",
      image: dryVanImage,
      description: "Dry vans are widely used for standard freight, ensuring safe and secure delivery of goods."
    },
    {
      name: "Reefer Truck",
      charge: "4%",
      image: reeferTruckImage,
      description: "Reefer trucks are essential for transporting temperature-sensitive goods, ensuring optimal conditions during transit."
    },
    {
      name: "Flat Bed Truck",
      charge: "4%",
      image: flatbedTruckImage,
      description: "Flatbed trucks are perfect for oversized loads that don't require enclosed transportation."
    },
    {
      name: "Flatbed Hotshot",
      charge: "6%",
      image: flatbedHotshotImage,
      description: "Hotshot trucking services cater to urgent deliveries with smaller, faster vehicles for expedited loads."
    },
    {
      name: "Stepdeck",
      charge: "4%",
      image: stepdeckImage,
      description: "Stepdeck trucks are used for taller loads, offering a lower deck for easier loading of oversized cargo."
    },
  ];

  return (
    <>
      <Head>
        <title>Truck Dispatching Services & Charges - Novelty Logistics</title>
        <meta name="description" content="Explore Novelty Logistics' competitive truck dispatching charges for various trucks, including box trucks, reefer trucks, dry vans, and flatbed trucks. Get the best rates for your business needs." />
        <meta name="keywords" content="truck dispatching services, truck charges, box truck, reefer truck, dry van, flatbed truck, stepdeck truck, hotshot trucking" />
        <meta name="author" content="Novelty Logistics" />
        <meta property="og:title" content="Truck Dispatching Services & Charges - Novelty Logistics" />
        <meta property="og:description" content="Check out the truck dispatching charges for different types of trucks at Novelty Logistics, including box trucks, dry vans, reefer trucks, and more." />
        <meta property="og:url" content="https://noveltylogistics.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>

      <div id="trucks" className="container mx-auto py-12">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-green-500">
          Truck Dispatching Services & Charges
        </h2>
        <p className="text-center text-lg text-gray-400 mb-12">
          We provide various truck types tailored to your business needs at the most competitive rates. Choose from box trucks, reefer trucks, dry vans, flatbeds, and more.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trucks.map((truck, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <div className="w-full h-56 relative">
                <Image
                  src={truck.image}
                  alt={`Image of a ${truck.name.toLowerCase()} used in our trucking services`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
              </div>
              <div className="p-6 bg-gray-900 rounded-b-lg">
                <h3 className="text-xl font-bold text-white mb-2">{truck.name}</h3>
                <p className="text-gray-400">
                  {truck.description}
                </p>
                <p className="text-gray-400">
                  We charge <span className="text-green-400">{truck.charge}</span> for {truck.name.toLowerCase()} services.
                </p>
              </div>
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-lg">
                {truck.charge} Charge
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
