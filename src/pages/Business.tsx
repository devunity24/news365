import React from "react";
import { Star, Flame } from "lucide-react";

const politicsNews = [
  {
    title: "The BJP is politically comfortable, and it has a seven-month window to get its economic governance right before the political cycle heats up all the way.",
    date: "June 25, 2025",
    image: "../images/politics_1.jpg",
    badge: "LATEST",
    badgeType: "psu",
    description:
      "The BJP is politically comfortable, and it has a seven-month window to get its economic governance right before the political cycle heats up all the way to 2029.",
  },
  {
    title: "Congress party leaders unveiled a new alliance roadmap, aiming to strengthen their position in the upcoming state and national elections",
    date: "June 24, 2025",
    image: "../images/politics_2.jpg",
    badge: "FEATURED",
    badgeType: "featured",
    description:
      "Congress party leaders unveiled a new alliance roadmap, aiming to strengthen their position in the upcoming state and national elections.",
  },
  {
    title:
      "Reliance Infra shares hit 5% upper circuit after subsidiary wins Rs 600-crore order from German defence firm",
    date: "June 23, 2025",
    image: "../images/business_1.avif",
    badge: "LATEST",
    badgeType: "latest",
    description:
      "The shares of Reliance Infrastructure jumped 5 percent to get locked in the upper circuit on June 25 after...",
  },
  {
    title: "Adani Total Gas, Jio-bp tie up to offer petrol, diesel, CNG at fuel outlets",
    date: "June 23, 2025",
    image: "../images/business_2.avif",
    badge: "LATEST",
    badgeType: "latest",
    description:
      "Adani Total Gas Ltd (ATGL) and Jio-bp have entered a strategic partnership to jointly retail their respective fuels across select outlets, marking a...",
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
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold">
        <Star size={12} className="text-yellow-500" /> {children}
      </span>
    );
  }
  if (type === "psu") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
        <Star size={12} className="text-green-500" /> {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold">
      <Flame size={12} className="text-red-500" /> {children}
    </span>
  );
};

const Business = () => {
  return (
    <section className="px-2 gap-4 mt-4 ">
      <div className="rounded-lg shadow-lg p-0 overflow-hidden bg-white">
        <div
          className="text-center text-xl font-bold py-3 border-b border-[#c94b43] text-black"
          style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
        >
          <span>Business</span>
        </div>

        {/* Remaining news: horizontal compact card layout */}
        <div className="px-2 flex flex-col gap-4 divide-y divide-gray-200">
          {politicsNews.slice(0, 2).map((news, idx) => (
            <div
              key={news.title}
              className="pt-4 pl-4 pr-4 flex items-start gap-4 group cursor-pointer transition-all duration-200 rounded-lg hover:bg-gray-50"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-20 h-20 object-cover rounded-md flex-shrink-0 bg-gray-200 transition duration-300 group-hover:brightness-110 group-hover:shadow-lg group-hover:scale-105"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center mb-2">
                  <Badge type="latest">LATEST</Badge>
                  <span className="pl-4"></span>
                  <span className="text-xs text-gray-500">{news.date}</span>
                </div>
                <div
                  className="text-md font-bold mb-1 transition-colors duration-150 group-hover:text-[#2E3CB0] text-black"
                  style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                >
                  {news.title}
                </div>
                <div className="text-xs text-gray-600">{news.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* News Cards */}
        <div className="pl-6 pr-6 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First 2 news: card layout */}
          {politicsNews.slice(2).map((news, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-lg mb-4 border border-gray-200 transition-all duration-200 hover:shadow-2xl hover:border-[#2e3cb0] group cursor-pointer"
            >
              <div className="mb-4 group">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full rounded-md object-cover h-48 transition duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>
              <div className="px-2 pb-2 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-sm mb-2">
                  <Badge type={news.badgeType as "featured" | "latest" | "psu"}>
                    {news.badge}
                  </Badge>
                  <span className="text-black/80">|</span>
                  <span className="text-black/80">{news.date}</span>
                </div>
                <div
                  className="text-md font-bold mb-1 transition-colors duration-150 group-hover:text-[#2E3CB0] text-black"
                  style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                >
                  {news.title}
                </div>
                <div className="text-xs text-gray-600">{news.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
