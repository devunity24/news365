
type SmallNewsCardProps = {
  image: string;
  headline: string;
  language: "malayalam" | "kannada" | "tamil" | "telugu" | "hindi";
};

const SmallNewsCard = ({ image, headline, language }: SmallNewsCardProps) => (
  <article className="flex items-start gap-4 card-hover p-2 rounded-lg transition-all duration-300 hover:bg-gray-50 cursor-pointer">
    <img src={image} alt={headline} className="w-24 h-16 object-cover rounded-md flex-shrink-0" loading="lazy" />
    <div className="flex-grow">
      <h3 className="text-sm font-semibold leading-snug mb-1">{headline}</h3>
      <span className={`text-xs uppercase font-bold text-${language} opacity-80`}>{language}</span>
    </div>
  </article>
);

export default SmallNewsCard;
