import React from 'react';
import { TrendingUp } from 'lucide-react';

const breakingNews = [
  "പുതിയ ഉയരങ്ങളിൽ പുനർനവീകരണ ഊർജ്ജ മേഖല",
  "ദക്ഷിണ അമേരിക്കയിൽ ലിഥിയം ഖനനം വ്യാപകമാകുന്നു",
  "ചൈനീസ് അടിസ്ഥാന സൗകര്യ ചെലവിൽ ഇരുമ്പ് ധാതു വില ഉയരുന്നു",
  "നിക്കൽ കുറവ് വിലയിലുണ്ടാക്കുന്ന അനിശ്ചിതത്വം",
  "വെള്ളി വ്യാവസായിക ആവശ്യങ്ങൾ വിതരണം മറികടക്കുന്നു",
];

const BreakingNewsTicker: React.FC = () => {
  return (
    <div className="bg-red-600 text-white flex items-center h-12 overflow-hidden sticky top-[70px] z-50">
      <div className="bg-red-700 h-full flex items-center px-4 md:px-6 flex-shrink-0">
        <TrendingUp className="w-5 h-5 mr-2" />
        <span className="font-bold text-xs uppercase tracking-wider">Breaking</span>
      </div>
      <div className="flex-1 flex items-center min-w-0">
        <div className="flex whitespace-nowrap animate-marquee">
            {breakingNews.map((news, index) => (
              <a href="#" key={index} className="text-xs px-4 py-2 hover:underline">
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
