"use client";

import { logoutAction } from "@/app/actions/auth";
import { Bell, ChevronDown } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-15 border-b border-[#eee] bg-white flex items-center justify-between px-6 shrink-0 z-10">
      
      {/* Left: Market Indices */}
      <div className="flex space-x-8 text-sm">
        <div className="flex items-center space-x-3">
          <span className="text-[#424242] font-medium">NIFTY 50</span>
          <span className="text-[#424242]">22,500.50</span>
          <span className="text-[#4caf50] text-xs">+120.40 (0.54%)</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-[#424242] font-medium">SENSEX</span>
          <span className="text-[#424242]">74,100.20</span>
          <span className="text-[#4caf50] text-xs">+350.10 (0.47%)</span>
        </div>
      </div>

      {/* Right: User Profile & Actions */}
      <div className="flex items-center space-x-6">
        <button className="text-[#424242] hover:text-[#f36616] transition-colors">
          <Bell size={18} />
        </button>

        <div className="flex items-center space-x-2 cursor-pointer group relative">
          <div className="w-8 h-8 bg-[#f3f7ff] text-[#387ed1] rounded-full flex items-center justify-center font-medium text-xs">
            JD
          </div>
          <span className="text-sm text-[#424242] font-medium">XX0000</span>
          <ChevronDown size={14} className="text-[#9b9b9b]" />

          {/* Simple Dropdown for Logout */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-[#eee] shadow-lg rounded-md hidden group-hover:block">
            <div className="p-4 border-b border-[#eee]">
              <p className="text-sm font-medium text-[#424242]">John Doe</p>
              <p className="text-xs text-[#9b9b9b]">user@example.com</p>
            </div>
            <form action={logoutAction}>
              <button 
                type="submit" 
                className="w-full text-left px-4 py-3 text-sm text-[#424242] hover:bg-gray-50 hover:text-[#f36616] transition-colors"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}