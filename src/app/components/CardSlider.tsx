"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  className: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Wonderful stay and was blown away by the thoughtful design.",
    name: "Alex",
    location: "Berlin",
    className: "rounded-bl-[80px] bg-green-100 text-green-900",
  },
  {
    quote:
      "Absolutely perfect for a stay whether you’re a solo traveler, couple or a family.",
    name: "Joanne",
    location: "Rome",
    className: "rounded-tr-[80px] bg-yellow-100 text-yellow-900",
  },
  {
    quote:
      "Love the app! It works like magic and makes the experience seamless.",
    name: "Jimena",
    location: "Miami",
    className: "rounded-tl-[80px] bg-orange-100 text-orange-900",
  },
  {
    quote: "A beautiful experience in the heart of the city.",
    name: "Mark",
    location: "Paris",
    className: "rounded-br-[80px] bg-blue-100 text-blue-900",
  },
  {
    quote: "Everything was seamless from check-in to checkout.",
    name: "Riya",
    location: "Delhi",
    className: "rounded-tr-[80px] bg-purple-100 text-purple-900",
  },
];

export default function CardSlider() {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => setStartIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setStartIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const visibleCards = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  const totalSets = testimonials.length;
  const currentSet = startIndex;

  return (
    <div className="w-full max-w-7xl">
      <h1 className="heading-style">Every stay has a story</h1>
      <p className="max-w-[450px] paragraph-style my-12">
        But don’t just take our word for it — see what our guests have to say.
      </p>
      <div className="relative">
        {/* Gradient fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-80 bg-gradient-to-r from-[#fff] to-transparent z-10 pointer-events-none" />
        {/* Gradient fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-[#fff] to-transparent z-10 pointer-events-none" />

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 text-2xl text-black"
        >
          {"<"}
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 text-2xl text-black"
        >
          {">"}
        </button>

        <div className="flex justify-between gap-6 transition-all">
          {visibleCards.map((t, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between p-10 h-72 transition-opacity duration-500 ease-in-out ${t.className}`}
            >
              <p className="text-xl">“{t.quote}”</p>
              <p className="mt-4 font-bold text-sm">
                {t.name}
                <br />
                <span className="font-normal">{t.location}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentSet
                ? "bg-black"
                : "border-black border-[1px] bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
