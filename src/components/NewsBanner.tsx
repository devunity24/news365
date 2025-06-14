
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"; // Assuming carousel is in ui, adjust if needed
import { Card, CardContent } from "./ui/card"; // Assuming card is in ui
import Autoplay from "embla-carousel-autoplay";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    alt: "Indian city skyline at sunset",
    headline: "Voters turn out in record numbers for 2024 National Elections in South India",
    category: "National Elections",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524492449090-1a064badb801?auto=format&fit=crop&w=1200&q=80",
    alt: "Voters standing in line during Indian election",
    headline: "Polling stations see long queues as democracy thrives across the regions",
    category: "Regional Updates",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    alt: "Journalists at work in newsroom",
    headline: "Media teams provide minute-to-minute updates across all major languages",
    category: "Media Coverage",
  },
];

const NewsBanner: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-4 md:py-6 px-4 md:px-8 max-w-screen-2xl mx-auto">
      <Carousel
        plugins={[plugin.current]}
        className="w-full rounded-xl overflow-hidden shadow-lg"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1 h-[300px] md:h-[400px] lg:h-[450px]">
          {bannerSlides.map((slide, index) => (
            <CarouselItem key={index} className="pl-1 basis-full">
              <div className="relative h-full w-full">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white">
                  <span className="bg-red-600 text-xs font-semibold px-2 py-1 rounded-sm uppercase mb-2 inline-block">
                    Breaking News
                  </span>
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-md">
                    {slide.headline}
                  </h2>
                  {slide.category && (
                    <p className="text-sm md:text-base text-gray-200 mt-1">
                      Category: {slide.category}
                    </p>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800" />
        </div>
      </Carousel>
    </section>
  );
};

export default NewsBanner;
