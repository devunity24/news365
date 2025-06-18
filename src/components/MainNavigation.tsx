import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Home, Newspaper, Video, Users, BookOpen, Globe } from 'lucide-react';

const mainCategories = [
  { title: "National", href: "/category/national", description: "Latest news from across the nation." },
  { title: "World", href: "/category/world", description: "Global events and international news." },
  { title: "Sports", href: "/category/sports", description: "Scores, highlights, and sports news." },
  { title: "Entertainment", href: "/category/entertainment", description: "Movies, music, and celebrity news." },
  { title: "Technology", href: "/category/technology", description: "Updates on gadgets and tech trends." },
  { title: "Business", href: "/category/business", description: "Market updates and financial news." },
];

const regionalLanguages = [
  { title: "Malayalam", href: "/regional/malayalam", description: "News in Malayalam." },
  { title: "Tamil", href: "/regional/tamil", description: "News in Tamil." },
  { title: "Telugu", href: "/regional/telugu", description: "News in Telugu." },
  { title: "Kannada", href: "/regional/kannada", description: "News in Kannada." },
  { title: "Hindi", href: "/regional/hindi", description: "News in Hindi." },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 hover:text-blue-700 focus:bg-blue-100 focus:text-blue-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const MainNavigation = ({ fromTopBar = false }: { fromTopBar?: boolean }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // Scroll to #videos section if on homepage, else navigate to /#videos
  const handleVideosClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("videos");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Scroll to #opinion section if on homepage, else navigate to /#opinion
  const handleOpinionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("opinion");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Adjust styles if opened from TopBar
  const navItemClasses = fromTopBar
    ? "bg-transparent text-gray-700 hover:bg-blue-100 hover:text-blue-700 focus:bg-blue-100 focus:text-blue-700 text-sm"
    : "bg-transparent text-gray-200 hover:bg-blue-100 hover:text-blue-400 focus:bg-blue-100 focus:text-blue-400";
  const contentClasses = fromTopBar
    ? "bg-white"
    : "bg-charcoal-500 border-gray-800 text-gray-200";
  const menuFontSize = fromTopBar ? "text-sm" : "";

  // Menus to show directly on TopBar, rest under "More"
  const mainMenus = [
    { title: "Home", icon: <Home size={18} />, href: "/" },
    { title: "Govt Accreditation", icon: <Globe size={18} />, href: "/govt-accreditation" },
    { title: "Categories", icon: <Newspaper size={18} />, type: "categories" },
    { title: "Regional News", icon: <Globe size={18} />, type: "regional" },
    { title: "Opinion", icon: <BookOpen size={18} />, href: "/opinion" },
    { title: "Videos", icon: <Video size={18} />, href: "/#videos" },
    { title: "About Us", icon: <Users size={18} />, href: "/about-us" },
    { title: "Contact Us", icon: <Users size={18} />, href: "/contact-us" },
  ];

  // For TopBar: show first 5, rest under "More"
  const showMenus = fromTopBar ? mainMenus.slice(0, 5) : mainMenus;
  const moreMenus = fromTopBar ? mainMenus.slice(5) : [];

  return (
    <div className={fromTopBar ? "bg-white" : "bg-charcoal-500 border-b border-gray-800 shadow-sm relative z-30"}>
      {/* Mobile Hamburger */}
      <div className="flex items-center justify-between md:hidden px-4 py-2">
        <img src="../images/logo.png" alt="Logo" className="h-8" />
        <button
          className={fromTopBar ? "text-gray-700 focus:outline-none" : "text-gray-200 focus:outline-none"}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 8h20M4 16h20" />
          </svg>
        </button>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <NavigationMenu className={`max-w-screen-2xl mx-auto py-2 px-4 md:px-8 ${menuFontSize}`}>
          <NavigationMenuList className={`flex flex-wrap justify-center md:justify-start gap-1 ${menuFontSize}`}>
            {showMenus.map((menu, idx) => {
              if (menu.type === "categories") {
                return (
                  <NavigationMenuItem key="categories">
                    <NavigationMenuTrigger className={cn("flex items-center gap-2", navItemClasses, "data-[state=open]:bg-gray-800")}>
                      <Newspaper size={18} /> Categories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className={contentClasses}>
                      <ul className="grid w-[200px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {mainCategories.map((category) => (
                          <ListItem
                            key={category.title}
                            title={category.title}
                            href={category.href}
                          >
                            {category.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              if (menu.type === "regional") {
                return (
                  <NavigationMenuItem key="regional">
                    <NavigationMenuTrigger className={cn("flex items-center gap-2", navItemClasses, "data-[state=open]:bg-gray-800")}>
                      <Globe size={18} /> Regional News
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className={contentClasses}>
                      <ul className="grid w-[200px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {regionalLanguages.map((language) => (
                          <ListItem
                            key={language.title}
                            title={language.title}
                            href={language.href}
                          >
                            {language.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem key={menu.title}>
                  <NavigationMenuLink
                    href={menu.href}
                    className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2", navItemClasses, "data-[active]:bg-gray-800")}
                  >
                    {menu.icon} {menu.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
            {fromTopBar && moreMenus.length > 0 && (
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn("flex items-center gap-2", navItemClasses, "data-[state=open]:bg-gray-800")}
                  onMouseEnter={() => setMoreOpen(true)}
                  onMouseLeave={() => setMoreOpen(false)}
                >
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent className={contentClasses}>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[400px]">
                    {moreMenus.map((menu) => {
                      if (menu.type === "categories") {
                        return (
                          <li key="categories">
                            <div className="font-semibold mb-1">Categories</div>
                            <ul>
                              {mainCategories.map((category) => (
                                <ListItem
                                  key={category.title}
                                  title={category.title}
                                  href={category.href}
                                >
                                  {category.description}
                                </ListItem>
                              ))}
                            </ul>
                          </li>
                        );
                      }
                      if (menu.type === "regional") {
                        return (
                          <li key="regional">
                            <div className="font-semibold mb-1">Regional News</div>
                            <ul>
                              {regionalLanguages.map((language) => (
                                <ListItem
                                  key={language.title}
                                  title={language.title}
                                  href={language.href}
                                >
                                  {language.description}
                                </ListItem>
                              ))}
                            </ul>
                          </li>
                        );
                      }
                      return (
                        <ListItem
                          key={menu.title}
                          title={menu.title}
                          href={menu.href}
                        >
                          {/* No description for simple links */}
                        </ListItem>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
          <a
            href="/join-us"
            className={`ml-2 px-4 py-2 bg-red-600 text-white font-bold rounded shadow hover:bg-red-700 transition-colors ${menuFontSize}`}
          >
            JOIN US
          </a>
        </NavigationMenu>
      </div>
      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute top-0 left-0 w-64 h-full bg-charcoal-500 shadow-lg p-6 flex flex-col gap-2"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="mb-4 self-end text-gray-200"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l16 16M6 22L22 6" />
              </svg>
            </button>
            <a href="/" className="flex items-center gap-2 py-2 px-2 rounded hover:bg-gray-800 text-gray-200" onClick={() => setMobileOpen(false)}>
              <Home size={18} /> Home
            </a>
            <a href="/govt-accreditation" className="flex items-center gap-2 py-2 px-2 rounded hover:bg-gray-800 text-gray-200" onClick={() => setMobileOpen(false)}>
              <Globe size={18} /> Govt Accreditation
            </a>
            <details>
              <summary className="flex items-center gap-2 py-2 px-2 rounded hover:bg-gray-800 text-gray-200 cursor-pointer">
                <Newspaper size={18} /> Categories
              </summary>
              <div className="pl-6 flex flex-col gap-1 mt-1">
                {mainCategories.map((cat) => (
                  <a key={cat.title} href={cat.href} className="py-1 px-2 rounded hover:bg-gray-800 text-gray-200" onClick={() => setMobileOpen(false)}>
                    {cat.title}
                  </a>
                ))}
              </div>
            </details>
            <details>
              <summary className="flex items-center gap-2 py-2 px-2 rounded hover:bg-gray-800 text-gray-200 cursor-pointer">
                <Globe size={18} /> Regional News
              </summary>
              <div className="pl-6 flex flex-col gap-1 mt-1">
                {regionalLanguages.map((lang) => (
                  <a key={lang.title} href={lang.href} className="py-1 px-2 rounded hover:bg-gray-800 text-gray-200" onClick={() => setMobileOpen(false)}>
                    {lang.title}
                  </a>
                ))}
              </div>
            </details>
            <a
              href="/opinion"
              onClick={e => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  setMobileOpen(false);
                  setTimeout(() => {
                    const el = document.getElementById("opinion");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                } else {
                  setMobileOpen(false);
                }
              }}
              className="flex items-center gap-2 py-2 px-2 rounded hover:bg-gray-800 text-gray-200"
            >
              <BookOpen size={18} /> Opinion
            </a>
            <a
              href="/#videos"
              onClick={e => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  setMobileOpen(false);
                  setTimeout(() => {
                    const el = document.getElementById("videos");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                } else {
                  setMobileOpen(false);
                }
              }}
              className="flex items-center gap-2 py-2 px-2 rounded hover:bg-gray-800 text-gray-200"
            >
              <Video size={18} /> Videos
            </a>
            <a href="/about-us" className="flex items-center gap-2 py-2 px-2 rounded hover:bg-gray-800 text-gray-200" onClick={() => setMobileOpen(false)}>
              <Users size={18} /> About Us
            </a>
            <a href="/contact-us" className="flex items-center gap-2 py-2 px-2 rounded hover:bg-gray-800 text-gray-200" onClick={() => setMobileOpen(false)}>
              <Users size={18} /> Contact Us
            </a>
            <a
              href="/join-us"
              className="mt-4 px-4 py-2 bg-red-600 text-white font-bold rounded shadow hover:bg-red-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              JOIN US
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNavigation;
