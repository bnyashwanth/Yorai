import React from "react";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#fbfbfb] border-t pt-10">
      <div className="max-w-7xl mx-auto px-6 py-5">
        {/* Changed to a 12-column grid for better proportional control */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Section - Takes up 4 out of 12 columns */}
          <div className="md:col-span-4 pr-8">
            <img
              src="/media/images/logo.svg"
              alt="Logo"
              className="w-40 mb-5"
            />

            {/* Adjusted leading for tighter text alignment */}
            <p className="text-[14px] text-[#666] leading-relaxed mb-6">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6 text-[24px] text-[#666] mb-6">
              <FaXTwitter className="hover:text-[#387ed1] cursor-pointer transition" />
              <FaFacebook className="hover:text-[#387ed1] cursor-pointer transition" />
              <FaInstagram className="hover:text-[#387ed1] cursor-pointer transition" />
              <FaLinkedin className="hover:text-[#387ed1] cursor-pointer transition" />
            </div>

            {/* Shortened the border slightly to match the reference image */}
            <div className="border-t border-gray-300 w-[85%] mb-6"></div>

            <div className="flex items-center gap-6 text-[24px] text-[#666] mb-8">
              <FaYoutube className="hover:text-[#387ed1] cursor-pointer transition" />
              <FaWhatsapp className="hover:text-[#387ed1] cursor-pointer transition" />
              <FaTelegram className="hover:text-[#387ed1] cursor-pointer transition" />
            </div>

            {/* Store Buttons - They now have enough room to breathe */}
            <div className="flex gap-4">
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="w-32 cursor-pointer"
              />

              <img
                src="/media/images/appstoreBadge.svg"
                alt="App Store"
                className="w-32 cursor-pointer"
              />
            </div>
          </div>

          {/* Account - Takes up 2 out of 12 columns */}
          <div className="md:col-span-2">
            <h3 className="text-[18px] font-medium text-[#424242] mb-6">
              Account
            </h3>

            {/* Reduced gap from gap-5 to gap-4 to match the tighter layout of the reference */}
            <div className="flex flex-col gap-4 text-[14px] font-medium text-[#666]">
              <a href="#" className="hover:text-[#387ed1] transition">
                Open demat account
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Minor demat account
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                NRI demat account
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                HUF demat account
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Commodity
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Dematerialisation
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Fund transfer
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                MTF
              </a>
            </div>
          </div>

          {/* Support - Takes up 2 out of 12 columns */}
          <div className="md:col-span-2">
            <h3 className="text-[18px] font-medium text-[#424242] mb-6">
              Support
            </h3>

            <div className="flex flex-col gap-4 text-[14px] font-medium text-[#666]">
              <a href="#" className="hover:text-[#387ed1] transition">
                Contact us
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Support portal
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                How to file a complaint?
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Status of your complaints
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Bulletin
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Circular
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Z-Connect blog
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Downloads
              </a>
            </div>
          </div>

          {/* Company - Takes up 2 out of 12 columns */}
          <div className="md:col-span-2">
            <h3 className="text-[18px] font-medium text-[#424242] mb-6">
              Company
            </h3>

            <div className="flex flex-col gap-4 text-[14px] font-medium text-[#666]">
              <a href="#" className="hover:text-[#387ed1] transition">
                About
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Philosophy
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Press & media
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Careers
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Zerodha Cares (CSR)
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Zerodha.tech
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Open source
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Referral program
              </a>
            </div>
          </div>

          {/* Quick Links - Takes up 2 out of 12 columns */}
          <div className="md:col-span-2">
            <h3 className="text-[18px] font-medium text-[#424242] mb-6">
              Quick links
            </h3>

            <div className="flex flex-col gap-4 text-[14px] font-medium text-[#666]">
              <a href="#" className="hover:text-[#387ed1] transition">
                Upcoming IPOs
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Brokerage charges
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Market holidays
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Economic calendar
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Calculators
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Markets
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Sectors
              </a>
              <a href="#" className="hover:text-[#387ed1] transition">
                Gift Nifty
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-10 text-[11px] leading-5 text-[#9b9b9b] space-y-4 font-medium">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to{" "}
            <a href="mailto:complaints@zerodha.com" className="text-[#387ed1] hover:underline">complaints@zerodha.com</a>, for DP related to{" "}
            <a href="mailto:dp@zerodha.com" className="text-[#387ed1] hover:underline">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on{" "}
            <a href="#" className="text-[#387ed1] hover:underline cursor-pointer">SEBI SCORES</a>:
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>

          <p className="pt-2">
            <a href="#" className="text-[#387ed1] hover:underline cursor-pointer">Smart Online Dispute Resolution</a> |{" "}
            <a href="#" className="text-[#387ed1] hover:underline cursor-pointer">Grievances Redressal Mechanism</a>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as margins
            from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE.{" "}
            <a href="#" className="text-[#387ed1] hover:underline cursor-pointer">
              NSE broker factsheet
            </a>
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please{" "}
            <a href="#" className="text-[#387ed1] hover:underline cursor-pointer">create a ticket here</a>.
          </p>
          <p>
            *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
          </p>
          <p>
            Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
          </p>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-3 text-[11px] font-bold text-gray-400">
          <a href="#" className="hover:text-[#387ed1] transition">
            NSE
          </a>
          <a href="#" className="hover:text-[#387ed1] transition">
            BSE
          </a>
          <a href="#" className="hover:text-[#387ed1] transition">
            MCX
          </a>
          <a href="#" className="hover:text-[#387ed1] transition">
            Terms & conditions
          </a>
          <a href="#" className="hover:text-[#387ed1] transition">
            Policies & procedures
          </a>
          <a href="#" className="hover:text-[#387ed1] transition">
            Privacy policy
          </a>
          <a href="#" className="hover:text-[#387ed1] transition">
            Disclosure
          </a>
          <a href="#" className="hover:text-[#387ed1] transition">
            For investor's attention
          </a>
          <a href="#" className="hover:text-[#387ed1] transition">
            Investor charter
          </a>
        </div>
      </div>
    </footer>
  );
}