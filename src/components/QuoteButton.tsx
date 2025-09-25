import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingWidget } from "./BookingWidget";
import { QuoteCalculatorModal } from "./QuoteCalculatorModal";
import { useNavigate, useLocation } from "react-router-dom";
import { BUSINESS_CONFIG } from '@/config/business';

interface QuoteButtonProps {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "hero" | "cta" | "outline-white";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
  showBooking?: boolean;
  defaultService?: string;
  scrollToPricing?: boolean;
  useCalculator?: boolean;
  onAfterAction?: () => void;
}

export const QuoteButton = ({ 
  className = "", 
  variant = "default", 
  size = "default",
  children = "Get a Quote",
  showBooking = false,
  defaultService,
  scrollToPricing = false,
  useCalculator = false,
  onAfterAction
}: QuoteButtonProps) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (scrollToPricing) {
      if (location.pathname === '/pricing') {
        // If already on pricing page, scroll to calculator
        const calculatorElement = document.getElementById('pricing-calculator');
        if (calculatorElement) {
          calculatorElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to pricing page and scroll to calculator
        navigate('/pricing');
        setTimeout(() => {
          const calculatorElement = document.getElementById('pricing-calculator');
          if (calculatorElement) {
            calculatorElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (useCalculator) {
      setShowCalculator(true);
    } else {
      // Direct call action for all other cases
      window.open(`tel:${BUSINESS_CONFIG.phone}`);
    }
    
    // Call the onAfterAction callback if provided
    if (onAfterAction) {
      onAfterAction();
    }
  };

  if (showBooking) {
    return (
      <div className="flex gap-2 flex-wrap">
        <BookingWidget
          defaultService={defaultService}
          variant="default"
          size={size === "icon" ? "default" : size}
          className={className}
        >
          Book Now
        </BookingWidget>
        <Button 
          onClick={() => window.open(`tel:${BUSINESS_CONFIG.phone}`)}
          variant="outline"
          size={size}
          className={className}
        >
          Call Now
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button 
        onClick={handleClick}
        variant={variant}
        size={size}
        className={className}
      >
        {children}
      </Button>
      
      {useCalculator && (
        <QuoteCalculatorModal 
          isOpen={showCalculator} 
          onClose={() => setShowCalculator(false)} 
        />
      )}
    </>
  );
};