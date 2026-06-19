"use client";

import { useState } from "react";

interface BuyActionWindowProps {
  uid: string;
  onClose: () => void;
}

export default function BuyActionWindow({
  uid,
  onClose,
}: BuyActionWindowProps) {
  const [stockQuantity, setStockQuantity] = useState<number>(1);
  const [stockPrice, setStockPrice] = useState<number>(0);

  const handleBuyClick = async () => {
    try {
      await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        }),
      });

      onClose();
    } catch (error) {
      console.error("Failed to place order:", error);
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[500px] bg-white border border-[#eee] rounded-md shadow-xl z-50">
      <div className="p-6">
        <h3 className="text-lg font-medium text-[#424242] mb-6">
          Buy {uid}
        </h3>

        <div className="flex gap-4">
          <fieldset className="flex-1 border border-[#ddd] rounded px-3 py-2">
            <legend className="px-1 text-xs text-[#9b9b9b]">
              Qty.
            </legend>

            <input
              type="number"
              value={stockQuantity}
              onChange={(e) =>
                setStockQuantity(Number(e.target.value))
              }
              className="w-full outline-none text-lg"
            />
          </fieldset>

          <fieldset className="flex-1 border border-[#ddd] rounded px-3 py-2">
            <legend className="px-1 text-xs text-[#9b9b9b]">
              Price
            </legend>

            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) =>
                setStockPrice(Number(e.target.value))
              }
              className="w-full outline-none text-lg"
            />
          </fieldset>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[#eee] px-6 py-4">
        <span className="text-sm text-[#666]">
          Margin required ₹140.65
        </span>

        <div className="flex gap-2">
          <button
            onClick={handleBuyClick}
            className="px-5 py-2 bg-[#387ed1] hover:bg-[#2f6db8] text-white rounded text-sm transition-colors"
          >
            Buy
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-[#424242] rounded text-sm transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}