import React from "react";
import { Star, Flame } from "lucide-react";

const internationalNews = [
  {
    title:
      "Air India to progressively resume flights to West Asia as airspaces gradually reopen",
    date: "June 23, 2025",
    image: "../images/national_1.jpg",
    featured: true,
    description:
      "Air India on Tuesday (June 24, 2025) said it will progressively resume flights to the West Asia as airspaces are gradually reopening in the region and most of the operations will resume from June 25.",
  },
  {
    title:
      "Search for two more persons resumes after landslip hits Yamunotri trek route in Uttarakhand",
    date: "June 23, 2025",
    image: "../images/national_2.jpg",
    featured: false,
    description:
      "A day after landslip hit five pilgrims near Kainchi Bhairav Mandir located on the trek route to Yamunotri, search and rescue operations resumed at 9 a.m., Disaster Management officials said.",
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

const International = () => {
  return (
    <section className="px-2 gap-4 mt-4">
      <div className="">
        <div className="rounded-lg shadow-lg p-0 overflow-hidden bg-white">
          <div
            className="text-center text-xl font-bold py-3 border-b border-[#2E3CB0]"
            style={{
              fontFamily: "'Lato', 'Arial', sans-serif",
              color: "#2F3137",
            }}
          >
            <span>International News</span>
          </div>
          <div className="divide-y divide-gray-200">
            {internationalNews.map((news, idx) => (
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
                  <div className="text-xs text-gray-600">{news.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default International;
