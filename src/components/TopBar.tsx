import React, { useState, useRef, useEffect } from "react";
import { Search, Facebook, Twitter, Instagram, Linkedin, Youtube, Globe, Rss } from "lucide-react";
import { format } from 'date-fns';
import { Input } from "@/components/ui/input";
import SmallNewsCard from "./SmallNewsCard"; // Import the SmallNewsCard component

// Example news data for dropdown
const mockNews = [
  {
    id: 1,
    image: "../images/banner1.avif",
    category: "Malayalam",
    headline: "ടാറ്റാ ഐപിഎൽ 2025 ഫൈനൽ, ആർസിബി vs പഞ്ചാബ് കിംഗ്സ് ",
    language: "malayalam" as const,
    publishedAt: "2024-06-10",
  },
  {
    id: 2,
    image: "../images/top_news_1.jpg",
    category: "Kannada",
    headline: "ಬೆಂಗಳೂರು ಮೆಟ್ರೋ ಐಟಿ ಹಬ್‌ಗಳನ್ನು ಸಂಪರ್ಕಿಸುವ ಹೊಸ ಮಾರ್ಗವನ್ನು ಆರಂಭಿಸಿದೆ",
    language: "kannada" as const,
    publishedAt: "2024-06-09",
  },
  {
    id: 3,
    image: "../images/top_news_2.jpg",
    category: "Tamil",
    headline: "வெப்ப அலை காரணமாக சென்னையில் கடும் நீர் பஞ்சம்",
    language: "tamil" as const,
    publishedAt: "2024-06-08",
  },
  {
    id: 4,
    image: "../images/top_news_3.jpg",
    category: "Telugu",
    headline: "Kavitha: కేసీఆర్‌తో మాట్లాడానో.. లేదన్నది ఇప్పుడు అనవసరం",
    language: "telugu" as const,
    publishedAt: "2024-06-07",
  },
  {
    id: 5,
    image: "../images/top_news_4.jpg",
    category: "Kannada",
    headline: "ನಟ ಕಮಲ್ ಹಾಸನ್ ಇನ್ನೂ ಕ್ಷಮೆ ಕೇಳಿಲ್ವಾ ? ಹೈಕೋರ್ಟ್ ಪ್ರಶ್ನೆ : ಅರ್ಜಿ ವಿಚಾರಣೆ ಮುಂದೂಡಿಕೆ",
    language: "kannada" as const,
    publishedAt: "2024-06-07",
  },
  {
    id: 6,
    image: "../images/top_news_6.jpg",
    category: "Tamil",
    headline: "ஒரே பாடலில் முதலமைச்சர் ஆக முடியாது விஜய்!'",
    language: "tamil" as const,
    publishedAt: "2024-06-08",
  },
  // ...add more as needed
];

const TopBar = () => {
  const currentDate = format(new Date(), 'eeee, MMMM do, yyyy');
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Always show first 6 news cards, do not filter by search
  const newsToShow = mockNews.slice(0, 6);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm mb-2">
      <nav className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4 md:gap-6 py-3 px-4 md:px-8">
        {/* Left Section: Logo and Brand Name */}
        <div className="hidden sm:flex items-center gap-3 md:gap-4">
          <img src="../images/logo.png"
            alt="Rashtrashabdam Logo"
            className="h-10 md:h-12 w-auto" />
        </div>

        {/* Right Section: Date, Social Icons, Search */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Current Date */}
          <div className="text-xs md:text-sm text-gray-600 font-medium hidden lg:block whitespace-nowrap">
            {currentDate}
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1877F3] hover:text-blue-700 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:text-sky-600 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:text-pink-600 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:text-blue-800 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:text-red-700 transition-colors">
              <Youtube size={18} />
            </a>
            <a href="https://rashtrashabdam.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Globe size={18} />
            </a>
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition-colors">
              <Rss size={18} />
            </a>
            {/* Google Play Store Badge */}
            <a
              href="https://play.google.com/store/apps/details?id=com.rashtrashabdam"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <img
                src="../images/google.png"
                alt="Get it on Google Play"
                className="h-7 w-auto"
                style={{ minWidth: 100 }}
              />
            </a>
          </div>

          {/* Search Input */}
          <div className="relative flex items-center">
            <Input
              ref={inputRef}
              type="search"
              placeholder="Search news..."
              className="pl-8 pr-2 py-1.5 h-9 text-sm rounded-md border-gray-300 focus:border-red-500 focus:ring-red-500 w-40 md:w-60"
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setShowDropdown(true); // Always show dropdown on change
              }}
              onFocus={() => setShowDropdown(true)} // Always show dropdown on focus
              autoComplete="off"
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            {/* Dropdown */}
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute left-0 md:left-auto md:-translate-x-[78%] top-11 w-[1120px] max-w-[99vw] bg-white border border-gray-200 rounded-xl shadow-2xl z-100 overflow-visible"
                style={{ minWidth: 340 }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left: News List */}
                  <div className="flex-1 p-5">
                    <div className="text-[#e4572e] font-bold text-lg mb-3">Top News</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {newsToShow.length > 0 ? (
                        newsToShow.map(news => (
                          <div
                            key={news.id}
                            className="bg-blue-50 rounded-xl flex items-center gap-3 p-2 hover:shadow-md transition cursor-pointer border border-transparent hover:border-[#e4572e]"
                          >
                            <img
                              src={news.image}
                              alt={news.headline}
                              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex flex-col justify-between h-full">
                              <div className="font-semibold text-[15px] text-gray-900 leading-tight line-clamp-2">{news.headline}</div>
                              <div className="text-xs text-gray-500 mt-1">{news.publishedAt}</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-2 text-gray-400 text-sm text-center py-8">No news found</div>
                      )}
                    </div>
                    <button
                      className="mt-4 border border-[#e4572e] text-[#e4572e] font-semibold rounded-lg px-5 py-2 bg-white hover:bg-[#fff5f0] transition w-fit"
                      // onClick={() => { /* handle show more */ }}
                    >
                      Show More News
                    </button>
                  </div>
                  {/* Right: Categories & Tags */}
                  <div className="w-56 min-w-[180px] border-l border-gray-100 px-5 py-5 flex flex-col gap-6 bg-blue-50">
                    <div className="rounded-lg ">
                      <div className="text-[#e4572e] font-bold text-base mb-2 text-left">Regional News</div>
                      <div className="flex flex-col gap-2">
                        {["Malayalam", "Tamil", "Telugu", "Kannada", "Hindi"].map(region => (
                          <button
                            key={region}
                            type="button"
                            className="bg-white border border-gray-200 rounded px-2 py-1 text-sm flex items-center gap-2 hover:bg-blue-100 hover:border-blue-400 transition-colors text-left"
                            // onClick={() => { /* handle region click */ }}
                          >
                            {region}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[#e4572e] font-bold text-base mb-2 text-left">Tags</div>
                      <div className="flex flex-wrap gap-2">
                        { [
                          
                          "#Latest News",
                          "#Breaking",
                          "#South India",
                          "#Trending",
                        ].map(tag => (
                          <button
                            key={tag}
                            type="button"
                            className="bg-white border border-gray-200 rounded px-2 py-1 text-xs text-gray-800 hover:bg-blue-100 hover:border-blue-400 transition-colors"
                            // onClick={() => { /* handle tag click */ }}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
};


export default TopBar;


