import React from "react";
import Image from "next/image";

const data = [
  {
    name: "description",
    src: "https://images.sonder.com/image/upload/q_auto:eco,c_scale,dpr_auto,f_auto/v1738258228/sondercom/homepage/stories_section/pedro-1024x595.jpg",
  },
  {
    name: "description",
    src: "https://images.sonder.com/image/upload/q_auto:eco,c_scale,dpr_auto,f_auto/v1738258229/sondercom/homepage/stories_section/62-CEQ-HELE16-NEIGHBOURHOOD-1024x683.jpg",
  },
  {
    name: "description",
    src: "https://images.sonder.com/image/upload/q_auto:eco,c_scale,dpr_auto,f_auto/v1738258229/sondercom/homepage/stories_section/62-MIA-WASH1050-NEIGHBORHOOD-2-scaled.jpg",
  },
  {
    name: "description",
    src: "https://images.sonder.com/image/upload/q_auto:eco,c_scale,dpr_auto,f_auto/v1738258228/sondercom/homepage/stories_section/097-FLR-LUNG26-Neighborhood-1024x683.jpg",
  },
];

const BlogSection = () => {
  return (
    <div className="max-w-7xl w-full space-y-6">
      <h1 className="heading-style">Sonder stories</h1>
      <p className="paragraph-style">
        From the latest news to travel inspiration, learn more about the world
        of Sonder.
      </p>

      <div className="grid grid-cols-4 gap-7 ">
        {/* <div className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-[#fff] to-transparent z-10 pointer-events-none" /> */}
        {data.map((location, index) => (
          <div
            key={index}
            className=" overflow-hidden flex flex-col justify-between gap-2"
          >
            <div className="relative w-full h-48">
              <Image
                src={location.src}
                alt={location.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="paragraph-style">{location.name}</h3>
            <a href="#" className="underline paragraph-style">
              Continue Reading
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center w-full my-16">
        <button className="rounded-4xl py-3 px-10 bg-teal-900 hover:bg-teal-600 text-white font-gtamerica">
          Read the blog
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
