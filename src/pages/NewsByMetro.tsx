import React from "react";
import { Star, Flame } from "lucide-react";

const stateNews = [
    {
        image: "../images/top_news_1.avif",
        badge: "LATEST",
        date: "June 23, 2025",
        featured: true,
        title: "India’s Business Activity Hits 14-Month High in June, Driven by Robust Demand and Exports",
    },
    {
        image: "../images/top_news_2.jpg",
        badge: "LATEST",
        date: "June 23, 2025",
        featured: false,
        title: "India Set to Outpace G7 Economies in Growth: Report",
    },
    {
        image: "../images/top_news_3.webp",
        badge: "LATEST",
        date: "June 23, 2025",
        featured: false,
        title: "Container Liquor Shops Gain Popularity in Noida Amid Policy Shift and Space Crunch",
    },
    {
        image: "../images/top_news_4.webp",
        badge: "LATEST",
        date: "June 23, 2025",
        featured: true,
        title: "Assembly Bypoll Result 2025 Updates: BJP, AAP Win 1 Seat Each In Gujarat, Congress Wins In Kerala",
    },
    {
        image: "../images/top_news_5.webp",
        badge: "LATEST",
        date: "June 23, 2025",
        featured: true,
        title: "Actor Srikanth Sent To Judicial Custody Till July 7 In Drugs Case",
    },
    {
        image: "../images/top_news_6.png",
        badge: "LATEST",
        date: "June 23, 2025",
        featured: true,
        title: "Butterfly Unveils a Bold New Identity That Celebrates Change and Champions the Original You",
    },
    {
        image: "../images/top_news_7.webp",
        badge: "LATEST",
        date: "June 23, 2025",
        featured: false,
        title: "Espionage case: YouTuber Jyoti Malhotra’s judicial custody extended by two weeks",
    },
    {
        image: "../images/top_news_8.jpg",
        badge: "LATEST",
        date: "June 23, 2025",
        featured: false,
        title: "HT Labs Shines at WAN-IFRA South Asian Digital Media Awards 2025",
    },
    {
        image: "../images/top_news_2.jpg",
        badge: "LATEST",
        date: "June 23, 2025",
        featured: true,
        title: "Bodhi Tree: Spiritual Reflections for Modern Times",
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

const NewsByMetro = () => {
    return (
        <section className="px-2 gap-4 mt-4 max-w-screen-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg pl-6 pr-6 pb-6">
                <div
                    className="text-center text-xl font-bold py-3 border-b border-[#2E3CB0] mb-6"
                    style={{
                        fontFamily: "'Lato', 'Arial', sans-serif",
                        color: "#2F3137",
                    }}
                >
                    <span>News By Metro</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {Array.from({ length: 2 }).map((_, rowIdx) =>
                        stateNews.slice(rowIdx * 3, rowIdx * 3 + 3).map((news, idx) => (
                            <div
                                key={rowIdx * 3 + idx}
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
                                        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                                    >
                                        {news.title}
                                    </h3>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default NewsByMetro;