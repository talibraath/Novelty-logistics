import Image from "next/image";
import boxTruckImage from "../../public/images/boxTruckImage.jpg"; // Replace with actual image path
import dryVanImage from "../../public/images/dryVanImage.jpg"; // Replace with actual image path
import reeferTruckImage from "../../public/images/reeferTruckImage.jpg"; // Replace with actual image path
import flatbedTruckImage from "../../public/images/flatbedTruckImage.jpg"; // Replace with actual image path

export default function TruckCharges() {
  const trucks = [
    {
      name: "Box Truck",
      charge: "7%",
      image: boxTruckImage,
    },
    {
      name: "Dry Van",
      charge: "4%",
      image: dryVanImage,
    },
    {
      name: "Reefer Truck",
      charge: "4%",
      image: reeferTruckImage,
    },
    {
      name: "Flat Bed Truck",
      charge: "4%",
      image: flatbedTruckImage,
    },
  ];

  return (
    <div id = 'trucks' className="container mx-auto py-12">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-green-500">
        Our Truck Charges
      </h2>
      <p className="text-center text-lg text-gray-400 mb-12">
        We provide different types of trucks for your business needs at the most competitive rates.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {trucks.map((truck, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
          >
            <div className="w-full h-56 relative">
              <Image
                src={truck.image}
                alt={`${truck.name}`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
            </div>
            <div className="p-6 bg-gray-900 rounded-b-lg">
              <h3 className="text-xl font-bold text-white mb-2">{truck.name}</h3>
              <p className="text-gray-400">
                We are charging <span className="text-green-400">{truck.charge}</span> for {truck.name.toLowerCase()}.
              </p>
            </div>
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-lg">
              {truck.charge} Charge
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
