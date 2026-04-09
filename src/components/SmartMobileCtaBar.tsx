import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link, useLocation } from 'react-router-dom';
import { haptic } from '@/utils/haptics';

const containerVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring" as const, damping: 25, stiffness: 300 }
  }
};

export const SmartMobileCtaBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Hide on /book-now page
  const isBookNowPage = pathname === '/book-now';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isBookNowPage) return null;

  return (
    <>
      <motion.div 
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] safe-area-bottom"
        role="navigation"
        aria-label="Quick actions"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="flex items-center gap-3 py-3 px-4 max-w-md mx-auto">
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-base rounded-xl transition-colors min-h-[56px] shadow-md"
            aria-label={`Call ${BUSINESS_CONFIG.phone}`}
            onClick={() => haptic.medium()}
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>

          <Link
            to="/book-now"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold text-base rounded-xl transition-colors min-h-[56px] shadow-md"
            onClick={() => haptic.medium()}
          >
            <Calendar className="h-5 w-5" />
            Book Online
          </Link>
        </div>
      </motion.div>

      {isVisible && <div className="h-20 lg:hidden" aria-hidden="true" />}
    </>
  );
};
