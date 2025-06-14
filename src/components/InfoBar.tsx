
import { Facebook, Instagram, X, Youtube } from 'lucide-react';

const InfoBar = () => {
  return (
    <section className="bg-gray-800 text-white font-sans w-full">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-4 md:px-8 gap-3 md:gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-base md:text-lg">
            "Truth, Unbiased, Unbeaten"
          </p>
          <p className="font-medium text-xs md:text-sm text-gray-300">
            South India's Integrated Digital News Platform. Read your day to day news in Malayalam, Tamil, Telugu, Kannada.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="X/Twitter" className="hover:text-gray-300 transition-colors">
            <X size={20} />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-gray-300 transition-colors">
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoBar;
