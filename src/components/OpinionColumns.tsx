
const columns = [
  {
    author: "Dr. Priya Varma",
    avatar: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/editor-priya-thumb.jpg",
    pick: true,
    headline: "Caste Census: What the New Data Means for India",
    snippet: "A closer look into the potential impacts of India’s emerging caste census numbers.",
    lang: "hindi"
  },
  {
    author: "Arjun Nair",
    avatar: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/editor-arjun-thumb.jpg",
    pick: false,
    headline: "Rain as a Political Spectacle in Southern India",
    snippet: "How extreme weather has become central to political discourse.",
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
          <img src={col.avatar} alt={col.author} className="w-16 h-16 rounded-full object-cover border-4 border-indigo-700" />
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
