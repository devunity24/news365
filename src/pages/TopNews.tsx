import React from "react";
import AdvertisementPage from "./Add";

const topNews = [
	{
		title: "India’s Business Activity Hits 14-Month High in June, Driven by Robust Demand and Exports",
		date: "June 23, 2025",
		image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
		featured: true,
	},
	{
		title: "India Set to Outpace G7 Economies in Growth: Report",
		date: "June 23, 2025",
		image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
		featured: false,
	},
	{
		title: "Container Liquor Shops Gain Popularity in Noida Amid Policy Shift and Space Crunch",
		date: "June 23, 2025",
		image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
		featured: false,
	},
];

const TopNews = () => {
	return (
		<section className="px-4 py-8">
			<div className="flex flex-col lg:flex-row gap-8">
				{/* News Section */}
				<div className="w-full lg:basis-[60%] lg:max-w-[60%] min-w-0">
					{/* Featured News */}
					<div className="mb-8">
						<div className="rounded-lg overflow-hidden shadow-lg bg-[#181818] hover:shadow-2xl transition-all duration-200">
							<img
								src={topNews[0].image}
								alt={topNews[0].title}
								className="w-full h-80 object-cover"
							/>
							<div className="p-6">
								<h2 className="text-3xl font-bold mb-2 leading-tight">
									{topNews[0].title}
								</h2>
								<div className="flex items-center gap-4 text-sm mb-2">
									<span className="font-semibold tracking-wide text-white/80">
										FEATURED ARTICLE
									</span>
									<span className="text-white/60">{topNews[0].date}</span>
								</div>
							</div>
						</div>
					</div>
					{/* Other News */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{topNews.slice(1).map((news, idx) => (
							<div
								key={news.title}
								className="rounded-lg overflow-hidden shadow-lg bg-[#181818] hover:shadow-2xl hover:scale-[1.03] transition-all duration-200 cursor-pointer flex flex-col"
							>
								<img
									src={news.image}
									alt={news.title}
									className="w-full h-32 object-cover"
								/>
								<div className="p-4 flex-1 flex flex-col justify-between">
									<h3 className="text-lg font-bold mb-2 leading-tight">
										{news.title}
									</h3>
									<div className="flex items-center gap-3 text-xs mt-auto">
										<span className="font-semibold tracking-wide text-white/80">
											FEATURED ARTICLE
										</span>
										<span className="text-white/60">{news.date}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Advertisement Sidebar */}
				<div className="w-full lg:basis-[40%] lg:max-w-[40%] flex-shrink-0">
					<AdvertisementPage />
				</div>
			</div>
		</section>
	);
};

export default TopNews;
