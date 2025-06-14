
const videos = [
  {
    thumb: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/vid1-thumb.jpg",
    caption: "Debate: Is Urbanization Hurting Water Bodies?",
    lang: "malayalam"
  },
  {
    thumb: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/vid2-thumb.jpg",
    caption: "Exclusive: Interview with Bengaluru Mayor",
    lang: "kannada"
  },
  {
    thumb: "https://www.rashtrashabdam.com/wp-content/uploads/2024/06/vid3-thumb.jpg",
    caption: "Education Reform: Voices from Chennai",
    lang: "tamil"
  },
];

const VideoCarousel = () => (
  <section id="videos" className="max-w-screen-2xl mx-auto px-4 py-6">
    <h2 className="text-xl md:text-2xl font-bold mb-4 text-indigo-700">Latest Videos</h2>
    <div className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
      {videos.map((vid, idx) => (
        <div key={idx} className="shrink-0 w-[310px] md:w-[330px] bg-white rounded-xl shadow-card card-hover mx-auto">
          <div className="relative aspect-video">
            <img src={vid.thumb} alt={vid.caption} className="w-full h-full object-cover rounded-t-xl" loading="lazy" />
            <button className="absolute bottom-2 left-2 bg-black bg-opacity-70 rounded-full p-2 text-white text-xs">Play</button>
          </div>
          <div className="p-3">
            <span className={`language-badge ${vid.lang}`}>{vid.lang.charAt(0).toUpperCase() + vid.lang.slice(1)}</span>
            <p className="mt-2 text-md font-medium">{vid.caption}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default VideoCarousel;
