// components/pricing/Hero.tsx

import Image from "next/image";

const pricingCards = [
  {
    image: "/media/images/pricingEquity.svg",
    title: "Free equity delivery",
    description:
      "All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.",
  },
  {
    image: "/media/images/intradayTrades.svg",
    title: "Intraday and F&O trades",
    description:
      "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.",
  },
  {
    image: "/media/images/pricingEquity.svg",
    title: "Free direct MF",
    description:
      "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.",
  },
];

function Hero() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900">
            Pricing
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-500">
            Free equity investments and flat ₹20 intraday and F&O trades
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
          {pricingCards.map((card, index) => (
            <div key={index} className="text-center">
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={300}
                className="mx-auto object-contain h-56 w-auto"
              />

              <h2 className="mt-8 text-2xl font-medium text-gray-900">
                {card.title}
              </h2>

              <p className="mt-4 text-gray-500 leading-8 text-lg px-4">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;