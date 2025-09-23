import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "@/components/ThemeProvider";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import GeneralNotary from "./pages/GeneralNotary";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// New Blog Pages
import BlogHome from "./pages/BlogHome";
import BlogCategory from "./pages/BlogCategory";
import BlogPost from "./pages/BlogPost";
// New Service Pages
import ServiceHub from "./pages/ServiceHub";
import LocalService from "./pages/LocalService";
// Legacy Pages for Backward Compatibility
import LoanSignings from "./pages/LoanSignings";
import EstatePlans from "./pages/EstatePlans";
import RealEstate from "./pages/RealEstate";
import Apostille from "./pages/Apostille";
import BusinessServices from "./pages/BusinessServices";
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
// Blog Posts
import GeneralNotaryWhatToBring from "./pages/blog/GeneralNotaryWhatToBring";
import MobileVsShippingStore from "./pages/blog/MobileVsShippingStore";
import HCPOALivingWillGuide from "./pages/blog/HCPOALivingWillGuide";
import HospitalNotaryWhatToExpect from "./pages/blog/HospitalNotaryWhatToExpect";
import WillsTrustsPOAChecklist from "./pages/blog/WillsTrustsPOAChecklist";
import WhatHappensLoanSigning from "./pages/blog/WhatHappensLoanSigning";
import HowApostilleWorks from "./pages/blog/HowApostilleWorks";
import RemoteHireI9Steps from "./pages/blog/RemoteHireI9Steps";
import College18PlusStarterPack from "./pages/blog/College18PlusStarterPack";
import TitleTransferChecklist from "./pages/blog/TitleTransferChecklist";
import AffidavitJuratAcknowledgment from "./pages/blog/AffidavitJuratAcknowledgment";
import BeneficiaryChangeForms from "./pages/blog/BeneficiaryChangeForms";
import InvestorNotarizations from "./pages/blog/InvestorNotarizations";
import SellerSigningDay from "./pages/blog/SellerSigningDay";
import ScanbackTimingExplained from "./pages/blog/ScanbackTimingExplained";
import ApostilleProcessingTimes from "./pages/blog/ApostilleProcessingTimes";
import NotaryVsRONRIN from "./pages/blog/NotaryVsRONRIN";
import BusinessContractNotarization from "./pages/blog/BusinessContractNotarization";
import InternationalTravelConsent from "./pages/blog/InternationalTravelConsent";
import SmallEstateAffidavitExecutorTips from "./pages/blog/SmallEstateAffidavitExecutorTips";
import JailNotarizationProcess from "./pages/blog/JailNotarizationProcess";
import AfterHoursEmergencyNotary from "./pages/blog/AfterHoursEmergencyNotary";
import WitnessRequirements from "./pages/blog/WitnessRequirements";
import ExpiredIDOptions from "./pages/blog/ExpiredIDOptions";
import NameMismatchAffidavit from "./pages/blog/NameMismatchAffidavit";
import DeedsExplained from "./pages/blog/DeedsExplained";
import POAPitfalls from "./pages/blog/POAPitfalls";
import ApostilleSchoolDocs from "./pages/blog/ApostilleSchoolDocs";
import TranslatorAffidavits from "./pages/blog/TranslatorAffidavits";
import TrustCertificationBanking from "./pages/blog/TrustCertificationBanking";
import NotaryFeesExplained from "./pages/blog/NotaryFeesExplained";
import WhatNotariesCannotDo from "./pages/blog/WhatNotariesCannotDo";
import POAWarrenLebanon from "./pages/locations/POAWarrenLebanon";
import LoanSigningDaytonMontgomery from "./pages/locations/LoanSigningDaytonMontgomery";
import GeneralNotaryHamiltonCincinnati from "./pages/locations/GeneralNotaryHamiltonCincinnati";
import WillsEstatesWarrenMason from "./pages/locations/WillsEstatesWarrenMason";
import NotaryCincinnati45202 from "./pages/locations/NotaryCincinnati45202";
import NotaryMason45040 from "./pages/locations/NotaryMason45040";
import NotaryDayton45402 from "./pages/locations/NotaryDayton45402";
import NotaryWestChester45069 from "./pages/locations/NotaryWestChester45069";
import NotarySpringdale45246 from "./pages/locations/NotarySpringdale45246";
import NotaryKettering45429 from "./pages/locations/NotaryKettering45429";
import NotaryLebanon45036 from "./pages/locations/NotaryLebanon45036";
import GeneralNotaryBlueAsh45242 from "./pages/locations/GeneralNotaryBlueAsh45242";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <BreadcrumbNav />
          <Routes>
          {/* Homepage */}
          <Route path="/" element={<Index />} />
          
          {/* Main Service Hubs - New Architecture */}
          <Route path="/general-notary" element={<GeneralNotary />} />
          <Route path="/loan-signings" element={<ServiceHub />} />
          <Route path="/estate-plans" element={<ServiceHub />} />
          <Route path="/real-estate" element={<ServiceHub />} />
          <Route path="/apostille" element={<ServiceHub />} />
          <Route path="/business-services" element={<ServiceHub />} />
          
          {/* Dynamic Service Hubs */}
          <Route path="/:slug" element={<ServiceHub />} />
          
          {/* Local Service Pages */}
          <Route path="/:serviceSlug/:county/:city" element={<LocalService />} />
          
          {/* Blog System - New Architecture */}
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:slug" element={<BlogCategory />} />
          
          {/* Individual Blog Posts */}
          <Route path="/blog/general-notary-what-to-bring" element={<BlogPost />} />
          <Route path="/blog/mobile-vs-shipping-store" element={<BlogPost />} />
          <Route path="/blog/hcpoa-living-will-guide" element={<BlogPost />} />
          <Route path="/blog/hospital-notary-what-to-expect" element={<BlogPost />} />
          <Route path="/blog/wills-trusts-poa-checklist" element={<BlogPost />} />
          <Route path="/blog/what-happens-loan-signing" element={<BlogPost />} />
          <Route path="/blog/how-apostille-works" element={<BlogPost />} />
          <Route path="/blog/remote-hire-i9-steps" element={<BlogPost />} />
          <Route path="/blog/college-18-plus-starter-pack" element={<BlogPost />} />
          <Route path="/blog/title-transfer-checklist" element={<BlogPost />} />
          <Route path="/blog/affidavit-jurat-acknowledgment" element={<BlogPost />} />
          <Route path="/blog/beneficiary-change-forms" element={<BlogPost />} />
          <Route path="/blog/investor-notarizations" element={<BlogPost />} />
          <Route path="/blog/seller-signing-day" element={<BlogPost />} />
          <Route path="/blog/scanback-timing-explained" element={<BlogPost />} />
          <Route path="/blog/apostille-processing-times" element={<BlogPost />} />
          <Route path="/blog/notary-vs-ron-rin" element={<BlogPost />} />
          <Route path="/blog/business-contract-notarization" element={<BlogPost />} />
          <Route path="/blog/international-travel-consent" element={<BlogPost />} />
          <Route path="/blog/small-estate-affidavit-executor-tips" element={<BlogPost />} />
          <Route path="/blog/jail-notarization-process" element={<BlogPost />} />
          <Route path="/blog/after-hours-emergency-notary" element={<BlogPost />} />
          <Route path="/blog/witness-requirements" element={<BlogPost />} />
          <Route path="/blog/expired-id-options" element={<BlogPost />} />
          <Route path="/blog/name-mismatch-aka-affidavit" element={<BlogPost />} />
          <Route path="/blog/deeds-explained" element={<BlogPost />} />
          <Route path="/blog/poa-pitfalls-and-readiness" element={<BlogPost />} />
          <Route path="/blog/apostille-school-docs" element={<BlogPost />} />
          <Route path="/blog/translator-affidavit-notary" element={<BlogPost />} />
          <Route path="/blog/trust-certification-for-banks" element={<BlogPost />} />
          <Route path="/blog/notary-fees-and-mobile-travel" element={<BlogPost />} />
          <Route path="/blog/what-notaries-cannot-do" element={<BlogPost />} />
          
          {/* Static Pages */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          
          
          {/* Legacy Service Pages - Keep for Backward Compatibility */}
          <Route path="/loan-signings" element={<LoanSignings />} />
          <Route path="/estate-plans" element={<EstatePlans />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/apostille" element={<Apostille />} />
          <Route path="/business-services" element={<BusinessServices />} />
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
          
          {/* Location-Specific Landing Pages - Legacy URLs */}
          <Route path="/power-of-attorney-warren-county-lebanon" element={<LocalService />} />
          <Route path="/loan-signing-dayton-montgomery-county" element={<LocalService />} />
          <Route path="/general-notary-hamilton-county-cincinnati" element={<LocalService />} />
          <Route path="/wills-estates-warren-county-mason" element={<LocalService />} />
          <Route path="/locations/poa-warren-lebanon" element={<LocalService />} />
          <Route path="/locations/loan-signing-dayton-montgomery" element={<LocalService />} />
          <Route path="/locations/general-notary-hamilton-cincinnati" element={<LocalService />} />
          <Route path="/locations/wills-estates-warren-mason" element={<LocalService />} />
          <Route path="/notary-cincinnati-45202" element={<LocalService />} />
          <Route path="/notary-mason-45040" element={<LocalService />} />
          <Route path="/notary-dayton-45402" element={<LocalService />} />
          <Route path="/notary-west-chester-45069" element={<LocalService />} />
          <Route path="/notary-springdale-45246" element={<LocalService />} />
          <Route path="/notary-kettering-45429" element={<LocalService />} />
          <Route path="/notary-lebanon-45036" element={<LocalService />} />
          <Route path="/general-notary/hamilton/blue-ash" element={<LocalService />} />
          
          {/* 404 - Must be last */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
