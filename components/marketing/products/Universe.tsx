// components/Universe.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";

const platforms = [
  {
    image: "/media/images/ZerodhaFundhouse.png",
    description: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    image: "/media/images/sensibullLogo.svg",
    description: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
  },
  {
    image: "/media/images/tijori.svg",
    description: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
  },
  {
    image: "/media/images/streakLogo.png",
    description: "Systematic trading platform that allows you to create and backtest strategies without coding.",
  },
  {
    image: "/media/images/smallcaseLogo.png",
    description: "Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.",
  },
  {
    image: "/media/images/dittoLogo.png",
    description: "Personalized advice on life and health insurance. No spam and no mis-selling.",
  },
];

const Universe: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-[2rem] md:text-[2.2rem] font-medium text-[#424242]">
            The Zerodha Universe
          </h1>

          <p className="mt-3 text-[1.05rem] text-[#666] max-w-3xl mx-auto">
            Extend your trading and investment experience even further with our partner platforms
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Logo Container: Fixed height keeps descriptions aligned */}
              <div className="h-14 flex items-center justify-center mb-5">
                <Image
                  src={platform.image}
                  alt="Platform Logo"
                  width={160}
                  height={60}
                  className="object-contain max-h-20 w-auto"
                />
              </div>

              {/* Description */}
              <p className="text-[0.95rem] text-[#666] leading-[1.6] max-w-72.5">
                {platform.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-20">
          <Link
            href="/signup"
            className="bg-[#387ed1] hover:bg-[#2b64a8] text-white text-[1.1rem] font-medium px-8 py-2.5 rounded-[3px] transition duration-200"
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Universe;