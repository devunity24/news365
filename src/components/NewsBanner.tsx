
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
      "../images/banner1.avif",
    alt: "Colorful software or web code on a computer monitor",
    headline: "ടാറ്റാ ഐപിഎൽ 2025 ഫൈനൽ, ആർസിബി vs പഞ്ചാബ് കിംഗ്സ് – മത്സ്യ റിപ്പോർട്ട്",
    subheadline: "03 Jun, 2025",
    category: "Sports",
    readTime: "6 min read",
  },
  {
    image:
      "../images/banner2.avif",
    alt: "Macro photography of black circuit board",
    headline: "ടാറ്റാ ഐപിഎൽ 2025, എലിമിനേറ്റർ, ഗുജറാത്ത് ടൈറ്റൻസ് vs മുംബൈ ഇൻഡ്യൻസ് – മത്സര റിപ്പോർട്ട്",
    subheadline: "03 Jun, 2025",
    category: "Sports",
    readTime: "4 min read",
  },
  {
    image:
      "../images/banner3.jpeg",
    alt: "Journalists at work in newsroom",
    headline: "",
    subheadline: "",
    category: "",
    readTime: "",
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
        <CarouselContent className="ml-0 h-[300px] md:h-[350px] lg:h-[400px]">
          {bannerSlides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 basis-full">
              <div className="relative h-full w-full">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className={`h-full w-full ${index === bannerSlides.length - 1 ? '' : ' object-cover'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
                  {slide.category && (
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase mb-3 inline-block">
                      {slide.category}
                    </span>
                  )}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-md max-w-3xl">
                    {slide.headline}
                  </h2>
                  {slide.subheadline && (
                    <p className="text-base md:text-lg text-gray-200 mt-3 max-w-2xl">
                      {slide.subheadline}
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
