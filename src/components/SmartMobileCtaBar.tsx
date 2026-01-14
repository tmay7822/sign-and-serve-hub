// SMART MOBILE CTA BAR
// Context-aware sticky bottom bar for mobile devices with smooth animations

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Calculator, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { usePageContext } from '@/hooks/usePageContext';
import { BookingWidget } from './BookingWidget';
import { QuoteCalculatorModal } from './QuoteCalculatorModal';
import { haptic } from '@/utils/haptics';

// Animation variants
const containerVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 300,
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0, y: 10 },
  visible: { 
    scale: 1, 
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 20, stiffness: 400 }
  }
};

const primaryVariants = {
  hidden: { scale: 0.5, opacity: 0, y: 20 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring" as const, 
      damping: 15, 
      stiffness: 400,
      delay: 0.1
    }
  }
};

export const SmartMobileCtaBar = () => {
  const context = usePageContext();
  const [showCalculator, setShowCalculator] = useState(false);

  // Scroll to AI chat widget
  const handleChatClick = () => {
    window.dispatchEvent(new CustomEvent('openAIChat'));
  };

  // Render the primary action based on page context
  const renderPrimaryAction = () => {
    const baseClasses = "flex flex-col items-center gap-0.5 px-5 py-2 bg-brand-navy text-white rounded-full -mt-4 shadow-lg hover:bg-brand-blue transition-colors min-w-[110px]";
    
    switch (context.ctaAction) {
      case 'book':
        return (
          <BookingWidget
            defaultService={context.serviceId}
            variant="ghost"
            size="sm"
            className={`${baseClasses} h-auto`}
          >
            <Calendar className="h-5 w-5" />
            <span className="text-[10px] font-semibold leading-tight text-center max-w-[90px] truncate">
              {context.ctaLabel}
            </span>
          </BookingWidget>
        );
      
      case 'call':
        return (
          <a 
            href={`tel:${BUSINESS_CONFIG.phone}`} 
            className={baseClasses}
            onClick={() => haptic.medium()}
          >
            <Phone className="h-5 w-5" />
            <span className="text-[10px] font-semibold leading-tight">Call Now</span>
          </a>
        );
      
      case 'quote':
      default:
        return (
          <button
            onClick={() => {
              haptic.medium();
              setShowCalculator(true);
            }}
            className={baseClasses}
            aria-label="Open quote calculator"
          >
            <Calculator className="h-5 w-5" />
            <span className="text-[10px] font-semibold leading-tight">{context.ctaLabel}</span>
          </button>
        );
    }
  };

  return (
    <>
      {/* Sticky CTA bar - only visible on mobile */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] safe-area-bottom"
        role="navigation"
        aria-label="Quick actions"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-around py-2.5 px-4 max-w-md mx-auto">
          {/* Call Button */}
          <motion.a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="flex flex-col items-center gap-0.5 px-4 py-1.5 text-brand-navy hover:text-brand-blue transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
            aria-label={`Call ${BUSINESS_CONFIG.phone}`}
            variants={itemVariants}
            whileTap={{ scale: 0.92 }}
            onClick={() => haptic.light()}
          >
            <Phone className="h-5 w-5" />
            <span className="text-[10px] font-medium">Call</span>
          </motion.a>

          {/* Primary Action - contextual with bounce animation */}
          <motion.div
            variants={primaryVariants}
            whileTap={{ scale: 0.95 }}
          >
            {renderPrimaryAction()}
          </motion.div>

          {/* Chat Button */}
          <motion.button
            onClick={() => {
              haptic.light();
              handleChatClick();
            }}
            className="flex flex-col items-center gap-0.5 px-4 py-1.5 text-brand-navy hover:text-brand-blue transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
            aria-label="Open chat assistant"
            variants={itemVariants}
            whileTap={{ scale: 0.92 }}
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-[10px] font-medium">Chat</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Spacer to prevent content from being hidden behind the bar */}
      <div className="h-16 lg:hidden" aria-hidden="true" />

      {/* Quote Calculator Modal */}
      <QuoteCalculatorModal 
        isOpen={showCalculator} 
        onClose={() => setShowCalculator(false)} 
      />
    </>
  );
};
