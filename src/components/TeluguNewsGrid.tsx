import React from "react";

const teluguNews = [
    {
        image: "../images/telugu_news_1.jpg",
        headline: "బోయింగ్ 787 నిర్వహణలో తమ ప్రమేయం లేదు.. టర్కీ స్పష్టికరణ..!",
        publishedAt: "2024-06-10",
    },
    {
        image: "../images/telugu_news_2.jpg",
        headline: "తిరుమలలో కొనసాగుతున్న భక్తుల రద్దీ.. సర్వదర్శనానికి 20 గంటల సమయం..!",
        publishedAt: "2024-06-09",
    },
    {
        image: "../images/telugu_news_3.jpg",
        headline: "Revanth Reddy : రాష్ట్ర ప్రభుత్వం తరఫున మీ అందరినీ అభినందిస్తున్నా",
        publishedAt: "2024-06-08",
    },
    {
        image: "../images/telugu_news_4.jpg",
        headline: "Hash Oil : హైదరాబాద్‌లో తొలిసారిగా కోటిన్నర విలువైన హాష్ ఆయిల్ సీజ్‌",
        publishedAt: "2024-06-07",
    },
];

const TeluguNewsGrid = () => (
    <section className="max-w-screen-2xl mx-auto px-4 py-6 bg-gradient-to-b from-blue-100 to-blue-50">
        <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-bold uppercase tracking-wider text-blue-700">
                Telugu News
            </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teluguNews.map((news, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden shadow group">
                    <div className="w-full h-64 relative">
                        <img
                            src={news.image}
                            alt={news.headline}
                            className="w-full h-full object-cover transition duration-300 group-hover:brightness-110 group-hover:shadow-lg group-hover:scale-105"
                        />
                        <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-t from-white/40 via-white/10 to-transparent opacity-60 group-hover:opacity-80 transition" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 pt-10 pb-4">
                        <span className="absolute top-3 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded uppercase z-10">
                            Telugu
                        </span>
                        <h3 className="text-white text-base font-bold leading-snug">
                            {news.headline}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default TeluguNewsGrid;
