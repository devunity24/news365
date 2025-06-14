
import NewsCard from "./NewsCard";

const regionalNews = [
  {
    language: "malayalam",
    stories: [
      { image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/kochi-tech-thumb.jpg", category: "Malayalam", headline: "Kochi’s Tech Park Expansion Approved" },
      { image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/alappuzha-festival-thumb.jpg", category: "Malayalam", headline: "Alappuzha’s Historic Festival Begins" },
      { image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/wayanad-rain-thumb.jpg", category: "Malayalam", headline: "Heavy Rain Lashes Wayanad" },
    ],
  },
  {
    language: "kannada",
    stories: [
      { image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/mysore-palace-thumb.jpg", category: "Kannada", headline: "Mysore Palace Light Show Draws Crowds" },
      { image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/udupi-sea-thumb.jpg", category: "Kannada", headline: "Udupi Marine Drive Grand Opening" },
      { image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/bangalore-water-thumb.jpg", category: "Kannada", headline: "Bengaluru Water Conservation Drive" },
    ],
  },
  {
    language: "tamil",
    stories: [
      { image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/madurai-temple-thumb.jpg", category: "Tamil", headline: "Madurai’s Ancient Temple Restoration Complete" },
      { image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/pondy-monsoon-thumb.jpg", category: "Tamil", headline: "Pondicherry Braces for Monsoon Showers" },
      { image: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/trichy-sports-thumb.jpg", category: "Tamil", headline: "Trichy Hosts National Youth Games" },
    ],
  },
];

const languageTitles: any = {
  malayalam: "Malayalam",
  kannada: "Kannada",
  tamil: "Tamil",
  telugu: "Telugu",
  hindi: "Hindi",
};

const RegionalNewsGrid = () => (
  <section id="regional" className="max-w-screen-2xl mx-auto px-4 py-6">
    <h2 className="text-xl md:text-2xl font-bold mb-6 text-indigo-700">Regional News</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {regionalNews.map((region, idx) => (
        <div key={region.language}>
          <div className="flex items-center gap-2 mb-3">
            <span className={`language-badge ${region.language}`}>{languageTitles[region.language]}</span>
          </div>
          <div className="flex flex-col gap-6">
            {region.stories.map((story, i) => (
              <NewsCard key={i} {...story} language={region.language as any} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RegionalNewsGrid;
