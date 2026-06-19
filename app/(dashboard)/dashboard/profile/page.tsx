import { User, Mail, Phone, MapPin, Building, ShieldCheck } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="bg-white pb-10">
      <h2 className="text-[22px] font-medium text-[#424242] mb-6">
        Account & Profile
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Avatar & Basic Info */}
        <div className="w-full md:w-1/3">
          <div className="border border-[#eee] rounded-md p-6 text-center">
            <div className="w-24 h-24 bg-[#f3f7ff] text-[#387ed1] text-2xl rounded-full flex items-center justify-center font-medium mx-auto mb-4">
              BY
            </div>
            <h3 className="text-xl font-medium text-[#424242]">BN Yashwanth</h3>
            <p className="text-sm text-[#9b9b9b] mb-4">USERID • Active</p>
            
            <div className="inline-flex items-center space-x-1 px-3 py-1 bg-green-50 text-[#4caf50] rounded-full text-xs font-medium">
              <ShieldCheck size={14} />
              <span>KYC Verified</span>
            </div>
          </div>

          <div className="border border-[#eee] rounded-md p-6 mt-6">
            <h4 className="text-sm font-medium text-[#424242] mb-4">Trading Segments</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#9b9b9b]">NSE, BSE</span>
                <span className="text-[#4caf50] font-medium">Active</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#9b9b9b]">NFO, BFO</span>
                <span className="text-[#4caf50] font-medium">Active</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#9b9b9b]">MCX</span>
                <span className="text-[#e53935] font-medium text-xs border border-[#e53935] px-2 py-0.5 rounded cursor-pointer hover:bg-red-50 transition">Activate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Info Tabs */}
        <div className="w-full md:w-2/3 border border-[#eee] rounded-md p-8">
          <h3 className="text-lg font-medium text-[#424242] mb-6 border-b border-[#eee] pb-4">
            Personal Details
          </h3>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail size={18} className="text-[#9b9b9b] mt-1" />
              <div>
                <p className="text-xs text-[#9b9b9b] mb-1">Email Address</p>
                <p className="text-sm text-[#424242] font-medium">bnyashwanth2006@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone size={18} className="text-[#9b9b9b] mt-1" />
              <div>
                <p className="text-xs text-[#9b9b9b] mb-1">Mobile Number</p>
                <p className="text-sm text-[#424242] font-medium">+91 9876543210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <User size={18} className="text-[#9b9b9b] mt-1" />
              <div>
                <p className="text-xs text-[#9b9b9b] mb-1">PAN Number</p>
                <p className="text-sm text-[#424242] font-medium">ABCDE1234F</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin size={18} className="text-[#9b9b9b] mt-1" />
              <div>
                <p className="text-xs text-[#9b9b9b] mb-1">Registered Address</p>
                <p className="text-sm text-[#424242] font-medium">
                  Bengaluru, Karnataka, India
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-medium text-[#424242] mb-6 mt-10 border-b border-[#eee] pb-4">
            Bank Details
          </h3>

          <div className="flex items-start space-x-4">
            <Building size={18} className="text-[#9b9b9b] mt-1" />
            <div>
              <p className="text-xs text-[#9b9b9b] mb-1">HDFC Bank (Primary)</p>
              <p className="text-sm text-[#424242] font-medium">XXXX XXXX 1234</p>
              <p className="text-xs text-[#9b9b9b] mt-1">Branch: Bengaluru Central</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}