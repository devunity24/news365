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
	},{
		title: "India Set to Outpace G7 Economies in Growth: Report",
		date: "June 23, 2025",
		image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
		featured: false,
	}
];

const TopNews = () => {
	return (
		<section className="px-4 py-8">
			<div className="flex flex-col lg:flex-row gap-8">
				{/* News Section */}
				<div className="w-full lg:basis-[60%] lg:max-w-[60%] min-w-0">
					{/* Featured News */}
					<div className="mb-8">
						<div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-200">
							<img
								src={topNews[0].image}
								alt={topNews[0].title}
								className="w-full h-80 object-cover"
							/>
							<div className="p-6">
								<h2 className="text-2xl font-bold mb-2 leading-tight" style={{ fontFamily: "'Lato', 'Arial', sans-serif", color: "#2F3137" }}>
									{topNews[0].title}
								</h2>
								<div className="flex items-center gap-4 text-sm mb-2" style={{ fontFamily: "'Lato', 'Arial', sans-serif", color: "#2F3137" }}>
									<span className="font-semibold tracking-wide" style={{ color: "#2F3137" }}>
										FEATURED ARTICLE
									</span>
									<span style={{ color: "#2F3137" }}>{topNews[0].date}</span>
								</div>
							</div>
						</div>
					</div>
					{/* Other News */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{topNews.slice(1).map((news, idx) => (
							<div
								key={news.title}
								className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl hover:scale-[1.03] transition-all duration-200 cursor-pointer flex flex-col"
							>
								<img
									src={news.image}
									alt={news.title}
									className="w-full h-32 object-cover"
								/>
								<div className="p-4 flex-1 flex flex-col justify-between">
									<h3 className="text-md font-bold mb-2 leading-tight" style={{ fontFamily: "'Lato', 'Arial', sans-serif", color: "#263228" }}>
										{news.title}
									</h3>
									<div className="flex items-center gap-3 text-xs mt-auto" style={{ fontFamily: "'Lato', 'Arial', sans-serif", color: "#263228" }}>
										<span className="font-semibold tracking-wide" style={{ color: "#263228" }}>
											FEATURED ARTICLE
										</span>
										<span style={{ color: "#263228" }}>{news.date}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Advertisement Sidebar */}
				<div className="w-full lg:basis-[40%] lg:max-w-[40%] flex-shrink-0 flex flex-col gap-8">
					<AdvertisementPage />
					{/* Top Stories Section */}
					<div className="bg-white rounded-lg shadow-lg p-0 overflow-hidden">
						<div className="text-center text-lg font-bold py-3 border-b border-[#2E3CB0]" style={{ fontFamily: "'Lato', 'Arial', sans-serif", color: '#2F3137' }}>
							<span className="">Top Stories</span>
						</div>
						<div className="divide-y divide-gray-200">
							{[
								{
									title: "Dalit men tonsured, forced to crawl over cow smuggling allegations in Odisha",
									date: "June 23, 2025",
									isRed: false,
									image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80"
								},
								{
									title: "Butterfly Unveils a Bold New Identity That Celebrates Change and Champions the Original You",
									date: "June 23, 2025",
									isRed: true,
									image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80"
								},
								{
									title: "Espionage case: YouTuber Jyoti Malhotra’s judicial custody extended by two weeks",
									date: "June 23, 2025",
									isRed: false,
									image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80"
								},
								{
									title: "HT Labs Shines at WAN-IFRA South Asian Digital Media Awards 2025",
									date: "June 23, 2025",
									isRed: false,
									image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80"
								},
							].map((story, idx) => (
								<div key={idx} className="p-5 flex items-start gap-4 group cursor-pointer transition-all duration-200 rounded-lg group-hover:bg-[#f0f4ff] group-hover:shadow-xl group-hover:scale-[1.03]">
									<img
										src={story.image}
										alt={story.title}
										className="w-20 h-20 object-cover rounded-md flex-shrink-0 bg-gray-200"
									/>
									<div className="flex-1 min-w-0">
										<div
											className={
												"text-lg font-bold mb-2 transition-colors duration-150" +
												(story.isRed ? " text-[#c94b43] group-hover:text-[#2E3CB0]" : " text-black group-hover:text-[#2E3CB0]")
											}
											style={{ fontFamily: "'Lato', 'Arial', sans-serif", color: '#2F3137' }}
										>
											{story.title}
										</div>
										<div
											className="flex items-center gap-3 text-xs mt-auto transition-colors duration-150 group-hover:text-[#2E3CB0]"
											style={{ fontFamily: "'Lato', 'Arial', sans-serif", color: '#2F3137' }}
										>
											<span className="font-semibold tracking-wide">LATEST NEWS</span>
											<span>{story.date}</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopNews;
