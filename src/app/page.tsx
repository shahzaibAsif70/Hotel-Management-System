"use client";

import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import SearchBar from "./components/SearchBar";
import EmbedVideoSection from "./components/EmbedVideoSection";
import CardSlider from "./components/CardSlider";
import CitySection from "./components/CitySection";
import BlogSection from "./components/BlogSection";
import VideoSection from "./components/VideoSection";
import { useSearchBar } from "./context/SearchBarContext";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { setShowSearchBar } = useSearchBar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSearchBar(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [setShowSearchBar]);
  return (
    <main>
      <div ref={heroRef}>
        <HeroSlider />
      </div>

      <div className="mt-24 px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
        <CitySection />
      </div>

      <div className="mt-24 bg-[#e7eade] px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
        <EmbedVideoSection />
        <hr />
        <div className="py-20 flex justify-center items-center gap-60">
          <Image
            src="https://images.sonder.com/image/upload/v1743009891/sondercom/tripadvisor/award-badges/TripAdvisor-badge2024.png"
            alt="Logo 1"
            width={100}
            height={48}
          />
          <Image
            src="/google_reviews.svg"
            alt="Logo 2"
            width={150}
            height={98}
          />
          <Image
            src="https://images.sonder.com/image/upload/v1738007664/sondercom/homepage/tech_value_props/Rolling_Stone-Travel_Wellness_Awards-Logo-2024.png"
            alt="Logo 3"
            width={100}
            height={48}
          />
        </div>
      </div>

      <div className="my-24 bg-[#e7eade] mx-2 md:mx-4 lg:mx-8 xl:mx-16 2xl:mx-32 rounded-xl">
        <div className="flex justify-between items-center px-8 py-5">
          <Image
            src="https://images.sonder.com/image/upload/v1729653242/sondercom/partners/marriott_bonvoy_logo_black.png"
            alt="Logo 1"
            width={140}
            height={60}
          />
          <div className="heading-style">
            <p className="text-2xl">
              Join Marriott Bonvoy® and earn points toward free nights for your
              stays.
            </p>
          </div>
          <button className="bg-transparent rounded-3xl px-5 py-2 border-2 border-teal-900 text-teal-900">
            Join Today!
          </button>
        </div>
      </div>

      <VideoSection />

      <div className="mt-24 px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
        <CardSlider />
      </div>
      <div className="mt-24 px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
        <BlogSection />
      </div>
    </main>
  );
}
