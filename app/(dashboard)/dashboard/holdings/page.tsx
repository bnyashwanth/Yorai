import { connectToDatabase } from "@/lib/mongodb";
import Holding from "@/models/Holding";
import VerticalGraph from "@/components/dashboard/VerticalGraph"; // <-- Import the chart

// Force dynamic rendering so it always fetches fresh data on reload
export const dynamic = "force-dynamic";

export default async function HoldingsPage() {
  // 1. Connect to MongoDB and fetch the holdings directly
  await connectToDatabase();
  
  // .lean() converts Mongoose documents to plain JS objects for better performance
  const holdingsData = await Holding.find({}).lean();
  
  // Clean up the _id property for React rendering
  const holdings = holdingsData.map((doc: any) => ({
    ...doc,
    _id: doc._id.toString(),
  }));

  // 2. Calculate Dashboard Totals
  let totalInvestment = 0;
  let totalCurrentValue = 0;

  holdings.forEach((stock) => {
    totalInvestment += stock.avg * stock.qty;
    totalCurrentValue += stock.price * stock.qty;
  });

  const totalPnl = totalCurrentValue - totalInvestment;
  const pnlPercentage = totalInvestment > 0 ? (totalPnl / totalInvestment) * 100 : 0;
  const isPnlPositive = totalPnl >= 0;

  // 3. Prepare Chart Data for Chart.js
  const chartData = {
    labels: holdings.map((stock) => stock.name),
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="bg-white pb-10">
      <h2 className="text-[22px] font-medium text-[#424242] mb-6">
        Holdings ({holdings.length})
      </h2>

      {/* Holdings Table */}
      <div className="overflow-x-auto border border-[#eee] rounded-md">
        <table className="w-full text-sm text-left text-[#424242]">
          <thead className="text-xs text-[#9b9b9b] uppercase bg-[#fbfbfb] border-b border-[#eee]">
            <tr>
              <th className="px-6 py-4 font-normal">Instrument</th>
              <th className="px-6 py-4 font-normal text-right">Qty.</th>
              <th className="px-6 py-4 font-normal text-right">Avg. cost</th>
              <th className="px-6 py-4 font-normal text-right">LTP</th>
              <th className="px-6 py-4 font-normal text-right">Cur. val</th>
              <th className="px-6 py-4 font-normal text-right">P&L</th>
              <th className="px-6 py-4 font-normal text-right">Net chg.</th>
              <th className="px-6 py-4 font-normal text-right">Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-6 py-12 text-center text-[#9b9b9b]">
                  No holdings found.
                </td>
              </tr>
            ) : (
              holdings.map((stock) => {
                const curValue = stock.price * stock.qty;
                const pnl = curValue - stock.avg * stock.qty;
                const isPositive = pnl >= 0;

                return (
                  <tr key={stock._id} className="border-b border-[#eee] hover:bg-[#fbfbfb] transition-colors">
                    <td className="px-6 py-4 font-medium">{stock.name}</td>
                    <td className="px-6 py-4 text-right">{stock.qty}</td>
                    <td className="px-6 py-4 text-right">
                      {stock.avg.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {stock.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {curValue.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </td>
                    <td className={`px-6 py-4 text-right ${isPositive ? "text-[#4caf50]" : "text-[#e53935]"}`}>
                      {isPositive ? "+" : ""}
                      {pnl.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </td>
                    <td className={`px-6 py-4 text-right ${stock.net.includes("-") ? "text-[#e53935]" : "text-[#4caf50]"}`}>
                      {stock.net}
                    </td>
                    <td className={`px-6 py-4 text-right ${stock.day.includes("-") ? "text-[#e53935]" : "text-[#4caf50]"}`}>
                      {stock.day}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Portfolio Summary Strip */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#eee]">
        <div className="flex gap-16">
          <div>
            <p className="text-xs text-[#9b9b9b] mb-1">Total investment</p>
            <p className="text-[22px] font-medium text-[#424242]">
              {totalInvestment.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#9b9b9b] mb-1">Current value</p>
            <p className="text-[22px] font-medium text-[#424242]">
              {totalCurrentValue.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs text-[#9b9b9b] mb-1">Total P&L</p>
          <div className={`text-[22px] font-medium ${isPnlPositive ? "text-[#4caf50]" : "text-[#e53935]"}`}>
            {isPnlPositive ? "+" : ""}
            {totalPnl.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            <span className="text-sm ml-2 font-normal">
              ({isPnlPositive ? "+" : ""}{pnlPercentage.toFixed(2)}%)
            </span>
          </div>
        </div>
      </div>

      {/* Render the Vertical Graph */}
      {holdings.length > 0 && (
        <div className="mt-8">
          <VerticalGraph data={chartData} />
        </div>
      )}
    </div>
  );
}