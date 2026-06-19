import { connectToDatabase } from "@/lib/mongodb";
import Holding from "@/models/Holding";

export const dynamic = "force-dynamic";

export default async function SummaryPage() {
  await connectToDatabase();
  
  // Fetch actual holdings to calculate real portfolio value
  const holdingsData = await Holding.find({}).lean();
  
  let totalInvestment = 0;
  let totalCurrentValue = 0;

  holdingsData.forEach((stock: any) => {
    totalInvestment += stock.avg * stock.qty;
    totalCurrentValue += stock.price * stock.qty;
  });

  const totalPnl = totalCurrentValue - totalInvestment;
  const pnlPercentage = totalInvestment > 0 ? (totalPnl / totalInvestment) * 100 : 0;
  const isPnlPositive = totalPnl >= 0;

  return (
    <div className="bg-white">
      <div className="mb-8">
        <h2 className="text-2xl font-medium text-[#424242]">Hi, User!</h2>
        <hr className="mt-4 border-[#eee]" />
      </div>

      {/* Equity Section */}
      <div className="mb-10">
        <h3 className="text-lg font-medium text-[#424242] mb-6 flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#387ed1] mr-3"></span>
          Equity
        </h3>

        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col justify-center items-center text-center border-r border-[#eee]">
            <h1 className="text-4xl font-medium text-[#424242] mb-2">3.74k</h1>
            <p className="text-sm text-[#9b9b9b]">Margin available</p>
          </div>
          
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#9b9b9b]">Margins used</span>
              <span className="font-medium text-[#424242]">0</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#9b9b9b]">Opening balance</span>
              <span className="font-medium text-[#424242]">3.74k</span>
            </div>
          </div>
        </div>
        <hr className="mt-8 border-[#eee]" />
      </div>

      {/* Holdings Section (Now Dynamic!) */}
      <div>
        <h3 className="text-lg font-medium text-[#424242] mb-6 flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#387ed1] mr-3"></span>
          Holdings ({holdingsData.length})
        </h3>

        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col justify-center items-center text-center border-r border-[#eee]">
            <h1 className={`text-4xl font-medium mb-2 ${isPnlPositive ? "text-[#4caf50]" : "text-[#e53935]"}`}>
              {totalPnl.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              <span className="text-lg ml-2 font-normal text-[#9b9b9b]">
                {isPnlPositive ? "+" : ""}{pnlPercentage.toFixed(2)}%
              </span>
            </h1>
            <p className="text-sm text-[#9b9b9b]">P&L</p>
          </div>
          
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#9b9b9b]">Current Value</span>
              <span className="font-medium text-[#424242]">
                {totalCurrentValue.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#9b9b9b]">Investment</span>
              <span className="font-medium text-[#424242]">
                {totalInvestment.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}