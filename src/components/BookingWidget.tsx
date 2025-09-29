import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, DollarSign, MapPin, Clock } from 'lucide-react';
import { TidyCalEmbed } from './TidyCalEmbed';
import { SERVICE_PRICING, getPricingEstimate, getTravelZone, type ServicePricing } from '@/config/servicepricing';

interface BookingWidgetProps {
  defaultService?: string;
  defaultZipCode?: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export const BookingWidget = ({ 
  defaultService, 
  defaultZipCode,
  variant = "default", 
  size = "default", 
  className = "",
  children = "Book Appointment"
}: BookingWidgetProps) => {
  const [selectedService, setSelectedService] = useState<string>(defaultService || '');
  const [zipCode, setZipCode] = useState<string>(defaultZipCode || '');
  const [showCalendar, setShowCalendar] = useState(false);
  const [estimate, setEstimate] = useState<ReturnType<typeof getPricingEstimate> | null>(() => {
    // Auto-calculate estimate if both defaultService and defaultZipCode are provided
    if (defaultService && defaultZipCode) {
      return getPricingEstimate([defaultService], defaultZipCode);
    }
    return null;
  });

  const handleServiceChange = (serviceId: string) => {
    setSelectedService(serviceId);
    if (zipCode && serviceId) {
      const newEstimate = getPricingEstimate([serviceId], zipCode);
      setEstimate(newEstimate);
    }
  };

  const handleZipChange = (zip: string) => {
    setZipCode(zip);
    if (selectedService && zip) {
      const newEstimate = getPricingEstimate([selectedService], zip);
      setEstimate(newEstimate);
    }
  };

  const selectedServiceData = SERVICE_PRICING.find(s => s.id === selectedService);
  const travelZone = zipCode ? getTravelZone(zipCode) : null;

  const canProceedToBooking = selectedService && zipCode && estimate;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          <Calendar className="w-4 h-4 mr-2" />
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Book Your Appointment
          </DialogTitle>
        </DialogHeader>
        
        {!showCalendar ? (
          <div className="space-y-6">
            {/* Service Selection */}
            <div className="space-y-2">
              <Label htmlFor="service">Select Service</Label>
              <Select value={selectedService} onValueChange={handleServiceChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your service type" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_PRICING.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      <div className="flex justify-between items-center w-full">
                        <span>{service.serviceName}</span>
                        <span className="text-muted-foreground ml-4">${service.baseRate}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">
                All fees are estimates and subject to final confirmation
              </p>
            </div>

            {/* ZIP Code Input */}
            <div className="space-y-2">
              <Label htmlFor="zip">ZIP Code</Label>
              <Input
                id="zip"
                placeholder="Enter your ZIP code"
                value={zipCode}
                onChange={(e) => handleZipChange(e.target.value)}
                maxLength={5}
              />
            </div>

            {/* Service Details */}
            {selectedServiceData && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {selectedServiceData.serviceName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">{selectedServiceData.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Estimated time: {selectedServiceData.estimatedTime}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Travel Zone Info */}
            {travelZone && (
              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{travelZone.name}: {travelZone.description}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Pricing Estimate */}
            {estimate && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Pricing Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {estimate.services.map((service) => (
                    <div key={service.id} className="flex justify-between">
                      <span>{service.name}</span>
                      <span>${service.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between">
                    <span>Travel Fee</span>
                    <span>${estimate.travelFee}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${estimate.total}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Final pricing confirmed during booking process
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Proceed to Calendar */}
            <Button 
              onClick={() => setShowCalendar(true)}
              disabled={!canProceedToBooking}
              className="w-full"
              size="lg"
            >
              Continue to Schedule
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Schedule Your {selectedServiceData?.serviceName}</h3>
              <Button variant="outline" onClick={() => setShowCalendar(false)}>
                Back to Details
              </Button>
            </div>
            
            {estimate && (
              <Card>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>Service Total:</span>
                    <span className="font-semibold">${estimate.total}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            <TidyCalEmbed 
              serviceId={selectedService} 
              height="500px"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};