import React from "react";
import { Star, Flame } from "lucide-react";

const stateNews = [
	{
		image: "../images/travel.jpeg",
		badge: "TRAVEL AND TOURISM",
		date: "June 20, 2025",
		featured: true,
		title: "Most and Least Liveable Cities 2025: A Tale of Two Worlds",
	},
	{
		image: "../images/travel_2.png",
		badge: "TRAVEL AND TOURISM",
		date: "March 20, 2025",
		featured: false,
		title: "A New Immersive and Interactive Images of Singapore Experience at Madame Tussauds Singapore",
	},
	{
		image: "../images/travel_3.jpg",
		badge: "TRAVEL AND TOURISM",
		date: "January 28, 2025",
		featured: false,
		title: "Tourism Malaysia Sales Mission to Hyderabad, Bengaluru & Kochi",
	},
	{
		image: "../images/travel_4.jpeg",
		badge: "TRAVEL AND TOURISM",
		date: "December 21, 2024",
		featured: true,
		title: "Malaysia Extends Visa Exemption for Indian Nationals Until 2026",
	},
	{
		image: "../images/travel_5.jpg",
		badge: "TRAVEL AND TOURISM",
		date: "December 20, 2024",
		featured: false,
		title: "Experience a Unique Hong Kong Chinese New Year",
	},
	{
		image: "../images/travel_6.jpg",
		badge: "TRAVEL AND TOURISM",
		date: "December 7, 2024",
		featured: false,
		title: "17 Top Tourist Destinations in Andhra Pradesh",
	},
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
				<Star size={12} className="text-yellow-500" /> {children}
			</span>
		);
	}
	return (
		<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold mr-2">
			<Flame size={12} className="text-red-500" /> {children}
		</span>
	);
};

const TravelAndTourisam = () => {
	return (
		<section className="max-w-screen-2xl mx-auto px-2 gap-4 mt-4">
			<div className="flex flex-col md:flex-row gap-6">
				{/* Left: App Promotion Section (30%) */}
				<div className="w-full md:w-[30%] flex items-stretch justify-center">
					<div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-[#e3e3e3] w-full h-full min-h-[340px]">
						<img
							src="../images/app.png"
							alt="Download the App"
							className="w-full max-w-xs h-[180px] object-contain mb-2 border-2 border-blue-700"
							style={{ borderRadius: "1rem" }}
						/>
						<div
							className="text-center text-lg font-bold text-[#2346a9] mt-2"
							style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
						>
							Download the App Now!
						</div>
					</div>
				</div>
				{/* Right: News Section (70%) */}
				<div className="w-full md:w-[70%] flex items-stretch">
					<div className="bg-white rounded-lg shadow-lg pl-6 pr-6 pb-6 flex flex-col justify-between w-full h-full min-h-[340px]">
						<div
							className="text-center text-xl font-bold py-3 border-b border-[#2E3CB0] mb-6"
							style={{
								fontFamily: "'Lato', 'Arial', sans-serif",
								color: "#2F3137",
							}}
						>
							<span>Travel & Tourisam News</span>
						</div>
						<div className="flex flex-col gap-4 flex-1 justify-center">
							{/* First row */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{stateNews.slice(0, 2).map((news, idx) => (
									<div
										key={idx}
										className="flex items-start gap-4 bg-white rounded-md p-3 hover:shadow-lg transition-all duration-200 border border-gray-200 shadow-sm hover:border-[#2E3CB0] group"
									>
										<img
											src={news.image}
											alt={news.title}
											className="w-20 h-20 object-cover rounded-md flex-shrink-0 bg-gray-200"
										/>
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2 mb-1">
												<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full ">
													{news.featured ? (
														<Badge type="featured">FEATURED</Badge>
													) : (
														<Badge type="latest">LATEST</Badge>
													)}
												</span>
												<span className="text-xs text-gray-500">
													{news.date}
												</span>
											</div>
											<h3
												className="text-md font-bold text-[#232323] leading-snug transition-colors duration-150 group-hover:text-[#2346a9]"
												style={{
													fontFamily: "'Lato', 'Arial', sans-serif",
												}}
											>
												{news.title}
											</h3>
										</div>
									</div>
								))}
							</div>
							{/* Second row */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{stateNews.slice(2, 4).map((news, idx) => (
									<div
										key={idx + 2}
										className="flex items-start gap-4 bg-white rounded-md p-3 hover:shadow-lg transition-all duration-200 border border-gray-200 shadow-sm hover:border-[#2E3CB0] group"
									>
										<img
											src={news.image}
											alt={news.title}
											className="w-20 h-20 object-cover rounded-md flex-shrink-0 bg-gray-200"
										/>
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2 mb-1">
												<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full ">
													{news.featured ? (
														<Badge type="featured">FEATURED</Badge>
													) : (
														<Badge type="latest">LATEST</Badge>
													)}
												</span>
												<span className="text-xs text-gray-500">
													{news.date}
												</span>
											</div>
											<h3
												className="text-md font-bold text-[#232323] leading-snug transition-colors duration-150 group-hover:text-[#2346a9]"
												style={{
													fontFamily: "'Lato', 'Arial', sans-serif",
												}}
											>
												{news.title}
											</h3>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};



export default TravelAndTourisam;
