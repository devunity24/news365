import React, { useState, useRef, useEffect } from "react";
import { Search, Facebook, Instagram, Linkedin, Youtube, Globe, Rss, X as XIcon } from "lucide-react";
import { format } from 'date-fns';
import { Input } from "@/components/ui/input";
import MainNavigation from "./MainNavigation"; // Import MainNavigation
import { Star, Flame } from "lucide-react";

// Example news data for dropdown
const mockNews = [
  {
    id: 1,
    image: "../images/banner1.avif",
    category: "Malayalam",
    headline: "Tata IPL 2025 Final: RCB vs Punjab Kings",
    language: "malayalam" as const,
    publishedAt: "2024-06-10",
    featured: false,
  },
  {
    id: 2,
    image: "../images/top_news_1.jpg",
    category: "Kannada",
    headline: "Bengaluru Metro launches new route connecting IT hubs",
    language: "kannada" as const,
    publishedAt: "2024-06-09",
    featured: true,
  },
  {
    id: 3,
    image: "../images/top_news_2.jpg",
    category: "Tamil",
    headline: "Heatwave causes severe water shortage in Chennai",
    language: "tamil" as const,
    publishedAt: "2024-06-08",
    featured: false,
  },
  {
    id: 4,
    image: "../images/top_news_3.jpg",
    category: "Telugu",
    headline: "Kavitha: Whether I spoke to KCR or not is irrelevant now",
    language: "telugu" as const,
    publishedAt: "2024-06-07",
    featured: false,
  },
  {
    id: 5,
    image: "../images/top_news_4.jpg",
    category: "Kannada",
    headline: "Actor Kamal Haasan yet to apologize? High Court questions: Petition hearing postponed",
    language: "kannada" as const,
    publishedAt: "2024-06-07",
    featured: true,
  },
  {
    id: 6,
    image: "../images/latest_news_3.jpg",
    category: "Tamil",
    headline: "You can't become Chief Minister with just one song, Vijay!",
    language: "tamil" as const,
    publishedAt: "2024-06-08",
    featured: true,
  },
  // ...add more as needed
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
      <span
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#fff8e1] text-[#b8860b] text-xs font-bold uppercase"
        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
      >
        <Star size={14} className="text-[#b8860b]" /> {children}
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#fde7e7] text-[#c94b43] text-xs font-bold uppercase"
      style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
    >
      <Flame size={14} className="text-[#c94b43]" /> {children}
    </span>
  );
};

const TopBar = () => {
  const currentDate = format(new Date(), 'eeee, MMMM do, yyyy');
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm mb-2 pt-1">
      <nav className={
        `max-w-screen-2xl mx-auto flex items-center justify-between gap-4 md:gap-6 px-4 md:px-8 relative transition-all duration-200 ${scrolled ? 'py-4' : 'py-2'}`
      }>
        {/* Left Section: Logo */}
        <div className="flex items-center gap-3 md:gap-4">
          <img
            src="../images/news356.png"
            alt="Rashtrashabdam Logo"
            className="h-12 md:h-14 w-auto"
          />
        </div>

        {/* Centered Brand Name */}
        {!scrolled && (
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full pointer-events-none hidden sm:flex"
            style={{ zIndex: 10 }}
          >
            <span
              className="text-2xl md:text-3xl font-serif font-bold tracking-wide text-center"
              style={{
                letterSpacing: "0.08em",
                fontFamily: `'Times New Roman', Times, serif`,
                pointerEvents: "auto"
              }}
            >
              <span style={{ color: "#2eb05c" }}>NEWS365</span>{" "}
              <span style={{ color: "#2e3cb0" }}>TIMES</span>
            </span>
          </div>
        )}

        {/* Right Section: Date, Social Icons, Search or Navigation */}
        <div className="flex items-center gap-3 md:gap-5 flex-1 justify-end">
          <div className="flex-1" />
          
          {!scrolled ? (
            <>
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
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  autoComplete="off"
                />
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                {/* Dropdown */}
                {showDropdown && (
                  <div
                    ref={dropdownRef}
                    className="fixed left-1/2 top-20 sm:absolute sm:left-0 sm:top-11 sm:left-auto sm:-translate-x-[78%] w-full sm:w-[1120px] max-w-full sm:max-w-[99vw] bg-white border border-gray-200 rounded-xl shadow-2xl z-[99999] overflow-visible px-1 sm:px-0"
                    style={{ minWidth: 0 }}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Left: News List */}
                      <div className="flex-1 p-2 sm:p-5">
                        <div className="text-[#e4572e] font-bold text-lg mb-3">Top News</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {newsToShow.length > 0 ? (
                            newsToShow.map(news => {
                              // Language chip color map
                              const langColor: Record<string, string> = {
                                malayalam: "bg-green-100 text-green-700",
                                tamil: "bg-pink-100 text-pink-700",
                                telugu: "bg-yellow-100 text-yellow-700",
                                kannada: "bg-blue-100 text-blue-700",
                                hindi: "bg-purple-100 text-purple-700",
                              };
                              return (
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
                                    <div className="flex items-center gap-2 mb-1">
                                      {news.featured ? (
                                        <Badge type="featured">FEATURED</Badge>
                                      ) : (
                                        <Badge type="latest">LATEST</Badge>
                                      )}
                                    </div>
                                    <div className="font-semibold text-[15px] text-gray-900 leading-tight line-clamp-2">{news.headline}</div>
                                    <div className="text-xs text-gray-500 mt-1">{news.publishedAt}</div>
                                  </div>
                                </div>
                              );
                            })
                          ) : (
                            <div className="col-span-2 text-gray-400 text-sm text-center py-8">No news found</div>
                          )}
                        </div>
                        <button
                          className="mt-4 border border-[#e4572e] text-[#e4572e] font-semibold rounded-lg px-4 py-2 bg-white hover:bg-[#fff5f0] transition w-full sm:w-fit"
                          // onClick={() => { /* handle show more */ }}
                        >
                          Show More News
                        </button>
                      </div>
                      {/* Right: Categories & Tags */}
                      
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="w-full">
              <div className="bg-white ">
                <MainNavigation fromTopBar={true} />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};


export default TopBar;


