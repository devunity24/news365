import React from "react";
import { Star, Flame } from "lucide-react";

const nationalNews = [
  {
    title:
      "JKLU Professor First Indian to Win Hills Millennium Award for International Designers",
    date: "June 23, 2025",
    image: "../images/latest_news_1.jpg",
    featured: true,
    description:
      "Prof. A. Balasubramaniam, the founding Director of the Institute of Design at JK Lakshmipat University (JKLU) in Jaipur, has become the first Indian to win the prestigious award for international designers.",
  },
  {
    title:
      "Iran hangs man accused of spying for Mossad, ties to Israel linked broadcaster; second execution in 48 hours",
    date: "June 23, 2025",
    image: "../images/latest_news_2.jpg",
    featured: false,
    description:
      "Iran executed Mohammad-Amin Mahdavi-Shayesteh for allegedly spying for Mossad and collaborating with an Israel-linked broadcaster. This execution followed another one a day prior, amid heightened tensions after US...",
  },
  {
    title:
      "Rapid warning, extreme weather hit Asia hard in 2024, killing thousands and impacting economies: report",
    date: "June 23, 2025",
    image: "../images/latest_news_3.jpg",
    featured: false,
    description:
      "Extreme weather events in Asia during 2024 resulted in thousands of deaths and significant economic losses, according to a new report. The study highlights the urgent need for improved warning systems and climate resilience.",
  },
  {
    title:
      "India’s Business Activity Hits 14-Month High in June, Driven by Robust Demand and Exports",
    date: "June 23, 2025",
    image: "../images/top_news_1.avif",
    featured: false,
    description: "",
  },
  {
    title: "India Set to Outpace G7 Economies in Growth: Report",
    date: "June 23, 2025",
    image: "../images/top_news_2.jpg",
    featured: true,
    description: "",
  },
  {
    title:
      "India’s Business Activity Hits 14-Month High in June, Driven by Robust Demand and Exports",
    date: "June 23, 2025",
    image: "../images/top_news_1.avif",
    featured: false,
    description: "",
  },
  {
    title: "India Set to Outpace G7 Economies in Growth: Report",
    date: "June 23, 2025",
    image: "../images/top_news_2.jpg",
    featured: false,
    description: "",
  },
  {
    title:
      "India’s Business Activity Hits 14-Month High in June, Driven by Robust Demand and Exports",
    date: "June 23, 2025",
    image: "../images/top_news_1.avif",
    featured: true,
    description: "",
  },
];

const magazine = {
  image: "../images/magazine.png",
  title: "NEWS365 TIMES MAGAZINE",
  description:
    "Explore our latest digital magazine for in-depth stories, exclusive interviews, and expert analysis on current affairs. Click to read the full edition online.",
  link: "/magazine",
};

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

const NationalNewsSection = () => {
  // Split news for before and after magazine
  const firstNews = nationalNews.slice(0, 3);
  const remainingNews = nationalNews.slice(3);

  return (
    <section className="px-2">
      <div className="">
        <div className="rounded-lg shadow-lg p-0 overflow-hidden bg-white">
          <div
            className="text-center text-xl font-bold py-3 border-b border-[#2E3CB0]"
            style={{
              fontFamily: "'Lato', 'Arial', sans-serif",
              color: "#2F3137",
            }}
          >
            <span>Latest News</span>
          </div>
          <div className="divide-y divide-gray-200">
            {/* First 3 news */}
            {firstNews.map((news, idx) => (
              <div
                key={idx}
                className="p-5 flex items-start gap-4 group cursor-pointer transition-all duration-200 rounded-lg hover:bg-gray-50"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-20 h-20 object-cover rounded-md flex-shrink-0 bg-gray-200 transition duration-300 group-hover:brightness-110 group-hover:shadow-lg group-hover:scale-105"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center mb-2">
                    {news.featured ? (
                      <Badge type="featured">FEATURED</Badge>
                    ) : (
                      <Badge type="latest">LATEST</Badge>
                    )}
                    <span className="text-xs text-gray-500">{news.date}</span>
                  </div>
                  <div
                    className="text-md font-bold mb-1 transition-colors duration-150 group-hover:text-[#2E3CB0] text-black"
                    style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                  >
                    {news.title}
                  </div>
                </div>
              </div>
            ))}
            {/* Magazine Card */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-gradient-to-r from-[#f8fafc] to-[#e0e7ef] rounded-xl shadow-md my-4 mx-2 border border-gray-200">
              <img
                src={magazine.image}
                alt={magazine.title}
                className="w-32 h-44 object-cover rounded-lg shadow-lg border border-gray-300"
                style={{ background: "#fff" }}
              />
              <div className="flex-1 min-w-0 flex flex-col items-center md:items-start">
                <div
                  className="text-lg font-bold text-[#2e3cb0] mb-2"
                  style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                >
                  {magazine.title}
                </div>
                <div
                  className="text-gray-700 text-sm mb-3 text-center md:text-left"
                  style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                >
                  {magazine.description}
                </div>
                <a
                  href={magazine.link}
                  className="inline-block px-5 py-2 bg-[#2e3cb0] text-white rounded font-semibold shadow hover:bg-[#1c2566] transition"
                  style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                >
                  Read Now
                </a>
              </div>
            </div>
            {/* Remaining news */}
            {remainingNews.map((news, idx) => (
              <div
                key={idx}
                className="p-5 flex items-start gap-4 group cursor-pointer transition-all duration-200 rounded-lg hover:bg-gray-50"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-20 h-20 object-cover rounded-md flex-shrink-0 bg-gray-200 transition duration-300 group-hover:brightness-110 group-hover:shadow-lg group-hover:scale-105"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center mb-2">
                    <Badge type="latest">LATEST</Badge>
                    <span className="text-xs text-gray-500">{news.date}</span>
                  </div>
                  <div
                    className="text-md font-bold mb-1 transition-colors duration-150 group-hover:text-[#2E3CB0] text-black"
                    style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                  >
                    {news.title}
                  </div>
                  <div className="text-xs text-gray-600">
                    {news.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalNewsSection;
