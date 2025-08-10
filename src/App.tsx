
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PartizipativeFuehrung from "./pages/PartizipativeFuehrung";
import Digitalisierung from "./pages/Digitalisierung";
import Organisationsentwicklung from "./pages/Organisationsentwicklung";
import UeberUns from "./pages/UeberUns";
import Schulentwicklung from "./pages/Schulentwicklung";
import BookRecommendations from "./pages/BookRecommendations";
import SchoolDevelopmentToolbox from "./pages/SchoolDevelopmentToolbox";
import ToolDetail from "./pages/ToolDetail";
import ToolboxPath from "./pages/ToolboxPath";
import Consultation from "./pages/Consultation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/partizipative-fuehrung" element={<PartizipativeFuehrung />} />
          <Route path="/digitalisierung" element={<Digitalisierung />} />
          <Route path="/organisationsentwicklung" element={<Organisationsentwicklung />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/schulentwicklung" element={<Schulentwicklung />} />
          <Route path="/book-recommendations" element={<BookRecommendations />} />
          <Route path="/toolbox" element={<SchoolDevelopmentToolbox />} />
          <Route path="/toolbox/tool/:toolId" element={<ToolDetail />} />
          <Route path="/toolbox/:pathId" element={<ToolboxPath />} />
          <Route path="/consultation" element={<Consultation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
