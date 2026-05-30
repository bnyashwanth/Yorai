import { ChevronRight, CirclePlus } from "lucide-react";

const topicGroups = [
	{
		title: "Account Opening",
		links: [
			"Online account opening",
			"Offline account opening",
			"Company, partnership and HUF account",
			"NRI account opening",
			"Charges at Zerodha",
			"Getting started",
		],
	},
	{
		title: "Your Zerodha Account",
		links: [
			"Your Profile",
			"Account modification",
			"Client master report",
			"Nomination",
			"Transfer and closure",
			"2FA and security",
		],
	},
	{
		title: "Funds",
		links: [
			"Adding funds",
			"Withdrawing funds",
			"Fund statements",
			"UPI and bank transfer",
			"Margins",
			"Pledge and collateral",
		],
	},
	{
		title: "Console",
		links: [
			"Contract notes",
			"Reports",
			"Holdings and P&L",
			"Ledger",
			"Tax statement",
			"Account statement",
		],
	},
	{
		title: "Coin",
		links: [
			"Mutual funds",
			"SIP",
			"Redemption",
			"Switching funds",
			"Nominee settings",
			"Statements",
		],
	},
	{
		title: "Kite",
		links: [
			"Login and password",
			"Orders and positions",
			"Charts and tools",
			"Marketwatch",
			"App issues",
			"Trading preferences",
		],
	},
];

export default function CreateTicket() {
	return (
		<section id="tickets" className="bg-white py-20">
			<div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
				<div className="mb-10 flex flex-col gap-3 border-b border-gray-200 pb-6">
					<p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#387ed1]">
						Create a ticket
					</p>
					<h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
						Select a relevant topic
					</h2>
				</div>

				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{topicGroups.map((group) => (
						<article
							key={group.title}
							className="rounded-3xl border border-gray-200 bg-[#fcfcfd] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
						>
							<h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
								<CirclePlus size={20} className="text-[#387ed1]" />
								{group.title}
							</h3>

							<ul className="mt-5 space-y-3 text-sm text-gray-600">
								{group.links.map((link) => (
									<li key={link}>
										<a
											href="#"
											className="inline-flex items-center gap-2 transition hover:text-[#387ed1]"
										>
											<ChevronRight size={16} className="shrink-0" />
											<span>{link}</span>
										</a>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
