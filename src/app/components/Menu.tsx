"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/assets/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-[#eeebc4] top-16 right-0 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-10">
          <Link href="/" className="border-b-[1px] border-gray-600">
            About us
          </Link>
          <Link href="/shop" className="border-b-[1px] border-gray-600">
            Business and groups
          </Link>
          <Link href="/deals" className="border-b-[1px] border-gray-600">
            Support
          </Link>
          <Link href="/about" className="border-b-[1px] border-gray-600">
            Responsibility
          </Link>
          <Link href="/contact" className="border-b-[1px] border-gray-600">
            Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
