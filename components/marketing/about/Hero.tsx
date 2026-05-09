// components/Hero.tsx

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto mt-10-white px-6">
        {/* Heading */}
        <div className="py-20">
          <h2 className="text-xl md:text-2xl font-medium text-center leading-relaxed text-gray-700">
            We pioneered the discount broking model in India
            <br className="hidden md:block" />
            Now, we are breaking ground with our technology.
          </h2>
        </div>

        {/* Content */}
        <div className="border-t border-gray-200 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 text-gray-700 text-lg leading-9">
            {/* Left */}
            <div className="space-y-6">
              <p>
                We kick-started operations on the 15th of August, 2010 with the
                goal of breaking all barriers that traders and investors face in
                India in terms of cost, support, and technology.
              </p>

              <p>
                Today, our disruptive pricing models and in-house technology
                have made us the biggest stock broker in India.
              </p>

              <p>
                Over 1+ Crore clients place millions of orders every day through
                our powerful ecosystem of investment platforms.
              </p>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <p>
                In addition, we run a number of popular open online educational
                and community initiatives.
              </p>

              <p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Rainmatter
                </a>{" "}
                has invested in several fintech startups with the goal of
                growing the Indian capital markets.
              </p>

              <p>
                Catch up on the latest updates on our blog or see what the media
                is saying about us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;