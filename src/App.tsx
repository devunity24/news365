import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewsDetails from "./pages/NewsDetail";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import JoinUS from "./pages/JoinUs";
import TheBodhiTree from "./pages/TheBodhiTree";
import PSUNews from "./pages/PSUNews";
import Maverick from "./pages/Maverick";
import Astro from "./pages/Astro";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/news-detail" element={<NewsDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/join-us" element={<JoinUS />} />
          <Route path="/the-bodhi-tree" element={<TheBodhiTree />} />
          <Route path="/psu-news-365" element={<PSUNews />} />
          <Route path="/memoirs-of-a-maverick" element={<Maverick />} />
          <Route path="/astro-vision" element={<Astro />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
