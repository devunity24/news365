import React from 'react';
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white",
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

const MainNavigation = () => {
  const navItemClasses = "bg-transparent text-gray-200 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white";
  const contentClasses = "bg-charcoal-500 border-gray-800 text-gray-200";

  return (
    <div className="bg-charcoal-500 border-b border-gray-800 shadow-sm relative z-30">
      <NavigationMenu className="max-w-screen-2xl mx-auto py-2 px-4 md:px-8">
        <NavigationMenuList className="flex flex-wrap justify-center md:justify-start gap-1">
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2", navItemClasses, "data-[active]:bg-gray-800")}>
              <Home size={18} /> Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
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

          <NavigationMenuItem>
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
          
          <NavigationMenuItem>
            <NavigationMenuLink href="/opinion" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2", navItemClasses, "data-[active]:bg-gray-800")}>
              <BookOpen size={18} /> Opinion
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/videos" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2", navItemClasses, "data-[active]:bg-gray-800")}>
              <Video size={18} /> Videos
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink href="/about-us" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2", navItemClasses, "data-[active]:bg-gray-800")}>
              <Users size={18} /> About Us
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
        <a
          href="/join-us"
          className="ml-2 px-4 py-2 bg-red-600 text-white font-bold rounded shadow hover:bg-red-700 transition-colors"
        >
          JOIN US
        </a>
      </NavigationMenu>
    </div>
  );
};

export default MainNavigation;
