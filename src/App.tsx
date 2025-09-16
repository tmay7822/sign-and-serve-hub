import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "@/components/ThemeProvider";
import BreadcrumbNav from "@/components/BreadcrumbNav";
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
import College18Plus from "./pages/College18Plus";
import PersonalFamily from "./pages/PersonalFamily";
import HealthcareNotary from "./pages/HealthcareNotary";
import RealEstateNotary from "./pages/RealEstateNotary";
import BusinessBanking from "./pages/BusinessBanking";
import LegalCourt from "./pages/LegalCourt";
import InternationalApostille from "./pages/InternationalApostille";
import VehiclesDMV from "./pages/VehiclesDMV";
import InsuranceRetirement from "./pages/InsuranceRetirement";
import WillsTrustsEstates from "./pages/WillsTrustsEstates";
import OtherNotary from "./pages/OtherNotary";
import Blog from "./pages/Blog";
import POAWarrenLebanon from "./pages/locations/POAWarrenLebanon";
import LoanSigningDaytonMontgomery from "./pages/locations/LoanSigningDaytonMontgomery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <BreadcrumbNav />
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
          {/* Specialized Service Pages */}
          <Route path="/college-18-plus" element={<College18Plus />} />
          <Route path="/personal-family" element={<PersonalFamily />} />
          <Route path="/healthcare-notary" element={<HealthcareNotary />} />
          <Route path="/real-estate-notary" element={<RealEstateNotary />} />
          <Route path="/business-banking" element={<BusinessBanking />} />
          <Route path="/legal-court" element={<LegalCourt />} />
          <Route path="/international-apostille" element={<InternationalApostille />} />
          <Route path="/vehicles-dmv" element={<VehiclesDMV />} />
          <Route path="/insurance-retirement" element={<InsuranceRetirement />} />
          <Route path="/wills-trusts-estates" element={<WillsTrustsEstates />} />
          <Route path="/other-notary" element={<OtherNotary />} />
          <Route path="/blog" element={<Blog />} />
          {/* Location-Specific Landing Pages */}
          <Route path="/power-of-attorney-warren-county-lebanon" element={<POAWarrenLebanon />} />
          <Route path="/loan-signing-dayton-montgomery-county" element={<LoanSigningDaytonMontgomery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
