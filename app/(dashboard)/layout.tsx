import Menu from "@/components/dashboard/Menu";
import WatchList from "@/components/dashboard/WatchList";
import OrderModal from "@/features/dashboard/watchlist/OrderModal";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-white overflow-hidden text-[#424242] font-sans">
      
      {/* LEFT COLUMN: Indices + Watchlist */}
      <aside className="w-[380px] border-r border-[#eee] flex flex-col shrink-0">
        
        {/* Indices Strip */}
        <div className="flex items-center justify-between px-6 h-[60px] border-b border-[#eee] text-[13px]">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-[#424242]">NIFTY 50</span>
            <span className="text-[#e53935]">22,500.50</span> {/* Using dummy red/green */}
            <span className="text-[#9b9b9b] text-[11px]">-12.40 (-0.05%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium text-[#424242]">SENSEX</span>
            <span className="text-[#4caf50]">74,100.20</span>
            <span className="text-[#9b9b9b] text-[11px]">+350.10 (0.47%)</span>
          </div>
        </div>

        {/* Watchlist Component */}
        <div className="flex-1 overflow-hidden">
          <WatchList />
        </div>
      </aside>

      {/* RIGHT COLUMN: Logo/Nav + Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Top Navigation Strip */}
        <header className="h-[60px] border-b border-[#eee] flex items-center justify-between px-8 shrink-0">
          
          {/* Logo */}
          <div className="flex items-center">
            {/* The Kite Logo arrow - you can replace src with your actual kite logo SVG */}
            <img src="/media/images/logo.svg" alt="Zerodha" className="h-4 object-contain" />
          </div>

          {/* Navigation Menu (Dashboard, Orders, etc.) */}
          <Menu />

        </header>

        {/* Dynamic Page Content (The "Picture") */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1000px] mx-auto">
            {children}
          </div>
        </div>

      </main>
      <OrderModal />
    </div>
  );
}