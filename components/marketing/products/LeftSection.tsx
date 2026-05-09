// components/LeftSection.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface LeftSectionProps {
  imageURL: string;
  productName: string;
  productDesription: string;
  tryDemo: string;
  learnMore: string;
  googlePlay: string;
  appStore: string;
}

const LeftSection: React.FC<LeftSectionProps> = ({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src={imageURL}
              alt={productName}
              width={600}
              height={500}
              className="w-full max-w-xl object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold text-black">
              {productName}
            </h1>

            <p className="text-gray-600 text-lg leading-8">
              {productDesription}
            </p>

            {/* Links */}
            <div className="flex items-center gap-8">
              <Link
                href={tryDemo}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
              >
                Try Demo
                <ArrowRight size={18} />
              </Link>

              <Link
                href={learnMore}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Store Buttons */}
            <div className="flex items-center gap-6 pt-2">
              <a
                href={googlePlay}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  width={180}
                  height={60}
                  className="hover:opacity-90 transition"
                />
              </a>

              <a
                href={appStore}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/media/images/appstoreBadge.svg"
                  alt="App Store"
                  width={180}
                  height={60}
                  className="hover:opacity-90 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;