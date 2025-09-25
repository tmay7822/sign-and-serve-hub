import { Button } from '@/components/ui/button';
import { BookingWidget } from '@/components/BookingWidget';
import { QuoteButton } from '@/components/QuoteButton';
import { BUSINESS_CONFIG } from '@/config/business';
import { Calculator, Phone, Calendar } from 'lucide-react';

interface StandardCTAButtonsProps {
  defaultService?: string;
  variant?: 'top' | 'bottom';
  className?: string;
  showCalculator?: boolean;
}

export const StandardCTAButtons = ({ 
  defaultService = '', 
  variant = 'bottom',
  className = '',
  showCalculator = true 
}: StandardCTAButtonsProps) => {
  const baseButtonClasses = "flex-1 sm:flex-none sm:min-w-[140px]";

  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
      {/* Book Now Button */}
      <BookingWidget 
        defaultService={defaultService}
        size="lg"
        className={`${baseButtonClasses} bg-brand-navy text-white hover:bg-brand-blue hover:scale-105 font-semibold shadow-button hover:shadow-lg transition-all duration-300`}
      >
        <Calendar className="mr-2 h-4 w-4" />
        Book Now
      </BookingWidget>

      {/* Get Quote Button */}
      <QuoteButton
        variant="outline"
        size="lg"
        useCalculator={true}
        className={`${baseButtonClasses} bg-brand-navy text-white hover:bg-brand-blue hover:scale-105 font-semibold shadow-button hover:shadow-lg transition-all duration-300 border-brand-navy hover:border-brand-blue`}
      >
        <Calculator className="mr-2 h-4 w-4" />
        Get Quote
      </QuoteButton>

      {/* Call Now Button */}
      <Button
        variant="outline"
        size="lg"
        asChild
        className={`${baseButtonClasses} bg-brand-navy text-white hover:bg-brand-blue hover:scale-105 font-semibold shadow-button hover:shadow-lg transition-all duration-300 border-brand-navy hover:border-brand-blue`}
      >
        <a href={`tel:${BUSINESS_CONFIG.phone}`}>
          <Phone className="mr-2 h-4 w-4" />
          Call Now
        </a>
      </Button>
    </div>
  );
};