"use client";

import { useState, useEffect } from "react";
import { Search, ChevronDown, ChevronUp, MoreHorizontal, BarChart3 } from "lucide-react";
import { useUiStore } from "@/store/ui-store";

const initialWatchlist = [
  { symbol: "RELIANCE", price: 2950.20, change: "+1.2%", isUp: true },
  { symbol: "TCS", price: 3845.00, change: "-0.5%", isUp: false },
  { symbol: "HDFCBANK", price: 1450.75, change: "+0.8%", isUp: true },
  { symbol: "INFY", price: 1420.10, change: "-1.1%", isUp: false },
  { symbol: "ICICIBANK", price: 1080.50, change: "+0.3%", isUp: true },
];

export default function WatchList() {
  const { openOrderModal } = useUiStore();
  const [stocks, setStocks] = useState(initialWatchlist);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Real-time market fluctuation simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => {
          const drift = (Math.random() - 0.49) * 2; // Random price fluctuations
          const newPrice = Math.max(10, stock.price + drift);
          return {
            ...stock,
            price: newPrice,
            isUp: drift >= 0,
          };
        })
      );
    }, 3000); // Ticks prices every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full bg-white relative">
      <div className="p-2 border-b border-[#eee]">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9b9b9b]" />
          <input
            type="text"
            placeholder="Search eg: infy bse"
            className="w-full pl-9 pr-4 py-2 bg-[#f9f9f9] text-sm rounded outline-none border border-transparent focus:border-[#387ed1]"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {stocks.map((item, i) => (
          <div 
            key={i} 
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex items-center justify-between px-4 py-3 border-b border-[#eee] hover:bg-[#f9f9f9] cursor-pointer h-14"
          >
            <span className="text-sm font-medium text-[#424242]">{item.symbol}</span>
            
            {hoveredIndex === i ? (
              <div className="flex items-center space-x-2">
                <button onClick={() => openOrderModal(item.symbol, 'BUY')} className="px-3 py-1 bg-[#4184f3] text-white text-xs rounded font-medium">B</button>
                <button onClick={() => openOrderModal(item.symbol, 'SELL')} className="px-3 py-1 bg-[#e53935] text-white text-xs rounded font-medium">S</button>
                <button className="p-1.5 text-[#9b9b9b]"><BarChart3 size={16} /></button>
                <button className="p-1.5 text-[#9b9b9b]"><MoreHorizontal size={16} /></button>
              </div>
            ) : (
              <div className="flex items-center space-x-3 text-sm">
                <span className={item.isUp ? "text-[#4caf50]" : "text-[#e53935]"}>{item.change}</span>
                <div className="flex items-center space-x-1">
                  {item.isUp ? <ChevronUp size={14} className="text-[#4caf50]" /> : <ChevronDown size={14} className="text-[#e53935]" />}
                  <span className={`font-mono ${item.isUp ? "text-[#4caf50]" : "text-[#e53935]"}`}>
                    {item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}