import React from "react";

export default function Awards() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/media/images/largestBroker.svg"
            alt="Largest Broker"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="text-gray-600">
          <h1 className="text-4xl font-semibold text-gray-700 mb-6">
            Largest stock broker in India
          </h1>

          <p className="mb-8 leading-7">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* Lists */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            <ul className="space-y-4 list-disc pl-5">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>

            <ul className="space-y-4 list-disc pl-5">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>

          {/* Press Logos */}
          <img
            src="/media/images/pressLogos.png"
            alt="Press Logos"
            className="w-[90%]"
          />
        </div>
      </div>
    </div>
  );
}