// DOCUMENT COMPARISON MODAL
// Side-by-side comparison of commonly confused documents

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Phone, Scale, Check, ArrowRight } from 'lucide-react';
import { BookingWidget } from '@/components/BookingWidget';
import { BUSINESS_CONFIG } from '@/config/business';
import { DocumentComparison, getDocumentBookingService } from '@/data/documents';

interface DocumentCompareModalProps {
  comparison: DocumentComparison | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DocumentCompareModal: React.FC<DocumentCompareModalProps> = ({
  comparison,
  open,
  onOpenChange,
}) => {
  if (!comparison) return null;

  const [doc1, doc2] = comparison.documents;
  const service1 = getDocumentBookingService(doc1);
  const service2 = getDocumentBookingService(doc2);
  const phoneNumber = BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Scale className="h-6 w-6 text-primary" />
            <DialogTitle className="text-xl lg:text-2xl">
              {comparison.title}
            </DialogTitle>
          </div>
          <DialogDescription>
            Understanding the differences helps you choose the right document for your situation.
          </DialogDescription>
        </DialogHeader>

        {/* Comparison Table - Desktop */}
        <div className="hidden md:block mt-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Header Row */}
            <div className="font-semibold text-muted-foreground text-sm uppercase tracking-wide">
              Aspect
            </div>
            <div className="font-semibold text-primary text-center">
              {doc1}
            </div>
            <div className="font-semibold text-primary text-center">
              {doc2}
            </div>

            {/* Difference Rows */}
            {comparison.differences.map((diff, index) => (
              <React.Fragment key={index}>
                <div className="py-3 border-t font-medium text-foreground">
                  {diff.aspect}
                </div>
                <div className="py-3 border-t text-center text-sm text-muted-foreground bg-muted/30 rounded-l-lg px-3">
                  {diff.doc1}
                </div>
                <div className="py-3 border-t text-center text-sm text-muted-foreground bg-muted/30 rounded-r-lg px-3">
                  {diff.doc2}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="md:hidden space-y-4 mt-4">
          {comparison.differences.map((diff, index) => (
            <Card key={index} className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-primary">
                  {diff.aspect}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="shrink-0 text-xs">
                    {doc1.split(' ')[0]}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{diff.doc1}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="secondary" className="shrink-0 text-xs">
                    {doc2.split(' ')[0]}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{diff.doc2}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* When to Use Section */}
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <Card className="border-primary/30 bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                When to Use {doc1.split(' ').slice(0, 2).join(' ')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {comparison.whenToUse.doc1}
              </p>
              <div className="flex gap-2">
                <BookingWidget 
                  defaultService={service1}
                  size="sm"
                  className="flex-1"
                >
                  <Calendar className="h-3 w-3 mr-1" />
                  Book Now
                </BookingWidget>
                <Button variant="outline" size="sm" asChild>
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/30 bg-secondary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Check className="h-4 w-4 text-secondary-foreground" />
                When to Use {doc2.split(' ').slice(0, 2).join(' ')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {comparison.whenToUse.doc2}
              </p>
              <div className="flex gap-2">
                <BookingWidget 
                  defaultService={service2}
                  size="sm"
                  className="flex-1"
                >
                  <Calendar className="h-3 w-3 mr-1" />
                  Book Now
                </BookingWidget>
                <Button variant="outline" size="sm" asChild>
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Need Both CTA */}
        <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border text-center">
          <p className="text-sm text-muted-foreground mb-3">
            <strong>Not sure which you need?</strong> Many people need both documents. 
            Call us to discuss your situation.
          </p>
          <Button variant="outline" asChild>
            <a href={`tel:${phoneNumber}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call {BUSINESS_CONFIG.phone}
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentCompareModal;
