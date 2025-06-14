// Rashtrashabdam News Portal Homepage Layout

import TopBar from "../components/TopBar";
import HeroCarousel from "../components/HeroCarousel";
import RegionalNewsGrid from "../components/RegionalNewsGrid";
import VideoCarousel from "../components/VideoCarousel";
import OpinionColumns from "../components/OpinionColumns";
import Footer from "../components/Footer";
import NewsBanner from "../components/NewsBanner";

const Index = () => {
  return (
    <main className="bg-white min-h-screen font-sans">
      <TopBar />
      <NewsBanner />
      <HeroCarousel />
      <RegionalNewsGrid />
      <VideoCarousel />
      <OpinionColumns />
      <Footer />
    </main>
  );
};

export default Index;
