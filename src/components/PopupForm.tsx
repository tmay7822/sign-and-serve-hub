import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, CheckCircle } from 'lucide-react';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '',
    preferredTime: '',
    notes: '',
    services: [] as string[]
  });

  const services = [
    'General Notary',
    'Loan Signing (Buyer, Seller, Refi, HELOC)',
    'Estate Plans (Wills, Trusts, POA, Healthcare)',
    'Real Estate (Deeds, Closings, Investor Docs)',
    'Apostille',
    'Business Docs (I-9, Vendor, Corporate)'
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        services: [...prev.services, service]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        services: prev.services.filter(s => s !== service)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send the data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        zip: '',
        preferredTime: '',
        notes: '',
        services: []
      });
    }, 3000);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full gradient-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Open contact form"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Popup Form */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Form Card */}
          <Card className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
            <CardHeader className="gradient-primary text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-brand-gold transition-colors"
                aria-label="Close form"
              >
                <X className="h-6 w-6" />
              </button>
              <CardTitle className="text-xl">
                {isSubmitted ? 'Request Sent!' : 'Get Your Free Quote'}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">
                    Thanks! We'll reach out shortly.
                  </h3>
                  <p className="text-muted-foreground">
                    We typically respond within 30 minutes during business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Terry@SignedOnTime.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code *</Label>
                      <Input
                        id="zip"
                        required
                        value={formData.zip}
                        onChange={(e) => setFormData(prev => ({ ...prev, zip: e.target.value }))}
                        placeholder="45123"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Input
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                      placeholder="e.g., Today 3PM, Tomorrow morning"
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block">Services Needed:</Label>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.services.includes(service)}
                            onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          />
                          <Label htmlFor={service} className="text-sm font-normal cursor-pointer">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder="Any specific requirements or questions..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-primary text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Request
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default PopupForm;