import Link from "next/link";
import { Grid3X3 } from "lucide-react";

export default function AppsPage() {
  return (
    <div className="bg-white">
      <h2 className="text-[22px] font-medium text-[#424242] mb-6">
        Connected Apps
      </h2>

      <div className="flex flex-col items-center justify-center min-h-[40vh] border border-[#eee] rounded-md bg-[#fbfbfb]">
        <div className="w-16 h-16 bg-white border border-[#eee] rounded-full flex items-center justify-center mb-4">
          <Grid3X3 size={24} className="text-[#9b9b9b]" />
        </div>
        <p className="text-[#424242] font-medium mb-2">No apps connected yet</p>
        <p className="text-[#9b9b9b] text-sm mb-6 max-w-sm text-center">
          Connect third-party applications to enhance your trading experience.
        </p>
        <Link 
          href="#" 
          className="px-6 py-2 bg-[#387ed1] text-white rounded text-sm font-medium hover:bg-blue-600 transition"
        >
          Explore Apps
        </Link>
      </div>
    </div>
  );
}