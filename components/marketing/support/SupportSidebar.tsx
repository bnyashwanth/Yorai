const quickLinks = [
	"Track account opening",
	"Track segment activation",
	"Intraday margins",
	"Kite user manual",
	"Learn how to create a ticket",
];

export default function SupportSidebar() {
	return (
		<div>
			<div className="bg-[#fff7e8] border-l-4 border-[#ff9800] p-4">
				<ul className="space-y-4 text-sm">
					<li>
						<a
							href="#"
							className="text-[#387ed1] hover:underline"
						>
							Scheduled maintenance for Coin
						</a>
					</li>

					<li>
						<a
							href="#"
							className="text-[#387ed1] hover:underline"
						>
							Additional exposure margin on securities under
							MWPL
						</a>
					</li>
				</ul>
			</div>

			<div className="mt-4 border border-[#e6e6e6] bg-white">
				<div className="bg-[#f5f5f5] px-4 py-3 text-[#424242] font-medium">
					Quick links
				</div>

				<ul>
					{quickLinks.map((link, index) => (
						<li
							key={link}
							className="border-t border-[#eeeeee] px-4 py-3"
						>
							<a
								href="#"
								className="text-sm text-[#387ed1] hover:underline"
							>
								{index + 1}. {link}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}