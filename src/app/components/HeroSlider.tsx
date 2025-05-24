"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";

const images = [
  "/slider1.webp",
  "/slider2.webp",
  "/slider3.webp",
  "/slider4.webp",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (
    city: string,
    dates: { checkIn: Date; checkOut: Date },
    guests: number
  ) => {
    console.log("Search:", { city, dates, guests });
  };

  return (
    <div className="relative h-[95vh] w-full">
      <Image
        src={images[current]}
        alt="Background"
        fill
        className="object-cover transition-opacity duration-1000"
        quality={100}
        priority
      />

      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/70 via-white/50 to-transparent flex items-center">
        <div className="pl-2 md:pl-4 lg:pl-8 xl:pl-16 2xl:pl-32">
          <h1 className="heading-style mb-8">
            <p className="text-7xl">
              A better way <br /> to stay
            </p>
          </h1>
          <p className="paragraph-style">
            A choice of stays in the cities you love,
            <br /> powered by an app that puts you in control.
            <br /> Now part of Marriott Bonvoy.
          </p>
          <div className="mt-6 text-sm text-gray-600 absolute bottom-20">
            📍 Sonder The Winfield | <strong>Los Angeles</strong>
          </div>
        </div>
      </div>

      <div className="absolute bottom-21 flex justify-center w-full space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              current === index
                ? "bg-gray-900"
                : "border-black border-[1px] bg-transparent"
            }`}
          />
        ))}
      </div>

      <div className="px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 absolute -bottom-16 w-full">
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
}
