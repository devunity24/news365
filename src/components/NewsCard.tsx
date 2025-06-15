import { useNavigate } from "react-router-dom";

type NewsCardProps = {
  image: string;
  category: string;
  headline: string;
  language: "malayalam" | "kannada" | "tamil" | "telugu" | "hindi";
};

const NewsCard = ({ image, category, headline, language }: NewsCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/news-detail");
  };

  return (
    <article
      className="bg-white rounded-xl shadow-card overflow-hidden card-hover w-full cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
      onClick={handleClick}
    >
      <img src={image} alt={headline} className="object-cover w-full h-40" loading="lazy" />
      <div className="p-4">
        <span className={`language-badge ${language}`}>{category}</span>
        <h3 className="text-base font-bold mt-2 leading-snug">{headline}</h3>
      </div>
    </article>
  );
};

export default NewsCard;
