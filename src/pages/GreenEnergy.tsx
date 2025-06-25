import React from "react";
import { Star, Flame } from "lucide-react";

const blogs = [
	{
		title: "India’s Solar Power Capacity Surges to New Highs in 2025",
		date: "June 23, 2025",
		image: "../images/green_energy_1.webp",
		type: "featured",
		description:
			"India has added record-breaking solar capacity this year, making significant strides towards its renewable energy targets and reducing carbon emissions.",
	},
	{
		title: "How Wind Energy is Transforming Rural Communities",
		date: "June 22, 2025",
		image: "../images/green_energy_2.webp",
		type: "psu",
		description:
			"Wind farms are not only generating clean energy but also creating jobs and boosting local economies in rural India.",
	},
	{
		title: "Green Hydrogen: The Next Big Thing in Clean Energy",
		date: "June 21, 2025",
		image: "../images/green_3.jpg",
		type: "latest",
		description:
			"Green hydrogen is emerging as a promising solution for decarbonizing industries and powering the future of transportation.",
	},
	{
		title: "PSUs Lead the Way in Renewable Energy Adoption",
		date: "June 20, 2025",
		image: "../images/green_4.jpg",
		type: "psu",
		description:
			"Public Sector Undertakings are investing heavily in solar, wind, and hydro projects, setting benchmarks for sustainability.",
	},
];

const Badge = ({
	type,
	children,
}: {
	type: "featured" | "latest" | "psu";
	children: React.ReactNode;
}) => {
	if (type === "featured") {
		return (
			<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2">
				<Star size={12} className="text-yellow-500" /> {children}
			</span>
		);
	}
	if (type === "psu") {
		return (
			<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-semibold mr-2">
				<Star size={12} className="text-green-500" /> {children}
			</span>
		);
	}
	return (
		<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold mr-2">
			<Flame size={12} className="text-red-500" /> {children}
		</span>
	);
};

const GreenEnergy = () => {
	return (
		<section className="px-2 gap-4 mt-4 ">
			<div className="rounded-lg shadow-lg p-0 overflow-hidden bg-white">
				<div
					className="text-center text-xl font-bold py-3 border-b border-[#658354] text-black"
					style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
				>
					<span>Green Energy Blogs</span>
				</div>
				<div className="p-6 flex flex-col gap-4 bg-[#f8fafc]">
					{blogs.slice(0, 2).map((blog, idx) => (
						<div
							key={idx}
							className="bg-white rounded-md shadow-md border border-gray-100 hover:shadow-xl transition-all duration-200 group cursor-pointer flex flex-col overflow-hidden"
						>
							<img
								src={blog.image}
								alt={blog.title}
								className="w-full h-44 object-cover rounded-t-md group-hover:scale-105 group-hover:brightness-105 transition-all duration-200"
							/>
							<div className="p-5 flex flex-col flex-1">
								<div className="flex items-center mb-2">
									<Badge type={blog.type as "featured" | "latest" | "psu"}>
										{blog.type === "featured"
											? "FEATURED"
											: blog.type === "psu"
											? "PSU"
											: "LATEST"}
									</Badge>
									<span className="text-xs text-gray-500">
										{blog.date}
									</span>
								</div>
								<div
									className="font-bold text-lg mb-2 leading-tight transition-colors duration-150 group-hover:text-[#2e3cb0]"
									style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
								>
									{blog.title}
								</div>
								<div
									className="text-sm text-gray-700 mb-2 line-clamp-2 transition-colors duration-150 group-hover:text-[#2e3cb0]"
									style={{
										fontFamily: "'Lato', 'Arial', sans-serif",
										display: "-webkit-box",
										WebkitLineClamp: 2,
										WebkitBoxOrient: "vertical",
										overflow: "hidden",
									}}
								>
									{blog.description}
								</div>
								{/* Removed Read More */}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};



export default GreenEnergy;
