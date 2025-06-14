
// Rashtrashabdam News Portal Homepage Layout

import TopBar from "../components/TopBar";
import MainNavigation from "../components/MainNavigation";
import NewsBanner from "../components/NewsBanner"; // Added import
import InfoBar from "../components/InfoBar";
import BreakingNewsTicker from "../components/BreakingNewsTicker";
import HeroCarousel from "../components/HeroCarousel";
import RegionalNewsGrid from "../components/RegionalNewsGrid";
import VideoCarousel from "../components/VideoCarousel";
import OpinionColumns from "../components/OpinionColumns";
import Footer from "../components/Footer";


const Index = () => {
  return (
    <main className="bg-white min-h-screen font-sans">
      <TopBar />
      <MainNavigation />
      <InfoBar />
      <BreakingNewsTicker />
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
