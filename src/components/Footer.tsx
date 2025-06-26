const footerLinks = [
  { label: "Top Stories", href: "#" },
  { label: "Latest News", href: "#" },
  { label: "National", href: "#" },
  { label: "World", href: "#" },
  { label: "State", href: "#" },
  { label: "News by Metro", href: "#" },
  { label: "Politics", href: "#" },
  { label: "Bussiness", href: "#" },
  { label: "Entertainment", href: "#" },
  { label: "Sports", href: "#" },
];

const infoLinks = [
  { label: "About News365 Times", href: "#", accent: true },
  { label: "Govt Accreditation", href: "#" },
  { label: "Board of Governors", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Compliance officer", href: "#" },
  { label: "Feedback & Complaint", href: "#" },
  { label: "Self Regulatory Body", href: "#" },
  { label: "Grievance Redressal", href: "#" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#1877F3" />
        <path d="M15.36 8.26h-2.02V7.21c0-.48.32-.59.54-.59h1.44V4.77L13.5 4.75c-2.22 0-2.73 1.66-2.73 2.73v.78H9v2.18h1.77v5.57h2.57v-5.57h1.73l.29-2.18z" fill="#fff" />
      </svg>
    ),
    color: "text-[#1877F3]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="url(#ig-gradient)" />
        <defs>
          <linearGradient id="ig-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fdf497" />
            <stop offset="0.5" stopColor="#fd5949" />
            <stop offset="1" stopColor="#d6249f" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" fill="none" />
        <circle cx="18" cy="6" r="1.2" fill="#fff" />
      </svg>
    ),
    color: "text-[#E4405F]",
  },
  {
    label: "Linkedin",
    href: "https://linkedin.com",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#0077B5" />
        <path d="M17 17h-2.2v-3.1c0-.7-.3-1.2-1-1.2-.6 0-.9.4-.9 1.1V17H10V10h2.1v1h.1c.3-.5.9-1.1 1.8-1.1 1.3 0 1.9.8 1.9 2.3V17zM7.7 9.1c-.7 0-1.2-.5-1.2-1.1 0-.6.5-1.1 1.2-1.1.7 0 1.2.5 1.2 1.1 0 .6-.5 1.1-1.2 1.1zM8.8 17H6.6V10h2.2v7z" fill="#fff" />
      </svg>
    ),
    color: "text-[#0077B5]",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#1DA1F2" />
        <path d="M19.633 7.997c-.508.226-1.054.379-1.626.448a2.828 2.828 0 0 0 1.24-1.563 5.657 5.657 0 0 1-1.793.685 2.822 2.822 0 0 0-4.806 2.573A8.013 8.013 0 0 1 5.67 6.149a2.822 2.822 0 0 0 .873 3.77 2.8 2.8 0 0 1-1.278-.353v.036a2.825 2.825 0 0 0 2.263 2.767 2.82 2.82 0 0 1-1.276.048 2.827 2.827 0 0 0 2.638 1.96A5.66 5.66 0 0 1 4 17.13a7.978 7.978 0 0 0 4.29 1.257c5.148 0 7.967-4.266 7.967-7.967 0-.121-.003-.242-.009-.362a5.69 5.69 0 0 0 1.396-1.45z" fill="#fff" />
      </svg>
    ),
    color: "text-[#1DA1F2]",
  },
  {
    label: "Youtube",
    href: "https://youtube.com",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#FF0000" />
        <polygon points="10,8 16,12 10,16" fill="#fff" />
      </svg>
    ),
    color: "text-[#FF0000]",
  },
];

const Footer = () => (
  <footer className="border-t border-gray-200 py-10 px-4 md:px-12 bg-[#343594] text-white text-[0.97rem] font-normal">
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="pr-6 md:pr-12 flex flex-col items-start">
        <img
          src="../images/news365.jpeg"
          alt="Rashtrashabdam logo footer"
          className="h-20 mb-2"
        />
        <h3 className="font-bold text-lg mb-2 text-white">ABOUT US</h3>
        <p className="text-sm text-gray-800 mb-4 text-white">
          News356 Times is a dynamic digital news publication platform from India revolutionizing journalism with the power of artificial intelligence. 
        </p>

        <p className="text-xs text-gray-700 mt-2 text-white">
          Under the Aegis of Ramkrishna Paramhansa Foundation (A Regd.trust for Public Policy, Media Research & Social Development under Indian Trust Act 1882)
        </p>
        {/* Accreditation content after About */}
        <div className="mt-6 border-t border-gray-500 pt-4">
          <p className="text-sm text-gray-800 mb-2 text-white">
            Approved by Ministry of Information & Broadcasting(GOI) Level II Self Regulatory body for News Publishers & Current Affairs.<br />
            Regd No : JMAGC/KL/74<br />
            Level II Self Regulatory Body : Journalist and Media Association Grievances Council (JMAGC) Website :<br />
            <a href="https://www.jmaindia.org" className="text-blue-700 underline text-white" target="_blank" rel="noopener noreferrer">www.jmaindia.org</a>
          </p>
          <img
            src="../images/JMAGC.png"
            alt="JMAGC"
            className="h-16 mt-2"
          />
        </div>
      </div>
      {/* Center: Links */}
      <div>
        <div className="grid grid-cols-3 gap-6 ">
          <div>
            <ul className="space-y-1">
              {footerLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#e4572e] transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              {infoLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`transition-colors font-medium ${link.accent ? "text-[#e4572e] font-bold" : "hover:text-[#e4572e]"}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 w-full md:w-auto">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 py-1 px-2 rounded hover:bg-white/10 transition-colors group ${link.color}`}
              >
                <span className="">{link.icon}</span>
                <span className="text-white text-sm group-hover:underline">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        {/* Right: Social & Visitors */}
        <div className="flex flex-col gap-6 items-end md:items-end">

          <div className=" w-full md:w-auto">
            <div className="bg-black/80 text-white px-3 py-1 rounded-t font-semibold text-xs inline-block mb-1">Total Visitors</div>
            <div className="flex gap-1 text-2xl font-mono">
              {/* Static visitor counter for demo */}
              {"101086".split("").map((n, i) => (
                <span key={i} className="bg-white text-black px-1.5 rounded shadow">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-xs text-blue-100 mt-10 text-center">
      All Rights Reserved | © News365times.com | Registered with Self Regulatory Body affiliated with Ministry of Information and Broadcasting, Govt of India
    </div>
  </footer>
);

export default Footer;
