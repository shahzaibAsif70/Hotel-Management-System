import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-[#073937] text-sm text-white">
      <div className="flex justify-between mb-10" style={{ height: "40px" }}>
        <Image
          src="https://images.sonder.com/image/upload/q_100,f_auto,e_sharpen:100,dpr_2.0/v1737485839/sondercom/partners/sonderByMarriottLogo.png"
          alt="Logo"
          width={130}
          height={130}
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/* Left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-xs text-gray-300">COMPANY</h1>
            <div className="flex flex-col gap-3 mt-4 text-base">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
        </div>
        {/* Center */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="font-medium text-xs text-gray-300">SUPPORT</h1>
            <div className="flex flex-col gap-3 mt-4 text-base">
              <Link href="/">Help Center</Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col">
          <h1 className="font-medium text-xs text-gray-300">SOCIAL</h1>
          <div className="flex gap-6 mt-4">
            <Image
              src="/facebook.png"
              alt=""
              width={16}
              height={16}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <Image
              src="/instagram.png"
              alt=""
              width={16}
              height={16}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <Image
              src="/x.png"
              alt=""
              width={16}
              height={16}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="font-medium text-xs text-gray-300">LANGUAGE</h1>
            <div className="flex flex-col gap-3 mt-4 text-base">
              <span className="font-medium">United States | English</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-xs text-gray-300">CURRENCY</h1>
            <div className="flex flex-col gap-3 mt-4 text-base">
              <span className="font-medium">$ USD</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-16">
        <div>Ⓒ 2025 Sonder Holdings Inc. All rights reserved.</div>
        <div className="flex flex-col gap-2 md:flex-row">
          <div>
            <span className="text-gray-500 mr-5">+1 617-300-0956</span>
          </div>
          <div>
            <span className="text-gray-500 mr-5">Terms of service</span>
          </div>
          <div>
            <span className="text-gray-500 mr-5">Privacy policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
