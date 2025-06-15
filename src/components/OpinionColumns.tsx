
const columns = [
  {
    author: "Dr. Priya Varma",
    avatar: "../images/editor_1.avif",
    pick: true,
    headline: "ஜாதி கணக்கெடுப்பு: புதிய தரவுகள் இந்தியாவுக்கு என்ன அர்த்தம்?",
    snippet: "இந்தியாவின் உருவாகி வரும் சாதி கணக்கெடுப்புத் தரவுகள் ஏற்படுத்தக்கூடிய தாக்கங்களை நெருக்கமாக ஆய்வு செய்வது.",
    lang: "tamil"
  },
  {
    author: "Arjun Nair",
    avatar: "../images/editor_2.avif",
    pick: false,
    headline: "തെക്കൻ ഇന്ത്യയിൽ മഴ ഒരു രാഷ്ട്രീയ കാഴ്ചവുമാകുമ്പോൾ",
    snippet: "അത്യാക്രമമായ കാലാവസ്ഥ എങ്ങനെ രാഷ്ട്രീയ വിവാദങ്ങളിൽ കേന്ദ്രസ്ഥാനമായി മാറിയിരിക്കുന്നു.",
    lang: "malayalam"
  },
];

const OpinionColumns = () => (
  <section id="opinion" className="max-w-screen-2xl mx-auto px-4 py-6">
    <div className="mb-4 flex items-center gap-2">
      <span className="text-xl md:text-2xl font-bold text-indigo-700">Opinion & Editorial</span>
      <span className="ml-2 px-2 py-1 text-white bg-red-600 rounded text-xs font-semibold">Editor’s Pick</span>
    </div>
    <div className="flex flex-wrap gap-8">
      {columns.map((col, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-card p-6 flex flex-col md:flex-row items-center gap-5 w-full md:w-[48%] card-hover">
          <img src={col.avatar} alt={col.author} className="w-16 h-16 rounded-full object-cover border-1 border-indigo-700" />
          <div>
            <h4 className="text-lg font-semibold">{col.headline}</h4>
            <p className="mt-2 text-sm text-gray-800">{col.snippet}</p>
            <div className="mt-3 flex items-center gap-2">
              <span className={`language-badge ${col.lang}`}>{col.lang.charAt(0).toUpperCase() + col.lang.slice(1)}</span>
              <span className="ml-2 text-sm text-gray-600 font-medium">{col.author}</span>
              {col.pick && <span className="ml-2 bg-red-600 text-white rounded px-2 py-0.5 text-xs font-bold">Pick</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OpinionColumns;
