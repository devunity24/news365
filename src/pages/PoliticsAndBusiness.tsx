import React from "react";
import Politics from "./Politics";
import Business from "./Business";


const PoliticsAndBusiness = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row ">
        {/* Left: Latest News (50%) */}
        <div className="w-full lg:basis-[50%] lg:max-w-[50%] min-w-0">
            <Politics />
        </div>
        {/* Center: National News (50%) */}
        <div className="w-full lg:basis-[50%] lg:max-w-[50%] min-w-0">
            <Business />
        </div>
      </div>
    </section>
  );
};

export default PoliticsAndBusiness;
