import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BUSINESS_CONFIG } from '@/config/business';
import { QuoteButton } from '@/components/QuoteButton';

const WhatToDoNext = () => {
  return (
    <Card className="mt-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <CardHeader className="text-center">
        <CardTitle className="text-xl text-foreground">What to do next</CardTitle>
        <p className="text-muted-foreground">
          Tell us your location & document → we'll quote before we drive.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center mb-4">
          <p className="text-sm font-medium text-foreground mb-2">Choose a service:</p>
        </div>
        
        <div className="grid gap-3">
          <Link 
            to="/loan-signings" 
            className="block p-3 bg-background/80 rounded-lg border border-border hover:bg-accent/20 transition-colors"
          >
            <div className="font-medium text-primary">Loan Signings</div>
            <div className="text-xs text-muted-foreground">(buyer/seller, refi, HELOC)</div>
          </Link>
          
          <Link 
            to="/wills-trusts-estates" 
            className="block p-3 bg-background/80 rounded-lg border border-border hover:bg-accent/20 transition-colors"
          >
            <div className="font-medium text-primary">Wills, Trusts & POA</div>
            <div className="text-xs text-muted-foreground">(estate & family docs)</div>
          </Link>
          
          <Link 
            to="/healthcare-notary" 
            className="block p-3 bg-background/80 rounded-lg border border-border hover:bg-accent/20 transition-colors"
          >
            <div className="font-medium text-primary">Hospital & Senior Care</div>
            <div className="text-xs text-muted-foreground">(bedside notarization)</div>
          </Link>
        </div>
        
        <div className="text-center pt-2">
          <p className="text-sm text-muted-foreground mb-3">
            Or view all <Link to="/service-areas" className="text-primary hover:underline font-medium">Service Areas</Link>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <QuoteButton size="sm" className="w-full sm:w-auto">
              Book Online
            </QuoteButton>
            <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
              <a href={`tel:${BUSINESS_CONFIG.phone}`}>
                Call/Text {BUSINESS_CONFIG.phone}
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WhatToDoNext;