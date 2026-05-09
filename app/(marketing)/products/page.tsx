import React from "react";
import Hero from "@/components/marketing/products/hero";
import LeftSection from "@/components/marketing/products/LeftSection";
import RightSection from "@/components/marketing/products/RightSection";
import Universe from "@/components/marketing/products/Universe";

export default function Products() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="/media/images/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/signup"
        learnMore="/products"
        googlePlay="https://play.google.com/store"
        appStore="https://www.apple.com/app-store/"
      />
      <RightSection
        imageURL="/media/images/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/products"
      />
      <LeftSection
        imageURL="/media/images/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="/signup"
        learnMore="/products"
        googlePlay="https://play.google.com/store"
        appStore="https://www.apple.com/app-store/"
      />
      <RightSection
        imageURL="/media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="/products"
      />
      <LeftSection
        imageURL="/media/images/varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="/signup"
        learnMore="/products"
        googlePlay="https://play.google.com/store"
        appStore="https://www.apple.com/app-store/"
      />
      <div className="bg-white py-6 text-xl">
        <p className="text-center text-gray-600">
          Want to know more about our technology stack? Check out the {" "}
          <a href="#" className="text-blue-600 hover:text-blue-700">
            Zerodha.tech {" "}
          </a>
          blog.
        </p>
      </div>
      <Universe />
    </div>
  );
}
