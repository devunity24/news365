
import NewsCard from "./NewsCard";

const topStories = [
  {
    image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/kerala-floods-thumb.jpg",
    category: "Malayalam",
    headline: "Kerala Floods: Relief & Rescue Operations Continue",
    language: "malayalam" as const,
  },
  {
    image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/bangalore-new-metro-thumb.jpg",
    category: "Kannada",
    headline: "Bengaluru Metro Launches New Line Connecting IT Hubs",
    language: "kannada" as const,
  },
  {
    image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/chennai-water-thumb.jpg",
    category: "Tamil",
    headline: "Chennai Faces Acute Water Crisis Amid Heatwave",
    language: "tamil" as const,
  },
];

const HeroCarousel = () => {
  // Basic manual carousel for first version, can improve with embla-carousel later
  // For now, just a flex/scroll on mobile
  return (
    <section id="top-news" className="max-w-screen-2xl mx-auto px-4 py-4">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-xl md:text-2xl font-bold text-indigo-700">Top News</span>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
        {topStories.map((story, idx) => (
          <div key={idx} className="shrink-0 w-[320px] md:w-[350px]">
            <NewsCard {...story} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
