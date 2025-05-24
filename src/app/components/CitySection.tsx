import React, { useState } from "react";
import Image from "next/image";

const cities = [
  {
    name: "London",
    image:
      "https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:good,w_400/catalina/homepage/city_grid/London.jpg",
  },
  {
    name: "New York City",
    image:
      "https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:eco,w_600/catalina/homepage/city_grid/New_York_City_-_Featured.png",
  },
  {
    name: "Los Angeles",
    image:
      "https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:good,w_400/catalina/homepage/city_grid/Los_Angeles.jpg",
  },
  {
    name: "Dubai",
    image:
      "https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:good,w_400/catalina/homepage/city_grid/Dubai.jpg",
  },
  {
    name: "Montreal",
    image:
      "https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:good,w_400/catalina/homepage/city_grid/Montreal.jpg",
  },
];

const locations = [
  {
    name: "Amsterdam",
    src: "https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:good,w_400/catalina/homepage/city_grid/Amsterdam.jpg",
  },
  {
    name: "Atlanta",
    src: "https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:good,w_400/catalina/homepage/city_grid/Atlanta.jpg",
  },
  {
    name: "Austin",
    src: "https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:good,w_400/catalina/homepage/city_grid/Austin.jpg",
  },
  {
    name: "Barcelona",
    src: "https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:good,w_400/catalina/homepage/city_grid/Barcelona.jpg",
  },
  {
    name: "Boca Raton",
    src: "https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:good,w_400/catalina/homepage/city_grid/Boca_Raton.jpg",
  },
  {
    name: "Boston",
    src: "https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:good,w_400/catalina/homepage/city_grid/Boston.jpg",
  },
  {
    name: "Cannes",
    src: "https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:good,w_400/catalina/homepage/city_grid/Cannes.jpg",
  },
  {
    name: "Chicago",
    src: "https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:good,w_400/catalina/homepage/city_grid/Chicago.jpg",
  },
];

const CitySection = () => {
  const [isViewed, setIsViewed] = useState(false);
  return (
    <div className="max-w-7xl w-full space-y-6">
      <h1 className="heading-style">A world of choice</h1>
      <p className="paragraph-style">
        Space just for you, or your entire crew. Choose from <br /> apartments
        and boutique hotels in over 40 cities around
        <br /> the world.
      </p>
      <div className="grid grid-cols-3 gap-10">
        {/* London */}
        <div className="">
          <Image
            src={cities[0].image}
            alt={cities[0].name}
            className="w-full h-48 object-cover"
            width={400} // Adjust width as needed
            height={192} // Adjust height to match h-48 (48 * 4 = 192px)
          />
          <div className="heading-style">
            <p className="text-2xl my-3">{cities[0].name}</p>
          </div>
        </div>

        {/* New York City - spans 2 columns */}
        <div className="row-span-2">
          <Image
            src={cities[1].image}
            alt={cities[1].name}
            className="w-full h-[360pt] object-cover rounded-tr-[80px]"
            width={400} // Adjust width as needed
            height={368} // Matches h-[368pt]
          />
          <div className="heading-style">
            <p className="text-2xl my-3">{cities[1].name}</p>
          </div>
        </div>

        {/* Los Angeles */}
        <div className="">
          <Image
            src={cities[2].image}
            alt={cities[2].name}
            className="w-full h-48 object-cover"
            width={400} // Adjust width as needed
            height={192} // Adjust height to match h-48 (48 * 4 = 192px)
          />
          <div className="heading-style">
            <p className="text-2xl my-3">{cities[2].name}</p>
          </div>
        </div>

        {/* Dubai */}
        <div className="">
          <Image
            src={cities[3].image}
            alt={cities[3].name}
            className="w-full h-48 object-cover"
            width={400} // Adjust width as needed
            height={192} // Adjust height to match h-48 (48 * 4 = 192px)
          />
          <div className="heading-style">
            <p className="text-2xl my-3">{cities[3].name}</p>
          </div>
        </div>

        {/* Montreal */}
        <div className="">
          <Image
            src={cities[4].image}
            alt={cities[4].name}
            className="w-full h-48 object-cover"
            width={400} // Adjust width as needed
            height={192} // Adjust height to match h-48 (48 * 4 = 192px)
          />
          <div className="heading-style">
            <p className="text-2xl my-3">{cities[4].name}</p>
          </div>
        </div>
      </div>

      {!isViewed ? (
        <div className="flex justify-center items-center w-full mb-16">
          <button
            className="rounded-4xl py-3 px-10 bg-teal-900 hover:bg-teal-600 text-white font-miller"
            onClick={() => setIsViewed(true)}
          >
            View all cities
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 mb-16">
          {locations.map((location, index) => (
            <div key={index} className=" overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={location.src}
                  alt={location.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="heading-style">
                <p className="text-2xl my-3">{location.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CitySection;
