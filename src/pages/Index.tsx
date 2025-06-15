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
import React, { useEffect, useState } from "react";

const JumpToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return show ? (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-800 text-white rounded-full shadow-lg p-3 transition"
      aria-label="Jump to top"
    >
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  ) : null;
};

const Index = () => {
  return (
    <main className="bg-white min-h-screen font-sans">
      <TopBar />
      <MainNavigation />
      <InfoBar />
      <NewsBanner />
      <BreakingNewsTicker />
      <HeroCarousel />
      <RegionalNewsGrid />
      <VideoCarousel />
      <OpinionColumns />
      <Footer />
      <JumpToTopButton />
    </main>
  );
};

export default Index;
