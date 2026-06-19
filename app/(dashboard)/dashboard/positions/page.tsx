import { connectToDatabase } from "@/lib/mongodb";
import Position from "@/models/Position";

export const dynamic = "force-dynamic";

export default async function PositionsPage() {
  await connectToDatabase();
  
  // Fetch positions from MongoDB
  const positionsData = await Position.find({}).lean();
  const positions = positionsData.map((doc: any) => ({
    ...doc,
    _id: doc._id.toString(),
  }));

  return (
    <div className="bg-white">
      <h3 className="text-[22px] font-medium text-[#424242] mb-6">
        Positions ({positions.length})
      </h3>

      <div className="overflow-x-auto border border-[#eee] rounded-md">
        <table className="w-full text-sm text-left text-[#424242]">
          <thead className="text-xs text-[#9b9b9b] uppercase bg-[#fbfbfb] border-b border-[#eee]">
            <tr>
              <th className="px-6 py-4 font-normal">Product</th>
              <th className="px-6 py-4 font-normal">Instrument</th>
              <th className="px-6 py-4 font-normal text-right">Qty.</th>
              <th className="px-6 py-4 font-normal text-right">Avg.</th>
              <th className="px-6 py-4 font-normal text-right">LTP</th>
              <th className="px-6 py-4 font-normal text-right">P&L</th>
              <th className="px-6 py-4 font-normal text-right">Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-[#9b9b9b]">
                  No open positions.
                </td>
              </tr>
            ) : (
              positions.map((stock) => {
                const curValue = stock.price * stock.qty;
                const pnl = curValue - stock.avg * stock.qty;
                const isPositive = pnl >= 0;

                return (
                  <tr key={stock._id} className="border-b border-[#eee] hover:bg-[#fbfbfb] transition-colors">
                    <td className="px-6 py-4 font-medium">{stock.product}</td>
                    <td className="px-6 py-4 font-medium">{stock.name}</td>
                    <td className="px-6 py-4 text-right">{stock.qty}</td>
                    <td className="px-6 py-4 text-right">{stock.avg.toFixed(2)}</td>
                    <td className="px-6 py-4 text-right">{stock.price.toFixed(2)}</td>
                    <td className={`px-6 py-4 text-right ${isPositive ? "text-[#4caf50]" : "text-[#e53935]"}`}>
                      {isPositive ? "+" : ""}
                      {pnl.toFixed(2)}
                    </td>
                    <td className={`px-6 py-4 text-right ${stock.isLoss ? "text-[#e53935]" : "text-[#4caf50]"}`}>
                      {stock.day}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}