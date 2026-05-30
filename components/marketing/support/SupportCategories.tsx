"use client";

import {
	ChevronDown,
	CircleDollarSign,
	User,
	Wallet,
	Monitor,
	PieChart,
	Plus,
} from "lucide-react";

const categories = [
	{
		name: "Account Opening",
		icon: Plus,
	},
	{
		name: "Your Zerodha Account",
		icon: User,
	},
	{
		name: "Kite",
		icon: Monitor,
	},
	{
		name: "Funds",
		icon: Wallet,
	},
	{
		name: "Console",
		icon: PieChart,
	},
	{
		name: "Coin",
		icon: CircleDollarSign,
	},
];

export default function SupportCategories() {
	return (
		<div className="space-y-6">
			{categories.map((item) => {
				const Icon = item.icon;

				return (
					<div
						key={item.name}
						className="flex items-center justify-between border border-[#e6e6e6] bg-white"
					>
						<div className="flex items-center">
							<div className="w-14 h-14 flex items-center justify-center border-r border-[#e6e6e6]">
								<Icon size={20} className="text-[#387ed1]" />
							</div>

							<span className="px-4 text-[16px] text-[#424242]">
								{item.name}
							</span>
						</div>

						<div className="px-5">
							<ChevronDown
								size={18}
								className="text-[#387ed1]"
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}