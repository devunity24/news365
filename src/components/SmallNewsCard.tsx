type SmallNewsCardProps = {
  image: string;
  headline: string;
  language: "malayalam" | "kannada" | "tamil" | "telugu" | "hindi";
  publishedAt?: string;
};

const SmallNewsCard = ({ image, headline, publishedAt }: SmallNewsCardProps) => (
  <article className="flex items-start gap-4 card-hover p-2 rounded-lg transition-all duration-300 hover:bg-gray-50 cursor-pointer">
    <div className="flex flex-col items-center">
      <div className="w-32 aspect-[4/2.5]">
        <img
          src={image}
          alt={headline}
          className="w-full h-full object-cover rounded-md flex-shrink-0"
          loading="lazy"
        />
      </div>
      {publishedAt && (
        <span className="mt-2 text-xs text-gray-500 text-left">{publishedAt}</span>
      )}
    </div>
    <div className="flex-grow flex items-center">
      <h3 className="text-sm font-semibold leading-snug">{headline}</h3>
    </div>
  </article>
);

export default SmallNewsCard;

