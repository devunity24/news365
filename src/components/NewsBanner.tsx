
import React from "react";

const NewsBanner = () => (
  <section
    className="relative w-full bg-gradient-to-r from-red-600 via-indigo-700 to-green-600 rounded-xl mt-2 overflow-hidden shadow-card"
    style={{ minHeight: "185px" }}
  >
    {/* Banner image with overlay */}
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      alt="Indian city skyline at sunset"
      className="absolute inset-0 w-full h-full object-cover opacity-70"
      loading="lazy"
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/25 opacity-60"></div>

    <div className="relative z-10 flex flex-col justify-end h-full px-4 py-8 md:py-12 md:px-10">
      {/* Breaking News strip */}
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-yellow-400 text-xs font-bold px-3 py-1 rounded uppercase text-black animate-pulse drop-shadow">
          Breaking
        </div>
        <span className="text-white text-base md:text-lg font-semibold tracking-wide drop-shadow">
          "Voters turn out in record numbers for 2024 National Elections in South India"
        </span>
      </div>
      {/* Optional call-to-action */}
      <div className="mt-3">
        <a
          href="#top-news"
          className="bg-white/90 hover:bg-white text-red-700 font-bold py-2 px-4 rounded shadow transition-all inline-block text-xs md:text-sm"
        >
          See Top News &rarr;
        </a>
      </div>
    </div>
  </section>
);

export default NewsBanner;
