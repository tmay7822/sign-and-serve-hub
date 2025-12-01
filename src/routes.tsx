// ROUTES CONFIGURATION FOR SSG
// Centralized route definitions for vite-react-ssg pre-rendering

import { lazy, Suspense } from 'react';
import type { RouteRecord } from 'vite-react-ssg';
import Layout from './App';
import { PRERENDER_ROUTES } from '@/config/prerenderRoutes';

// Eager imports for critical pages (faster initial load)
import Index from './pages/Index';
import NotFound from './pages/NotFound';

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

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      // Homepage
      { index: true, element: <Index /> },
      
      // Quick Booking
      { path: 'book-now', element: <BookNow /> },
      
      // Admin (not pre-rendered)
      { path: 'admin', element: <AdminDashboard /> },
      
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
      
      // Static Pages
      { path: 'faq', element: <FAQ /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'contact', element: <Contact /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'service-areas', element: <ServiceAreas /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-service', element: <TermsOfService /> },
      
      // Blog Home & Categories
      { path: 'blog', element: <BlogHome /> },
      { path: 'blog/loan-signing', element: <BlogCategory /> },
      { path: 'blog/estate-planning', element: <BlogCategory /> },
      { path: 'blog/real-estate', element: <BlogCategory /> },
      { path: 'blog/apostille', element: <BlogCategory /> },
      { path: 'blog/business', element: <BlogCategory /> },
      { path: 'blog/general-notary', element: <BlogCategory /> },
      { path: 'blog/healthcare', element: <BlogCategory /> },
      
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
      
      // Location Pages (Static routes)
      { path: 'notary-cincinnati-45202', element: <LocalService /> },
      { path: 'notary-mason-45040', element: <LocalService /> },
      { path: 'notary-dayton-45402', element: <LocalService /> },
      { path: 'notary-west-chester-45069', element: <LocalService /> },
      { path: 'notary-springdale-45246', element: <LocalService /> },
      { path: 'notary-kettering-45429', element: <LocalService /> },
      { path: 'notary-lebanon-45036', element: <LocalService /> },
      { path: 'general-notary/hamilton/blue-ash', element: <LocalService /> },
      { path: 'power-of-attorney-warren-county-lebanon', element: <LocalService /> },
      { path: 'loan-signing-dayton-montgomery-county', element: <LocalService /> },
      { path: 'general-notary-hamilton-county-cincinnati', element: <LocalService /> },
      { path: 'wills-estates-warren-county-mason', element: <LocalService /> },
      
      // Dynamic routes - catch-all for service hubs
      { path: ':slug', element: <ServiceHub /> },
      
      // Dynamic local service routes
      { path: ':serviceSlug/:county/:city', element: <LocalService /> },
      
      // 404 - Must be last
      { path: '*', element: <NotFound /> },
    ],
  },
];

// Export paths for SSG pre-rendering
export const getStaticPaths = () => PRERENDER_ROUTES;

export default routes;
