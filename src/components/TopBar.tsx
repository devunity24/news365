import { Search, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { format } from 'date-fns';
import { Input } from "@/components/ui/input"; // Assuming you have a shared Input component

const TopBar = () => {
  const currentDate = format(new Date(), 'eeee, MMMM do, yyyy'); // Example: Tuesday, June 14th, 2025

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm mb-2">
      <nav className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4 md:gap-6 py-3 px-4 md:px-8">
        {/* Left Section: Logo and Brand Name */}
        <div className="flex items-center gap-3 md:gap-4">
          <img src="../images/logo.png"
               alt="Rashtrashabdam Logo"
               className="h-10 md:h-12 w-auto" />
        </div>

        {/* Right Section: Date, Social Icons, Search */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Current Date */}
          <div className="text-xs md:text-sm text-gray-600 font-medium hidden lg:block whitespace-nowrap">
            {currentDate}
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1877F3] hover:text-blue-700 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:text-sky-600 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:text-pink-600 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:text-blue-800 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:text-red-700 transition-colors">
              <Youtube size={18} />
            </a>
          </div>

          {/* Search Input */}
          <div className="relative flex items-center">
            <Input
              type="search"
              placeholder="Search news..."
              className="pl-8 pr-2 py-1.5 h-9 text-sm rounded-md border-gray-300 focus:border-red-500 focus:ring-red-500 w-40 md:w-60"
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;

