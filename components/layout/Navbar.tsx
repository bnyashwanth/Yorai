"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // Hardcoded to true to match the screenshot's open state by default
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Zerodha's brand blue
  const activeColor = "text-[#387ed1]";
  const defaultColor = "text-[#424242]";

  return (
    <nav className="border-b border-[#eee] bg-white relative">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-[18px]">
        {/* Logo */}
        <Link href="/">
          <img src="/media/images/logo.svg" alt="Zerodha Logo" className="w-[130px]" />
        </Link>

        {/* Desktop Links */}
        <div className="flex items-center gap-9 text-[15px] text-[#424242]">
          <Link
            href="/signup"
            className={`hover:text-[#387ed1] transition-colors ${
              pathname === "/signup" ? activeColor : defaultColor
            }`}
          >
            Signup
          </Link>
          <Link
            href="/about"
            className={`hover:text-[#387ed1] transition-colors ${
              pathname === "/about" ? activeColor : defaultColor
            }`}
          >
            About
          </Link>
          <Link
            href="/products"
            className={`hover:text-[#387ed1] transition-colors ${
              pathname === "/products" ? activeColor : defaultColor
            }`}
          >
            Products
          </Link>
          <Link
            href="/pricing"
            className={`hover:text-[#387ed1] transition-colors ${
              pathname === "/pricing" ? activeColor : defaultColor
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/support"
            className={`hover:text-[#387ed1] transition-colors ${
              pathname === "/support" || open ? activeColor : defaultColor
            }`}
          >
            Support
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="hover:text-[#387ed1] transition-colors ml-2 text-[#424242]"
          >
            {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-[calc(50%-600px+24px)] top-[65px] w-[750px] bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08)] border border-[#eee] rounded-[4px] z-50">
          
          {/* Top Section */}
          <div className="grid grid-cols-4 gap-4 px-10 py-8 border-b border-[#eee]">
            <div className="text-center group cursor-pointer">
              <img
                src="/media/images/kitee.png"
                alt="Kite"
                className="h-8 mx-auto mb-3"
              />
              {/* Faded heading exactly like screenshot 1 */}
              <h3 className="text-[17px] font-medium text-[#e0e0e0]">Kite</h3>
              <p className="text-[13px] text-[#9b9b9b] mt-[2px]">Trading platform</p>
            </div>

            <div className="text-center group cursor-pointer">
              <img
                src="/media/images/c.png"
                alt="Console"
                className="h-8 mx-auto mb-3"
              />
              <h3 className="text-[17px] font-medium text-[#e0e0e0]">Console</h3>
              <p className="text-[13px] text-[#9b9b9b] mt-[2px]">Backoffice</p>
            </div>

            <div className="text-center group cursor-pointer">
              <img
                src="/media/images/kconnect.png"
                alt="Kite Connect"
                className="h-8 mx-auto mb-3"
              />
              <h3 className="text-[17px] font-medium text-[#e0e0e0]">Kite Connect</h3>
              <p className="text-[13px] text-[#9b9b9b] mt-[2px]">Trading APIs</p>
            </div>

            <div className="text-center group cursor-pointer">
              <img
                src="/media/images/coinn.png"
                alt="Coin"
                className="h-8 mx-auto mb-3"
              />
              <h3 className="text-[17px] font-medium text-[#e0e0e0]">Coin</h3>
              <p className="text-[13px] text-[#9b9b9b] mt-[2px]">Mutual funds</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-3 gap-8 px-10 py-8 pb-12">
            {/* Utilities */}
            <div>
              <h3 className="text-xl font-medium text-[#e0e0e0] mb-5">Utilities</h3>
              <ul className="space-y-[14px] text-[15px] text-[#424242]">
                <li className="hover:text-[#387ed1] cursor-pointer">Calculators</li>
                <li className="hover:text-[#387ed1] cursor-pointer">Brokerage calculator</li>
                <li className="hover:text-[#387ed1] cursor-pointer">Margin calculator</li>
                <li className="hover:text-[#387ed1] cursor-pointer">SIP calculator</li>
              </ul>
            </div>

            {/* Updates */}
            <div>
              <h3 className="text-xl font-medium text-[#e0e0e0] mb-5">Updates</h3>
              <ul className="space-y-[14px] text-[15px] text-[#424242]">
                <li className="hover:text-[#387ed1] cursor-pointer">Z-Connect blog</li>
                <li className="hover:text-[#387ed1] cursor-pointer">Circulars / Bulletin</li>
                <li className="hover:text-[#387ed1] cursor-pointer">IPOs</li>
                <li className="hover:text-[#387ed1] cursor-pointer">Markets</li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-medium text-[#e0e0e0] mb-5">Education</h3>
              <div className="flex gap-10 items-end">
                {/* Varsity with Icon */}
                <div className="text-center cursor-pointer group">
                  <img
                    src="/media/images/v.png"
                    alt="Varsity"
                    className="h-9 mx-auto mb-[10px]"
                  />
                  <p className="text-[15px] text-[#424242] group-hover:text-[#387ed1]">
                    Varsity
                  </p>
                </div>

                {/* Trading Q&A strictly without icon, bottom-aligned to match Varsity text */}
                <div className="text-center cursor-pointer group">
                   <img
                    src="/media/images/qa.png"
                    alt="Varsity"
                    className="h-9 mx-auto mb-[10px]"
                  />
                  <p className="text-[15px] text-[#424242] group-hover:text-[#387ed1]">
                    Trading Q&A
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}