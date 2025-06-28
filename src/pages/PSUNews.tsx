import React from "react";
import TopHeader from "./TopHeader";
import Header from "../components/Header";
import MainNavigation from "../components/MainNavigation";
import { Star, Flame } from "lucide-react";
import Footer from "../components/Footer";

const bodhiArticles = [
	{
		title: "Office of the Principal Scientific Adviser to the Government of India Releases Inaugural Edition of India’s International Technology Engagement Strategy (ITES) for Quantum Technologies",
		image: "../images/psu_1.png",
		description:
			"Office of the Principal Scientific Adviser to the Government of India Releases Inaugural..",
		date: "June 27, 2025",
		badge: "FEATURED",
		badgeType: "featured",
	},
	{
		title:
			"PNB Urges Customers To Update KYC By 23.01.2025 – Indian PSU",
		image: "../images/psu_2.jpg",
		description:
			"In adherence to the Reserve Bank of India (RBI) guidelines, Punjab National Bank (PNB), nation’s leading public sector bank..",
		date: "June 27, 2025",
		badge: "LATEST",
		badgeType: "latest",
	},
	{
		title:
			"Coal Imports Drop By 3.1% During April-October, 2024 – Indian PSU",
		image: "../images/psu_3.jpg",
		description:
			"India’s coal sector plays a critical role in supporting its rapidly growing economy. However, the country faces a significant gap in meeting its coal demand from domestic reserves, particularly for coking coal and high-grade..",
		date: "June 27, 2025",
		badge: "LATEST",
		badgeType: "latest",
	},
	{
		title:
			"SECL Launches Post-Retirement Benefit Cell – Indian PSU",
		image: "../images/psu_4.jpg",
		description:
			"In a people-centric initiative, South Eastern Coalfields Limited (SECL), a Chhattisgarh-based subsidiary of Coal India Limited (CIL)..",
		date: "June 27, 2025",
		badge: "FEATURED",
		badgeType: "featured",
	},
	{
		title: "SCOPE And HSSC Forge Strategic MoU To Enhance Skill Development In India’s Hydrocarbon Sector – Indian PSU",
		image: "../images/psu_5.jpg",
		description:
			"Standing Conference of Public Enterprises (SCOPE) and Hydrocarbon Sector Skill Council (HSSC) have signed a Memorandum of Understanding..",
		date: "June 27, 2025",
		badge: "LATEST",
		badgeType: "latest",
	},
	{
		title:
			"Ministry Of Tourism Unveils Major Initiatives To Promote Maha Kumbh 2025 As Global Tourism Hub – Indian PSU",
		image: "../images/psu_6.jpg",
		description:
			"The Ministry of Tourism, Government of India, is set to make the Maha Kumbh 2025 a landmark event not only for spiritual gatherings but also for global tourism..",
		date: "June 27, 2025",
		badge: "LATEST",
		badgeType: "latest",
	},
	{
		title: "Copernicus: 2024 Is The First Year To Exceed 1.5°C Above Pre-Industrial Level – Indian PSU",
		image: "../images/psu_7.webp",
		description:
			"In spite of numerous COP’s ( UN conferences on Climate Change) where pledges were made to keep the human-induced global warming below 1.5°C.",
		date: "June 27, 2025",
		badge: "LATEST",
		badgeType: "latest",
	},
	{
		title: "Vice Chief Of Army Staff Launches Boccia Championship And Milestone Projects At MedTech Zone – Indian PSU",
		image: "../images/psu_8.jpg",
		description: "The 9th Boccia National Championship 2024-25 was inaugurated at the India Expo City in Andhra Pradesh MedTech Zone (AMTZ) by Lt. Gen. N.S. Raja Subramani,..",
		date: "June 27, 2025",
		badge: "FEATURED",
		badgeType: "featured",
	},
	{
		title: "CMD, IREDA Moderates Inspiring Panel Discussion At 18th Pravasi Bharatiya Divas Convention – Indian PSU",
		image: "../images/psu_9.jpg",
		description:
			"As part of the 18th Pravasi Bharatiya Divas Convention, Pradip Kumar Das, CMD, Indian Renewable Energy Development Agency (IREDA) played a pivotal role as the moderator..",
		date: "June 27, 2025",
		badge: "FEATURED",
		badgeType: "featured",
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
			<span
				className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#fff8e1] text-[#b8860b] text-xs font-bold uppercase"
				style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
			>
				<Star size={14} className="text-[#b8860b]" /> {children}
			</span>
		);
	}
	return (
		<span
			className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#fde7e7] text-[#c94b43] text-xs font-bold uppercase"
			style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
		>
			<Flame size={14} className="text-[#c94b43]" /> {children}
		</span>
	);
};

