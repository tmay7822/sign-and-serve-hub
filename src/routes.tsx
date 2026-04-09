// ROUTES CONFIGURATION
// Centralized route definitions for React Router

import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from './App';
import { PRERENDER_ROUTES } from '@/config/prerenderRoutes';
import { ProtectedAdminRoute } from '@/components/admin/ProtectedAdminRoute';

// Eager imports for critical pages (faster initial load)
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
// Lazy imports for other pages
const GeneralNotary = lazy(() => import('./pages/GeneralNotary'));
const FAQ = lazy(() => import('./pages/FAQ'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const BlogHome = lazy(() => import('./pages/BlogHome'));
const BlogCategory = lazy(() => import('./pages/BlogCategory'));
const ServiceHub = lazy(() => import('./pages/ServiceHub'));
const LocalService = lazy(() => import('./pages/LocalService'));
const ServiceAreas = lazy(() => import('./pages/ServiceAreas'));
const LoanSignings = lazy(() => import('./pages/LoanSignings'));
const EstatePlans = lazy(() => import('./pages/EstatePlans'));
const RealEstate = lazy(() => import('./pages/RealEstate'));
const Apostille = lazy(() => import('./pages/Apostille'));
const BusinessServices = lazy(() => import('./pages/BusinessServices'));
const College18Plus = lazy(() => import('./pages/College18Plus'));
const PersonalFamily = lazy(() => import('./pages/PersonalFamily'));
const HealthcareNotary = lazy(() => import('./pages/HealthcareNotary'));
const RealEstateNotary = lazy(() => import('./pages/RealEstateNotary'));
const BusinessBanking = lazy(() => import('./pages/BusinessBanking'));
const LegalCourt = lazy(() => import('./pages/LegalCourt'));
const InternationalApostille = lazy(() => import('./pages/InternationalApostille'));
const VehiclesDMV = lazy(() => import('./pages/VehiclesDMV'));
const InsuranceRetirement = lazy(() => import('./pages/InsuranceRetirement'));
const WillsTrustsEstates = lazy(() => import('./pages/WillsTrustsEstates'));
const OtherNotary = lazy(() => import('./pages/OtherNotary'));
const Pricing = lazy(() => import('./pages/Pricing'));
const BookNow = lazy(() => import('./pages/BookNow'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const SiteMapViewer = lazy(() => import('./pages/admin/SiteMapViewer'));
const GMBExport = lazy(() => import('./pages/admin/GMBExport'));
const ContentMap = lazy(() => import('./pages/admin/ContentMap'));
const DynamicLocationPage = lazy(() => import('./pages/DynamicLocationPage'));
const DynamicCityPage = lazy(() => import('./pages/DynamicCityPage'));
const DynamicCountyPage = lazy(() => import('./pages/DynamicCountyPage'));

// Seasonal Landing Pages
const TaxSeasonNotary = lazy(() => import('./pages/TaxSeasonNotary'));
const BackToSchoolDocuments = lazy(() => import('./pages/BackToSchoolDocuments'));
const HomeBuyingSeasonNotary = lazy(() => import('./pages/HomeBuyingSeasonNotary'));
const YearEndPlanningNotary = lazy(() => import('./pages/YearEndPlanningNotary'));

// Blog Posts
const GeneralNotaryWhatToBring = lazy(() => import('./pages/blog/GeneralNotaryWhatToBring'));
const MobileVsShippingStore = lazy(() => import('./pages/blog/MobileVsShippingStore'));
const HCPOALivingWillGuide = lazy(() => import('./pages/blog/HCPOALivingWillGuide'));
const HospitalNotaryWhatToExpect = lazy(() => import('./pages/blog/HospitalNotaryWhatToExpect'));
const WillsTrustsPOAChecklist = lazy(() => import('./pages/blog/WillsTrustsPOAChecklist'));
const WhatHappensLoanSigning = lazy(() => import('./pages/blog/WhatHappensLoanSigning'));
const HowApostilleWorks = lazy(() => import('./pages/blog/HowApostilleWorks'));
const RemoteHireI9Steps = lazy(() => import('./pages/blog/RemoteHireI9Steps'));
const College18PlusStarterPack = lazy(() => import('./pages/blog/College18PlusStarterPack'));
const TitleTransferChecklist = lazy(() => import('./pages/blog/TitleTransferChecklist'));
const AffidavitJuratAcknowledgment = lazy(() => import('./pages/blog/AffidavitJuratAcknowledgment'));
const BeneficiaryChangeForms = lazy(() => import('./pages/blog/BeneficiaryChangeForms'));
const InvestorNotarizations = lazy(() => import('./pages/blog/InvestorNotarizations'));
const SellerSigningDay = lazy(() => import('./pages/blog/SellerSigningDay'));
const ScanbackTimingExplained = lazy(() => import('./pages/blog/ScanbackTimingExplained'));
const ApostilleProcessingTimes = lazy(() => import('./pages/blog/ApostilleProcessingTimes'));
const NotaryVsRONRIN = lazy(() => import('./pages/blog/NotaryVsRONRIN'));
const BusinessContractNotarization = lazy(() => import('./pages/blog/BusinessContractNotarization'));
const InternationalTravelConsent = lazy(() => import('./pages/blog/InternationalTravelConsent'));
const SmallEstateAffidavitExecutorTips = lazy(() => import('./pages/blog/SmallEstateAffidavitExecutorTips'));
const JailNotarizationProcess = lazy(() => import('./pages/blog/JailNotarizationProcess'));
const AfterHoursEmergencyNotary = lazy(() => import('./pages/blog/AfterHoursEmergencyNotary'));
const WitnessRequirements = lazy(() => import('./pages/blog/WitnessRequirements'));
const ExpiredIDOptions = lazy(() => import('./pages/blog/ExpiredIDOptions'));
const NameMismatchAffidavit = lazy(() => import('./pages/blog/NameMismatchAffidavit'));
const DeedsExplained = lazy(() => import('./pages/blog/DeedsExplained'));
const POAPitfalls = lazy(() => import('./pages/blog/POAPitfalls'));
const ApostilleSchoolDocs = lazy(() => import('./pages/blog/ApostilleSchoolDocs'));
const TranslatorAffidavits = lazy(() => import('./pages/blog/TranslatorAffidavits'));
const TrustCertificationBanking = lazy(() => import('./pages/blog/TrustCertificationBanking'));
const NotaryFeesExplained = lazy(() => import('./pages/blog/NotaryFeesExplained'));
const WhatNotariesCannotDo = lazy(() => import('./pages/blog/WhatNotariesCannotDo'));
const EstatePlanningGuides = lazy(() => import('./pages/blog/EstatePlanningGuides'));
const OhioBuyerSellerLoanSigningChecklist = lazy(() => import('./pages/blog/OhioBuyerSellerLoanSigningChecklist'));
const RefiHelocNotaryErrorsToAvoidOhio = lazy(() => import('./pages/blog/RefiHelocNotaryErrorsToAvoidOhio'));
const ScanbacksPrintingMobileLoanClosingsOhio = lazy(() => import('./pages/blog/ScanbacksPrintingMobileLoanClosingsOhio'));
const HospitalRehabLoanSigningsOhio = lazy(() => import('./pages/blog/HospitalRehabLoanSigningsOhio'));
const OhioWillsPOAWhatNotariesCanAndCantDo = lazy(() => import('./pages/blog/OhioWillsPOAWhatNotariesCanAndCantDo'));
const HealthcareDirectivesNotaryOhioBedside = lazy(() => import('./pages/blog/HealthcareDirectivesNotaryOhioBedside'));
const CertificationOfTrustNotaryOhio = lazy(() => import('./pages/blog/CertificationOfTrustNotaryOhio'));
const WitnessesForWillsPOAOhioLocalNorms = lazy(() => import('./pages/blog/WitnessesForWillsPOAOhioLocalNorms'));
const VendorPacketsAffidavitsNotaryOhio = lazy(() => import('./pages/blog/VendorPacketsAffidavitsNotaryOhio'));
const ContractsTitleAuthorityNotaryOhio = lazy(() => import('./pages/blog/ContractsTitleAuthorityNotaryOhio'));
const PermitsLicensingNotarySameDayOhio = lazy(() => import('./pages/blog/PermitsLicensingNotarySameDayOhio'));
const HRI9VsNotaryOhio = lazy(() => import('./pages/blog/HRI9VsNotaryOhio'));
const HospitalNotaryChecklistOhio = lazy(() => import('./pages/blog/HospitalNotaryChecklistOhio'));
const SeniorCommunitiesNotaryPOAHealthcareOhio = lazy(() => import('./pages/blog/SeniorCommunitiesNotaryPOAHealthcareOhio'));
const UrgentNotarySameDayOhioHospitals = lazy(() => import('./pages/blog/UrgentNotarySameDayOhioHospitals'));
const HospitalNotaryIDProblemsOhio = lazy(() => import('./pages/blog/HospitalNotaryIDProblemsOhio'));
const ImmigrationDocumentsNotaryGuide = lazy(() => import('./pages/blog/ImmigrationDocumentsNotaryGuide'));
const MilitaryVeteransNotaryGuide = lazy(() => import('./pages/blog/MilitaryVeteransNotaryGuide'));
const HealthcareDocumentsNotaryGuide = lazy(() => import('./pages/blog/HealthcareDocumentsNotaryGuide'));
const OhioCarTitleTransferRequirements = lazy(() => import('./pages/blog/OhioCarTitleTransferRequirements'));
const NotaryGuideHamiltonCounty = lazy(() => import('./pages/blog/NotaryGuideHamiltonCounty'));
const NotaryGuideWarrenCounty = lazy(() => import('./pages/blog/NotaryGuideWarrenCounty'));
const NotaryGuideMontgomeryCounty = lazy(() => import('./pages/blog/NotaryGuideMontgomeryCounty'));
const NotaryGuideButlerCounty = lazy(() => import('./pages/blog/NotaryGuideButlerCounty'));
const NotaryGuideGreeneCounty = lazy(() => import('./pages/blog/NotaryGuideGreeneCounty'));
const NotaryGuideClintonCounty = lazy(() => import('./pages/blog/NotaryGuideClintonCounty'));
const Documents = lazy(() => import('./pages/Documents'));
const Resources = lazy(() => import('./pages/Resources'));
const LocationBlogPost = lazy(() => import('./pages/LocationBlogPost'));
const Reviews = lazy(() => import('./pages/Reviews'));
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      // Homepage
      { index: true, element: <Index /> },
      
      // Quick Booking
      { path: 'book-now', element: <BookNow /> },
      
      // Auth page
      { path: 'auth', element: <Auth /> },
      
      // Admin (protected routes - not pre-rendered)
      { path: 'admin', element: <ProtectedAdminRoute><Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}><AdminDashboard /></Suspense></ProtectedAdminRoute> },
      { path: 'admin/sitemap', element: <ProtectedAdminRoute><Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}><SiteMapViewer /></Suspense></ProtectedAdminRoute> },
      { path: 'admin/gmb-export', element: <ProtectedAdminRoute><Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}><GMBExport /></Suspense></ProtectedAdminRoute> },
      { path: 'admin/content-map', element: <ProtectedAdminRoute><Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}><ContentMap /></Suspense></ProtectedAdminRoute> },
      
      // Main Service Hubs
      { path: 'general-notary', element: <GeneralNotary /> },
      { path: 'loan-signings', element: <LoanSignings /> },
      { path: 'estate-plans', element: <EstatePlans /> },
      { path: 'real-estate', element: <RealEstate /> },
      { path: 'apostille', element: <Apostille /> },
      { path: 'business-services', element: <BusinessServices /> },
      { path: 'college-18-plus', element: <College18Plus /> },
      { path: 'personal-family', element: <PersonalFamily /> },
      { path: 'healthcare-notary', element: <HealthcareNotary /> },
      { path: 'real-estate-notary', element: <RealEstateNotary /> },
      { path: 'business-banking', element: <BusinessBanking /> },
      { path: 'legal-court', element: <LegalCourt /> },
      { path: 'international-apostille', element: <InternationalApostille /> },
      { path: 'vehicles-dmv', element: <VehiclesDMV /> },
      { path: 'insurance-retirement', element: <InsuranceRetirement /> },
      { path: 'wills-trusts-estates', element: <WillsTrustsEstates /> },
      { path: 'other-notary', element: <OtherNotary /> },
      
      // Resources Hub
      { path: 'resources', element: <Resources /> },
      
      // Static Pages
      { path: 'faq', element: <FAQ /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'contact', element: <Contact /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'documents', element: <Documents /> },
      { path: 'reviews', element: <Reviews /> },
      { path: 'service-areas', element: <ServiceAreas /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-service', element: <TermsOfService /> },
      
      // Seasonal Landing Pages
      { path: 'tax-season-notary', element: <TaxSeasonNotary /> },
      { path: 'back-to-school-documents', element: <BackToSchoolDocuments /> },
      { path: 'home-buying-season-notary', element: <HomeBuyingSeasonNotary /> },
      { path: 'year-end-planning-notary', element: <YearEndPlanningNotary /> },
      
      // Blog Home & Categories
      { path: 'blog', element: <BlogHome /> },
      { path: 'blog/general-notary-guides', element: <BlogCategory /> },
      { path: 'blog/loan-signing-guides', element: <BlogCategory /> },
      { path: 'blog/real-estate-guides', element: <BlogCategory /> },
      { path: 'blog/estate-planning-guides', element: <BlogCategory /> },
      { path: 'blog/apostille-guides', element: <BlogCategory /> },
      { path: 'blog/business-guides', element: <BlogCategory /> },
      { path: 'blog/healthcare-guides', element: <BlogCategory /> },
      { path: 'blog/immigration-guides', element: <BlogCategory /> },
      { path: 'blog/military-guides', element: <BlogCategory /> },
      { path: 'blog/education-guides', element: <BlogCategory /> },
      
      // Legacy blog category redirects
      { path: 'blog/general-notary', element: <Navigate to="/blog/general-notary-guides" replace /> },
      { path: 'blog/loan-signing', element: <Navigate to="/blog/loan-signing-guides" replace /> },
      { path: 'blog/real-estate', element: <Navigate to="/blog/real-estate-guides" replace /> },
      { path: 'blog/estate-planning', element: <Navigate to="/blog/estate-planning-guides" replace /> },
      { path: 'blog/apostille', element: <Navigate to="/blog/apostille-guides" replace /> },
      { path: 'blog/business', element: <Navigate to="/blog/business-guides" replace /> },
      { path: 'blog/healthcare', element: <Navigate to="/blog/healthcare-guides" replace /> },
      
      // Individual Blog Posts
      { path: 'blog/general-notary-what-to-bring', element: <GeneralNotaryWhatToBring /> },
      { path: 'blog/mobile-vs-shipping-store', element: <MobileVsShippingStore /> },
      { path: 'blog/hcpoa-living-will-guide', element: <HCPOALivingWillGuide /> },
      { path: 'blog/hospital-notary-what-to-expect', element: <HospitalNotaryWhatToExpect /> },
      { path: 'blog/wills-trusts-poa-checklist', element: <WillsTrustsPOAChecklist /> },
      { path: 'blog/what-happens-loan-signing', element: <WhatHappensLoanSigning /> },
      { path: 'blog/how-apostille-works', element: <HowApostilleWorks /> },
      { path: 'blog/remote-hire-i9-steps', element: <RemoteHireI9Steps /> },
      { path: 'blog/college-18-plus-starter-pack', element: <College18PlusStarterPack /> },
      { path: 'blog/title-transfer-checklist', element: <TitleTransferChecklist /> },
      { path: 'blog/affidavit-jurat-acknowledgment', element: <AffidavitJuratAcknowledgment /> },
      { path: 'blog/beneficiary-change-forms', element: <BeneficiaryChangeForms /> },
      { path: 'blog/investor-notarizations', element: <InvestorNotarizations /> },
      { path: 'blog/seller-signing-day', element: <SellerSigningDay /> },
      { path: 'blog/scanback-timing-explained', element: <ScanbackTimingExplained /> },
      { path: 'blog/apostille-processing-times', element: <ApostilleProcessingTimes /> },
      { path: 'blog/notary-vs-ron-rin', element: <NotaryVsRONRIN /> },
      { path: 'blog/business-contract-notarization', element: <BusinessContractNotarization /> },
      { path: 'blog/international-travel-consent', element: <InternationalTravelConsent /> },
      { path: 'blog/small-estate-affidavit-executor-tips', element: <SmallEstateAffidavitExecutorTips /> },
      { path: 'blog/jail-notarization-process', element: <JailNotarizationProcess /> },
      { path: 'blog/after-hours-emergency-notary', element: <AfterHoursEmergencyNotary /> },
      { path: 'blog/witness-requirements', element: <WitnessRequirements /> },
      { path: 'blog/expired-id-options', element: <ExpiredIDOptions /> },
      { path: 'blog/name-mismatch-aka-affidavit', element: <NameMismatchAffidavit /> },
      { path: 'blog/deeds-explained', element: <DeedsExplained /> },
      { path: 'blog/poa-pitfalls-and-readiness', element: <POAPitfalls /> },
      { path: 'blog/apostille-school-docs', element: <ApostilleSchoolDocs /> },
      { path: 'blog/translator-affidavit-notary', element: <TranslatorAffidavits /> },
      { path: 'blog/trust-certification-for-banks', element: <TrustCertificationBanking /> },
      { path: 'blog/notary-fees-and-mobile-travel', element: <NotaryFeesExplained /> },
      { path: 'blog/what-notaries-cannot-do', element: <WhatNotariesCannotDo /> },
      { path: 'blog/estate-planning-guides', element: <EstatePlanningGuides /> },
      { path: 'blog/ohio-buyer-seller-loan-signing-checklist', element: <OhioBuyerSellerLoanSigningChecklist /> },
      { path: 'blog/refi-heloc-notary-errors-to-avoid-ohio', element: <RefiHelocNotaryErrorsToAvoidOhio /> },
      { path: 'blog/scanbacks-printing-mobile-loan-closings-ohio', element: <ScanbacksPrintingMobileLoanClosingsOhio /> },
      { path: 'blog/hospital-rehab-loan-signings-ohio', element: <HospitalRehabLoanSigningsOhio /> },
      { path: 'blog/ohio-wills-poa-what-notaries-can-and-cant-do', element: <OhioWillsPOAWhatNotariesCanAndCantDo /> },
      { path: 'blog/healthcare-directives-notary-ohio-bedside', element: <HealthcareDirectivesNotaryOhioBedside /> },
      { path: 'blog/certification-of-trust-notary-ohio', element: <CertificationOfTrustNotaryOhio /> },
      { path: 'blog/witnesses-for-wills-poa-ohio-local-norms', element: <WitnessesForWillsPOAOhioLocalNorms /> },
      { path: 'blog/vendor-packets-affidavits-notary-ohio', element: <VendorPacketsAffidavitsNotaryOhio /> },
      { path: 'blog/contracts-title-authority-notary-ohio', element: <ContractsTitleAuthorityNotaryOhio /> },
      { path: 'blog/permits-licensing-notary-same-day-ohio', element: <PermitsLicensingNotarySameDayOhio /> },
      { path: 'blog/hr-i9-vs-notary-ohio', element: <HRI9VsNotaryOhio /> },
      { path: 'blog/hospital-notary-checklist-ohio', element: <HospitalNotaryChecklistOhio /> },
      { path: 'blog/senior-communities-notary-poa-healthcare-ohio', element: <SeniorCommunitiesNotaryPOAHealthcareOhio /> },
      { path: 'blog/urgent-notary-same-day-ohio-hospitals', element: <UrgentNotarySameDayOhioHospitals /> },
      { path: 'blog/hospital-notary-id-problems-ohio', element: <HospitalNotaryIDProblemsOhio /> },
      { path: 'blog/ohio-car-title-transfer-requirements', element: <OhioCarTitleTransferRequirements /> },
      { path: 'blog/immigration-documents-notary-guide', element: <ImmigrationDocumentsNotaryGuide /> },
      { path: 'blog/military-veterans-notary-guide', element: <MilitaryVeteransNotaryGuide /> },
      { path: 'blog/healthcare-documents-notary-guide', element: <HealthcareDocumentsNotaryGuide /> },
      
      // Location-Specific Blog Posts (42 total: 7 categories × 6 counties)
      { path: 'blog/general-notary-guides-hamilton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/general-notary-guides-warren-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/general-notary-guides-montgomery-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/general-notary-guides-butler-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/general-notary-guides-greene-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/general-notary-guides-clinton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/loan-signing-guides-hamilton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/loan-signing-guides-warren-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/loan-signing-guides-montgomery-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/loan-signing-guides-butler-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/loan-signing-guides-greene-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/loan-signing-guides-clinton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/real-estate-guides-hamilton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/real-estate-guides-warren-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/real-estate-guides-montgomery-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/real-estate-guides-butler-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/real-estate-guides-greene-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/real-estate-guides-clinton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/estate-planning-guides-hamilton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/estate-planning-guides-warren-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/estate-planning-guides-montgomery-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/estate-planning-guides-butler-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/estate-planning-guides-greene-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/estate-planning-guides-clinton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/apostille-guides-hamilton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/apostille-guides-warren-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/apostille-guides-montgomery-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/apostille-guides-butler-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/apostille-guides-greene-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/apostille-guides-clinton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/business-guides-hamilton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/business-guides-warren-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/business-guides-montgomery-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/business-guides-butler-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/business-guides-greene-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/business-guides-clinton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/healthcare-guides-hamilton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/healthcare-guides-warren-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/healthcare-guides-montgomery-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/healthcare-guides-butler-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/healthcare-guides-greene-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/healthcare-guides-clinton-county-ohio', element: <LocationBlogPost /> },
      
      // Immigration Guides by County (6)
      { path: 'blog/immigration-guides-hamilton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/immigration-guides-warren-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/immigration-guides-montgomery-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/immigration-guides-butler-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/immigration-guides-greene-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/immigration-guides-clinton-county-ohio', element: <LocationBlogPost /> },
      
      // Military Guides by County (6)
      { path: 'blog/military-guides-hamilton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/military-guides-warren-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/military-guides-montgomery-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/military-guides-butler-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/military-guides-greene-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/military-guides-clinton-county-ohio', element: <LocationBlogPost /> },
      
      // Education Guides by County (6)
      { path: 'blog/education-guides-hamilton-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/education-guides-warren-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/education-guides-montgomery-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/education-guides-butler-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/education-guides-greene-county-ohio', element: <LocationBlogPost /> },
      { path: 'blog/education-guides-clinton-county-ohio', element: <LocationBlogPost /> },
      
      // Redirects for broken Google-indexed URLs with "undefined"
      { path: 'blog/general-notary-guides-undefined-ohio', element: <Navigate to="/blog/general-notary-guides" replace /> },
      { path: 'blog/loan-signing-guides-undefined-ohio', element: <Navigate to="/blog/loan-signing-guides" replace /> },
      { path: 'blog/real-estate-guides-undefined-ohio', element: <Navigate to="/blog/real-estate-guides" replace /> },
      { path: 'blog/estate-planning-guides-undefined-ohio', element: <Navigate to="/blog/estate-planning-guides" replace /> },

      // City-Level Blog Posts (high-traffic cities)
      { path: 'blog/general-notary-guides-cincinnati-ohio', element: <LocationBlogPost /> },
      { path: 'blog/general-notary-guides-mason-ohio', element: <LocationBlogPost /> },
      { path: 'blog/general-notary-guides-dayton-ohio', element: <LocationBlogPost /> },
      { path: 'blog/general-notary-guides-west-chester-ohio', element: <LocationBlogPost /> },
      { path: 'blog/loan-signing-guides-cincinnati-ohio', element: <LocationBlogPost /> },
      { path: 'blog/loan-signing-guides-mason-ohio', element: <LocationBlogPost /> },
      { path: 'blog/loan-signing-guides-dayton-ohio', element: <LocationBlogPost /> },
      { path: 'blog/real-estate-guides-cincinnati-ohio', element: <LocationBlogPost /> },
      { path: 'blog/estate-planning-guides-cincinnati-ohio', element: <LocationBlogPost /> },
      { path: 'blog/healthcare-guides-cincinnati-ohio', element: <LocationBlogPost /> },
      
      // County hub pages
      { path: 'blog/notary-guide-hamilton-county-ohio', element: <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}><NotaryGuideHamiltonCounty /></Suspense> },
      { path: 'blog/notary-guide-warren-county-ohio', element: <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}><NotaryGuideWarrenCounty /></Suspense> },
      { path: 'blog/notary-guide-montgomery-county-ohio', element: <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}><NotaryGuideMontgomeryCounty /></Suspense> },
      { path: 'blog/notary-guide-butler-county-ohio', element: <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}><NotaryGuideButlerCounty /></Suspense> },
      { path: 'blog/notary-guide-greene-county-ohio', element: <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}><NotaryGuideGreeneCounty /></Suspense> },
      { path: 'blog/notary-guide-clinton-county-ohio', element: <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}><NotaryGuideClintonCounty /></Suspense> },

      // Dynamic location blog catch-all (handles remaining city posts)
      { path: 'blog/:slug', element: <LocationBlogPost /> },
      
      // Location Pages - Using Dynamic Component
      { path: 'notary-cincinnati-45202', element: <DynamicLocationPage /> },
      { path: 'notary-mason-45040', element: <DynamicLocationPage /> },
      { path: 'notary-dayton-45402', element: <DynamicLocationPage /> },
      { path: 'notary-west-chester-45069', element: <DynamicLocationPage /> },
      { path: 'notary-springdale-45246', element: <DynamicLocationPage /> },
      { path: 'notary-kettering-45429', element: <DynamicLocationPage /> },
      { path: 'notary-lebanon-45036', element: <DynamicLocationPage /> },
      { path: 'general-notary-blue-ash-45242', element: <DynamicLocationPage /> },
      { path: 'general-notary-hamilton-cincinnati', element: <DynamicLocationPage /> },
      { path: 'loan-signing-dayton-montgomery', element: <DynamicLocationPage /> },
      { path: 'poa-warren-lebanon', element: <DynamicLocationPage /> },
      { path: 'wills-estates-warren-mason', element: <DynamicLocationPage /> },
      // New 16 location pages
      { path: 'notary-fairfield-45014', element: <DynamicLocationPage /> },
      { path: 'notary-hamilton-45011', element: <DynamicLocationPage /> },
      { path: 'notary-middletown-45042', element: <DynamicLocationPage /> },
      { path: 'notary-oxford-45056', element: <DynamicLocationPage /> },
      { path: 'notary-miamisburg-45342', element: <DynamicLocationPage /> },
      { path: 'notary-centerville-45459', element: <DynamicLocationPage /> },
      { path: 'notary-huber-heights-45424', element: <DynamicLocationPage /> },
      { path: 'notary-troy-45373', element: <DynamicLocationPage /> },
      { path: 'notary-loveland-45140', element: <DynamicLocationPage /> },
      { path: 'notary-milford-45150', element: <DynamicLocationPage /> },
      { path: 'notary-batavia-45103', element: <DynamicLocationPage /> },
      { path: 'notary-wilmington-45177', element: <DynamicLocationPage /> },
      { path: 'notary-hillsboro-45133', element: <DynamicLocationPage /> },
      { path: 'notary-georgetown-45121', element: <DynamicLocationPage /> },
      { path: 'notary-xenia-45385', element: <DynamicLocationPage /> },
      { path: 'notary-beavercreek-45431', element: <DynamicLocationPage /> },
      
      // Dynamic city service pages (from Service Areas directory) - MUST be before :slug catch-all
      { path: 'service/:county/:cityZip', element: <DynamicCityPage /> },
      
      // Dynamic county service pages
      { path: 'service/:county', element: <DynamicCountyPage /> },
      
      // Dynamic local service routes
      { path: ':serviceSlug/:county/:city', element: <LocalService /> },
      { path: ':serviceSlug/:county', element: <LocalService /> },
      
      // Dynamic routes - catch-all for service hubs (MUST be last before *)
      { path: ':slug', element: <ServiceHub /> },
      
      // 404 - Must be last
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routes;
