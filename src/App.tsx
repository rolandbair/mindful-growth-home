
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
