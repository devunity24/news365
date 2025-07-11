import React from "react";
import LatestNews from "./LatestNews";
import NationalNews from "./National";
import InternationalNews from "./International";
import BodhiTree from "./BodhiTree";

const MiddleNewsSection = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row ">
        {/* Left: Latest News (40%) */}
        <div className="w-full lg:basis-[35%] lg:max-w-[35%] min-w-0">
          <LatestNews />
        </div>
        {/* Center: National News (40%) */}
        <div className="w-full lg:basis-[40%] lg:max-w-[40%] min-w-0">
          <NationalNews />
          <InternationalNews />
        </div>
        <div className="w-full lg:basis-[25%] lg:max-w-[40%] min-w-0">
          <BodhiTree />
        </div>
      </div>
    </section>
  );
};

export default MiddleNewsSection;
