import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Upload,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Save,
  Eye,
  AlertTriangle
} from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';

interface BusinessSetupWizardProps {
  onClose?: () => void;
}

interface BusinessFormData {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  website: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  serviceArea: {
    primary: string;
    counties: string;
    radius: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
    emergency: string;
  };
  social: {
    facebook: string;
    linkedin: string;
    google: string;
  };
  credentials: {
    nna: boolean;
    backgroundCheck: boolean;
    insured: boolean;
    bonded: boolean;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
  };
}

const WIZARD_STEPS = [
  {
    id: 'basic',
    title: 'Basic Information',
    description: 'Your business name and contact details',
    icon: Building
  },
  {
    id: 'location',
    title: 'Location & Service Area',
    description: 'Where you operate and serve customers',
    icon: MapPin
  },
  {
    id: 'hours',
    title: 'Business Hours',
    description: 'When customers can reach you',
    icon: Clock
  },
  {
    id: 'credentials',
    title: 'Credentials & Social',
    description: 'Professional credentials and social media',
    icon: CheckCircle
  },
  {
    id: 'seo',
    title: 'SEO & Marketing',
    description: 'Search engine optimization settings',
    icon: Eye
  }
];

export function BusinessSetupWizard({ onClose }: BusinessSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<BusinessFormData>({
    name: BUSINESS_CONFIG.name,
    tagline: BUSINESS_CONFIG.tagline,
    phone: BUSINESS_CONFIG.phone,
    email: BUSINESS_CONFIG.email,
    website: BUSINESS_CONFIG.website,
    address: { ...BUSINESS_CONFIG.address },
    serviceArea: { ...BUSINESS_CONFIG.serviceArea },
    hours: { ...BUSINESS_CONFIG.hours },
    social: { ...BUSINESS_CONFIG.social },
    credentials: { ...BUSINESS_CONFIG.credentials },
    seo: { ...BUSINESS_CONFIG.seo }
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);

  const updateField = (path: string, value: any) => {
    const keys = path.split('.');
    setFormData(prev => {
      const updated = { ...prev };
      let current = updated as any;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  const validateStep = (stepIndex: number): boolean => {
    const newErrors: string[] = [];
    
    switch (stepIndex) {
      case 0: // Basic Info
        if (!formData.name.trim()) newErrors.push('Business name is required');
        if (!formData.phone.trim()) newErrors.push('Phone number is required');
        if (!formData.email.trim()) newErrors.push('Email is required');
        break;
      case 1: // Location
        if (!formData.address.city.trim()) newErrors.push('City is required');
        if (!formData.address.state.trim()) newErrors.push('State is required');
        if (!formData.serviceArea.primary.trim()) newErrors.push('Primary service area is required');
        break;
      case 2: // Hours
        if (!formData.hours.weekdays.trim()) newErrors.push('Weekday hours are required');
        if (!formData.hours.weekends.trim()) newErrors.push('Weekend hours are required');
        break;
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, WIZARD_STEPS.length - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSave = () => {
    if (validateStep(currentStep)) {
      // Here you would save to localStorage or your preferred storage
      localStorage.setItem('businessConfig', JSON.stringify(formData));
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  };

  const renderStepContent = () => {
    const step = WIZARD_STEPS[currentStep];
    
    switch (step.id) {
      case 'basic':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Business Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="Your Business Name"
                />
              </div>
              <div>
                <Label htmlFor="tagline">Tagline</Label>
                <Input
                  id="tagline"
                  value={formData.tagline}
                  onChange={(e) => updateField('tagline', e.target.value)}
                  placeholder="Your business tagline or slogan"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="contact@yourbusiness.com"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="website">Website URL</Label>
              <Input
                id="website"
                value={formData.website}
                onChange={(e) => updateField('website', e.target.value)}
                placeholder="https://www.yourbusiness.com"
              />
            </div>
          </div>
        );

      case 'location':
        return (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Business Address</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="street">Street Address</Label>
                <Input
                  id="street"
                  value={formData.address.street}
                  onChange={(e) => updateField('address.street', e.target.value)}
                  placeholder="123 Main Street"
                />
              </div>
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.address.city}
                  onChange={(e) => updateField('address.city', e.target.value)}
                  placeholder="Cincinnati"
                />
              </div>
              <div>
                <Label htmlFor="state">State *</Label>
                <Select value={formData.address.state} onValueChange={(value) => updateField('address.state', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="OH">Ohio</SelectItem>
                    <SelectItem value="KY">Kentucky</SelectItem>
                    <SelectItem value="IN">Indiana</SelectItem>
                    {/* Add more states as needed */}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />
            
            <h4 className="text-lg font-semibold">Service Area</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="primaryArea">Primary Service Area *</Label>
                <Input
                  id="primaryArea"
                  value={formData.serviceArea.primary}
                  onChange={(e) => updateField('serviceArea.primary', e.target.value)}
                  placeholder="Cincinnati-Dayton Metro"
                />
              </div>
              <div>
                <Label htmlFor="counties">Counties Served</Label>
                <Input
                  id="counties"
                  value={formData.serviceArea.counties}
                  onChange={(e) => updateField('serviceArea.counties', e.target.value)}
                  placeholder="Hamilton, Warren, Montgomery, Butler"
                />
              </div>
              <div>
                <Label htmlFor="radius">Service Radius</Label>
                <Input
                  id="radius"
                  value={formData.serviceArea.radius}
                  onChange={(e) => updateField('serviceArea.radius', e.target.value)}
                  placeholder="50 miles"
                />
              </div>
            </div>
          </div>
        );

      case 'hours':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="weekdays">Weekday Hours *</Label>
              <Input
                id="weekdays"
                value={formData.hours.weekdays}
                onChange={(e) => updateField('hours.weekdays', e.target.value)}
                placeholder="8:00 AM - 8:00 PM"
              />
            </div>
            <div>
              <Label htmlFor="weekends">Weekend Hours *</Label>
              <Input
                id="weekends"
                value={formData.hours.weekends}
                onChange={(e) => updateField('hours.weekends', e.target.value)}
                placeholder="9:00 AM - 6:00 PM"
              />
            </div>
            <div>
              <Label htmlFor="emergency">Emergency Hours</Label>
              <Input
                id="emergency"
                value={formData.hours.emergency}
                onChange={(e) => updateField('hours.emergency', e.target.value)}
                placeholder="24/7 by appointment"
              />
            </div>
          </div>
        );

      case 'credentials':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Professional Credentials</h4>
              <div className="space-y-3">
                {[
                  { key: 'nna', label: 'NNA Certified' },
                  { key: 'backgroundCheck', label: 'Background Checked' },
                  { key: 'insured', label: 'E&O Insured' },
                  { key: 'bonded', label: 'Bonded' }
                ].map(({ key, label }) => (
                  <div key={key} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={key}
                      checked={formData.credentials[key as keyof typeof formData.credentials]}
                      onChange={(e) => updateField(`credentials.${key}`, e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor={key}>{label}</Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="text-lg font-semibold mb-4">Social Media Links</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="facebook">Facebook Page</Label>
                  <Input
                    id="facebook"
                    value={formData.social.facebook}
                    onChange={(e) => updateField('social.facebook', e.target.value)}
                    placeholder="https://facebook.com/yourbusiness"
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input
                    id="linkedin"
                    value={formData.social.linkedin}
                    onChange={(e) => updateField('social.linkedin', e.target.value)}
                    placeholder="https://linkedin.com/company/yourbusiness"
                  />
                </div>
                <div>
                  <Label htmlFor="google">Google Business Profile</Label>
                  <Input
                    id="google"
                    value={formData.social.google}
                    onChange={(e) => updateField('social.google', e.target.value)}
                    placeholder="https://g.page/yourbusiness"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'seo':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="metaTitle">Page Title (SEO)</Label>
              <Input
                id="metaTitle"
                value={formData.seo.metaTitle}
                onChange={(e) => updateField('seo.metaTitle', e.target.value)}
                placeholder="Mobile Notary Services | Your City | Your Business"
              />
              <p className="text-sm text-muted-foreground mt-1">
                Keep under 60 characters for best SEO results
              </p>
            </div>
            <div>
              <Label htmlFor="metaDescription">Meta Description</Label>
              <Textarea
                id="metaDescription"
                value={formData.seo.metaDescription}
                onChange={(e) => updateField('seo.metaDescription', e.target.value)}
                placeholder="Professional mobile notary services in your area..."
                rows={3}
              />
              <p className="text-sm text-muted-foreground mt-1">
                Keep under 160 characters. This appears in search results.
              </p>
            </div>
            <div>
              <Label htmlFor="keywords">Keywords</Label>
              <Textarea
                id="keywords"
                value={formData.seo.keywords}
                onChange={(e) => updateField('seo.keywords', e.target.value)}
                placeholder="mobile notary, loan signing, notary public, your city"
                rows={2}
              />
              <p className="text-sm text-muted-foreground mt-1">
                Separate keywords with commas
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {WIZARD_STEPS.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          
          return (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                isCompleted 
                  ? 'bg-primary border-primary text-primary-foreground' 
                  : isActive 
                    ? 'border-primary text-primary' 
                    : 'border-muted-foreground text-muted-foreground'
              }`}>
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Icon className="w-5 h-5" />
                )}
              </div>
              <div className="ml-3 hidden md:block">
                <p className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                  {step.title}
                </p>
              </div>
              {index < WIZARD_STEPS.length - 1 && (
                <div className={`mx-4 h-px w-16 ${isCompleted ? 'bg-primary' : 'bg-muted'}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <Alert className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <ul className="list-disc list-inside">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Success Message */}
      {saved && (
        <Alert className="mb-6 border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Configuration saved successfully!
          </AlertDescription>
        </Alert>
      )}

      {/* Step Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {(() => {
              const IconComponent = WIZARD_STEPS[currentStep].icon;
              return <IconComponent className="w-5 h-5" />;
            })()}
            {WIZARD_STEPS[currentStep].title}
          </CardTitle>
          <CardDescription>
            {WIZARD_STEPS[currentStep].description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {renderStepContent()}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        <div className="flex gap-2">
          <Button variant="outline" onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save Progress
          </Button>

          {currentStep === WIZARD_STEPS.length - 1 ? (
            <Button onClick={onClose} className="bg-green-600 hover:bg-green-700">
              <CheckCircle className="w-4 h-4 mr-2" />
              Complete Setup
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}