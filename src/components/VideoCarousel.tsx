import React, { useState, useEffect } from "react";

const videos = [
  {
    thumb: "../images/top_news_1.jpg",
    caption: "ಬೆಂಗಳೂರು ಮೆಟ್ರೋ ಐಟಿ ಹಬ್‌ಗಳನ್ನು ಸಂಪರ್ಕಿಸುವ ಹೊಸ ಮಾರ್ಗವನ್ನು ಆರಂಭಿಸಿದೆ",
    lang: "malayalam"
  },
  {
    thumb: "../images/top_news_2.jpg",
    caption: "ബോയിങ് 787 ഡ്രീംലൈനറിലെ സുരക്ഷാ വീഴ്ചകൾ ചൂണ്ടിക്കാട്ടി;" ,
    lang: "kannada"
  },
  {
    thumb: "../images/top_news_4.jpg",
    caption: "வெப்ப அலை காரணமாக சென்னையில் கடும் நீர் பஞ்சம்",
    lang: "tamil"
  },
  {
    thumb: "../images/top_news_3.jpg",
    caption: "Kavitha: కేసీఆర్‌తో మాట్లాడానో.. లేదన్నది ఇప్పుడు అనవసరం",
    lang: "telugu"
  },
  {
    thumb: "../images/banner2.avif",
    caption: "ടാറ്റാ ഐപിഎൽ 2025 ഫൈനൽ, ആർസിബി vs പഞ്ചാബ് കിംഗ്സ്",
    lang: "malayalam"
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
    <section id="videos" className="max-w-screen-2xl mx-auto px-4 py-10 bg-blue-100">
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-xl md:text-2xl font-bold text-indigo-700">Latest Videos</h2>
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
                    <span className={`language-badge ${vid.lang} mb-1 inline-block`}>
                      {vid.lang.charAt(0).toUpperCase() + vid.lang.slice(1)}
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
                    <span className={`language-badge ${vid.lang} mb-1 inline-block`}>
                      {vid.lang.charAt(0).toUpperCase() + vid.lang.slice(1)}
                    </span>
                    <p className="mt-2 text-md font-medium">{vid.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
