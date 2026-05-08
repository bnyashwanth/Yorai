import React from "react";
import { ArrowRight } from "lucide-react";

function Stats() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-15">
      {/* Adjusted grid to 42% text and 58% image ratio */}
      <div className="grid md:grid-cols-[42%_58%] gap-12 lg:gap-8 items-center">
        
        {/* Left Section - Text Content */}
        <div className="lg:pr-10">
          <h1 className="text-[32px] lg:text-[36px] font-medium text-gray-800 mb-12 leading-tight">
            Trust with confidence
          </h1>

          <div className="space-y-10">
            {/* Block 1 */}
            <div>
              <h2 className="text-[20px] font-medium text-gray-800 mb-3">
                Customer-first always
              </h2>
              <p className="text-[16px] text-gray-600 leading-[1.7] font-light">
               That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <h2 className="text-[20px] font-medium text-gray-800 mb-3">
                No spam or gimmicks
              </h2>
              <p className="text-[16px] text-gray-600 leading-[1.7] font-light">
              No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
              </p>
            </div>

            {/* Block 3 */}
            <div>
              <h2 className="text-[20px] font-medium text-gray-800 mb-3">
                The Zerodha universe
              </h2>
              <p className="text-[16px] text-gray-600 leading-[1.7] font-light">
                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
              </p>
            </div>

            {/* Block 4 */}
            <div>
              <h2 className="text-[20px] font-medium text-gray-800 mb-3">
                Do better with money
              </h2>
              <p className="text-[16px] text-gray-600 leading-[1.7] font-light">
                With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - ENLARGED Image & Links */}
        <div className="flex flex-col items-center w-full">
          {/* Increased width from full to 110% to let it slightly dominate the space */}
          <div className="relative w-full flex justify-center">
            <img
              src="/media/images/ecosystem.png"
              alt="Ecosystem"
              className="w-full lg:w-full max-w-none h-auto mb-10 transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
            <a
              href="#"
              className="group flex items-center gap-2 text-[#387ed1] hover:text-[#424242] text-[16px] font-medium transition-colors"
            >
              Explore our products
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#"
              className="group flex items-center gap-2 text-[#387ed1] hover:text-[#424242] text-[16px] font-medium transition-colors"
            >
              Try Kite demo
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Press Logos footer */}
      <div className="mt-20 flex justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <img src="/media/images/pressLogos.png" alt="Press Logos" className="w-full max-w-175" />
      </div>
    </div>
  );
}

export default Stats;