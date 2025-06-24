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
  {
    title:
      "Tribal Ministry urged to delete 'Any Kuki Tribes' category from Manipur's ST list",
    date: "June 23, 2025",
    image: "../images/national_3.jpg",
    featured: false,
    description:
      "Two Manipur-based organisations have urged the Ministry of Tribal Affairs to delete the 'Any Kuki Tribes' category from the Scheduled Tribes (ST) list in the State as it allegedly allows foreigners to claim rights of the indigenous people and poses a threat to their land and resources.",
  },
  {
    title:
      "Israel-Iran conflict: 16 flights cancelled to and from Bengaluru, five diverted",
    date: "June 23, 2025",
    image: "../images/national_4.jpg",
    featured: true,
    description: "Due to the closure of certain airspaces in West Asia, several flights have been cancelled from the Kempegowda International Airport (KIA).",
  },
  
];

const National = () => {
  return (
    <section className="px-2">
      <div className="">
        <div className="rounded-lg shadow-lg p-0 overflow-hidden bg-white">
          <div
            className="text-center text-lg font-bold py-3 border-b border-[#2E3CB0]"
            style={{
              fontFamily: "'Lato', 'Arial', sans-serif",
              color: "#2F3137",
            }}
          >
            <span>National News</span>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {nationalNews.map((news, idx) => (
              <DarkNewsCard
                key={idx}
                title={news.title}
                date={news.date}
                image={news.image}
                description={news.description}
                badge={news.featured ? "FEATURED" : "LATEST NEWS"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default National;