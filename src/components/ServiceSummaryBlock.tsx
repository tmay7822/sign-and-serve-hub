import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';

interface SummaryButton {
  type: 'call' | 'book';
  label?: string;
}

interface ServiceSummaryBlockProps {
  text: React.ReactNode;
  buttons: SummaryButton[];
}

const ServiceSummaryBlock: React.FC<ServiceSummaryBlockProps> = ({ text, buttons }) => {
  return (
    <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-6 my-6 max-w-3xl mx-auto text-left">
      <p className="text-lg text-foreground leading-relaxed mb-4">{text}</p>
      <div className="flex flex-wrap gap-3">
        {buttons.map((btn, i) => {
          if (btn.type === 'call') {
            return (
              <Button key={i} size="lg" className="font-bold" asChild>
                <a href="tel:5132269052">
                  <Phone className="mr-2 h-5 w-5" />
                  {btn.label || 'Call (513) 226-9052'}
                </a>
              </Button>
            );
          }
          return (
            <Button key={i} size="lg" variant="outline" className="font-bold border-2" asChild>
              <Link to="/book-now">
                <Calendar className="mr-2 h-5 w-5" />
                {btn.label || 'Book Now'}
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSummaryBlock;
