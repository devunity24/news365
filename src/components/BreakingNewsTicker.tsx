import React from "react";
import { TrendingUp } from "lucide-react";

const breakingNews = [
  "പുതിയ ഉയരങ്ങളിൽ പുനർനവീകരണ ഊർജ്ജ മേഖല",
  "ദക്ഷിണ അമേരിക്കയിൽ ലിഥിയം ഖനനം വ്യാപകമാകുന്നു",
  "ചൈനീസ് അടിസ്ഥാന സൗകര്യ ചെലവിൽ ഇരുമ്പ് ധാതു വില ഉയരുന്നു",
  "നിക്കൽ കുറവ് വിലയിലുണ്ടാക്കുന്ന അനിശ്ചിതത്വം",
  "വെള്ളി വ്യാവസായിക ആവശ്യങ്ങൾ വിതരണം മറികടക്കുന്നു",
];

const BreakingNewsTicker: React.FC = () => {
  return (
    <div className="bg-red-600 text-gray-100 py-1.5 overflow-hidden relative sticky top-14 z-50">
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
