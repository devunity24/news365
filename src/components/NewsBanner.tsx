
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { Play } from 'lucide-react';

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
    alt: "Colorful software or web code on a computer monitor",
    headline: "Green Mining Technologies Transform Industry Standards",
    subheadline: "AI and automation are reducing environmental impact while increasing efficiency.",
    category: "Technology",
    readTime: "6 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Macro photography of black circuit board",
    headline: "Voters turn out in record numbers for 2024 National Elections",
    subheadline: "Polling stations see long queues as democracy thrives across the regions.",
    category: "National Elections",
    readTime: "4 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    alt: "Journalists at work in newsroom",
    headline: "Media teams provide minute-to-minute updates",
    subheadline: "In-depth analysis and live reporting from the heart of the action.",
    category: "Media Coverage",
    readTime: "8 min read",
  },
];

const NewsBanner: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section>
      <Carousel
        plugins={[plugin.current]}
        className="w-full overflow-hidden"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="ml-0 h-[300px] md:h-[400px] lg:h-[450px]">
          {bannerSlides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 basis-full">
              <div className="relative h-full w-full">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
                  {slide.category && (
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase mb-3 inline-block">
                      {slide.category}
                    </span>
                  )}
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight drop-shadow-md max-w-3xl">
                    {slide.headline}
                  </h2>
                  {slide.subheadline && (
                    <p className="text-base md:text-lg text-gray-200 mt-3 max-w-2xl">
                      {slide.subheadline}
                    </p>
                  )}
                  <div className="flex items-center gap-4 mt-6">
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-md font-bold text-sm px-5 py-3">
                      <a href="#"><Play className="mr-2 h-4 w-4 inline-block" />Read Full Story</a>
                    </Button>
                    {slide.readTime && (
                      <p className="text-sm font-medium">{slide.readTime}</p>
                    )}
                  </div>
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
