
import React from 'react';
import { TrendingUp } from 'lucide-react';

const breakingNews = [
  "New heights in renewable energy sector",
  "Lithium mining operations expand in South America",
  "Iron ore futures climb on Chinese infrastructure spending",
  "Nickel shortage concerns drive price volatility",
  "Silver industrial demand outpaces supply",
];

const BreakingNewsTicker: React.FC = () => {
  return (
    <div className="bg-red-600 text-white flex items-center h-12 overflow-hidden">
      <div className="bg-red-700 h-full flex items-center px-4 md:px-6 flex-shrink-0">
        <TrendingUp className="w-5 h-5 mr-2" />
        <span className="font-bold text-sm uppercase tracking-wider">Breaking</span>
      </div>
      <div className="flex-1 flex items-center min-w-0">
        <div className="flex whitespace-nowrap animate-marquee">
            {breakingNews.map((news, index) => (
              <a href="#" key={index} className="text-sm px-6 py-3 hover:underline">
                {news}
              </a>
            ))}
            {breakingNews.map((news, index) => (
              <a href="#" key={`dup-${index}`} className="text-sm px-6 py-3 hover:underline" aria-hidden="true">
                {news}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;
