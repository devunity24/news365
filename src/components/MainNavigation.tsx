
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
import { Home, Newspaper, Video, Users, BookOpen, Globe, ChevronDown } from 'lucide-react';

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const MainNavigation = () => {
  return (
    <div className="bg-gray-50 border-b border-gray-200 shadow-sm">
      <NavigationMenu className="max-w-screen-2xl mx-auto py-2 px-4 md:px-8">
        <NavigationMenuList className="flex flex-wrap justify-center md:justify-start gap-1">
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
              <Home size={18} /> Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-2">
              <Newspaper size={18} /> Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
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
            <NavigationMenuTrigger className="flex items-center gap-2">
              <Globe size={18} /> Regional News
            </NavigationMenuTrigger>
            <NavigationMenuContent>
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
            <NavigationMenuLink href="/opinion" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
              <BookOpen size={18} /> Opinion
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/videos" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
              <Video size={18} /> Videos
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink href="/about-us" className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
              <Users size={18} /> About Us
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainNavigation;
