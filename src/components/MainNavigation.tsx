import React, { useState, useRef } from "react";
import { Home } from "lucide-react";

const mainMenus = [
  { title: "Home", href: "/", icon: <Home size={18} />, highlight: "none" },
  { title: "The Bodhi Tree", href: "/the-bodhi-tree" },
  { title: "PSU News 365", href: "/psu-news-365" },
  { title: "Govt Policy", href: "/govt-policy" },
  { title: "Sansad News", href: "/sansad-news" },
  { title: "Memoirs of a Maverick", href: "/memoirs-of-a-maverick" },
  { title: "Astro Vision", href: "/astro-vision" },
  // Removed Board of Governors from here
];

const moreMenus = [
  { title: "About News365 Times", href: "/about" },
  { title: "Govt Accreditation", href: "/govt-accreditation" },
  { title: "Board of Governors", href: "/board-of-governors" },
  { title: "Contact Us", href: "/contact-us" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Compliance officer", href: "/compliance-officer" },
  { title: "Feedback & Complaint", href: "/feedback-complaint" },
  { title: "Self Regulatory Body", href: "/self-regulatory-body" },
  { title: "Grievance Redressal", href: "/grievance-redressal" },
  { title: "Brushstrokes", href: "/brushstrokes" },
];

interface MainNavigationProps {
  fromTopBar?: boolean;
}

const MainNavigation = ({ fromTopBar }: MainNavigationProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!moreOpen) return;
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [moreOpen]);

  return (
    <nav className={
      fromTopBar
        ? "bg-white"
        : "bg-[#3a4147] border-b border-[#444d56] shadow-sm"
    }>
      {/* Desktop menu */}
      <div className={
        "hidden sm:flex justify-center gap-2 px-4 py-1 flex-nowrap overflow-x-auto whitespace-nowrap w-full items-center" +
        (fromTopBar ? " text-black" : " text-white")
      }>
        {mainMenus.map(menu => (
          <a
            key={menu.title}
            href={menu.href}
            className={
              "flex items-center gap-2 px-4 py-1 font-medium rounded transition-colors whitespace-nowrap hover:bg-[#2e353b] hover:text-white" +
              (menu.title === "Home" ? " font-bold" : "") +
              (fromTopBar ? "  hover:text-black text-black" : " text-white")
            }
            style={{
              background: menu.title === "Home" ? "transparent" : undefined,
              fontFamily: "'Segoe UI', 'Arial', sans-serif",
              fontSize: "14px",
              minWidth: 0,
              textAlign: "center",
              letterSpacing: "0.01em"
            }}
          >
            {menu.icon && <span className={fromTopBar ? "text-black" : "text-white"}>{menu.icon}</span>}
            {menu.title}
          </a>
        ))}
        {/* More Dropdown */}
        <div className="relative z-[9999]" ref={moreRef}>
          <button
            tabIndex={0}
            className={
              "flex items-center gap-1 px-4 py-1 font-medium rounded transition-colors whitespace-nowrap" +
              (fromTopBar ? " text-black hover:bg-gray-100 hover:text-black" : " text-white hover:bg-[#2e353b] hover:text-white")
            }
            style={{
              fontFamily: "'Segoe UI', 'Arial', sans-serif",
              fontSize: "14px",
              letterSpacing: "0.01em"
            }}
            onClick={() => { console.log('More clicked'); setMoreOpen(v => !v); }}
            aria-haspopup="true"
            aria-expanded={moreOpen}
            type="button"
          >
            More <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {moreOpen && (
            <div className={
              "absolute left-0 bottom-full mb-2 w-64 rounded-lg shadow-xl z-[9999] py-2 animate-slide-in pointer-events-auto " +
              (fromTopBar ? "bg-white" : "bg-[#3a4147]")
            }>
              {moreMenus.map(menu => (
                <a
                  key={menu.title}
                  href={menu.href}
                  className={
                    "block px-6 py-2 text-base font-medium rounded transition-colors" +
                    (fromTopBar
                      ? " text-black hover:bg-gray-100 hover:text-black"
                      : " text-white hover:bg-[#23272b] hover:text-white")
                  }
                  style={{
                    fontFamily: "'Segoe UI', 'Arial', sans-serif",
                    letterSpacing: "0.01em"
                  }}
                  onClick={() => setMoreOpen(false)}
                >
                  {menu.title}
                </a>
              ))}
            </div>
          )}
        </div>
        <a
          href="/join-us"
          className={
            "ml-2 px-4 py-1 font-bold rounded transition-colors whitespace-nowrap" +
            (fromTopBar
              ? " bg-[#c94b43] text-white hover:bg-[#a63a34]"
              : " bg-[#c94b43] text-white hover:bg-[#a63a34]")
          }
          style={{
            fontFamily: "'Segoe UI', 'Arial', sans-serif",
            fontSize: "14px",
            letterSpacing: "0.01em"
          }}
        >
          JOIN US
        </a>
      </div>
      {/* Mobile hamburger */}
      <div className="flex sm:hidden items-center px-2 py-1">
        <button
          className="text-white focus:outline-none"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="32" height="32" fill="none"/>
            <line x1="7" y1="11" x2="25" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="7" y1="16" x2="25" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="7" y1="21" x2="25" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 flex">
            <div className="bg-[#23272b] w-64 h-full shadow-lg p-6 flex flex-col gap-2 animate-slide-in">
              <button
                className="mb-4 self-end text-white"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="6" y1="6" x2="22" y2="22" stroke="currentColor" strokeWidth="2" />
                  <line x1="6" y1="22" x2="22" y2="6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
              {mainMenus.map(menu => (
                <a
                  key={menu.title}
                  href={menu.href}
                  className="flex items-center gap-2 px-3 py-2 text-white rounded hover:bg-[#2e353b] font-medium"
                  style={{
                    fontFamily: "'Segoe UI', 'Arial', sans-serif",
                    fontSize: "15px",
                    letterSpacing: "0.01em"
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {menu.icon && <span className="text-white">{menu.icon}</span>}
                  {menu.title}
                </a>
              ))}
              {/* More section in mobile */}
              <div className="mt-2">
                <div className="text-[#c94b43] font-bold mb-1 text-xs uppercase tracking-wide">More</div>
                {moreMenus.map(menu => (
                  <a
                    key={menu.title}
                    href={menu.href}
                    className="block px-3 py-2 text-white rounded hover:bg-[#2e353b] font-medium"
                    style={{
                      fontFamily: "'Segoe UI', 'Arial', sans-serif",
                      fontSize: "15px",
                      letterSpacing: "0.01em"
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {menu.title}
                  </a>
                ))}
              </div>
              <a
                href="/join-us"
                className="mt-2 px-4 py-2 bg-[#c94b43] text-white font-bold rounded transition-colors hover:bg-[#a63a34]"
                style={{
                  fontFamily: "'Segoe UI', 'Arial', sans-serif",
                  fontSize: "15px",
                  letterSpacing: "0.01em"
                }}
                onClick={() => setMobileOpen(false)}
              >
                JOIN US
              </a>
            </div>
            {/* Click outside to close */}
            <div className="flex-1" onClick={() => setMobileOpen(false)} />
          </div>
        )}
      </div>
      {/* Optional: add a simple slide-in animation */}
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.2s ease;
        }
      `}</style>
    </nav>
  );
};

export default MainNavigation;
