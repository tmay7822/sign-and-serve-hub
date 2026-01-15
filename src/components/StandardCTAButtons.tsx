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
  vertical?: boolean;
}

export const StandardCTAButtons = ({ 
  defaultService = '', 
  variant = 'bottom',
  className = '',
  showCalculator = true,
  vertical = false
}: StandardCTAButtonsProps) => {
  const baseButtonClasses = vertical 
    ? "w-full"
    : "flex-1 sm:flex-none sm:min-w-[140px]";

  const layoutClasses = vertical 
    ? "flex flex-col gap-3"
    : "flex flex-col sm:flex-row gap-4 justify-center items-center";

  return (
    <div className={`${layoutClasses} ${className}`}>
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