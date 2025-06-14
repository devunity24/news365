
import { Facebook, Instagram, X, Youtube } from 'lucide-react';

const InfoBar = () => {
  return (
    <section className="font-sans w-full">
      {/* Red Bar */}
      <div className="bg-red-600 text-white">
        <div className="max-w-screen-2xl mx-auto text-center py-3 px-4">
            <p className="font-medium text-sm md:text-base">
              South India's Integrated Digital News Platform. Read your day to day news in Malayalam, Tamil, Telugu, Kannada.
            </p>
        </div>
      </div>

      {/* Blue Bar */}
      <div className="bg-sky-600 text-white">
        <div className="max-w-screen-2xl mx-auto flex justify-center items-center py-3 px-4 md:px-8 relative">
          <p className="font-serif text-base md:text-lg hidden sm:block">
            Rashtrashabdam News "Truth, Unbiased, Unbeaten"
          </p>
          <div className="flex items-center gap-4 sm:absolute sm:right-4 md:right-8">
            <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-200 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="X/Twitter" className="hover:text-gray-200 transition-colors">
              <X size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-200 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBar;
