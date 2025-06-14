
import { ArrowDown } from "lucide-react";

const languages = [
  { code: "ml", name: "Malayalam" },
  { code: "kn", name: "Kannada" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "hi", name: "Hindi" },
];

const TopBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow mb-2">
      <nav className="max-w-screen-2xl mx-auto flex items-center justify-between gap-6 py-3 px-4 md:px-8">
        <div className="flex items-center gap-4">
          <img src="https://www.rashtrashabdam.com/wp-content/uploads/2020/09/rashdralogo.png"
               alt="Rashtrashabdam Logo"
               className="h-10 w-auto" />
          <span className="text-2xl font-extrabold text-red-600 tracking-tight">Rashtrashabdam</span>
        </div>
        <ul className="hidden md:flex gap-6 text-md font-medium">
          <li><a href="#top-news" className="hover:text-red-600">Top News</a></li>
          <li><a href="#regional" className="hover:text-red-600">Regional</a></li>
          <li><a href="#videos" className="hover:text-red-600">Videos</a></li>
          <li><a href="#opinion" className="hover:text-red-600">Opinion</a></li>
          <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
        </ul>
        <div className="flex items-center gap-4">
          {/* Language dropdown */}
          <div className="relative">
            <button className="flex items-center gap-2 bg-gray-100 rounded px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-200 focus:outline-none">
              <span className="hidden md:inline">Language</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            {/* Dropdown placeholder */}
          </div>
          <a href="#join" className="text-[15px] font-semibold hover:text-red-600 hidden md:inline">Join Us</a>
          <a href="#advertise" className="text-[15px] font-semibold hover:text-red-600 hidden md:inline">Advertise</a>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
