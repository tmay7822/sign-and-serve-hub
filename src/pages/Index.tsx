import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TrustSignals from '@/components/TrustSignals';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TrustSignals />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <PopupForm />
    </div>
  );
};

export default Index;