const PSUNews = () => {
	return (
		<>
			<TopHeader />
			<Header />
			<MainNavigation />
			<div className="w-full bg-gradient-to-r from-[#e0e7ef] to-[#f8fafc] py-6 mb-2 border-b border-gray-200">
				<div className="max-w-3xl mx-auto px-2 flex flex-col items-center">
					<h1
						className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#2e3cb0] text-center"
						style={{
							fontFamily: "'Lora', 'Merriweather', serif",
							letterSpacing: "0.02em",
							lineHeight: 1.1,
						}}
					>
						<span className="inline-block bg-white px-3 py-1 rounded shadow-sm">
							PSU News 365
						</span>
					</h1>
					<p
						className="mt-2 text-base md:text-lg text-gray-600 text-center max-w-xl"
						style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
					>
						Mindful living, healing, and creative exploration for your journey.
					</p>
				</div>
			</div>
			<section className="bg-[#f8fafc] min-h-screen py-6 pl-4">
				<div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8">
					{/* Main Articles Grid */}
					<div className="w-full lg:w-[70%]">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{bodhiArticles.map((article, idx) => (
								<div
									key={idx}
									className="rounded-2xl bg-white shadow hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col border border-gray-100 group"
									style={{ minHeight: 370 }}
								>
									<div className="overflow-hidden">
										<img
											src={article.image}
											alt={article.title}
											className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-95"
											style={{ objectPosition: "center" }}
										/>
									</div>
									<div className="p-4 flex flex-col flex-1">
										<div className="flex items-center gap-2 mb-2">
											<Badge
												type={
													article.badgeType as "featured" | "latest" | "psu"
												}
											>
												{article.badge}
											</Badge>
											<span className="text-xs text-gray-500">
												{article.date}
											</span>
										</div>
										<div
											className="font-bold text-lg mb-1 text-[#222] leading-snug transition-colors group-hover:text-[#2e3cb0]"
											style={{
												fontFamily: "'Lato', 'Arial', sans-serif",
											}}
										>
											{article.title}
										</div>
										<div
											className="text-sm text-gray-600 mt-1"
											style={{
												fontFamily: "'Lato', 'Arial', sans-serif",
											}}
										>
											{article.description}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					{/* Sidebar */}
					<aside className="w-full lg:w-[30%] flex-shrink-0 flex flex-col gap-6">
						<div className="bg-white rounded-xl shadow-md p-4">
							<div className="font-bold text-base mb-2 text-[#2F3137]">
								Recent Articles
							</div>
							<ul className="space-y-3">
								{bodhiArticles.slice(0, 5).map((article, idx) => (
									<li key={idx}>
										<a
											href="#"
											className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white shadow-sm px-2 py-2 hover:shadow-md transition group"
											style={{ textDecoration: "none" }}
										>
											<img
												src={article.image}
												alt={article.title}
												className="w-14 h-14 object-cover rounded-md flex-shrink-0 border border-gray-200"
											/>
											<div className="flex flex-col flex-1 min-w-0">
												<div className="flex items-center gap-2 mb-1">
													<Badge
														type={
															article.badgeType as "featured" | "latest" | "psu"
														}
													>
														{article.badge}
													</Badge>
													<span className="text-xs text-gray-400">
														{article.date}
													</span>
												</div>
												<div
													className="font-bold text-[15px] text-black leading-snug group-hover:text-[#2e3cb0] transition-colors line-clamp-2"
													style={{
														fontFamily: "'Lato', 'Arial', sans-serif",
													}}
												>
													{article.title}
												</div>
												<div
													className="text-xs text-gray-600 mt-1 line-clamp-2"
													style={{
														fontFamily: "'Lato', 'Arial', sans-serif",
													}}
												>
													{article.description}
												</div>
											</div>
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className="bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#e3f2fd] rounded-2xl shadow-lg p-0 flex flex-col items-center border border-[#e3e3e3] overflow-hidden">
							<div className="w-full flex flex-col items-center pt-2">
								<img
									src="../images/add.png"
									alt="Advertise"
									className="w-full object-cover"
									style={{
										maxWidth: 300,
										minHeight: 140,

									}}
								/>
							</div>
							<div className="w-full flex flex-col items-center px-6 py-4">
								<div className="text-lg font-extrabold text-[#2e3cb0] mb-1 tracking-tight">
									Promote Your Brand Here
								</div>
								<div className="text-sm text-gray-700 mb-2 text-center">
									Reach thousands of readers daily with a single click. <br />
									Boost your business, event, or service on News365!
								</div>
								<a
									href="https://wa.me/919942913257"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 bg-[#25d366] hover:bg-[#128c7e] text-white font-bold px-4 py-2 rounded-full shadow transition mb-2"
								>
									<span role="img" aria-label="whatsapp">💬</span>
									WhatsApp: +91 9942913257
								</a>
								<div className="text-xs text-gray-500 mb-2 text-center">
									Or email:{" "}
									<a
										href="mailto:news365times@gmail.com"
										className="underline text-[#2e3cb0]"
									>
										news365times@gmail.com
									</a>
								</div>
								<button className="w-full px-4 py-2 bg-gradient-to-r from-[#2e3cb0] to-[#4f8cff] text-white rounded-lg font-semibold hover:from-[#1c2566] hover:to-[#2e3cb0] transition shadow">
									Contact Us Now
								</button>
							</div>
						</div>
					</aside>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default PSUNews;
