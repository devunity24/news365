import React from "react";

const bodhiNews = [
    {
        title:
            "Co-Echo Dynamics: Rewiring Karma Through Neuroscience and Symbolic Insight",
        date: "June 23, 2025",
        image: "../images/bodhi_tree_1.jpeg",
        badge: "THE BODHI TREE",
    },
    {
        title: "FINITE TO INFINITE (Zero to Empty to Shunya)",
        date: "June 22, 2025",
        image: "../images/bodhi_tree_2.jpeg",
        badge: "THE BODHI TREE",
    },
    {
        title: "The Grounded Flower: A Silent Philosophy of Healing Through Art",
        date: "June 21, 2025",
        image: "../images/bodhi_tree_3.jpeg",
        badge: "THE BODHI TREE",
    },
];

const magazine = {
    image: "../images/magazine.png",
    title: "NEWS365 TIMES MAGAZINE",
    description:
        "Explore our latest digital magazine for in-depth stories, exclusive interviews, and expert analysis on current affairs. Click to read the full edition online.",
    link: "/magazine",
};

const BodhiTree = () => {
    return (
        <section className="px-2 gap-4">
            <div className="rounded-lg shadow-lg p-0 overflow-hidden bg-white">
                <div
                    className="text-center text-xl font-bold py-3 border-b border-[#2E3CB0]"
                    style={{
                        fontFamily: "'Lato', 'Arial', sans-serif",
                        color: "#2F3137",
                    }}
                >
                    <span>The Bodhi Tree</span>
                </div>
                {/* News Cards Grid */}
                <div className="grid grid-cols-1 gap-6 p-6 bg-[#f7f7f7]">
                    {bodhiNews.map((news, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-200 p-0 overflow-hidden flex flex-col border border-gray-100"
                        >
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4 flex flex-col flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100 text-bule-700 text-xs font-semibold">            
                                        {news.badge}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {news.date}
                                    </span>
                                </div>
                                <h3
                                    className="text-md font-bold leading-snug text-[#263228]"
                                    style={{
                                        fontFamily: "'Lato', 'Arial', sans-serif",
                                    }}
                                >
                                    {news.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                    {/* Magazine Card */}
                    <div className="rounded-xl border-2 border-[#2E3CB0] bg-[#f3f6fd] shadow-lg hover:shadow-2xl transition-all duration-200 p-0 overflow-hidden flex flex-col">
                        <img
                            src={magazine.image}
                            alt={magazine.title}
                            className="w-full h-40 object-cover shadow-md"
                        />
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#2E3CB0] text-white text-xs font-semibold">
                                    <svg
                                        width="16"
                                        height="16"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="text-white"
                                    >
                                        <rect
                                            x="3"
                                            y="4"
                                            width="18"
                                            height="16"
                                            rx="2"
                                        />
                                        <path d="M16 2v4M8 2v4" />
                                    </svg>
                                    MAGAZINE
                                </span>
                            </div>
                            <h3 className="text-lg font-extrabold leading-snug text-[#2E3CB0] mb-2" style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}>{magazine.title}</h3>

                            <a href={magazine.link} className="inline-block mt-auto px-5 py-2 bg-[#2E3CB0] text-white rounded-full font-bold text-sm shadow hover:bg-[#1a2566] transition-colors" style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}>
                                Read Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BodhiTree;