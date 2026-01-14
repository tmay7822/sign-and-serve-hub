// SMART MOBILE CTA BAR
// Context-aware sticky bottom bar for mobile devices

import { useState } from 'react';
import { Phone, Calendar, Calculator, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { usePageContext } from '@/hooks/usePageContext';
import { BookingWidget } from './BookingWidget';
import { QuoteCalculatorModal } from './QuoteCalculatorModal';

export const SmartMobileCtaBar = () => {
  const context = usePageContext();
  const [showCalculator, setShowCalculator] = useState(false);

  // Scroll to AI chat widget
  const handleChatClick = () => {
    // Dispatch a custom event that AIChatWidget can listen to
    window.dispatchEvent(new CustomEvent('openAIChat'));
  };

  // Render the primary action based on page context
  const renderPrimaryAction = () => {
    switch (context.ctaAction) {
      case 'book':
        return (
          <BookingWidget
            defaultService={context.serviceId}
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-0.5 px-4 py-1 bg-brand-navy text-white rounded-full -mt-3 shadow-lg hover:bg-brand-blue transition-colors h-auto min-w-[100px]"
          >
            <Calendar className="h-5 w-5" />
            <span className="text-[10px] font-semibold leading-tight text-center max-w-[80px] truncate">
              {context.ctaLabel}
            </span>
          </BookingWidget>
        );
      
      case 'call':
        return (
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="flex flex-col items-center gap-0.5 px-4 py-1 bg-brand-navy text-white rounded-full -mt-3 shadow-lg hover:bg-brand-blue transition-colors min-w-[100px]"
          >
            <Phone className="h-5 w-5" />
            <span className="text-[10px] font-semibold leading-tight">Call Now</span>
          </a>
        );
      
      case 'quote':
      default:
        return (
          <button
            onClick={() => setShowCalculator(true)}
            className="flex flex-col items-center gap-0.5 px-4 py-1 bg-brand-navy text-white rounded-full -mt-3 shadow-lg hover:bg-brand-blue transition-colors min-w-[100px]"
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
      <div 
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-bottom"
        role="navigation"
        aria-label="Quick actions"
      >
        <div className="flex items-center justify-around py-2 px-3 max-w-md mx-auto">
          {/* Call Button */}
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="flex flex-col items-center gap-0.5 px-3 py-1 text-brand-navy hover:text-brand-blue transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
            aria-label={`Call ${BUSINESS_CONFIG.phone}`}
          >
            <Phone className="h-5 w-5" />
            <span className="text-[10px] font-medium">Call</span>
          </a>

          {/* Primary Action - contextual */}
          {renderPrimaryAction()}

          {/* Chat Button */}
          <button
            onClick={handleChatClick}
            className="flex flex-col items-center gap-0.5 px-3 py-1 text-brand-navy hover:text-brand-blue transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
            aria-label="Open chat assistant"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-[10px] font-medium">Chat</span>
          </button>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind the bar */}
      <div className="h-14 lg:hidden" aria-hidden="true" />

      {/* Quote Calculator Modal */}
      <QuoteCalculatorModal 
        isOpen={showCalculator} 
        onClose={() => setShowCalculator(false)} 
      />
    </>
  );
};
