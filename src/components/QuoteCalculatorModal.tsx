import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { SERVICE_PRICING, TRAVEL_ZONES, getPricingEstimate, getTravelZone } from '@/config/servicepricing';
import { BookingWidget } from '@/components/BookingWidget';
import { BUSINESS_CONFIG } from '@/config/business';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteCalculatorModal = ({ isOpen, onClose }: QuoteCalculatorModalProps) => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [zipCode, setZipCode] = useState('');
  
  const estimate = selectedService && zipCode ? 
    getPricingEstimate([selectedService], zipCode) : null;
  
  const travelZone = zipCode ? getTravelZone(zipCode) : null;
  const selectedServiceData = SERVICE_PRICING.find(s => s.id === selectedService);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Pricing Calculator
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Service Selection */}
          <div className="space-y-2">
            <Label>Select Service</Label>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a service..." />
              </SelectTrigger>
              <SelectContent>
                {SERVICE_PRICING.map((service) => (
                  <SelectItem key={service.id} value={service.id}>
                    {service.serviceName} - ${service.baseRate}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* ZIP Code Input */}
          <div className="space-y-2">
            <Label>Your ZIP Code</Label>
            <Input
              placeholder="e.g., 45242"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              maxLength={5}
            />
          </div>

          {/* Service Details */}
          {selectedServiceData && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{selectedServiceData.serviceName}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">{selectedServiceData.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Base Rate:</span>
                    <Badge className="text-lg">${selectedServiceData.baseRate}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Estimated Time:</span>
                    <span className="text-sm text-muted-foreground">{selectedServiceData.estimatedTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Travel Zone Info */}
          {travelZone && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="w-4 h-4" />
                  Travel Zone: {travelZone.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{travelZone.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Travel Fee:</span>
                    <Badge variant={travelZone.fee === 0 ? 'default' : 'outline'}>
                      {travelZone.fee === 0 ? 'Free' : `$${travelZone.fee}`}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Pricing Estimate */}
          {estimate && (
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Your Estimate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Service Fee:</span>
                    <span>${estimate.services[0]?.price || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travel Fee:</span>
                    <span>${estimate.travelFee}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Estimate:</span>
                    <span>${estimate.total}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-1 gap-3">
            {selectedService && zipCode && (
              <BookingWidget 
                defaultService={selectedService}
                size="lg"
                className="w-full"
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                Book This Service Now
              </BookingWidget>
            )}
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.open(`tel:${BUSINESS_CONFIG.phone}`)}
              className="w-full"
            >
              Call for Custom Quote: {BUSINESS_CONFIG.phone}
            </Button>
          </div>

          {/* Disclaimer */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-sm font-semibold text-center">
              <strong>Pricing is subject to State law and will be determined before services rendered and will be based on number of notarizations, travel, type of services, and emergency services.</strong>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};