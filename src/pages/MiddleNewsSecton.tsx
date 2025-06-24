import React from "react";
import LatestNews from "./LatestNews";

const MiddleNewsSection = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Latest News (40%) */}
        <div className="w-full lg:basis-[35%] lg:max-w-[35%] min-w-0">
          <LatestNews />
        </div>
        {/* Center and Right sections go here */}
        {/* <div className="w-full lg:basis-[60%] lg:max-w-[60%] min-w-0">
          // ...add your center and right section content here...
        </div> */}
      </div>
    </section>
  );
};

export default MiddleNewsSection;
