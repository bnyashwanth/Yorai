import { connectToDatabase } from "@/lib/mongodb";
import Order from "@/models/Order";
import Link from "next/link";
import { Search, SlidersHorizontal, MoreHorizontal, Info } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function OrdersPage() {
  await connectToDatabase();
  
  const ordersData = await Order.find({}).sort({ createdAt: -1 }).lean();
  
  const orders = ordersData.map((doc: any) => ({
    ...doc,
    _id: doc._id.toString(),
    time: new Date(doc.createdAt).toLocaleTimeString("en-IN", {
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    })
  }));

  return (
    <div className="bg-white min-h-[80vh] flex flex-col font-sans">
      
      {/* HEADER: Minimalist Kite Header */}
      <div className="flex justify-between items-end mb-4 border-b border-[#eee]">
        <h2 className="text-[18px] text-[#424242] pb-4">
          Orders <span className="text-[#9b9b9b] text-[15px] font-normal ml-1">({orders.length})</span>
        </h2>
        
        <div className="flex items-center space-x-6 pb-2">
          {/* Authentic Kite Tab Selection */}
          <div className="flex space-x-6 text-[13px]">
            <span className="text-[#f36616] border-b-2 border-[#f36616] pb-2 cursor-pointer -mb-2">All</span>
            <span className="text-[#424242] hover:text-[#f36616] cursor-pointer transition pb-2">Open</span>
            <span className="text-[#424242] hover:text-[#f36616] cursor-pointer transition pb-2">Executed</span>
          </div>

          <div className="relative flex items-center">
            <Search size={14} className="absolute left-3 text-[#9b9b9b]" />
            <input 
              type="text" 
              placeholder="Search eg: infy bse, nifty fut" 
              className="pl-9 pr-4 py-1.5 text-[12px] bg-[#f9f9f9] border border-transparent rounded hover:border-[#eee] focus:bg-white focus:border-[#387ed1] outline-none transition-all w-[220px]"
            />
          </div>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 text-center mt-10">
          <p className="text-[#9b9b9b] text-[14px] mb-4">You haven't placed any orders today</p>
          <Link href="/dashboard" className="px-5 py-2 bg-[#387ed1] text-white font-medium rounded text-[13px] hover:bg-[#2b64a8] transition-colors">
            Get started
          </Link>
        </div>
      ) : (
        <div className="w-full">
          <table className="w-full text-[12px] text-left text-[#424242] border-collapse">
            <thead className="text-[10px] text-[#9b9b9b] uppercase border-b border-[#eee]">
              <tr>
                <th className="px-4 py-2 font-normal w-24">Time</th>
                <th className="px-4 py-2 font-normal">Instrument</th>
                <th className="px-4 py-2 font-normal text-white w-16">Type</th>
                <th className="px-4 py-2 font-normal text-right w-24">Qty.</th>
                <th className="px-4 py-2 font-normal text-right w-28">Avg. Price</th>
                <th className="px-4 py-2 font-normal w-28">Status</th>
                <th className="px-2 py-2 font-normal w-10 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const isBuy = order.mode === "BUY";
                
                // Minimalist Fintech Status Colors
                let statusColor = "text-[#9b9b9b]"; // Default/Cancelled
                if (order.status === "COMPLETED") statusColor = "text-[#4caf50]";
                if (order.status === "REJECTED") statusColor = "text-[#e53935]";
                if (order.status === "OPEN") statusColor = "text-[#387ed1]";

                return (
                  <tr key={order._id} className="border-b border-[#eee] hover:bg-[#fbfbfb] transition-colors group">
                    <td className="px-4 py-3 text-[#9b9b9b] text-[11px]">{order.time}</td>
                    
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <span className="font-medium text-[#424242]">{order.name}</span>
                        <span className="ml-2 text-[9px] text-[#9b9b9b] bg-[#f5f5f5] px-1 rounded uppercase">{order.product}</span>
                        <span className="ml-1 text-[9px] text-[#9b9b9b] uppercase">{order.exchange}</span>
                      </div>
                    </td>
                    
                    <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-[10px] rounded font-medium text-white ${isBuy ? "bg-[#4184f3]" : "bg-[#df514c]"}`}>
                      {/* <span className={`px-1.5 py-0.5 text-[10px] rounded bg-opacity-10 font-medium ${isBuy ? "bg-[#4184f3] text-[#4184f3]" : "bg-[#df514c] text-[#df514c]"}`}> */}
                        {order.mode}
                      </span>
                    </td>
                    
                    <td className="px-4 py-3 text-right">
                      {order.qty} <span className="text-[#9b9b9b] text-[11px]">/ {order.qty}</span>
                    </td>
                    
                    <td className="px-4 py-3 text-right">
                      {order.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </td>
                    
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-1.5">
                        <span className={`text-[11px] ${statusColor}`}>
                          {order.status}
                        </span>
                        {order.status === "REJECTED" && (
                          <Info size={12} className="text-[#9b9b9b] cursor-pointer hover:text-[#424242]" />
                        )}
                      </div>
                    </td>

                    {/* Action Menu (Visible only on row hover) */}
                    <td className="px-2 py-3 text-center">
                      <MoreHorizontal size={14} className="text-[#9b9b9b] opacity-0 group-hover:opacity-100 cursor-pointer hover:text-[#424242] transition-opacity mx-auto" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}