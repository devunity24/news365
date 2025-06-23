import React from "react";
import { TrendingUp } from "lucide-react";

const breakingNews = [
  "Renewable energy sector reaches new heights",
  "Lithium mining expands across South America",
  "Iron ore prices rise on Chinese infrastructure spending",
  "Nickel shortage creates market uncertainty",
  "Industrial demand for silver outpaces supply",
];

const BreakingNewsTicker: React.FC = () => {
  return (
    // Use responsive top with Tailwind: top-14 for mobile, top-24 for md+
    <div className="bg-red-600 text-gray-100 py-1.5 overflow-hidden relative sticky top-14 md:top-24 z-50">
      <div className="flex items-center relative">
        <div className="bg-red-700 px-4 py-1 flex items-center space-x-2 min-w-[120px] z-10 relative">
          <TrendingUp size={14} />
          <span className="font-semibold text-xs">Breaking</span>
        </div>
        {/* Ticker fills remaining space, no absolute positioning */}
        <div className="flex-1 overflow-hidden relative">
          <div className="flex animate-ticker-scroll h-full items-center">
            <div className="flex items-center space-x-8 px-6 whitespace-nowrap">
              {breakingNews.map((item, index) => (
                <span key={index} className="text-sm text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BreakingNewsTicker;
