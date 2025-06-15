import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import MainNavigation from "../components/MainNavigation";
import SmallNewsCard from "../components/SmallNewsCard";

const news = {
    image: "../images/banner1.avif",
    language: "Malayalam",
    title: "സോഷ്യൽ മീഡിയ പോസ്റ്റിന്‍റെ പേരിൽ എൻ.വി. ബാലകൃഷ്ണനെതിരെ കേസ്",
    author: "Special Correspondent",
    authorUrl: "https://www.rashtrashabdam.com",
    date: "14/06/2025",
    content: [
        "കൊച്ചി: സോഷ്യൽ മീഡിയ പോസ്റ്റിന്‍റെ പേരിൽ എൻ.വി. ബാലകൃഷ്ണനെതിരെ കേസ്. ബാലകൃഷ്ണൻ പോസ്റ്റിൽ പറഞ്ഞത് തെറ്റായ വിവരമാണെന്ന് പൊലീസ് പറഞ്ഞു. പോസ്റ്റിൽ പറയപ്പെട്ടത് സമൂഹത്തിൽ ഭീതിയുണ്ടാക്കാൻ ഇടയുള്ളതാണെന്നും പൊലീസ് പറഞ്ഞു.",
        "പോസ്റ്റിൽ പറഞ്ഞത് തെറ്റായ വിവരമാണെന്ന് പൊലീസ് പറഞ്ഞു. പോസ്റ്റിൽ പറയപ്പെട്ടത് സമൂഹത്തിൽ ഭീതിയുണ്ടാക്കാൻ ഇടയുള്ളതാണെന്നും പൊലീസ് പറഞ്ഞു.",
        "കൂടുതൽ വിവരങ്ങൾക്ക്, <a href='#' class='text-blue-700 underline'>Source link</a>."
    ],
    prev: {
        title: "പുതിയ നിയമം നടപ്പാക്കുന്നതിൽ ബുദ്ധിമുട്ട് ഉണ്ടാകുമോ? കർശന നടപടികൾ വേണം!",
        url: "#"
    },
    next: {
        title: "WTC ഫൈനൽ: ഇന്ത്യയ്ക്ക് എതിരായ ഓസ്ട്രേലിയയുടെ തകർപ്പൻ പ്രകടനം",
        url: "#"
    },
    related: [
        {
            image: "../images/top_news_1.jpg",
            title: "അഗ്നിപഥ് – പുതിയ നിയമം സൈന്യത്തിൽ മാറ്റങ്ങൾ വരുത്തുമോ?",
            author: "Special Correspondent",
            date: "2024-06-09"
        },
        {
            image: "../images/top_news_2.jpg",
            title: "നോട്ട് നിരോധനം: സാമ്പത്തിക പ്രത്യാഘാതങ്ങൾ വിലയിരുത്തുമ്പോൾ",
            author: "Special Correspondent",
            date: "2024-06-09"
        },
        {
            image: "../images/top_news_3.jpg",
            title: "Israel – Iran Conflict: ஈரான் பாதுகாப்பு அமைச்சருக்கு மீது இஸ்ரேൽ தாக்குதல்",
            author: "Special Correspondent",
            date: "2024-06-09"
        },
        {
            image: "../images/top_news_4.jpg",
            title: "Donald Trump: 'അമേരിക്ക വീണ്ടും മഹാനാകും' – ട്രംപിന്റെ പ്രസംഗം",
            author: "Special Correspondent",
            date: "2024-06-09"
        },
        {
            image: "../images/tamil_news_1.jpg",
            title: "மதுரையின் பழமையான கோவில் புதுப்பிப்பு வேலை முடிவடைந்தது",
            author: "Special Correspondent",
            date: "2024-06-10",
        },
        {
            image: "../images/tamil_news_2.jpg",
            title: "இஸ்ரேல் – ஈரான் மோதல்: பின்னணியில் அமெரிக்கா? | அஹமதாபாத் விமான விபத்து | டிரம்ப் ",
            author: "Special Correspondent",
            date: "2024-06-09",
        },
        
    ]
};

