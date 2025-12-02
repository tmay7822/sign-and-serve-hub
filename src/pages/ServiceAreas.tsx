import Seo from '@/components/Seo';
import { BasePageTemplate } from '@/components/templates/BasePageTemplate';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '@/config/business';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import LocationIndex from '@/components/LocationIndex';

const ServiceAreas = () => {
  const countyAreas = [
    {
      name: 'Hamilton County',
      cities: ['Cincinnati', 'Blue Ash', 'Mason', 'Springdale', 'West Chester'],
      description: 'Full mobile notary services throughout Hamilton County including emergency and hospital visits.',
      featured: true
    },
    {
      name: 'Warren County',
      cities: ['Lebanon', 'Mason', 'Springboro', 'Franklin'],
      description: 'Professional notary services for estate planning, real estate, and business documents.',
      featured: true
    },
    {
      name: 'Butler County',
      cities: ['Hamilton', 'Fairfield', 'Oxford', 'Monroe'],
      description: 'Mobile notary and loan signing services for residential and commercial needs.'
    },
    {
      name: 'Montgomery County',
      cities: ['Dayton', 'Kettering', 'Beavercreek', 'Centerville'],
      description: 'Same-day and emergency notary services throughout the Dayton metro area.'
    },
    {
      name: 'Clermont County',
      cities: ['Milford', 'Loveland', 'Batavia'],
      description: 'Professional mobile notary services for healthcare, legal, and financial documents.'
    },
    {
      name: 'Greene County',
      cities: ['Xenia', 'Beavercreek', 'Fairborn', 'Yellow Springs', 'Bellbrook'],
      description: 'Mobile notary services near Wright-Patterson AFB and throughout the Xenia and Beavercreek areas.'
    },
    {
      name: 'Clinton County',
      cities: ['Wilmington', 'Blanchester', 'Sabina'],
      description: 'Professional notary services for rural Clinton County communities with flexible scheduling.'
    },
    {
      name: 'Brown County',
      cities: ['Georgetown', 'Mount Orab', 'Ripley'],
      description: 'Rural and residential notary services with flexible scheduling.'
    }
  ];

  return (
    <>
      <Seo
        title="Service Areas - Mobile Notary Throughout Southwest Ohio"
        description="Professional mobile notary services across Hamilton, Warren, Butler, Montgomery, Greene, Clinton, Clermont, and Brown counties. Same-day appointments available."
        keywords="mobile notary Southwest Ohio, Hamilton County notary, Warren County mobile notary, Montgomery County notary services"
        canonical="https://www.signedontime.com/service-areas"
      />

      <BasePageTemplate
        heroSection={
          <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
            <div className="container mx-auto px-4">
              <BreadcrumbNav />
              <div className="text-center mt-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service Areas</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Professional mobile notary services throughout Southwest Ohio. We come to you - home, office, or hospital.
                </p>
              </div>
            </div>
          </section>
        }
        defaultService="general-notary"
      >
        {/* Counties Overview */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Counties We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countyAreas.map((area, index) => (
                <Card key={index} className={`h-full ${area.featured ? 'ring-2 ring-primary/20' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        {area.name}
                      </CardTitle>
                      {area.featured && (
                        <Badge variant="default">Featured</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {area.description}
                    </CardDescription>
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Major Cities:</p>
                      <div className="flex flex-wrap gap-2">
                        {area.cities.map((city, cityIndex) => (
                          <Badge key={cityIndex} variant="secondary" className="text-xs">
                            {city}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Location Pages Index */}
        <LocationIndex />

        {/* Service Information */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Service Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Flexible Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Available 7 days a week including evenings and weekends. 
                    Emergency services available 24/7.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Mobile Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We come to your location - home, office, hospital, or anywhere 
                    you need professional notary services.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardHeader>
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Easy Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Call {BUSINESS_CONFIG.phone} or book online for fast, 
                    professional notary services in your area.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 bg-primary/5">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">Don't See Your Area Listed?</h3>
                <p className="text-lg mb-6">
                  We may still be able to help! Our service area is continuously expanding, 
                  and we accommodate special requests when possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Contact Us Today
                  </Link>
                  <a 
                    href={`tel:${BUSINESS_CONFIG.phone}`}
                    className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Call {BUSINESS_CONFIG.phone}
                  </a>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground mb-4">
                    Want to learn more about our company?
                  </p>
                  <Link 
                    to="/about" 
                    className="text-primary hover:underline font-medium"
                  >
                    Read Our Story & Values →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </BasePageTemplate>
    </>
  );
};

export default ServiceAreas;