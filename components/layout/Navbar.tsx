"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="border-b bg-white relative">
      <div className="max-w-7xl mx-auto flex items-center text-gray-400 justify-between px-20 py-4">
        {/* Logo */}
        <a href="/">
          <img src="/media/images/logo.svg" alt="Logo" className="w-32" />
        </a>

        {/* Desktop Links */}
        <div className="flex items-center gap-10 text-gray-600 font-medium">
          <Link
            href="/signup"
            className={`hover:text-blue-600 ${
              pathname === "/signup"
                ? "text-blue-600 font-medium"
                : "text-gray-600"
            }`}
          >
            {" "}
            Signup
          </Link>
          <Link href="/about" className={`hover:text-blue-600 ${
              pathname === "/about"
                ? "text-blue-600 font-medium"
                : "text-gray-600"
            }`}>
            About
          </Link>

          <Link href="/products" className={`hover:text-blue-600 ${
              pathname === "/products"
                ? "text-blue-600 font-medium"
                : "text-gray-600"
            }`}>
            Products
          </Link>
             <Link href="/pricing" className={`hover:text-blue-600 ${
              pathname === "/pricing"
                ? "text-blue-600 font-medium"
                : "text-gray-600"
            }`}>
            Pricing
          </Link>

           <Link href="/support" className={`hover:text-blue-600 ${
              pathname === "/support"
                ? "text-blue-600 font-medium"
                : "text-gray-600"
            }`}>
            Support
          </Link>


          <a href="#" className="hover:text-blue-600">
            Support
          </a>

          {/* Menu Button */}
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-20 top-20 w-212.5 bg-white shadow-xl border rounded-md z-50">
          {/* Top Section */}
          <div className="grid grid-cols-4 gap-10 p-10 border-b">
            <div className="text-center">
              <img
                src="/media/images/kite.svg"
                alt=""
                className="w-12 mx-auto mb-3"
              />
              <h3 className="text-xl font-semibold">Kite</h3>
              <p className="text-gray-500">Trading platform</p>
            </div>

            <div className="text-center">
              <img
                src="/media/images/console.svg"
                alt=""
                className="w-12 mx-auto mb-3"
              />
              <h3 className="text-xl font-semibold">Console</h3>
              <p className="text-gray-500">Backoffice</p>
            </div>

            <div className="text-center">
              <img
                src="/media/images/connect.svg"
                alt=""
                className="w-12 mx-auto mb-3"
              />
              <h3 className="text-xl font-semibold">Kite Connect</h3>
              <p className="text-gray-500">Trading APIs</p>
            </div>

            <div className="text-center">
              <img
                src="/media/images/coin.svg"
                alt=""
                className="w-12 mx-auto mb-3"
              />
              <h3 className="text-xl font-semibold">Coin</h3>
              <p className="text-gray-500">Mutual funds</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-3 gap-10 p-10">
            <div>
              <h3 className="text-2xl font-semibold mb-5">Utilities</h3>

              <ul className="space-y-3 text-gray-600">
                <li>Calculators</li>
                <li>Brokerage calculator</li>
                <li>Margin calculator</li>
                <li>SIP calculator</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-5">Updates</h3>

              <ul className="space-y-3 text-gray-600">
                <li>Z-Connect blog</li>
                <li>Circulars / Bulletin</li>
                <li>IPOs</li>
                <li>Markets</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-5">Education</h3>

              <div className="flex gap-10">
                <div className="text-center">
                  <img
                    src="/media/images/varsity.png"
                    alt=""
                    className="w-12 mx-auto mb-3"
                  />
                  <p className="text-gray-600">Varsity</p>
                </div>

                <div className="text-center">
                  <img
                    src="/media/images/qa.svg"
                    alt=""
                    className="w-12 mx-auto mb-3"
                  />
                  <p className="text-gray-600">Trading Q&A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
