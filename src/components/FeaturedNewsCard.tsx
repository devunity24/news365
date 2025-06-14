
type NewsCardProps = {
  image: string;
  category: string;
  headline: string;
  language: "malayalam" | "kannada" | "tamil" | "telugu" | "hindi";
};

const FeaturedNewsCard = ({ image, category, headline, language }: NewsCardProps) => (
  <article className="relative rounded-xl overflow-hidden shadow-card card-hover h-80 md:h-96 w-full group cursor-pointer">
    <img src={image} alt={headline} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 p-4 md:p-6 text-white">
      <span className={`language-badge ${language}`}>{category}</span>
      <h3 className="text-xl md:text-2xl font-bold mt-2 leading-tight">{headline}</h3>
    </div>
  </article>
);

export default FeaturedNewsCard;
