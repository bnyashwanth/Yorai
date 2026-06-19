interface Position {
  product: string;
  name: string;
  qty: number;
  avg: number;
  price: number;
  day: string;
  isLoss: boolean;
}

interface PositionsProps {
  positions: Position[];
}

export default function Positions({
  positions,
}: PositionsProps) {
  return (
    <div>
      <h3 className="text-[22px] font-medium text-[#424242] mb-6">
        Positions ({positions.length})
      </h3>

      <div className="overflow-x-auto border border-[#eee] rounded-md">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#eee]">
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Instrument</th>
              <th className="px-4 py-3">Qty.</th>
              <th className="px-4 py-3">Avg.</th>
              <th className="px-4 py-3">LTP</th>
              <th className="px-4 py-3">P&L</th>
              <th className="px-4 py-3">Chg.</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock) => {
              const pnl =
                stock.price * stock.qty -
                stock.avg * stock.qty;

              return (
                <tr
                  key={stock.name}
                  className="border-b border-[#eee]"
                >
                  <td className="px-4 py-3">
                    {stock.product}
                  </td>

                  <td className="px-4 py-3">
                    {stock.name}
                  </td>

                  <td className="px-4 py-3 text-center">
                    {stock.qty}
                  </td>

                  <td className="px-4 py-3 text-center">
                    {stock.avg.toFixed(2)}
                  </td>

                  <td className="px-4 py-3 text-center">
                    {stock.price.toFixed(2)}
                  </td>

                  <td
                    className={`px-4 py-3 text-center ${
                      pnl >= 0
                        ? "text-[#4caf50]"
                        : "text-[#e53935]"
                    }`}
                  >
                    {pnl.toFixed(2)}
                  </td>

                  <td
                    className={`px-4 py-3 text-center ${
                      stock.isLoss
                        ? "text-[#e53935]"
                        : "text-[#4caf50]"
                    }`}
                  >
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}