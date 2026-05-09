// components/Hero.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-white  border-gray-200 mb-16-white">
      <div className="max-w-6xl mx-auto px-6 mt-10-white py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Zerodha Projects
        </h1>

        <h3 className="mt-5 text-xl md:text-2xl text-gray-500 font-normal">
          Sleek, modern, and intuitive trading platforms{" "}
        </h3>

        <p className="mt-6 mb-4 text-[19px] text-gray-600">
          Check out our{" "}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
          >
            investment offerings
            <ArrowRight size={18} />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Hero;
