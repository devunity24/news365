import NewsCard from "./NewsCard";

const topStories = [
  {
    image: "../images/banner1.avif",
    category: "Malayalam",
    headline: "ടാറ്റാ ഐപിഎൽ 2025 ഫൈനൽ, ആർസിബി vs പഞ്ചാബ് കിംഗ്സ് – മത്സ്യ റിപ്പോർട്ട്",
    language: "malayalam" as const,
  },
  {
    image: "../images/top_news_1.jpg",
    category: "Kannada",
    headline: "ಬೆಂಗಳೂರು ಮೆಟ್ರೋ ಐಟಿ ಹಬ್‌ಗಳನ್ನು ಸಂಪರ್ಕಿಸುವ ಹೊಸ ಮಾರ್ಗವನ್ನು ಆರಂಭಿಸಿದೆ",
    language: "kannada" as const,
  },
  {
    image: "../images/top_news_2.jpg",
    category: "Tamil",
    headline: "வெப்ப அலை காரணமாக சென்னையில் கடும் நீர் பஞ்சம்",
    language: "tamil" as const,
  },
  {
    image: "../images/top_news_3.jpg",
    category: "Telegu",
    headline: "Kavitha: కేసీఆర్‌తో మాట్లాడానో.. లేదన్నది ఇప్పుడు అనవసరం",
    language: "telegu" as const,
  },
];

const HeroCarousel = () => {
  // Basic manual carousel for first version, can improve with embla-carousel later
  // For now, just a flex/scroll on mobile
  return (
    <section id="top-news" className="max-w-screen-2xl mx-auto px-2 sm:px-4 py-3 sm:py-4">
      <div className="mb-3 sm:mb-4 flex items-center gap-2">
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-700">Top News</span>
      </div>
      <div
        className="
          flex flex-col gap-4
          sm:flex-row sm:gap-6 sm:overflow-x-auto sm:pb-4 sm:-mx-2 sm:px-2
          hide-scrollbar
        "
      >
        {topStories.map((story, idx) => (
          <div
            key={idx}
            className="
              w-full
              sm:shrink-0 sm:w-[220px] md:w-[260px] lg:w-[320px] xl:w-[350px]
            "
          >
            <NewsCard {...story} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
