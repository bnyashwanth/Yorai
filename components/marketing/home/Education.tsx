import React from "react";

export default function Education() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-15">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/media/images/education.svg"
            alt="Education"
            className="w-[70%]"
          />
        </div>

        {/* Right Content */}
        <div className="text-gray-600">
          <h1 className="text-4xl font-semibold text-gray-700 mb-6">
            Free and open market education
          </h1>

          <p className="leading-7 mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 font-medium transition cursor-pointer"
          >
            Varsity →
          </a>

          <p className="leading-7 mt-10 mb-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 font-medium transition cursor-pointer"
          >
            TradingQ&A →
          </a>
        </div>
      </div>
    </div>
  );
}