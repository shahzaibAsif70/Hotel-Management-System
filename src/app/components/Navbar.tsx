"use client";

import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import { useSearchBar } from "../context/SearchBarContext";

const Navbar = () => {
  const { showSearchBar } = useSearchBar();
  return (
    <div className="h-16 px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 fixed z-50 bg-white w-full shadow-xl">
      {/* Mobile */}
      <div className="h-full flex justify-between items-center md:hidden">
        <Link href="/">
          <Image
            src="https://images.sonder.com/image/upload/q_100,f_auto,e_sharpen:100,dpr_2.0/v1737485839/sondercom/partners/sonderByMarriottLogo.png"
            alt="Logo"
            width={130}
            height={130}
          />
          {/* <div className="text-2xl tracking-wide">LAMA</div> */}
        </Link>
        <Menu />
      </div>
      {/* Bigger Screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className=" flex items-center gap-8">
            <Image
              src="https://images.sonder.com/image/upload/q_100,f_auto,e_sharpen:100,dpr_2.0/v1737485839/sondercom/partners/sonderByMarriottLogo.png"
              alt="Logo"
              width={130}
              height={130}
            />
            {showSearchBar && (
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Search city"
                  className="border border-gray-300 rounded-3xl px-5 py-2"
                />
                <button className="bg-teal-900 text-white rounded-3xl px-5 py-2">
                  Search
                </button>
              </div>
            )}
            {/* <div className="text-2xl tracking-wide">LAMA</div> */}
          </Link>
        </div>
        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex justify-between items-center gap-8">
          <div className="hidden xl:flex gap-4 paragraph-style justify-end w-full ">
            <Link href="/">About us</Link> {" | "}
            <Link href="/shop">Business and groups</Link> {" | "}
            <Link href="/deals">Support</Link> {" | "}
            <Link href="/about">Responsibility</Link> {" | "}
            <Link href="/contact">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
