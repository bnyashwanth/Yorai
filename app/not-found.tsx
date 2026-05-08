import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFoundPage() {
  return (
    
    <div className=" bg-white font-sans text-[#424242] flex flex-col">
      

      {/* Main 404 Content */}
      <main className="grow flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-lg w-full text-center">
          {/* Optional: Add an illustration here if you have one */}
          {/* <img src="/media/images/404-illustration.svg" alt="404" className="w-64 mx-auto mb-8" /> */}
          
          <h1 className="text-4xl md:text-[44px] font-medium mb-4 text-[#424242]">
            404
          </h1>
          <h2 className="text-2xl md:text-[28px] font-medium mb-4 text-[#424242]">
            Page not found
          </h2>
          <p className="text-[16px] text-[#666] mb-8 leading-relaxed">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <button className="bg-[#387ed1] text-white font-medium px-8 py-2.5 rounded hover:bg-[#2b64a8] transition text-[15px]">
            Go to home
          </button>
        </div>
      </main>

     
    </div>
  );
}