const NewsDetail = () => (
    <div className="bg-white min-h-screen font-sans">
        <TopBar />
        <MainNavigation />
        <main className="max-w-screen-xl mx-auto px-4 py-6">
            {/* Banner */}
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-6">
                <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight text-gray-900">
                {news.title}
            </h1>
            {/* Language Chip after Title */}
            <div className="mb-4">
                <span className="inline-block bg-red-600 text-white px-4 py-1 rounded text-xs font-bold uppercase tracking-wide shadow">
                    {news.language}
                </span>
            </div>
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 mb-6">
                <span>
                    By: <span className="font-semibold">{news.author}</span>
                </span>
                <span>|</span>
                <span>Date: {news.date}</span>
            </div>
            {/* Content & Sidebar */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    <div className="prose max-w-none text-gray-800 text-lg mb-6">
                        {news.content.map((p, i) => (
                            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                        ))}
                    </div>
                    {/* Share */}
                    <div className="bg-gray-50 border rounded-lg p-4 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <span className="font-semibold text-gray-700 mb-2 sm:mb-0">Share Post:</span>
                        <div className="flex gap-3">
                            <a href="#" className="bg-[#1877F3] text-white rounded p-2 hover:bg-blue-700 transition" aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="#" className="bg-[#E4405F] text-white rounded p-2 hover:bg-pink-600 transition" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="#" className="bg-[#1DA1F2] text-white rounded p-2 hover:bg-sky-600 transition" aria-label="Twitter"><Twitter size={18} /></a>
                            <a href="#" className="bg-[#0077B5] text-white rounded p-2 hover:bg-blue-800 transition" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            <a href="#" className="bg-[#FF0000] text-white rounded p-2 hover:bg-red-700 transition" aria-label="YouTube"><Youtube size={18} /></a>
                        </div>
                    </div>
                    {/* Prev/Next */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <a
                            href={news.prev.url}
                            className="flex-1 flex items-center bg-gradient-to-b from-blue-100 to-blue-50 rounded-lg p-4 transition gap-3 group hover:shadow-lg hover:scale-[1.02] hover:from-blue-200 hover:to-blue-100"
                        >
                            <img
                                src={news.related[0]?.image}
                                alt={news.prev.title}
                                className="w-24 h-20 object-cover rounded-md flex-shrink-0"
                            />
                            <div>
                                <div className="text-xs text-gray-500 mb-1">Previous article</div>
                                <div className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{news.prev.title}</div>
                            </div>
                        </a>
                        <a
                            href={news.next.url}
                            className="flex-1 flex items-center bg-gradient-to-b from-blue-100 to-blue-50 rounded-lg p-4 transition gap-3 group hover:shadow-lg hover:scale-[1.02] hover:from-blue-200 hover:to-blue-100"
                        >
                            <img
                                src={news.related[1]?.image}
                                alt={news.next.title}
                                className="w-24 h-20 object-cover rounded-md flex-shrink-0"
                            />
                            <div>
                                <div className="text-xs text-gray-500 mb-1">Next article</div>
                                <div className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{news.next.title}</div>
                            </div>
                        </a>
                    </div>
                    {/* Author */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-bold">
                            {news.author[0]}
                        </div>
                        <div>
                            <div className="font-semibold text-gray-800">{news.author}</div>
                            <div className="text-xs text-gray-500">{news.authorUrl}</div>
                        </div>
                    </div>
                    {/* Comment Box */}
                    <div className="mb-12">
                        <h3 className="font-bold text-lg mb-2">Leave a Reply</h3>
                        <form className="space-y-3">
                            <textarea
                                className="w-full border rounded p-2 text-sm"
                                rows={4}
                                placeholder="Comment..."
                            />
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input type="text" className="border rounded p-2 text-sm flex-1" placeholder="Name*" />
                                <input type="email" className="border rounded p-2 text-sm flex-1" placeholder="Email*" />
                                <input type="text" className="border rounded p-2 text-sm flex-1" placeholder="Website" />
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="saveinfo" className="h-4 w-4" />
                                <label htmlFor="saveinfo" className="text-xs text-gray-600">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="bg-red-600 text-white px-6 py-2 rounded font-bold hover:bg-red-700 transition"
                            >
                                Post Comment
                            </button>
                        </form>
                    </div>
                </div>
                {/* Sidebar */}
                <aside className="w-full lg:w-72 flex-shrink-0">
                    {/* Popular */}
                    <div className="mb-8">
                        <h4 className="font-extrabold text-xl mb-0 pb-0">Popular News</h4>
                        <div className="h-1 w-full bg-blue-500 rounded mb-4 mt-1"></div>
                        <ul className="space-y-3">
                            {news.related.map((item, idx) => (
                                <li key={idx}>
                                    <SmallNewsCard
                                        image={item.image}
                                        headline={item.title}
                                        language={
                                            (item.title.toLowerCase().includes("tamil") && "tamil") ||
                                            (item.title.toLowerCase().includes("kannada") && "kannada") ||
                                            (item.title.toLowerCase().includes("telugu") && "telugu") ||
                                            (item.title.toLowerCase().includes("hindi") && "hindi") ||
                                            "malayalam"
                                        }
                                        publishedAt={item.date}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
            {/* Related */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 tracking-wide">More like this</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {news.related.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-card overflow-hidden card-hover group transition-transform duration-200 hover:scale-[1.02]">
                            <img src={item.image} alt={item.title} className="object-cover w-full h-36" />
                            <div className="p-4">
                                <div className="text-xs text-gray-500 mb-1">{item.date}</div>
                                <div className="font-semibold text-gray-800 mb-1">{item.title}</div>
                                <div className="text-xs text-gray-500">{item.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
        <Footer />
    </div>
);

export default NewsDetail;
