// QUICK ANSWER SECTION COMPONENT  
// Optimized for featured snippets and AI search

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, MapPin, Phone } from 'lucide-react';

interface QuickAnswerProps {
  question: string;
  answer: string;
  location?: string;
  service?: string;
  showCTA?: boolean;
}

const QuickAnswerSection: React.FC<QuickAnswerProps> = ({
  question,
  answer,
  location,
  service,
  showCTA = true
}) => {
  return (
    <Card className="mb-8 border-l-4 border-l-primary bg-primary/5">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
            <CheckCircle className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {question}
            </h2>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              {answer}
            </p>
            
            {(location || service) && (
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                {location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Serving {location}</span>
                  </div>
                )}
                {service && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Same-day {service}</span>
                  </div>
                )}
              </div>
            )}

            {showCTA && (
              <div className="flex items-center gap-2 text-primary font-medium">
                <Phone className="h-4 w-4" />
                <span>Call (513) 226-9052 for immediate service</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAnswerSection;