import React, { useState, useRef, useEffect } from "react";
import NewsCard from "./NewsCard";

const topStories = [
  {
    image: "../images/banner1.avif",
    category: "Malayalam",
    headline: "ടാറ്റാ ഐപിഎൽ 2025 ഫൈനൽ, ആർസിബി vs പഞ്ചാബ് കിംഗ്സ് ",
    language: "malayalam" as const,
    publishedAt: "2024-06-10",
  },
  {
    image: "../images/top_news_1.jpg",
    category: "Kannada",
    headline: "ಬೆಂಗಳೂರು ಮೆಟ್ರೋ ಐಟಿ ಹಬ್‌ಗಳನ್ನು ಸಂಪರ್ಕಿಸುವ ಹೊಸ ಮಾರ್ಗವನ್ನು ಆರಂಭಿಸಿದೆ",
    language: "kannada" as const,
    publishedAt: "2024-06-09",
  },
  {
    image: "../images/top_news_2.jpg",
    category: "Tamil",
    headline: "வெப்ப அலை காரணமாக சென்னையில் கடும் நீர் பஞ்சம்",
    language: "tamil" as const,
    publishedAt: "2024-06-08",
  },
  {
    image: "../images/top_news_3.jpg",
    category: "Telugu",
    headline: "Kavitha: కేసీఆర్‌తో మాట్లాడానో.. లేదన్నది ఇప్పుడు అనవసరం",
    language: "telugu" as const,
    publishedAt: "2024-06-07",
  },
  {
    image: "../images/top_news_4.jpg",
    category: "Kannada",
    headline: "ನಟ ಕಮಲ್ ಹಾಸನ್ ಇನ್ನೂ ಕ್ಷಮೆ ಕೇಳಿಲ್ವಾ ? ಹೈಕೋರ್ಟ್ ಪ್ರಶ್ನೆ : ಅರ್ಜಿ ವಿಚಾರಣೆ ಮುಂದೂಡಿಕೆ",
    language: "kannada" as const,
    publishedAt: "2024-06-07",
  },
  {
    image: "../images/top_news_6.jpg",
    category: "Tamil",
    headline: "ஒரே பாடலில் முதலமைச்சர் ஆக முடியாது விஜய்!'",
    language: "tamil" as const,
    publishedAt: "2024-06-08",
  },
];

const CARDS_TO_SHOW = 4;

const HeroCarousel = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const canPrev = startIdx > 0;
  const canNext = startIdx + CARDS_TO_SHOW < topStories.length;

  const handlePrev = () => {
    if (canPrev) setStartIdx((idx) => Math.max(0, idx - 1));
  };

  const handleNext = () => {
    if (canNext) setStartIdx((idx) => Math.min(topStories.length - CARDS_TO_SHOW, idx + 1));
  };

  return (
    <section id="top-news" className="max-w-screen-2xl mx-auto px-2 sm:px-4 py-3 sm:py-4">
      <div className="mb-3 sm:mb-4 flex items-center gap-2">
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-700">Top News</span>
      </div>
      <div className="relative">
        {/* Left Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={!canPrev}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-indigo-100 text-indigo-700 rounded-full shadow p-2 transition disabled:opacity-30"
          aria-label="Previous"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        {/* Right Arrow */}
        <button
          type="button"
          onClick={handleNext}
          disabled={!canNext}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-indigo-100 text-indigo-700 rounded-full shadow p-2 transition disabled:opacity-30"
          aria-label="Next"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
        </button>
        <div
          className={
            isMobile
              ? "flex flex-col gap-4"
              : "overflow-hidden"
          }
        >
          {isMobile ? (
            // Mobile: stack all cards vertically
            <div className="flex flex-col gap-4">
              {topStories.map((story, idx) => (
                <div key={idx} className="w-full">
                  <NewsCard {...story} />
                </div>
              ))}
            </div>
          ) : (
            // Desktop: horizontal carousel with sliding
            <div
              className="flex flex-row gap-6 sm:pb-4 sm:-mx-2 sm:px-2 hide-scrollbar transition-transform duration-500"
              style={{
                transform: `translateX(-${startIdx * (100 / CARDS_TO_SHOW)}%)`,
                width: `${(topStories.length / CARDS_TO_SHOW) * 100}%`,
              }}
            >
              {topStories.map((story, idx) => (
                <div
                  key={idx}
                  className="sm:shrink-0 sm:w-[220px] md:w-[260px] lg:w-[320px] xl:w-[350px] w-full transition-transform"
                >
                  <NewsCard {...story} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
