// Rashtrashabdam News Portal Homepage Layout
import React, { useEffect, useState } from "react";

import TopBar from "../components/Header";
import TopHeader from "../pages/TopHeader";
import MainNavigation from "../components/MainNavigation";
import BreakingNews from "../components/BreakingNewsTicker";
import TopNews from "../pages/TopNews";
import MiddleNewsSection from "../pages/MiddleNewsSecton";
import NewsByState from "./NewByState";
import VideoCarousel from "@/components/VideoCarousel";
import NewsByMetro from "./NewsByMetro";
import PSUAndBlog from "./PSUAndBlog";
import PoliticsAndBusiness from "./PoliticsAndBusiness";
import Sports from "./Sports";
import TravelAndTourisam from "./TravelAndTourisam";
import Entertainment from "./Entertainment";
import Footer from "../components/Footer";
import StayTuned from "./StayTuned";


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
    <main className="min-h-screen font-sans" style={{ backgroundColor: "#fbf7f7" }}>
      <TopHeader />
      <TopBar />
      <MainNavigation />
      <BreakingNews/>
      <TopNews/>
      <MiddleNewsSection />
      <NewsByState />
      <VideoCarousel />
      <NewsByMetro />
      <PSUAndBlog />
      <PoliticsAndBusiness />
      <Sports />
      <TravelAndTourisam />
      <Entertainment />
      <Footer />
      {/* Jump to top button */}
      <JumpToTopButton />
    </main>
  );
};

export default Index;
