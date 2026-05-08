import React from "react";
export default function Hero(){
    return (
    <div className="max-w-6xl mx-auto px-5 py-10 text-center text-gray-600">
  
  <img
    src="/media/images/homeHero.png"
    alt="Hero Image"
    className="mb-10 mx-auto"
  />

  <h3 className="mt-5 text-5xl font-semibold text-gray-700">
    Invest in everything
  </h3>

  <p className="mt-4 text-lg text-gray-500">
    Online platform to invest in stocks, derivatives, mutual funds, and more
  </p>

  <button className="mt-8 bg-blue-500 hover:bg-gray-700 text-white text-lg font-medium px-8 py-3  transition duration-300 cursor-pointer">
    Signup for free
  </button>

</div>
    )
    
}