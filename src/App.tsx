import { useState, useEffect } from "react";
import Preloader from './components/Preloader'; // Your preloader component

// ... all your other imports
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AiMarketing from "./pages/products/AiMarketing";
import ApplicationDevelopment from "./pages/products/ApplicationDevelopment";
import WebDevelopment from "./pages/products/WebDevelopment";
import CustomSoftware from "./pages/products/CustomSoftware";


const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // We will now only use a timer to hide the loader.
    // This is more reliable in a React environment.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // The loader will be hidden after 1 second (1000ms)

    // This is a cleanup function that React runs when the component unmounts.
    // It's good practice to clear the timer to prevent memory leaks.
    return () => clearTimeout(timer);
    
  }, []); // The empty array ensures this effect runs only once after the component mounts.

  return isLoading ? (
    <Preloader />
  ) : (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products/ai-marketing" element={<AiMarketing />} />
            <Route path="/products/application-development" element={<ApplicationDevelopment />} />
            <Route path="/products/web-development" element={<WebDevelopment />} />
            <Route path="/products/custom-software-solution" element={<CustomSoftware />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;