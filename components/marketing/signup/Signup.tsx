import React from "react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#424242]">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-[40px] font-medium mb-3">
            Open a free demat and trading account online
          </h1>
          <p className="text-[17px] text-[#666]">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Hero Image */}
          <div className="w-full md:w-3/5">
            <img
              src="/media/images/signup.png"
              alt="Dashboard Preview"
              className="w-full object-contain"
            />
          </div>

          {/* Signup Form */}
          <div className="w-full md:w-2/5 max-w-87.5">
            <h2 className="text-[22px] font-medium mb-1">Signup now</h2>
            <p className="text-[13px] text-[#9b9b9b] mb-6">
              Or track your existing application
            </p>

            <div className="flex mb-6">
              <div className="flex items-center justify-center px-4 border border-r-0 border-gray-300 rounded-l bg-gray-50 text-gray-700 text-sm">
                <img
                  src="https://placehold.co/20x15/green/white?text=IN"
                  alt="Flag"
                  className="mr-2 h-3"
                />
                +91
              </div>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="w-full px-4 py-3 border border-gray-300 rounded-r focus:outline-none focus:border-blue-500 text-sm transition"
              />
            </div>

            <button className="w-full bg-[#387ed1] text-white font-medium py-2.5 rounded hover:bg-[#2b64a8] transition mb-4 text-[15px]">
              Get OTP
            </button>

            <p className="text-[11px] text-[#9b9b9b] mb-4 leading-relaxed">
              By proceeding, you agree to the Zerodha{" "}
              <a href="#" className="text-[#387ed1] hover:underline">
                terms
              </a>{" "}
              &{" "}
              <a href="#" className="text-[#387ed1] hover:underline">
                privacy policy
              </a>
            </p>

            <p className="text-[13px] text-[#666]">
              Looking to open NRI account?{" "}
              <a href="#" className="text-[#387ed1] hover:underline">
                Click here
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Investment Options Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-medium mb-14">
          Investment options with Zerodha demat account
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left mb-12">
          {/* Option 1 */}
          <div className="flex gap-4 items-start">
            <img
              src="/media/images/stocks.png"
              alt="Stocks Icon"
              className="w-12 h-12 shrink-0"
            />
            <div>
              <h3 className="text-[16px] font-medium mb-1">Stocks</h3>
              <p className="text-[14px] text-[#666] leading-relaxed">
                Invest in all exchange-listed securities
              </p>
            </div>
          </div>
          {/* Option 2 */}
          <div className="flex gap-4 items-start">
            <img
              src="/media/images/mutual-funds.png"
              alt="Mutual Funds Icon"
              className="w-12 h-12 shrink-0"
            />
            <div>
              <h3 className="text-[16px] font-medium mb-1">Mutual funds</h3>
              <p className="text-[14px] text-[#666] leading-relaxed">
                Invest in commission-free direct mutual funds
              </p>
            </div>
          </div>
          {/* Option 3 */}
          <div className="flex gap-4 items-start">
            <img
              src="/media/images/ipo.png"
              alt="IPO Icon"
              className="w-12 h-12 shrink-0"
            />
            <div>
              <h3 className="text-[16px] font-medium mb-1">IPO</h3>
              <p className="text-[14px] text-[#666] leading-relaxed">
                Apply to the latest IPOs instantly via UPI
              </p>
            </div>
          </div>
          {/* Option 4 */}
          <div className="flex gap-4 items-start">
            <img
              src="/media/images/future.png"
              alt="F&O Icon"
              className="w-12 h-12 shrink-0"
            />
            <div>
              <h3 className="text-[16px] font-medium mb-1">
                Futures & options
              </h3>
              <p className="text-[14px] text-[#666] leading-relaxed">
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>

        <button className="bg-[#387ed1] text-white font-medium px-6 py-2.5 rounded hover:bg-[#2b64a8] transition text-[15px]">
          Explore Investments
        </button>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-medium mb-16">
            Steps to open a demat account with Zerodha
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="w-full md:w-1/2">
              <img
                src="/media/images/stocks.svg"
                alt="Steps Video Thumbnail"
                className="w-full"
              />
            </div>
            <div className="w-full md:w-1/2 text-left space-y-6">
              <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <span className="text-[#387ed1] border border-[#387ed1] rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                  01
                </span>
                <span className="text-[15px]">Enter the requested details</span>
              </div>
              <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <span className="text-[#387ed1] border border-[#387ed1] rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                  02
                </span>
                <span className="text-[15px]">
                  Complete e-sign & verification
                </span>
              </div>
              <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <span className="text-[#387ed1] border border-[#387ed1] rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                  03
                </span>
                <span className="text-[15px]">Start investing!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <img
              src="/media/images/stockss.png"
              alt="Benefits Chart"
              className="w-full max-w-95 mx-auto md:mx-0 mb-8"
            />

            <h2 className="text-2xl font-medium">
              Benefits of opening a Zerodha demat account
            </h2>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h3 className="text-[17px] font-medium mb-2">
                Unbeatable pricing
              </h3>
              <p className="text-[14px] text-[#666] leading-relaxed">
                Zero charges for equity & mutual fund investments. Flat ₹20 fees
                for intraday and F&O trades.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-medium mb-2">
                Best investing experience
              </h3>
              <p className="text-[14px] text-[#666] leading-relaxed">
                Simple and intuitive trading platform with an easy-to-understand
                user interface.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-medium mb-2">
                No spam or gimmicks
              </h3>
              <p className="text-[14px] text-[#666] leading-relaxed">
                Committed to transparency — no gimmicks, spam, "gamification",
                or intrusive push notifications.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-medium mb-2">
                The Zerodha universe
              </h3>
              <p className="text-[14px] text-[#666] leading-relaxed">
                More than just an app — gain free access to the entire ecosystem
                of our partner products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Account Types Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-[42px] font-medium text-center text-[#424242] mb-16">
          Explore different account types
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="relative border border-gray-200 rounded-md p-10 pt-14 min-h-55 hover:shadow-sm transition bg-white cursor-pointer">
            <div className="absolute -left-5 top-8 w-12 h-12 rounded-full bg-[#f3f7ff] border border-gray-200 flex items-center justify-center">
              <img src="/media/images/user.png" alt="" className="w-6 h-6" />
            </div>

            <h3 className="text-[23px] font-medium text-[#424242] mb-6">
              Individual Account
            </h3>

            <p className="text-[19px] leading-10 text-[#666]">
              Invest in equity, mutual funds and derivatives
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative border border-gray-200 rounded-md p-10 pt-14 min-h-55 hover:shadow-sm transition bg-white cursor-pointer">
            <div className="absolute -left-5 top-8 w-12 h-12 rounded-full bg-[#f3f7ff] border border-gray-200 flex items-center justify-center">
              <img src="/media/images/huf.png" alt="" className="w-6 h-6" />
            </div>

            <h3 className="text-[23px] font-medium text-[#424242] mb-6">
              HUF Account
            </h3>

            <p className="text-[19px] leading-10 text-[#666]">
              Make tax-efficient investments for your family
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative border border-gray-200 rounded-md p-10 pt-14 min-h-55 hover:shadow-sm transition bg-white cursor-pointer">
            <div className="absolute -left-5 top-8 w-12 h-12 rounded-full bg-[#f3f7ff] border border-gray-200 flex items-center justify-center">
              <img src="/media/images/nri.png" alt="" className="w-6 h-6" />
            </div>

            <h3 className="text-[23px] font-medium text-[#424242] mb-6">
              NRI Account
            </h3>

            <p className="text-[19px] leading-10 text-[#666]">
              Invest in equity, mutual funds, debentures, and more
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative border border-gray-200 rounded-md p-10 pt-14 min-h-55 hover:shadow-sm transition bg-white cursor-pointer">
            <div className="absolute -left-5 top-8 w-12 h-12 rounded-full bg-[#f3f7ff] border border-gray-200 flex items-center justify-center">
              <img src="/media/images/minor.png" alt="" className="w-6 h-6" />
            </div>

            <h3 className="text-[23px] font-medium text-[#424242] mb-6">
              Minor Account
            </h3>

            <p className="text-[19px] leading-10 text-[#666]">
              Teach your little ones about money & invest for their future
            </p>
          </div>

          {/* Card 5 */}
          <div className="relative border border-gray-200 rounded-md p-8 pt-10 min-h-40 hover:shadow-sm transition bg-white cursor-pointer">
            <div className="absolute -left-5 top-8 w-12 h-12 rounded-full bg-[#f3f7ff] border border-gray-200 flex items-center justify-center">
              <img src="/media/images/company.png" alt="" className="w-6 h-6" />
            </div>

            <h3 className="text-[22px] font-medium text-[#424242] mb-6">
              Corporate / LLP / Partnership
            </h3>

            <p className="text-[19px] leading-10 text-[#666]">
              Manage your business surplus and investments easily
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium mb-8">FAQs</h2>
        <div className="space-y-0 text-[15px] text-[#424242]">
          {[
            "What is a Zerodha account",
            "What documents are required to open a demat account?",
            "Is Zerodha account opening free?",
            "Are there any maintenance charges for a demat account?",
            "Can I open a demat account without a bank account?",
            "What is a Basic Services Demat Account (BSDA)?",
            "Can I open a demat and trading account using the mobile app?",
          ].map((faq, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-200 py-4 cursor-pointer hover:text-[#387ed1] transition"
            >
              <span>{faq}</span>
              <span className="text-gray-400 text-lg">›</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-[28px] font-medium mb-4">Open a Zerodha account</h2>
        <p className="text-[15px] text-[#666] mb-8">
          Simple and intuitive apps • ₹0 for investments • ₹20 for intraday and
          F&O trades.
        </p>
        <button className="bg-[#387ed1] text-white font-medium px-8 py-2.5 rounded hover:bg-[#2b64a8] transition text-[15px]">
          Signup for free
        </button>
      </section>
    </div>
  );
}
