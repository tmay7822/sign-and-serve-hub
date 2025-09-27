// LOCAL SIGNALS WIDGET
// Enhanced local SEO signals for location pages

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BUSINESS_CONFIG } from '@/config/business';
import { MapPin, Clock, Shield, Award, Phone, Mail } from 'lucide-react';

interface LocalSignalsProps {
  city: string;
  county: string;
  zipCode: string;
  localLandmarks?: string[];
}

const LocalSignalsWidget: React.FC<LocalSignalsProps> = ({
  city,
  county,
  zipCode,
  localLandmarks = []
}) => {
  const businessHours = [
    { day: 'Monday - Friday', hours: BUSINESS_CONFIG.hours.weekdays },
    { day: 'Saturday - Sunday', hours: BUSINESS_CONFIG.hours.weekends },
    { day: 'Emergency Service', hours: BUSINESS_CONFIG.hours.emergency }
  ];

  const defaultLandmarks = [
    `${city} City Hall`,
    `${county} County Courthouse`,
    `${city} Business District`,
    `${zipCode} Area Shopping Centers`
  ];

  const landmarks = localLandmarks.length > 0 ? localLandmarks : defaultLandmarks;

  return (
    <div className="space-y-6">
      {/* Business Hours Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
          </div>
          <div className="space-y-3">
            {businessHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                <span className="font-medium text-foreground">{schedule.day}</span>
                <span className="text-muted-foreground">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Local Service Area Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Service Area Details</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Primary City:</span>
              <Badge variant="secondary">{city}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">County:</span>
              <Badge variant="secondary">{county} County</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">ZIP Code:</span>
              <Badge variant="secondary">{zipCode}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">State:</span>
              <Badge variant="secondary">Ohio</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Local Landmarks */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">We Serve Near</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {landmarks.map((landmark, index) => (
              <Badge key={index} variant="outline" className="text-sm">
                {landmark}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="font-medium text-foreground">Phone</div>
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-primary hover:underline">
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="font-medium text-foreground">Email</div>
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-primary hover:underline">
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Credentials */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Professional Credentials</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {BUSINESS_CONFIG.credentials.nna && (
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">NNA Certified</span>
              </div>
            )}
            {BUSINESS_CONFIG.credentials.backgroundCheck && (
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Background Checked</span>
              </div>
            )}
            {BUSINESS_CONFIG.credentials.insured && (
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">E&O Insured</span>
              </div>
            )}
            {BUSINESS_CONFIG.credentials.bonded && (
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Bonded</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocalSignalsWidget;