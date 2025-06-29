import React from "react";
import TopHeader from "./TopHeader";
import Header from "../components/Header";
import MainNavigation from "../components/MainNavigation";
import { Star, Flame } from "lucide-react";
import Footer from "../components/Footer";

const bodhiArticles = [
    {
        title: "Love Horoscope Today, June 29, 2025: What the stars say about your love life",
        image: "../images/astro.jpg",
        description:
            "Aries Your words have a powerful impact on your partner today. You’ll discover a deeper connection if you open up and express your feelings. Communication will flow naturally..",
        date: "June 27, 2025",
        badge: "FEATURED",
        badgeType: "featured",
    },
    {
        title:
            "Libra Daily Health Horoscope Today, June 29, 2025: Be honest about what drains you",
        image: "../images/astro_1.jpg",
        description:
            "Libra, daily horoscopes await your discovery according to how mighty planets act on your health and vitality. Get helpful insights to coordinate your day with clarity and confidence",
        date: "June 27, 2025",
        badge: "LATEST",
        badgeType: "latest",
    },
    {
        title:
            "Capricorn Daily Horoscope Today, June 29, 2025: Speak with strength, not volume",
        image: "../images/astro_2.jpg",
        description:
            "Today’s energy reminds you of your quiet power. You don’t need to explain yourself again and again to be heard. Say what you mean once—with calmness, with honesty, and then move forward.",
        date: "June 27, 2025",
        badge: "LATEST",
        badgeType: "latest",
    },
    {
        title:
            "Cancer Daily Horoscope Today, June 29, 2025: Your journey is already happening now",
        image: "../images/astro_3.jpg",
        description:
            "You may feel today that life is waiting to begin, like you’re stuck between chapters. But the stars remind you—this is not a pause, this is the path.",
        date: "June 27, 2025",
        badge: "FEATURED",
        badgeType: "featured",
    },
    {
        title: "Aquarius, Weekly Horoscope, June 29 to July 05: Supportive Allies, New Connections, and Exciting Opportunities Ahead",
        image: "../images/astro_4.jpg",
        description:
            "Aquarius, this week brings supportive relationships and opportunities for growth in various aspects of life. Early in the week, focus on partnerships and intellectual pursuits..",
        date: "June 27, 2025",
        badge: "LATEST",
        badgeType: "latest",
    },
    {
        title:
            "Sagittarius, Weekly Horoscope, June 29 to July 05: Optimism, Good News, and Natural Leadership Shine Through",
        image: "../images/astro_5.jpg",
        description:
            "Sagittarius individuals can anticipate a week filled with optimism and favorable outcomes across various aspects of life. Financial gains, family support, and career advancements..",
        date: "June 27, 2025",
        badge: "LATEST",
        badgeType: "latest",
    },
    {
        title: "Taurus, Weekly Horoscope, June 29 to July 05: Comfort at Home, Creative Wins, and Joyful Surprises",
        image: "../images/astro_6.jpg",
        description:
            "Taurus enjoys a week of domestic bliss, creative fulfillment, and minor triumphs. Family connections strengthen, and home improvements bring joy.",
        date: "June 27, 2025",
        badge: "LATEST",
        badgeType: "latest",
    },
    {
        title: "Unlocking the Secrets of Zodiac Signs and Money: How Each Sign Affects Your Finances",
        image: "../images/astro_7.jpg",
        description: "I visualize the zodiac signs as human figures, each embodying their unique financial attitudes and behaviors within a cosmic setting.",
        date: "June 27, 2025",
        badge: "FEATURED",
        badgeType: "featured",
    },
    {
        title: "Top Zodiac Signs With the Strongest and Most Protected Aura — Find Out Why",
        image: "../images/astro_8.jpg",
        description:
            "Have you ever feel protected by unseen forces? Yes that might be your own positive aura that you feel so relaxed and calm even when you meet many people but you don’t feel affected.",
        date: "June 27, 2025",
        badge: "FEATURED",
        badgeType: "featured",
    },
];

const Badge = ({
    type,
    children,
}: {
    type: "featured" | "latest";
    children: React.ReactNode;
}) => {
    if (type === "featured") {
        return (
            <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#fff8e1] text-[#b8860b] text-xs font-bold uppercase"
                style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
            >
                <Star size={14} className="text-[#b8860b]" /> {children}
            </span>
        );
    }
    return (
        <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#fde7e7] text-[#c94b43] text-xs font-bold uppercase"
            style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
        >
            <Flame size={14} className="text-[#c94b43]" /> {children}
        </span>
    );
};

const Astro = () => {
    return (
        <>
            <TopHeader />
            <Header />
            <MainNavigation />
            <div className="w-full bg-gradient-to-r from-[#e0e7ef] to-[#f8fafc] py-6 mb-2 border-b border-gray-200">
                <div className="max-w-3xl mx-auto px-2 flex flex-col items-center">
                    <h1
                        className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#2e3cb0] text-center"
                        style={{
                            fontFamily: "'Lora', 'Merriweather', serif",
                            letterSpacing: "0.02em",
                            lineHeight: 1.1,
                        }}
                    >
                        <span className="inline-block bg-white px-3 py-1 rounded shadow-sm">
                            Astro Vision
                        </span>
                    </h1>
                    <p
                        className="mt-2 text-base md:text-lg text-gray-600 text-center max-w-6xl"
                        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                    >
                        Astro Vision is a predictive science that interprets celestial movements to offer insights into one's future.
                        It blends ancient wisdom with modern tools to provide personalized astrological guidance.
                    </p>
                </div>
            </div>
            <section className="bg-[#f8fafc] min-h-screen py-6 pl-4">
                <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8">
                    {/* Main Articles Grid */}
                    <div className="w-full lg:w-[70%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {bodhiArticles.map((article, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-2xl bg-white shadow hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col border border-gray-100 group"
                                    style={{ minHeight: 370 }}
                                >
                                    <div className="overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-95"
                                            style={{ objectPosition: "center" }}
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge
                                                type={
                                                    article.badgeType as "featured" | "latest" | "psu"
                                                }
                                            >
                                                {article.badge}
                                            </Badge>
                                            <span className="text-xs text-gray-500">
                                                {article.date}
                                            </span>
                                        </div>
                                        <div
                                            className="font-bold text-lg mb-1 text-[#222] leading-snug transition-colors group-hover:text-[#2e3cb0]"
                                            style={{
                                                fontFamily: "'Lato', 'Arial', sans-serif",
                                            }}
                                        >
                                            {article.title}
                                        </div>
                                        <div
                                            className="text-sm text-gray-600 mt-1"
                                            style={{
                                                fontFamily: "'Lato', 'Arial', sans-serif",
                                            }}
                                        >
                                            {article.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Sidebar */}
                    <aside className="w-full lg:w-[30%] flex-shrink-0 flex flex-col gap-6">
                        <div className="bg-white rounded-xl shadow-md p-4">
                            <div className="font-bold text-base mb-2 text-[#2F3137]">
                                Recent Articles
                            </div>
                            <ul className="space-y-3">
                                {bodhiArticles.slice(0, 6).map((article, idx) => (
                                    <li key={idx}>
                                        <a
                                            href="#"
                                            className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white shadow-sm px-2 py-2 hover:shadow-md transition group"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-14 h-14 object-cover rounded-md flex-shrink-0 border border-gray-200"
                                            />
                                            <div className="flex flex-col flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Badge
                                                        type={
                                                            article.badgeType as "featured" | "latest" | "psu"
                                                        }
                                                    >
                                                        {article.badge}
                                                    </Badge>
                                                    <span className="text-xs text-gray-400">
                                                        {article.date}
                                                    </span>
                                                </div>
                                                <div
                                                    className="font-bold text-[15px] text-black leading-snug group-hover:text-[#2e3cb0] transition-colors line-clamp-2"
                                                    style={{
                                                        fontFamily: "'Lato', 'Arial', sans-serif",
                                                    }}
                                                >
                                                    {article.title}
                                                </div>
                                                <div
                                                    className="text-xs text-gray-600 mt-1 line-clamp-2"
                                                    style={{
                                                        fontFamily: "'Lato', 'Arial', sans-serif",
                                                    }}
                                                >
                                                    {article.description}
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#e3f2fd] rounded-2xl shadow-lg p-0 flex flex-col items-center border border-[#e3e3e3] overflow-hidden">
                            <div className="w-full flex flex-col items-center pt-2">
                                <img
                                    src="../images/add.png"
                                    alt="Advertise"
                                    className="w-full object-cover"
                                    style={{
                                        maxWidth: 300,
                                        minHeight: 140,

                                    }}
                                />
                            </div>
                            <div className="w-full flex flex-col items-center px-6 py-4">
                                <div className="text-lg font-extrabold text-[#2e3cb0] mb-1 tracking-tight">
                                    Promote Your Brand Here
                                </div>
                                <div className="text-sm text-gray-700 mb-2 text-center">
                                    Reach thousands of readers daily with a single click. <br />
                                    Boost your business, event, or service on News365!
                                </div>
                                <a
                                    href="https://wa.me/919942913257"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-[#25d366] hover:bg-[#128c7e] text-white font-bold px-4 py-2 rounded-full shadow transition mb-2"
                                >
                                    <span role="img" aria-label="whatsapp">💬</span>
                                    WhatsApp: +91 9942913257
                                </a>
                                <div className="text-xs text-gray-500 mb-2 text-center">
                                    Or email:{" "}
                                    <a
                                        href="mailto:news365times@gmail.com"
                                        className="underline text-[#2e3cb0]"
                                    >
                                        news365times@gmail.com
                                    </a>
                                </div>
                                <button className="w-full px-4 py-2 bg-gradient-to-r from-[#2e3cb0] to-[#4f8cff] text-white rounded-lg font-semibold hover:from-[#1c2566] hover:to-[#2e3cb0] transition shadow">
                                    Contact Us Now
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Astro;
