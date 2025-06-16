const Footer = () => (
  <footer className="border-t border-gray-200 py-8 pl-8 pr-2 bg-gradient-to-b from-blue-400 to-blue-100 text-[0.93rem] font-normal">
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* About Us */}
      <div>
        <img
          src="../images/logo.png"
          alt="Rashtrashabdam logo footer"
          className="h-12 mb-2"
        />
        <h3 className="font-bold text-lg mb-2">ABOUT US</h3>
        <p className="text-sm text-gray-800 mb-4">
          Rashtrashabdam is South India’s mouthpiece news channel that brings latest news, updates, and analysis from the region. The channel is committed to delivering unbiased, accurate, and timely news to our viewers. We are a registered and accredited official media agency to Government of Kerala
        </p>
        {/* Social Media Icons */}
        <div className="flex gap-3 mb-4 items-center">
          <a href="https://facebook.com" aria-label="Facebook" className="text-[#1877F3] hover:text-blue-700 transition-colors">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1877F3"/><path d="M15.36 8.26h-2.02V7.21c0-.48.32-.59.54-.59h1.44V4.77L13.5 4.75c-2.22 0-2.73 1.66-2.73 2.73v.78H9v2.18h1.77v5.57h2.57v-5.57h1.73l.29-2.18z" fill="#fff"/></svg>
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="text-[#E4405F] hover:text-pink-600 transition-colors">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="6" fill="url(#ig-gradient)" />
              <defs>
                <linearGradient id="ig-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fdf497"/>
                  <stop offset="0.5" stopColor="#fd5949"/>
                  <stop offset="1" stopColor="#d6249f"/>
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" fill="none"/>
              <circle cx="18" cy="6" r="1.2" fill="#fff"/>
            </svg>
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="text-[#1DA1F2] hover:text-sky-600 transition-colors">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DA1F2"/><path d="M19.633 7.997c-.508.226-1.054.379-1.626.448a2.828 2.828 0 0 0 1.24-1.563 5.657 5.657 0 0 1-1.793.685 2.822 2.822 0 0 0-4.806 2.573A8.013 8.013 0 0 1 5.67 6.149a2.822 2.822 0 0 0 .873 3.77 2.8 2.8 0 0 1-1.278-.353v.036a2.825 2.825 0 0 0 2.263 2.767 2.82 2.82 0 0 1-1.276.048 2.827 2.827 0 0 0 2.638 1.96A5.66 5.66 0 0 1 4 17.13a7.978 7.978 0 0 0 4.29 1.257c5.148 0 7.967-4.266 7.967-7.967 0-.121-.003-.242-.009-.362a5.69 5.69 0 0 0 1.396-1.45z" fill="#fff"/></svg>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-[#0077B5] hover:text-blue-800 transition-colors">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#0077B5"/>
              <path d="M17 17h-2.2v-3.1c0-.7-.3-1.2-1-1.2-.6 0-.9.4-.9 1.1V17H10V10h2.1v1h.1c.3-.5.9-1.1 1.8-1.1 1.3 0 1.9.8 1.9 2.3V17zM7.7 9.1c-.7 0-1.2-.5-1.2-1.1 0-.6.5-1.1 1.2-1.1.7 0 1.2.5 1.2 1.1 0 .6-.5 1.1-1.2 1.1zM8.8 17H6.6V10h2.2v7z" fill="#fff"/>
            </svg>
          </a>
          <a href="https://youtube.com" aria-label="YouTube" className="text-[#FF0000] hover:text-red-600 transition-colors">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#FF0000"/><polygon points="10,8 16,12 10,16" fill="#fff"/></svg>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.rashtrashabdam"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-8 w-auto"
              style={{ minWidth: 120 }}
            />
          </a>
        </div>
        <p className="text-xs text-gray-700 mt-2">
          Under the Aegis of Ramkrishna Paramhansa Foundation (A Regd.trust for Public Policy, Media Research & Social Development under Indian Trust Act 1882)
        </p>
        {/* Accreditation content after About */}
        <div className="mt-6 border-t border-gray-500 pt-4">
          <p className="text-sm text-gray-800 mb-2">
            Approved by Ministry of Information & Broadcasting(GOI) Level II Self Regulatory body for News Publishers & Current Affairs.<br />
            Regd No : JMAGC/KL/74<br />
            Level II Self Regulatory Body : Journalist and Media Association Grievances Council (JMAGC) Website :<br />
            <a href="https://www.jmaindia.org" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">www.jmaindia.org</a>
          </p>
          <img
            src="../images/JMAGC.png"
            alt="JMAGC"
            className="h-16 mt-2"
          />
        </div>
      </div>
      {/* Accreditation column with Quick Links */}
      <div className="mt-2">
        <h4 className="font-bold text-base mb-3">Quick Links</h4>
        <div className="grid grid-cols-2 gap-2 mb-6 text-[0.73rem] font-normal">
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            Home
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            National
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>
            World
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            Sports
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 2v4M16 2v4M2 8h20"/></svg>
            Entertainment
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
            Technology
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
            Business
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l9 21H3z"/></svg>
            Regional
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6M6 20v-6M18 20v-6"/></svg>
            Opinion
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
            Videos
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            About Us
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
            Advertise With Us
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            Contact Us
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            Grievance Redressal
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            Join Us
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
            Privacy Policy
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition font-semibold shadow-sm hover:shadow text-blue-900">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
            Terms
          </a>
        </div>
      </div>
      {/* News 365Times Venture & Latest */}
      <div>
        <h3 className="font-bold text-lg mb-2">A News 365Times Venture</h3>
        <img
          src="../images/news365.jpeg"
          alt="News365 Times"
          className="h-16 mb-2"
        />
        <div>
          <h4 className="font-bold text-base mb-1">The latest</h4>
          <div className="space-y-3">
            <div className="p-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition">
              <div className="font-bold text-[1.01rem] text-gray-900">
                ಮುಖ್ಯ ಪಥದಲ್ಲಿ <span className="text-blue-900 font-extrabold">KKRDB ಗೆ 13000 ಕೋಟಿ ರೂ.</span> ಅನುಮೋದನೆ ನೀಡಿದ ಸರ್ಕಾರ: ಸಿಎಂ ಸಿದ್ದರಾಮಯ್ಯ
              </div>
              <div className="uppercase text-xs text-gray-700 mt-1 tracking-wide">KANNADA 15/06/2025</div>
            </div>
            <div className="p-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition">
              <div className="font-bold text-[1.01rem] text-gray-900">
                കോടാര്നാമിൽ തിരിഞ്ഞാടകുമായ് പോയ ഹെലികോപ്റ്റർ തകര്ന്നുവീണു; ഏഴ് മരണം
              </div>
              <div className="uppercase text-xs text-gray-700 mt-1 tracking-wide">MALAYALAM 15/06/2025</div>
            </div>
            <div className="p-2 rounded-lg bg-blue-200/60 hover:bg-blue-300/80 transition">
              <div className="font-bold text-[1.01rem] text-gray-900">
                <span className="text-black">Israel – Iran Conflict:</span> ஈரான் பாதுகாப்பு அமைச்சருக்கு மீது இஸ்ரேல் தாக்குதல்; அதிர்கரிக்கும் பதற்றம்!
              </div>
              <div className="uppercase text-xs text-gray-700 mt-1 tracking-wide">TAMIL 15/06/2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-xs text-gray-400 mt-8 text-center">
      Multilingual news in Malayalam, Kannada, Tamil, Telugu, Hindi. All rights reserved. © 2025 Rashtrashabdam
    </div>
  </footer>
);

export default Footer;
