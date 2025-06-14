type NewsCardProps = {
  image: string;
  category: string;
  headline: string;
  language: "malayalam" | "kannada" | "tamil" | "telugu" | "hindi";
  publishedAt: string;
};

const NewsCard = ({ image, category, headline, language, publishedAt }: NewsCardProps) => {
  const hoverBg: Record<string, string> = {
    malayalam: "hover:bg-green-50",
    kannada: "hover:bg-yellow-50",
    tamil: "hover:bg-pink-50",
    telugu: "hover:bg-blue-50",
    hindi: "hover:bg-orange-50",
  };

  return (
    <article
      className={`bg-white rounded-xl shadow-card overflow-hidden card-hover w-full cursor-pointer transition-transform duration-200 hover:scale-[1.02] ${hoverBg[language]}`}
    >
      <img src={image} alt={headline} className="object-cover w-full sm:h-40 h-48" loading="lazy" />
      <div className="p-4">
        <span className={`language-badge ${language}`}>{category}</span>
        <h3 className="text-base font-bold mt-2 leading-snug">{headline}</h3>
        <div className="text-xs text-gray-500 mt-1">{publishedAt}</div>
      </div>
    </article>
  );
};

export default NewsCard;
