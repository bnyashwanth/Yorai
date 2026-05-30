// components/Team.tsx

import Image from "next/image";
import React from "react";

const Team: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="border-t border-gray-200 pt-12">
          <h1 className="text-4xl font-semibold text-center text-black">
            People
          </h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16">
          {/* Left */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/media/images/yashwanth.png"
              alt="Yashwanth"
              width={320}
              height={320}
              className="rounded-full object-cover w-64 h-64 md:w-72 md:h-72"
            />

            <h2 className="mt-8 text-2xl font-semibold text-black">
              Yashwanth
            </h2>

            <p className="text-gray-500 mt-2">Founder, CEO</p>
          </div>

          {/* Right */}
          <div className="text-gray-700 text-lg leading-9 space-y-6">
            <p>
              Yashwanth bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader.
            </p>

            <p>
              Today, Zerodha has changed the landscape of the Indian broking
              industry.
            </p>

            <p>
              He is a member of the SEBI Secondary Market Advisory Committee.
            </p>

            <p>Playing basketball is his zen.</p>

            <p>
              Connect on{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Homepage
              </a>{" "}
              /{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                TradingQnA
              </a>{" "}
              /{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;