import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { MapPin, DollarSign, Clock } from 'lucide-react';
import { SERVICE_PRICING, TRAVEL_ZONES, getPricingEstimate, getTravelZone } from '@/config/servicepricing';

interface PricingDisplayProps {
  selectedServices?: string[];
  showCalculator?: boolean;
  className?: string;
}

export const PricingDisplay = ({ 
  selectedServices = [], 
  showCalculator = true, 
  className = "" 
}: PricingDisplayProps) => {
  const [zipCode, setZipCode] = useState('');
  
  const estimate = selectedServices.length > 0 && zipCode ? 
    getPricingEstimate(selectedServices, zipCode) : null;
  
  const travelZone = zipCode ? getTravelZone(zipCode) : null;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Service Pricing Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Service Pricing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {SERVICE_PRICING.map((service) => (
              <div 
                key={service.id} 
                className={`flex justify-between items-center p-3 rounded-lg border ${
                  selectedServices.includes(service.id) ? 'bg-primary/5 border-primary' : ''
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{service.serviceName}</span>
                    <Badge variant={service.category === 'primary' ? 'default' : 'secondary'}>
                      {service.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {service.estimatedTime}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">${service.baseRate}</div>
                  <div className="text-xs text-muted-foreground">base rate</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Travel Zones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Travel Zones & Fees
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {TRAVEL_ZONES.map((zone, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg border ${
                  travelZone?.name === zone.name ? 'bg-primary/5 border-primary' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{zone.name}</div>
                    <div className="text-sm text-muted-foreground">{zone.description}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Counties: {zone.counties.join(', ')}
                    </div>
                  </div>
                  <Badge variant={zone.fee === 0 ? 'default' : 'outline'}>
                    {zone.fee === 0 ? 'Free' : `$${zone.fee}`}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pricing Calculator */}
      {showCalculator && (
        <Card id="pricing-calculator">
          <CardHeader>
            <CardTitle>Pricing Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="calc-zip">Enter ZIP Code for Estimate</Label>
                <Input
                  id="calc-zip"
                  placeholder="e.g., 45242"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  maxLength={5}
                />
              </div>

              {travelZone && (
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-sm font-medium">Location: {travelZone.name}</div>
                  <div className="text-sm text-muted-foreground">{travelZone.description}</div>
                </div>
              )}

              {estimate && estimate.services.length > 0 && (
                <div className="space-y-2">
                  <div className="text-sm font-medium">Estimated Total:</div>
                  {estimate.services.map((service) => (
                    <div key={service.id} className="flex justify-between text-sm">
                      <span>{service.name}</span>
                      <span>${service.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm">
                    <span>Travel Fee</span>
                    <span>${estimate.travelFee}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${estimate.total}</span>
                  </div>
                </div>
              )}

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm font-semibold text-center">
                  <strong>Pricing is subject to change and is based on Ohio law, travel fees, emergency services, and will be determined when we speak.</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};