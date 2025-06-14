
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    alt: "Indian city skyline at sunset",
    headline: "Voters turn out in record numbers for 2024 National Elections in South India",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524492449090-1a064badb801?auto=format&fit=crop&w=1200&q=80",
    alt: "Voters standing in line during Indian election",
    headline: "Polling stations see long queues as democracy thrives",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    alt: "Journalists at work in newsroom",
    headline: "Media teams provide minute-to-minute updates across languages",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
    alt: "Microphones lined up for a press conference",
    headline: "Political leaders address the public on new reforms",
  },
];

const AUTOPLAY_INTERVAL = 4000;

const NewsBanner: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const slideCount = bannerSlides.length;
  const timer = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    timer.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, AUTOPLAY_INTERVAL);
    return () => timer.current && clearTimeout(timer.current);
  }, [activeIndex, slideCount]);

  return (
    <section
      className="relative w-full rounded-xl mt-2 overflow-hidden shadow-card"
      style={{
        minHeight: "320px",
        maxHeight: "480px",
        height: "36vw",
      }}
    >
      <Carousel
        opts={{ loop: true }}
        className="h-full"
      >
        <CarouselContent
          className="h-full"
          style={{ height: "100%" }}
        >
          {bannerSlides.map((slide, idx) => (
            <CarouselItem
              key={slide.image}
              className={`relative h-full transition-all duration-1000 ${
                idx === activeIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
              aria-hidden={idx !== activeIndex}
            >
              {/* Image as background */}
              <img
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-700"
                loading="lazy"
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-75"></div>
              {/* Slide Content */}
              <div className="relative z-20 flex flex-col justify-end h-full px-4 py-8 md:py-14 md:px-12">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-yellow-400 text-xs font-bold px-3 py-1 rounded uppercase text-black animate-pulse drop-shadow">
                    Breaking
                  </div>
                  <span className="text-white text-base md:text-2xl font-semibold tracking-wide drop-shadow animate-fade-in">
                    {slide.headline}
                  </span>
                </div>
                <div className="mt-3">
                  <a
                    href="#top-news"
                    className="bg-white/90 hover:bg-white text-red-700 font-bold py-2 px-4 rounded shadow transition-all inline-block text-xs md:text-sm"
                  >
                    See Top News &rarr;
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Bullet indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {bannerSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`w-3 h-3 rounded-full border border-white ${
                idx === activeIndex ? "bg-white" : "bg-gray-400/50"
              } transition-all`}
              aria-label={`Go to banner slide ${idx + 1}`}
              tabIndex={0}
              onClick={() => setActiveIndex(idx)}
            ></button>
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default NewsBanner;
