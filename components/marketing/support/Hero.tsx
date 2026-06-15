import Link from "next/link";
import { Search } from "lucide-react";

export default function Hero() {
	return (
		<section className="bg-[#f5f5f5] border-b border-[#e6e6e6]">
			<div className="max-w-6xl mx-auto px-6 py-8">
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-[22px] font-medium text-[#424242]">
						Support Portal
					</h1>

					<Link
						href="#"
						className="bg-[#387ed1] text-white px-4 py-2 text-sm rounded"
					>
						My tickets
					</Link>
				</div>

				<div className="relative">
					<Search
						size={18}
						className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
					/>

					<input
						type="text"
						placeholder="Eg: How do I open my account, How do I activate F&O..."
className="w-full h-12 pl-12 border border-gray-300 bg-white text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-[#387ed1]"					/>
				</div>
			</div>
		</section>
	);
}