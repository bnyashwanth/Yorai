export default function Summary() {
  return (
    <div className="bg-white">
      <div className="mb-8">
        <h2 className="text-2xl font-medium text-[#424242]">
          Hi, User!
        </h2>

        <hr className="mt-4 border-[#eee]" />
      </div>

      <div className="mb-10">
        <h3 className="text-lg font-medium text-[#424242] mb-6">
          Equity
        </h3>

        <div className="grid grid-cols-2 gap-12">
          <div className="border-r border-[#eee] text-center">
            <h1 className="text-4xl font-medium text-[#424242]">
              3.74k
            </h1>
            <p className="text-[#9b9b9b] mt-2">
              Margin available
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#9b9b9b]">
                Margins used
              </span>
              <span>0</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#9b9b9b]">
                Opening balance
              </span>
              <span>3.74k</span>
            </div>
          </div>
        </div>

        <hr className="mt-8 border-[#eee]" />
      </div>

      <div>
        <h3 className="text-lg font-medium text-[#424242] mb-6">
          Holdings (13)
        </h3>

        <div className="grid grid-cols-2 gap-12">
          <div className="border-r border-[#eee] text-center">
            <h1 className="text-4xl font-medium text-[#4caf50]">
              1.55k
              <span className="text-lg text-[#9b9b9b] ml-2">
                +5.20%
              </span>
            </h1>

            <p className="text-[#9b9b9b] mt-2">
              P&L
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#9b9b9b]">
                Current Value
              </span>
              <span>31.43k</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#9b9b9b]">
                Investment
              </span>
              <span>29.88k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}