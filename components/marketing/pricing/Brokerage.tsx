// components/pricing/Brokerage.tsx

"use client";

import Link from "next/link";
import React, { useState } from "react";

const tabs = ["Equity", "Currency", "Commodity"];

const Brokerage = () => {
  const [activeTab, setActiveTab] = useState("Equity");

  const renderTable = () => {
    switch (activeTab) {
      case "Equity":
        return (
          <table className="w-full border border-gray-300 text-left text-[15px] text-gray-700">
            <thead>
              <tr className="border-b border-gray-300 bg-white">
                <th className="p-5 w-1/5"></th>
                <th className="p-5 font-medium">Equity delivery</th>
                <th className="p-5 font-medium">Equity intraday</th>
                <th className="p-5 font-medium">F&amp;O - Futures</th>
                <th className="p-5 font-medium">F&amp;O - Options</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-5 text-gray-600">Brokerage</td>
                <td className="p-5">Zero Brokerage</td>
                <td className="p-5">
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td className="p-5">
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td className="p-5">Flat Rs. 20 per executed order</td>
              </tr>

              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-5 text-gray-600">STT/CTT</td>
                <td className="p-5">0.1% on buy & sell</td>
                <td className="p-5">0.025% on the sell side</td>
                <td className="p-5">0.05% on the sell side</td>
                <td className="p-5 leading-8">
                  • 0.125% of the intrinsic value on options that are bought
                  and exercised
                  <br />• 0.1% on sell side (on premium)
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-5 text-gray-600">Transaction charges</td>
                <td className="p-5">
                  NSE: 0.00307%
                  <br />
                  BSE: 0.00375%
                </td>
                <td className="p-5">
                  NSE: 0.00307%
                  <br />
                  BSE: 0.00375%
                </td>
                <td className="p-5">
                  NSE: 0.00183%
                  <br />
                  BSE: 0
                </td>
                <td className="p-5">
                  NSE: 0.03553% (on premium)
                  <br />
                  BSE: 0.0325% (on premium)
                </td>
              </tr>

              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-5 text-gray-600">GST</td>
                <td className="p-5">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="p-5">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="p-5">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="p-5">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-5 text-gray-600">SEBI charges</td>
                <td className="p-5">₹10 / crore</td>
                <td className="p-5">₹10 / crore</td>
                <td className="p-5">₹10 / crore</td>
                <td className="p-5">₹10 / crore</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="p-5 text-gray-600">Stamp charges</td>
                <td className="p-5">
                  0.015% or ₹1500 / crore on buy side
                </td>
                <td className="p-5">
                  0.003% or ₹300 / crore on buy side
                </td>
                <td className="p-5">
                  0.002% or ₹200 / crore on buy side
                </td>
                <td className="p-5">
                  0.003% or ₹300 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        );

      case "Currency":
        return (
          <table className="w-full border border-gray-300 text-left text-[15px] text-gray-700">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="p-5 w-1/5"></th>
                <th className="p-5 font-medium">Currency futures</th>
                <th className="p-5 font-medium">Currency options</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-5 text-gray-600">Brokerage</td>
                <td className="p-5">
                  0.03% or ₹ 20/executed order whichever is lower
                </td>
                <td className="p-5">₹ 20/executed order</td>
              </tr>

              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-5 text-gray-600">STT/CTT</td>
                <td className="p-5">No STT</td>
                <td className="p-5">No STT</td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-5 text-gray-600">Transaction charges</td>
                <td className="p-5">
                  NSE: 0.00035%
                  <br />
                  BSE: 0.00045%
                </td>
                <td className="p-5">
                  NSE: 0.0311%
                  <br />
                  BSE: 0.001%
                </td>
              </tr>

              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-5 text-gray-600">GST</td>
                <td className="p-5">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="p-5">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-5 text-gray-600">SEBI charges</td>
                <td className="p-5">₹10 / crore</td>
                <td className="p-5">₹10 / crore</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="p-5 text-gray-600">Stamp charges</td>
                <td className="p-5">
                  0.0001% or ₹10 / crore on buy side
                </td>
                <td className="p-5">
                  0.0001% or ₹10 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        );

      case "Commodity":
        return (
          <table className="w-full border border-gray-300 text-left text-[15px] text-gray-700">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="p-5 w-1/5"></th>
                <th className="p-5 font-medium">Commodity futures</th>
                <th className="p-5 font-medium">Commodity options</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-5 text-gray-600">Brokerage</td>
                <td className="p-5">
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td className="p-5">₹ 20/executed order</td>
              </tr>

              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-5 text-gray-600">STT/CTT</td>
                <td className="p-5">0.01% on sell side (Non-Agri)</td>
                <td className="p-5">0.05% on sell side</td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-5 text-gray-600">Transaction charges</td>
                <td className="p-5">
                  MCX: 0.021%
                  <br />
                  NSE: 0.0001%
                </td>
                <td className="p-5">
                  MCX: 0.0418%
                  <br />
                  NSE: 0.001%
                </td>
              </tr>

              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-5 text-gray-600">GST</td>
                <td className="p-5">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="p-5">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-5 text-gray-600">SEBI charges</td>
                <td className="p-5 leading-8">
                  Agri:
                  <br />
                  ₹1 / crore
                  <br />
                  Non-agri:
                  <br />
                  ₹10 / crore
                </td>
                <td className="p-5">₹10 / crore</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="p-5 text-gray-600">Stamp charges</td>
                <td className="p-5">
                  0.002% or ₹200 / crore on buy side
                </td>
                <td className="p-5">
                  0.003% or ₹300 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        );

      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Tabs */}
        <div className="flex gap-14 border-b border-gray-300 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[20px] transition ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">{renderTable()}</div>

        {/* Footer Link */}
        <div className="text-center mt-10">
          <Link
            href="/brokerage-calculator"
            className="text-[20px] text-blue-600 hover:text-blue-700"
          >
            Calculate your costs upfront
          </Link>

          <span className="text-[20px] text-gray-700">
            {" "}
            using our brokerage calculator
          </span>
        </div>
      </div>
    </section>
  );
};

export default Brokerage;