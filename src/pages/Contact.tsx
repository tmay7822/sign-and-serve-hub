import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-8 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact SignRight Mobile Notary
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Get in touch for a free quote or to schedule your appointment today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-8 w-8 text-brand-blue mx-auto mb-2" />
                  <CardTitle className="text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">(513) 226-9052</p>
                  <p className="text-sm text-muted-foreground">Available 7 days a week</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Mail className="h-8 w-8 text-brand-blue mx-auto mb-2" />
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Terry@SignedOnTime.com</p>
                  <p className="text-sm text-muted-foreground">Quick response guaranteed</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-brand-blue mx-auto mb-2" />
                  <CardTitle className="text-lg">Service Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Cincinnati-Dayton, OH</p>
                  <p className="text-sm text-muted-foreground">6 counties served</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-8 w-8 text-brand-blue mx-auto mb-2" />
                  <CardTitle className="text-lg">Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">7 AM - 10 PM</p>
                  <p className="text-sm text-muted-foreground">Including weekends</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-navy mb-6">Get Your Free Quote</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 30 minutes with a personalized quote 
                  for your notary needs.
                </p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                      <Input id="lastName" placeholder="Smith" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input id="phone" type="tel" placeholder="(513) 226-9052" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                      <Input id="email" type="email" placeholder="Terry@SignedOnTime.com" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium mb-2">ZIP Code</label>
                      <Input id="zip" placeholder="45202" required />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">Preferred Time</label>
                      <select id="preferredTime" className="w-full p-2 border border-input rounded-md" required>
                        <option value="">Select time</option>
                        <option value="today">Today</option>
                        <option value="tomorrow">Tomorrow</option>
                        <option value="this-week">This Week</option>
                        <option value="next-week">Next Week</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Services Needed</label>
                    <div className="grid md:grid-cols-2 gap-3">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="services" value="general-notary" />
                        <span>General Notary</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="services" value="loan-signings" />
                        <span>Loan Signings</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="services" value="estate-plans" />
                        <span>Estate Plans</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="services" value="real-estate" />
                        <span>Real Estate</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="services" value="apostille" />
                        <span>Apostille</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="services" value="business-services" />
                        <span>Business Services</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Additional Details</label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your notary needs, preferred location, or any special requirements..."
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I accept the Privacy Policy & Terms of Service
                    </label>
                  </div>
                  
                  <Button type="submit" size="lg" variant="cta" className="w-full">
                    Send Request
                  </Button>
                </form>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-navy mb-6">Service Areas</h3>
                <p className="text-muted-foreground mb-6">
                  We proudly serve clients throughout Southwest Ohio, including all major cities, 
                  suburbs, and rural areas in the following counties:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Hamilton County</h4>
                    <p className="text-sm text-muted-foreground">
                      Cincinnati, Springdale, Forest Park, Blue Ash, Norwood, Reading, 
                      Wyoming, Deer Park, and all surrounding communities.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Warren County</h4>
                    <p className="text-sm text-muted-foreground">
                      Mason, Lebanon, Springboro, Franklin, South Lebanon, Waynesville, 
                      Maineville, and greater Warren County area.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Montgomery County</h4>
                    <p className="text-sm text-muted-foreground">
                      Dayton, Kettering, Centerville, Vandalia, Huber Heights, Miamisburg, 
                      Oakwood, and all Dayton metro suburbs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Butler County</h4>
                    <p className="text-sm text-muted-foreground">
                      Hamilton, West Chester, Oxford, Fairfield, Monroe, Trenton, 
                      and surrounding Butler County communities.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Greene County</h4>
                    <p className="text-sm text-muted-foreground">
                      Beavercreek, Fairborn, Xenia, Bellbrook, Yellow Springs, 
                      and greater Greene County area.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Clinton County</h4>
                    <p className="text-sm text-muted-foreground">
                      Wilmington, Blanchester, Sabina, Clarksville, Midland, 
                      and all Clinton County locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default Contact;