import React from "react";
import DarkNewsCard from "../components/DarkNewsCard";

const nationalNews = [
  {
    title:
      "Air India to progressively resume flights to West Asia as airspaces gradually reopen",
    date: "June 23, 2025",
    image: "../images/national_1.jpg",
    featured: true,
    description:
      "Air India on Tuesday (June 24, 2025) said it will progressively resume flights to the West Asia as airspaces are gradually reopening in the region and most of the operations will resume from June 25.",
  },
  {
    title:
      "Search for two more persons resumes after landslip hits Yamunotri trek route in Uttarakhand",
    date: "June 23, 2025",
    image: "../images/national_2.jpg",
    featured: false,
    description:
      "A day after landslip hit five pilgrims near Kainchi Bhairav Mandir located on the trek route to Yamunotri, search and rescue operations resumed at 9 a.m., Disaster Management officials said.",
  },
  
  
];

const International = () => {
  return (
    <section className="px-2 gap-4">
      <div className="">
        <div className="rounded-lg shadow-lg p-0 overflow-hidden bg-white">
          <div
            className="text-center text-lg font-bold py-3 border-b border-[#2E3CB0]"
            style={{
              fontFamily: "'Lato', 'Arial', sans-serif",
              color: "#2F3137",
            }}
          >
            <span>International News</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default International;