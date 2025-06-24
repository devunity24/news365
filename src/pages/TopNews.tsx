import React from "react";
import AdvertisementPage from "./Add";
import { Star, Flame } from "lucide-react";

const topNews = [
	{
		title: "India’s Business Activity Hits 14-Month High in June, Driven by Robust Demand and Exports",
		date: "June 23, 2025",
		image: "../images/top_news_1.avif",
		featured: true,
	},
	{
		title: "India Set to Outpace G7 Economies in Growth: Report",
		date: "June 23, 2025",
		image: "../images/top_news_2.jpg",
		featured: false,
	},
	{
		title: "Container Liquor Shops Gain Popularity in Noida Amid Policy Shift and Space Crunch",
		date: "June 23, 2025",
		image: "../images/top_news_3.webp",
		featured: false,
	},{
		title: "Assembly Bypoll Result 2025 Updates: BJP, AAP Win 1 Seat Each In Gujarat, Congress Wins In Kerala",
		date: "June 23, 2025",
		image: "../images/top_news_4.webp",
		featured: false,
	}
];

const Badge = ({
  type,
  children,
}: {
  type: "featured" | "latest";
  children: React.ReactNode;
}) => {
  if (type === "featured") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2">
        <Star size={13} className="text-yellow-500" /> {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold mr-2">
      <Flame size={13} className="text-red-500" /> {children}
    </span>
  );
};

const TopNews = () => {
	return (
		<section className="px-4 py-4 max-w-screen-2xl mx-auto">
			<div className="flex flex-col lg:flex-row gap-4">
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
							<div className="p-6 ">
								<div className="flex items-center gap-3 mb-2">
									<Badge type="featured">FEATURED</Badge>
									<span className="text-xs text-gray-500">{topNews[0].date}</span>
								</div>
								<h2 className="text-2xl font-bold mb-2 leading-tight" style={{ fontFamily: "'Lato', 'Arial', sans-serif", color: "#2F3137" }}>
									{topNews[0].title}
								</h2>
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
								<div className="p-4 flex flex-col justify-between">
									<div className="flex items-center gap-3 mb-2">
										<Badge type="latest">LATEST</Badge>
										<span className="text-xs text-gray-500">{news.date}</span>
									</div>
									<h3 className="text-md font-bold mb-2 leading-tight" style={{ fontFamily: "'Lato', 'Arial', sans-serif", color: "#263228" }}>
										{news.title}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Advertisement Sidebar */}
				<div className="w-full lg:basis-[40%] lg:max-w-[40%] flex-shrink-0 flex flex-col gap-4">
					<AdvertisementPage />
					{/* Top Stories Section */}
					<div className="bg-white rounded-lg shadow-lg p-0 overflow-hidden">
						<div className="text-center text-lg font-bold py-3 border-b border-[#2E3CB0]" style={{ fontFamily: "'Lato', 'Arial', sans-serif", color: '#2F3137' }}>
							<span className="">Top Stories</span>
						</div>
						<div className="divide-y divide-gray-200">
							{[
								{
									title: "Actor Srikanth Sent To Judicial Custody Till July 7 In Drugs Case",
									date: "June 23, 2025",
									isRed: false,
									image: "../images/top_news_5.webp",
								},
								{
									title: "Butterfly Unveils a Bold New Identity That Celebrates Change and Champions the Original You",
									date: "June 23, 2025",
									isRed: false,
									image: "../images/top_news_6.png",
								},
								{
									title: "Espionage case: YouTuber Jyoti Malhotra’s judicial custody extended by two weeks",
									date: "June 23, 2025",
									isRed: false,
									image: "../images/top_news_7.webp",
								},
								{
									title: "HT Labs Shines at WAN-IFRA South Asian Digital Media Awards 2025",
									date: "June 23, 2025",
									isRed: false,
									image: "../images/top_news_8.jpg",
								},
							].map((story, idx) => (
								<div key={idx} className="p-5 flex items-start gap-4 group cursor-pointer transition-all duration-200 rounded-lg hover:bg-gray-50 group-hover:bg-gray-50 group-hover:text-[#2E3CB0]">
									<img
										src={story.image}
										alt={story.title}
										className="w-20 h-20 object-cover rounded-md flex-shrink-0 bg-gray-200 transition duration-300 group-hover:brightness-110 group-hover:shadow-lg group-hover:scale-105"
									/>
									<div className="flex-1 min-w-0">
										<div className="flex items-center mb-2">
											<Badge type="latest">LATEST</Badge>
											<span className="text-xs text-gray-500">{story.date}</span>
										</div>
										<div
											className={
												"text-md font-bold mb-2 transition-colors duration-150 group-hover:text-[#2E3CB0]" +
												(story.isRed ? " text-[#c94b43]" : " text-black")
											}
											style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
										>
											{story.title}
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
