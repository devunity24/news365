import React from "react";
import PSU from "./PSU";

const PSUAndBlog = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row ">
        {/* Left: Latest News (50%) */}
        <div className="w-full lg:basis-[50%] lg:max-w-[50%] min-w-0">
          <PSU />
        </div>
        {/* Center: National News (50%) */}
        <div className="w-full lg:basis-[50%] lg:max-w-[50%] min-w-0">
        </div>
      </div>
    </section>
  );
};

export default PSUAndBlog;
