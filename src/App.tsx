import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GeneralNotary from "./pages/GeneralNotary";
import LoanSignings from "./pages/LoanSignings";
import EstatePlans from "./pages/EstatePlans";
import RealEstate from "./pages/RealEstate";
import Apostille from "./pages/Apostille";
import BusinessServices from "./pages/BusinessServices";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/general-notary" element={<GeneralNotary />} />
          <Route path="/loan-signings" element={<LoanSignings />} />
          <Route path="/estate-plans" element={<EstatePlans />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/apostille" element={<Apostille />} />
          <Route path="/business-services" element={<BusinessServices />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
