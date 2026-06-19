import { connectToDatabase } from "@/lib/mongodb";
import Fund from "@/models/Fund";

export const dynamic = "force-dynamic";

export default async function FundsPage() {
  await connectToDatabase();
  
  // Fetch the fund document (we'll assume there is just one for this demo)
  const fundData = await Fund.findOne({}).lean();
  
  // Fallback to zeros if the database is empty so the page doesn't crash
  const funds = fundData || {
    availableMargin: 0,
    usedMargin: 0,
    availableCash: 0,
    openingBalance: 0,
    payin: 0,
  };

  const formatCurrency = (amount: number) => 
    amount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center mb-10">
        <p className="text-[#424242] text-[15px]">Instant, zero-cost fund transfers with UPI</p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-[#4caf50] text-white rounded text-sm font-medium hover:bg-green-600 transition">Add funds</button>
          <button className="px-6 py-2 bg-[#387ed1] text-white rounded text-sm font-medium hover:bg-blue-600 transition">Withdraw</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-16">
        {/* Equity Column */}
        <div>
          <h3 className="text-lg font-medium text-[#424242] mb-6 flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#387ed1] mr-3"></span>Equity
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-[#eee] pb-4">
              <span className="text-[#9b9b9b]">Available margin</span>
              <span className="font-medium text-[#387ed1]">{formatCurrency(funds.availableMargin)}</span>
            </div>
            <div className="flex justify-between border-b border-[#eee] pb-4">
              <span className="text-[#9b9b9b]">Used margin</span>
              <span className="font-medium">{formatCurrency(funds.usedMargin)}</span>
            </div>
            <div className="flex justify-between border-b border-[#eee] pb-4">
              <span className="text-[#9b9b9b]">Available cash</span>
              <span className="font-medium">{formatCurrency(funds.availableCash)}</span>
            </div>
            <div className="flex justify-between pb-2 pt-2">
              <span className="text-[#9b9b9b]">Opening Balance</span>
              <span className="font-medium">{formatCurrency(funds.openingBalance)}</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="text-[#9b9b9b]">Payin</span>
              <span className="font-medium">{formatCurrency(funds.payin)}</span>
            </div>
          </div>
        </div>

        {/* Commodity Column */}
        <div>
          <div className="flex flex-col items-center justify-center h-full border border-[#eee] rounded-md p-8 text-center bg-[#fbfbfb]">
            <p className="text-[#424242] mb-4">You don't have a commodity account</p>
            <button className="px-6 py-2 bg-[#387ed1] text-white rounded text-sm font-medium hover:bg-blue-600 transition">Open Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}