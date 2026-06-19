"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown } from "lucide-react";
import { logoutAction } from "@/app/actions/auth";

const navLinks = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Orders", path: "/dashboard/orders" },
  { name: "Holdings", path: "/dashboard/holdings" },
  { name: "Positions", path: "/dashboard/positions" },
  { name: "Funds", path: "/dashboard/funds" },
  { name: "Apps", path: "/dashboard/apps" },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <div className="flex items-center h-full">
      {/* Navigation Links */}
      <nav className="flex space-x-8 mr-8 h-full">
        {navLinks.map((link) => {
          const isActive = link.path === "/dashboard" 
            ? pathname === "/dashboard" 
            : pathname.startsWith(link.path);

          return (
            <Link
              key={link.name}
              href={link.path}
              className={`text-[13px] h-full flex items-center transition-colors relative ${
                isActive ? "text-[#f36616]" : "text-[#424242] hover:text-[#f36616]"
              }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f36616]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Profile & Notifications */}
      <div className="flex items-center space-x-5 pl-8 border-l border-[#eee] h-full">
        <button className="text-[#424242] hover:text-[#f36616] transition-colors">
          <Bell size={16} />
        </button>

        <div className="flex items-center space-x-2 cursor-pointer group relative h-full">
          <div className="w-8 h-8 bg-[#fbfbfb] border border-[#eee] text-[#f36616] rounded-full flex items-center justify-center font-medium text-[11px]">
            ZU
          </div>
          <span className="text-[13px] text-[#424242] font-medium">USERID</span>
          <ChevronDown size={14} className="text-[#9b9b9b]" />

          {/* Simple Dropdown for Logout */}
          {/* <div className="absolute top-[50px] right-0 w-48 bg-white border border-[#eee] shadow-[0_5px_15px_rgba(0,0,0,0.08)] rounded hidden group-hover:block z-50">
            <div className="p-4 border-b border-[#eee]">
              <p className="text-[13px] font-medium text-[#424242]">User Name</p>
              <p className="text-[11px] text-[#9b9b9b]">user@example.com</p>
            </div>
            <form action={logoutAction}>
              <button 
                type="submit" 
                className="w-full text-left px-4 py-3 text-[13px] text-[#424242] hover:bg-[#f9f9f9] hover:text-[#f36616] transition-colors"
              >
                Logout
              </button>
            </form>
          </div> */}

          {/* Simple Dropdown for Profile & Logout */}
<div className="absolute top-[50px] right-0 w-48 bg-white border border-[#eee] shadow-[0_5px_15px_rgba(0,0,0,0.08)] rounded hidden group-hover:block z-50">
  <div className="p-4 border-b border-[#eee]">
    <p className="text-[13px] font-medium text-[#424242]">BN Yashwanth</p>
    <p className="text-[11px] text-[#9b9b9b]">bnyashwanth2006@gmail.com</p>
  </div>
  
  {/* NEW: Link to your Profile Page */}
  <Link 
    href="/dashboard/profile"
    className="w-full block text-left px-4 py-3 text-[13px] text-[#424242] hover:bg-[#f9f9f9] hover:text-[#f36616] transition-colors border-b border-[#eee]"
  >
    My Profile
  </Link>

  <form action={logoutAction}>
    <button 
      type="submit" 
      className="w-full text-left px-4 py-3 text-[13px] text-[#424242] hover:bg-[#f9f9f9] hover:text-[#f36616] transition-colors"
    >
      Logout
    </button>
  </form>
</div>
        </div>
      </div>
    </div>
  );
}