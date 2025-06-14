
type NewsCardProps = {
  image: string;
  category: string;
  headline: string;
  language: "malayalam" | "kannada" | "tamil" | "telugu" | "hindi";
};

const NewsCard = ({ image, category, headline, language }: NewsCardProps) => (
  <article className="bg-white rounded-xl shadow-card overflow-hidden card-hover w-full max-w-xs mx-auto">
    <img src={image} alt={headline} className="object-cover w-full h-40" loading="lazy" />
    <div className="p-4">
      <span className={`language-badge ${language}`}>{category}</span>
      <h3 className="text-lg font-bold mt-2">{headline}</h3>
    </div>
  </article>
);

export default NewsCard;
