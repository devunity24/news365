import React from "react";
import { Star, Flame } from "lucide-react";

const entertainmentNews = [
  {
    title:
      "Hina Iqbal Fashion: Redefining Western Glamour With Brocade Elegance",
    image: "../images/ent_1.jpg",
    badge: "LATEST NEWS",
    badgeType: "latest",
  },
  {
    title:
      "Taylor Swift and Travis Kelce Make Playful Red Carpet Debut as a Couple at Tight End University",
    image: "../images/ent_2.webp",
    badge: "LATEST NEWS",
    badgeType: "latest",
  },
  {
    title:
      "Brad Pitt and Tom Cruise Reunite After 24 Years at ‘F1’ London Premiere, Fuel Buzz On Possible On-Screen Comeback",
    image: "../images/ent_3.jpg",
    badge: "LATEST NEWS",
    badgeType: "latest",
  },
  {
    title:
      "Sitaare Zameen Par Box Office: Aamir Khan’s Comeback Film Crosses ₹66.5 Crore In Just 4 Days",
    image: "../images/ent_4.webp",
    badge: "LATEST NEWS",
    badgeType: "latest",
  },
  {
    title:
      "Diljit Dosanjh Slammed for Casting Pakistani Actor Hania Aamir in Sardar Ji 3",
    image: "../images/ent_4.jpg",
    badge: "LATEST NEWS",
    badgeType: "latest",
  },
  {
    title:
      "13 Years of Gangs of Wasseypur: Mapping the Crime Cinema Legacy Behind India’s Cult Gangster Epic",
    image: "../images/ent_5.jpg",
    badge: "LATEST NEWS",
    badgeType: "latest",
  },
  {
    title:
      "‘Kesari Chapter 2’ Makers Face FIR for Alleged Distortion of Bengali Freedom Fighters’ Legacy",
    image: "../images/ent_6.avif",
    badge: "LATEST NEWS",
    badgeType: "latest",
  },
  {
    title: "Priyanka Chopra to Star in New Hollywood Sci-Fi Thriller",
    image: "../images/ent_8.jpg",
    badge: "LATEST NEWS",
    badgeType: "latest",
  },
];

const Badge = ({
  type,
  children,
}: {
  type: "featured" | "latest";
  children: React.ReactNode;
}) => {
  if (type === "featured") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2">
        <Star size={12} className="text-yellow-500" /> {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold mr-2">
      <Flame size={12} className="text-red-500" /> {children}
    </span>
  );
};

const Entertainment = () => {
  return (
    <section className="px-2 gap-4 mt-4 max-w-screen-2xl mx-auto ">
      <div className="bg-white rounded-lg shadow-lg p-0 overflow-hidden p-4">
        <div
          className="text-center text-xl font-bold py-3 border-b border-[#2E3CB0] mb-6"
          style={{
            fontFamily: "'Lato', 'Arial', sans-serif",
            color: "#2F3137",
          }}
        >
          <span>Entertainment</span>
        </div>
        {/* Grid for news cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {entertainmentNews.map((news, idx) => (
            <div
              key={idx}
              className="relative group rounded-md overflow-hidden bg-gray-200 shadow hover:shadow-xl border border-gray-100 transition-all duration-200 flex flex-col h-56 cursor-pointer"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-200"
                style={{ objectPosition: "center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <div className="relative z-20 flex flex-col justify-end h-full p-4">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full ">
                  <Badge type="latest">LATEST</Badge>
                </span>
                <div
                  className="font-semibold text-white text-base mt-2 leading-tight line-clamp-2"
                  style={{
                    fontFamily: "'Lato', 'Arial', sans-serif",
                  }}
                >
                  {news.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
