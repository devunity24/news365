import React from "react";
import { Star, Flame } from "lucide-react";
import StayTuned from "./StayTuned";

const stateNews = [
  {
    image: "../images/sports_1.jpg",
    badge: "TOP STORIES",
    date: "June 13, 2025",
    featured: true,
    title: "Historic Milestone: IISc Undergraduates Secure India’s Best Ever Finish in PLANCKS 2025",
  },
  {
    image: "../images/sports_2.webp",
    badge: "SPORTS",
    date: "June 3, 2025",
    featured: false,
    title: "Indias New Chess Prince : Watch Maestro D.Gukesh",
  },
  {
    image: "../images/sports_3.webp",
    badge: "SPORTS",
    date: "April 26, 2025",
    featured: false,
    title: "Anushka Sharma and Virat Kohli’s Move to London: A Desire for Normalcy, Says Dr. Nene",
  },
  {
    image: "../images/sports_5.jpg",
    badge: "LATEST NEWS",
    date: "April 16, 2025",
    featured: true,
    title: "Yuzvendra Chahal’s 4 for 28 – A comeback tale within a comeback",
  },
  {
    image: "../images/sports_6.jpeg",
    badge: "LATEST NEWS",
    date: "April 16, 2025",
    featured: true,
    title: "IPL 2025: Who’s Xavier Bartlett?",
  },
  {
    image: "../images/sports_7.webp",
    badge: "LATEST NEWS",
    date: "April 16, 2025",
    featured: true,
    title: "PBKS vs KKR: Yuzvendra Chahal Sparks Dramatic Turnaround with Match-Winning Spell",
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

const Sports = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-2 gap-4 mt-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: News Section (70%) */}
        <div className="w-full md:w-[70%] flex">
          <div className="bg-white rounded-lg shadow-lg pl-6 pr-6 pb-6 flex-1 flex flex-col h-full">
            <div
              className="text-center text-xl font-bold py-3 border-b border-[#2E3CB0] mb-6"
              style={{
                fontFamily: "'Lato', 'Arial', sans-serif",
                color: "#2F3137",
              }}
            >
              <span>Sport News</span>
            </div>
            <div className="flex flex-col gap-4 flex-1">
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
                        <span className="text-xs text-gray-500">{news.date}</span>
                      </div>
                      <h3
                        className="text-md font-bold text-[#232323] leading-snug transition-colors duration-150 group-hover:text-[#2346a9]"
                        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
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
                        <span className="text-xs text-gray-500">{news.date}</span>
                      </div>
                      <h3
                        className="text-md font-bold text-[#232323] leading-snug transition-colors duration-150 group-hover:text-[#2346a9]"
                        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                      >
                        {news.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              {/* Third row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stateNews.slice(4, 6).map((news, idx) => (
                  <div
                    key={idx + 4}
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
                        <span className="text-xs text-gray-500">{news.date}</span>
                      </div>
                      <h3
                        className="text-md font-bold text-[#232323] leading-snug transition-colors duration-150 group-hover:text-[#2346a9]"
                        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
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
        {/* Right: StayTuned Section (30%) */}
        <div className="w-full md:w-[30%] flex-shrink-0 flex">
          <div className="flex-1 flex flex-col h-full">
            <StayTuned />
          </div>
        </div>
      </div>
    </section>
  );
};


export default Sports;
