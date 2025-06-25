import React, { useState, useEffect } from "react";

const videos = [
  {
    thumb: "../images/top_news_1.jpg",
    caption: "Bengaluru Metro launches new route connecting IT hubs",
    date: "June 23, 2025"
  },
  {
    thumb: "../images/top_news_2.jpg",
    caption: "Boeing 787 Dreamliner safety lapses highlighted",
    date: "June 22, 2025"
  },
  {
    thumb: "../images/top_news_4.jpg",
    caption: "Heatwave causes severe water shortage in Chennai",
    date: "June 21, 2025"
  },
  {
    thumb: "../images/top_news_3.jpg",
    caption: "Kavitha: Whether I spoke to KCR or not is irrelevant now",
    date: "June 20, 2025"
  },
  {
    thumb: "../images/banner2.avif",
    caption: "Tata IPL 2025 Final, RCB vs Punjab Kings",
    date: "June 19, 2025"
  },
];

const CARDS_TO_SHOW = 4;

const VideoCarousel = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const canPrev = startIdx > 0;
  const canNext = startIdx + CARDS_TO_SHOW < videos.length;

  const handlePrev = () => {
    if (canPrev) setStartIdx((idx) => Math.max(0, idx - 1));
  };

  const handleNext = () => {
    if (canNext) setStartIdx((idx) => Math.min(videos.length - CARDS_TO_SHOW, idx + 1));
  };

  return (
    <section id="videos" className="rounded-lg shadow-lg pl-6 pr-6 pb-6 bg-blue-50 max-w-screen-2xl mx-auto bg-gradient-to-b from-blue-100 to-blue-50 mt-4">
      <div className="max-w-screen-2xl mx-auto">
        <div
          className="text-center text-xl font-bold py-3 border-b border-[#2E3CB0] mb-6"
          style={{
            fontFamily: "'Lato', 'Arial', sans-serif",
            color: "#2F3137",
          }}
        >
          <span>Latest Videos</span>
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
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            disabled={!canNext}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-indigo-100 text-indigo-700 rounded-full shadow p-2 transition disabled:opacity-30"
            aria-label="Next"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
          </button>
          <div
            className={
              isMobile
                ? "flex flex-col gap-6"
                : "overflow-hidden"
            }
          >
            {isMobile ? (
              <div className="flex flex-col gap-6">
                {videos.map((vid, idx) => (
                  <div
                    key={idx}
                    className="w-full bg-white rounded-xl shadow-card card-hover mx-auto group transition-transform duration-300 hover:scale-105"
                  >
                    {/* ...existing video card code... */}
                    <div className="relative aspect-video overflow-hidden rounded-t-xl">
                      <img
                        src={vid.thumb}
                        alt={vid.caption}
                        className="w-full h-full object-cover transition duration-300 group-hover:brightness-110 group-hover:shadow-lg"
                        loading="lazy"
                      />
                      <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition">
                        <span className="bg-white text-red-600 rounded-full p-2 shadow-lg">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="p-3">
                      <span className="inline-block mb-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                        {vid.date}
                      </span>
                      <p className="mt-2 text-md font-medium">{vid.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="flex flex-row gap-6 transition-transform duration-500"
                style={{
                  transform: `translateX(-${startIdx * (100 / CARDS_TO_SHOW)}%)`,
                  width: `${(videos.length / CARDS_TO_SHOW) * 100}%`,
                }}
              >
                {videos.map((vid, idx) => (
                  <div
                    key={idx}
                    className="sm:shrink-0 sm:w-[220px] md:w-[260px] lg:w-[320px] xl:w-[350px] w-full bg-white rounded-xl shadow-card card-hover mx-auto group transition-transform duration-300 hover:scale-105"
                  >
                    {/* ...existing video card code... */}
                    <div className="relative aspect-video overflow-hidden rounded-t-xl">
                      <img
                        src={vid.thumb}
                        alt={vid.caption}
                        className="w-full h-full object-cover transition duration-300 group-hover:brightness-110 group-hover:shadow-lg"
                        loading="lazy"
                      />
                      <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition">
                        <span className="bg-white text-red-600 rounded-full p-2 shadow-lg">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="p-3">
                      <span className="inline-block mb-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                        {vid.date}
                      </span>
                      <p className="mt-2 text-md font-medium">{vid.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
