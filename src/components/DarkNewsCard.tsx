import React from "react";
import { Star, Flame } from "lucide-react";

interface DarkNewsCardProps {
  title: string;
  date: string;
  image: string;
  description?: string;
  badge?: string;
}

const Badge = ({
  type,
  children,
}: {
  type: "featured" | "latest";
  children: React.ReactNode;
}) => {
  if (type === "featured") {
    return (
      <span
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#fff8e1] text-[#b8860b] text-xs font-bold uppercase"
        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
      >
        <Star size={14} className="text-[#b8860b]" /> {children}
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#fde7e7] text-[#c94b43] text-xs font-bold uppercase"
      style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
    >
      <Flame size={14} className="text-[#c94b43]" /> {children}
    </span>
  );
};

const DarkNewsCard: React.FC<DarkNewsCardProps> = ({
  title,
  date,
  image,
  description,
  badge = "LATEST NEWS",
}) => {
  // Determine badge type
  const badgeType =
    badge.toLowerCase().includes("feature") ? "featured" : "latest";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4 border border-gray-200 transition-all duration-200 hover:shadow-2xl hover:border-[#2e3cb0] group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition duration-200 group-hover:brightness-105"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1">
          <Badge type={badgeType}>
            {badgeType === "featured" ? "FEATURED" : "LATEST"}
          </Badge>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <div
          className="font-bold text-[#23272b] text-base mb-1 mt-3 leading-tight transition-colors duration-150 group-hover:text-[#2e3cb0]"
          style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
        >
          {title}
        </div>
        {description && (
          <div
            className="text-xs text-gray-700 mt-1 line-clamp-2 transition-colors duration-150 group-hover:text-[#2e3cb0]"
            style={{
              fontFamily: "'Lato', 'Arial', sans-serif",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default DarkNewsCard;
