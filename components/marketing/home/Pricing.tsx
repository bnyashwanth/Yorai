import React from "react";
import { ArrowRight } from "lucide-react";

function Pricing() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-15">
      {/* Changed to a specific grid ratio for better spacing */}
      <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-12">
        
        {/* Left Side (Takes up 2/5 columns) */}
        <div className="md:col-span-2">
          <h1 className="text-3xl lg:text-4xl font-medium text-[#424242] mb-6">
            Unbeatable pricing
          </h1>

          <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a
            href="#"
            className="group flex items-center gap-2 text-[#387ed1] text-lg font-medium hover:text-blue-800 transition"
          >
            See pricing
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right Side (Takes up 3/5 columns) */}
        <div className="md:col-span-3 flex items-center justify-between pl-4">
          
          {/* Box 1 */}
          <div className="flex items-center">
            <img
              src="/media/images/pricing0.svg"
              alt="0"
              className="w-24 lg:w-32" 
            />
            <p className="text-[11px] lg:text-xs text-gray-500 leading-tight -ml-1.25">
              Free account<br />opening
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex items-center">
            <img
              src="/media/images/pricing0.svg"
              alt="0"
              className="w-24 lg:w-32"
            />
            <p className="text-[11px] lg:text-xs text-gray-500 leading-tight -ml-1.25">
              Free equity delivery<br />and direct mutual funds
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex items-center">
            <img
              src="/media/images/intradayTrades.svg"
              alt="20"
              className="w-24 lg:w-32"
            />
            <p className="text-[11px] lg:text-xs text-gray-500 leading-tight -ml-1.25">
              Intraday and<br />F&O
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pricing;