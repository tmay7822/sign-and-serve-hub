import { useState } from 'react';
import Seo from '@/components/Seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AvailabilityIndicator from '@/components/AvailabilityIndicator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.signedontime.com/" },
    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.signedontime.com/contact" }
  ]
};

const SERVICE_OPTIONS = [
  'General Notary',
  'Loan Signing',
  'Estate Planning / POA',
  'Healthcare Directives',
  'Vehicle Title Transfer',
  'Apostille Services',
  'Business Documents',
  'Other — Please Describe',
];

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    zip: '',
    preferredTime: '',
    message: '',
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.service || !form.zip.trim()) {
      toast({ title: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      const GHL_CONTACT_WEBHOOK = import.meta.env.VITE_GHL_CONTACT_WEBHOOK || '';
      if (GHL_CONTACT_WEBHOOK) {
        await fetch(GHL_CONTACT_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      } else {
        console.warn('GHL Contact Webhook not configured — form submission logged locally only.');
      }
      setSubmitted(true);
    } catch {
      toast({
        title: 'Message could not be sent',
        description: 'Please call us at (513) 226-9052',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact Signed On Time Mobile Notary | Southwest Ohio"
        description="Contact Signed On Time Mobile Notary Services. Same-day appointments available. Call or text (513) 226-9052. We respond within 30 minutes during business hours."
        canonical="https://www.signedontime.com/contact"
        jsonLd={breadcrumbSchema}
      />

      <Header />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Contact Signed On Time Mobile Notary Services
            </h1>
            <AvailabilityIndicator />
          </div>
        </section>

        {/* Two Column Layout */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* LEFT — Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Get In Touch</h2>

                <div className="space-y-4">
                  {[
                    { icon: Phone, label: 'Call or Text', value: '(513) 226-9052', href: 'tel:5132269052', note: '7 days a week 7AM-10PM' },
                    { icon: Mail, label: 'Email', value: 'Terry@SignedOnTime.com', href: 'mailto:Terry@SignedOnTime.com', note: 'Responses within 2 hours' },
                    { icon: MapPin, label: 'Service Area', value: 'Hamilton, Warren, Butler, Montgomery, Greene and Clinton counties', note: 'Most locations 30-45 minutes from Waynesville' },
                    { icon: Clock, label: 'Hours', value: 'Monday - Sunday', note: '7:00 AM - 10:00 PM' },
                  ].map(({ icon: Icon, label, value, href, note }) => (
                    <Card key={label}>
                      <CardContent className="flex items-start gap-4 p-4">
                        <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{label}</p>
                          {href ? (
                            <a href={href} className="font-semibold text-foreground hover:text-primary">{value}</a>
                          ) : (
                            <p className="font-semibold text-foreground">{value}</p>
                          )}
                          <p className="text-xs text-muted-foreground mt-0.5">{note}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Response Promise */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">
                      We respond to all inquiries within 30 minutes during business hours. For urgent same-day needs please call or text directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT — Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>

                {submitted ? (
                  <Card>
                    <CardContent className="p-8 text-center space-y-4">
                      <CheckCircle className="h-12 w-12 text-primary mx-auto" />
                      <h3 className="text-xl font-bold text-foreground">Thank you {form.name.split(' ')[0]}!</h3>
                      <p className="text-muted-foreground">
                        We received your message and will contact you within 30 minutes to confirm your appointment.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        For immediate scheduling call{' '}
                        <a href="tel:5132269052" className="font-semibold text-primary">(513) 226-9052</a>
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                      <Input id="name" value={form.name} onChange={e => update('name', e.target.value)} required maxLength={100} />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                      <Input id="phone" type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} required maxLength={20} />
                      <p className="text-xs text-muted-foreground mt-1">We may text you to confirm your appointment</p>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" value={form.email} onChange={e => update('email', e.target.value)} maxLength={255} />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Needed <span className="text-destructive">*</span></Label>
                      <Select value={form.service} onValueChange={v => update('service', v)}>
                        <SelectTrigger id="service"><SelectValue placeholder="Select a service" /></SelectTrigger>
                        <SelectContent>
                          {SERVICE_OPTIONS.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="zip">Your City or ZIP Code <span className="text-destructive">*</span></Label>
                      <Input id="zip" value={form.zip} onChange={e => update('zip', e.target.value)} required maxLength={30} />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Date and Time</Label>
                      <Input id="time" value={form.preferredTime} onChange={e => update('preferredTime', e.target.value)} placeholder="Example: Tomorrow afternoon or ASAP" maxLength={100} />
                    </div>
                    <div>
                      <Label htmlFor="message">Message or Special Instructions</Label>
                      <Textarea id="message" value={form.message} onChange={e => update('message', e.target.value)} placeholder="Tell us about your documents or any special circumstances such as hospital location or after hours need" maxLength={1000} rows={4} />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold text-lg px-8 py-3">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Or call us directly at <a href="tel:5132269052" className="font-semibold text-primary">(513) 226-9052</a> for immediate scheduling
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SMS Card */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card>
              <CardContent className="p-8 text-center">
                <MessageSquare className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Prefer to Text?</h3>
                <p className="text-muted-foreground mb-6">
                  Text us at (513) 226-9052 for fastest response. Include your name, the documents you need notarized, and your general location.
                </p>
                <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold" asChild>
                  <a href="sms:5132269052">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Open Text Message
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
