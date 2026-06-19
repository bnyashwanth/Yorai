"use client";

import { useUiStore } from "@/store/ui-store";
import { useState } from "react";
import { placeOrderAction } from "@/app/actions/trade";
import { RefreshCw } from "lucide-react";

export default function OrderModal() {
  const { isOrderModalOpen, selectedSymbol, orderType, closeOrderModal } = useUiStore();
  
  // Form State
  const [qty, setQty] = useState<number>(1);
  const [price, setPrice] = useState<number>(0.0);
  const [productType, setProductType] = useState<"MIS" | "CNC">("MIS");
  const [orderCategory, setOrderCategory] = useState<"MARKET" | "LIMIT">("LIMIT");
  
  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOrderModalOpen) return null;

  const isBuy = orderType === 'BUY';
  const themeColor = isBuy ? "bg-[#4184f3]" : "bg-[#df514c]";
  const textColor = isBuy ? "text-[#4184f3]" : "text-[#df514c]";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const result = await placeOrderAction({
      symbol: selectedSymbol,
      qty,
      price: orderCategory === "MARKET" ? 0 : price, // If market, price doesn't matter for the action yet
      mode: orderType,
    });

    setIsSubmitting(false);

    if (result?.error) {
      setErrorMessage(result.error);
    } else {
      closeOrderModal();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
      <div className="bg-white rounded shadow-2xl w-[550px] overflow-hidden flex flex-col font-sans border border-[#ddd]">
        
        {/* HEADER */}
        <div className={`${themeColor} px-5 py-3 flex justify-between items-center text-white`}>
          <div className="flex items-center space-x-3">
            <h2 className="text-[15px] font-medium tracking-wide">
              {orderType} {selectedSymbol}
            </h2>
            <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded uppercase tracking-wider">x {qty} Qty</span>
          </div>
          <div className="flex items-center space-x-4 text-xs font-medium">
            <div className="flex space-x-3">
              <label className="flex items-center space-x-1 cursor-pointer opacity-90 hover:opacity-100">
                <input type="radio" name="exchange" defaultChecked className="accent-white cursor-pointer" />
                <span>BSE</span>
              </label>
              <label className="flex items-center space-x-1 cursor-pointer opacity-90 hover:opacity-100">
                <input type="radio" name="exchange" className="accent-white cursor-pointer" />
                <span>NSE</span>
              </label>
            </div>
          </div>
        </div>

        {/* ERROR MESSAGE (If any) */}
        {errorMessage && (
          <div className="bg-[#fff3cd] text-[#856404] px-5 py-2 text-xs border-b border-[#ffeeba]">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col flex-1">
          {/* TOP TABS (Static for UI Clone) */}
          <div className="flex border-b border-[#eee] text-[11px] font-medium text-[#424242] bg-[#fbfbfb]">
            <div className="px-5 py-2.5 border-b-2 border-[#4184f3] text-[#4184f3] cursor-pointer">Regular</div>
            <div className="px-5 py-2.5 hover:text-[#4184f3] cursor-pointer transition-colors">Cover</div>
            <div className="px-5 py-2.5 hover:text-[#4184f3] cursor-pointer transition-colors">AMO</div>
            <div className="px-5 py-2.5 hover:text-[#4184f3] cursor-pointer transition-colors">Iceberg</div>
          </div>

          {/* MAIN FORM BODY */}
          <div className="p-6">
            
            {/* Product Type (Intraday vs Longterm) */}
            <div className="flex space-x-8 mb-6">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input 
                  type="radio" 
                  name="product" 
                  checked={productType === "MIS"}
                  onChange={() => setProductType("MIS")}
                  className={`w-4 h-4 cursor-pointer ${isBuy ? 'accent-[#4184f3]' : 'accent-[#df514c]'}`} 
                />
                <span className={`text-[13px] ${productType === "MIS" ? "text-[#424242]" : "text-[#9b9b9b]"} group-hover:text-[#424242] transition-colors`}>
                  Intraday <span className="text-[10px] ml-1 opacity-70">MIS</span>
                </span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input 
                  type="radio" 
                  name="product" 
                  checked={productType === "CNC"}
                  onChange={() => setProductType("CNC")}
                  className={`w-4 h-4 cursor-pointer ${isBuy ? 'accent-[#4184f3]' : 'accent-[#df514c]'}`} 
                />
                <span className={`text-[13px] ${productType === "CNC" ? "text-[#424242]" : "text-[#9b9b9b]"} group-hover:text-[#424242] transition-colors`}>
                  Longterm <span className="text-[10px] ml-1 opacity-70">CNC</span>
                </span>
              </label>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* QTY Input */}
              <div className="relative">
                <label className="block text-[11px] text-[#9b9b9b] mb-1">Qty.</label>
                <input 
                  type="number" 
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  min="1"
                  className="w-full border border-[#e0e0e0] rounded px-3 py-1.5 text-[15px] text-[#424242] focus:border-[#4184f3] focus:outline-none transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              {/* Price Input */}
              <div className="relative">
                <label className="block text-[11px] text-[#9b9b9b] mb-1">Price</label>
                <input 
                  type="number" 
                  step="0.05"
                  value={orderCategory === "MARKET" ? 0 : price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className={`w-full border border-[#e0e0e0] rounded px-3 py-1.5 text-[15px] text-[#424242] focus:border-[#4184f3] focus:outline-none transition-colors ${orderCategory === "MARKET" ? "bg-[#f5f5f5] text-[#9b9b9b]" : ""}`}
                  disabled={isSubmitting || orderCategory === "MARKET"}
                />
              </div>

              {/* Trigger Price (Disabled visually for demo) */}
              <div className="relative">
                <label className="block text-[11px] text-[#9b9b9b] mb-1">Trigger price</label>
                <input 
                  type="number" 
                  value="0"
                  readOnly
                  className="w-full border border-[#e0e0e0] bg-[#f5f5f5] rounded px-3 py-1.5 text-[15px] text-[#9b9b9b] cursor-not-allowed focus:outline-none"
                />
              </div>
            </div>

            {/* Order Category (Market/Limit) */}
            <div className="flex space-x-6 border-t border-[#eee] pt-6">
              {["MARKET", "LIMIT", "SL", "SL-M"].map((type) => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="orderType"
                    checked={orderCategory === type}
                    onChange={() => setOrderCategory(type as any)}
                    className={`w-4 h-4 cursor-pointer ${isBuy ? 'accent-[#4184f3]' : 'accent-[#df514c]'}`} 
                  />
                  <span className={`text-[12px] uppercase ${orderCategory === type ? "text-[#424242]" : "text-[#9b9b9b]"} group-hover:text-[#424242] transition-colors`}>
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="bg-[#f9f9f9] border-t border-[#eee] px-6 py-4 flex justify-between items-center mt-auto">
            <div className="flex items-center space-x-2 text-[13px] text-[#424242]">
              <span>Margin required <span className="font-medium text-[#387ed1]">₹{(qty * (orderCategory === "MARKET" ? 0 : price)).toLocaleString("en-IN")}</span></span>
              <RefreshCw size={12} className="text-[#9b9b9b] cursor-pointer hover:text-[#424242]" />
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                type="button"
                onClick={closeOrderModal}
                className="px-5 py-2 text-[13px] font-medium text-[#424242] border border-[#e0e0e0] rounded hover:bg-white hover:border-[#424242] transition-all"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button 
                type="submit"
                className={`px-8 py-2 text-[13px] font-medium text-white rounded shadow-sm hover:shadow transition-all ${themeColor} disabled:opacity-70`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "..." : orderType}
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}