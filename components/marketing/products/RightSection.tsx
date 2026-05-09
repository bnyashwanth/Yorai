// components/RightSection.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface RightSectionProps {
  imageURL: string;
  productName: string;
  productDesription: string;
  learnMore: string;
}

const RightSection: React.FC<RightSectionProps> = ({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-4xl font-semibold text-black">
              {productName}
            </h1>

            <p className="text-gray-600 text-lg leading-8">
              {productDesription}
            </p>

            <div>
              <Link
                href={learnMore}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src={imageURL}
              alt={productName}
              width={600}
              height={500}
              className="w-full max-w-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSection;