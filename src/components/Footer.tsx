
const Footer = () => (
  <footer className="bg-gray-50 py-8 mt-12 border-t border-gray-200" id="contact">
    <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-6">
      <div className="flex items-center gap-3">
        <img src="https://www.rashtrashabdam.com/wp-content/uploads/2020/09/rashdralogo.png"
             alt="Rashtrashabdam logo footer" className="h-8" />
        <span className="font-semibold text-lg text-dark-gray">© 2025 Rashtrashabdam</span>
      </div>
      <div className="flex flex-wrap gap-6 text-sm">
        <a href="#">About</a>
        <a href="#">Terms</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Advertise</a>
        <a href="#">Contact</a>
      </div>
      <div className="flex gap-3 text-gray-500">
        <a href="#" aria-label="Facebook"><svg width="22" height="22" fill="currentColor"><circle cx="11" cy="11" r="10"/><text x="7" y="16" font-size="12" fill="#fff">f</text></svg></a>
        <a href="#" aria-label="Twitter"><svg width="22" height="22" fill="currentColor"><circle cx="11" cy="11" r="10"/><text x="5" y="16" font-size="12" fill="#fff">X</text></svg></a>
      </div>
      <div className="text-xs text-gray-400 mt-5 md:mt-0 text-center">
        Multilingual news in Malayalam, Kannada, Tamil, Telugu, Hindi. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
