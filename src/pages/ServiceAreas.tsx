import Seo from '@/components/Seo';
import { BasePageTemplate } from '@/components/templates/BasePageTemplate';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, FileText, Home, Building, Shield, Globe, Briefcase, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '@/config/business';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import LocationIndex from '@/components/LocationIndex';
import { LOCATION_PAGES } from '@/data/locationPages';
import { getPrimaryServices, getSpecializedServices } from '@/data/services';

// Build county data dynamically from LOCATION_PAGES
const buildCountyData = () => {
  const countyMap: Record<string, { cities: Map<string, string[]>; zips: Set<string> }> = {};
  
  LOCATION_PAGES.forEach(location => {
    const county = location.county;
    if (!countyMap[county]) {
      countyMap[county] = { cities: new Map(), zips: new Set() };
    }
    
    // Add city with its ZIP
    const cityZips = countyMap[county].cities.get(location.city) || [];
    if (!cityZips.includes(location.primaryZip)) {
      cityZips.push(location.primaryZip);
    }
    countyMap[county].cities.set(location.city, cityZips);
    countyMap[county].zips.add(location.primaryZip);
  });

  // County metadata with additional cities/zips not in location pages
  const countyMeta: Record<string, { 
    description: string; 
    featured: boolean; 
    additionalCities?: { city: string; zips: string[] }[];
  }> = {
    'Hamilton': {
      description: 'Full mobile notary services throughout Hamilton County including downtown Cincinnati, emergency visits, and hospital/bedside service.',
      featured: true,
      additionalCities: [
        { city: 'Norwood', zips: ['45212'] },
        { city: 'Loveland', zips: ['45140'] },
        { city: 'Montgomery', zips: ['45242'] },
        { city: 'Reading', zips: ['45215'] },
        { city: 'Wyoming', zips: ['45215'] },
        { city: 'Madeira', zips: ['45243'] },
        { city: 'Indian Hill', zips: ['45243'] },
        { city: 'Mariemont', zips: ['45227'] },
        { city: 'Terrace Park', zips: ['45174'] },
        { city: 'Sharonville', zips: ['45241'] },
        { city: 'Forest Park', zips: ['45240'] },
        { city: 'Evendale', zips: ['45241'] }
      ]
    },
    'Warren': {
      description: 'Professional notary services for estate planning, real estate closings, and business documents throughout Warren County.',
      featured: true,
      additionalCities: [
        { city: 'Springboro', zips: ['45066'] },
        { city: 'Franklin', zips: ['45005'] },
        { city: 'Waynesville', zips: ['45068'] },
        { city: 'Morrow', zips: ['45152'] },
        { city: 'South Lebanon', zips: ['45065'] },
        { city: 'Maineville', zips: ['45039'] },
        { city: 'Oregonia', zips: ['45054'] },
        { city: 'Harveysburg', zips: ['45032'] }
      ]
    },
    'Butler': {
      description: 'Mobile notary and loan signing services for residential and commercial needs throughout Butler County.',
      featured: true,
      additionalCities: [
        { city: 'Monroe', zips: ['45050'] },
        { city: 'Trenton', zips: ['45067'] },
        { city: 'Liberty Township', zips: ['45044'] },
        { city: 'Seven Mile', zips: ['45062'] }
      ]
    },
    'Montgomery': {
      description: 'Same-day and emergency notary services throughout the Dayton metro area including Wright-Patterson AFB.',
      featured: true,
      additionalCities: [
        { city: 'Beavercreek', zips: ['45430', '45431', '45432'] },
        { city: 'Englewood', zips: ['45322'] },
        { city: 'Trotwood', zips: ['45426'] },
        { city: 'Vandalia', zips: ['45377'] },
        { city: 'Riverside', zips: ['45431'] },
        { city: 'West Carrollton', zips: ['45449'] },
        { city: 'Germantown', zips: ['45327'] },
        { city: 'Brookville', zips: ['45309'] }
      ]
    },
    'Clermont': {
      description: 'Professional mobile notary services for healthcare, legal, and financial documents throughout Clermont County.',
      featured: false,
      additionalCities: [
        { city: 'Milford', zips: ['45150'] },
        { city: 'Batavia', zips: ['45103'] },
        { city: 'Amelia', zips: ['45102'] },
        { city: 'Goshen', zips: ['45122'] },
        { city: 'Bethel', zips: ['45106'] },
        { city: 'New Richmond', zips: ['45157'] },
        { city: 'Owensville', zips: ['45160'] },
        { city: 'Williamsburg', zips: ['45176'] }
      ]
    },
    'Greene': {
      description: 'Mobile notary services near Wright-Patterson AFB and throughout Xenia, Beavercreek, and Fairborn areas.',
      featured: false,
      additionalCities: [
        { city: 'Xenia', zips: ['45385'] },
        { city: 'Fairborn', zips: ['45324'] },
        { city: 'Yellow Springs', zips: ['45387'] },
        { city: 'Bellbrook', zips: ['45305'] },
        { city: 'Cedarville', zips: ['45314'] },
        { city: 'Jamestown', zips: ['45335'] }
      ]
    },
    'Clinton': {
      description: 'Professional notary services for rural Clinton County communities with flexible scheduling and same-day availability.',
      featured: false,
      additionalCities: [
        { city: 'Wilmington', zips: ['45177'] },
        { city: 'Blanchester', zips: ['45107'] },
        { city: 'Sabina', zips: ['45169'] },
        { city: 'Clarksville', zips: ['45113'] },
        { city: 'Port William', zips: ['45164'] }
      ]
    },
    'Brown': {
      description: 'Rural and residential notary services with flexible scheduling throughout Brown County.',
      featured: false,
      additionalCities: [
        { city: 'Georgetown', zips: ['45121'] },
        { city: 'Mount Orab', zips: ['45154'] },
        { city: 'Ripley', zips: ['45167'] },
        { city: 'Sardinia', zips: ['45171'] },
        { city: 'Hamersville', zips: ['45130'] }
      ]
    },
    'Miami': {
      description: 'Mobile notary services serving Troy, Piqua, and the greater Miami County area with same-day availability.',
      featured: false,
      additionalCities: [
        { city: 'Piqua', zips: ['45356'] },
        { city: 'Tipp City', zips: ['45371'] },
        { city: 'Covington', zips: ['45318'] },
        { city: 'West Milton', zips: ['45383'] }
      ]
    }
  };

  // Build final county areas
  const countyOrder = ['Hamilton', 'Warren', 'Butler', 'Montgomery', 'Greene', 'Clinton', 'Clermont', 'Brown', 'Miami'];
  
  return countyOrder.filter(county => countyMap[county] || countyMeta[county]).map(county => {
    const data = countyMap[county] || { cities: new Map(), zips: new Set() };
    const meta = countyMeta[county] || { description: '', featured: false };
    
    // Merge additional cities
    if (meta.additionalCities) {
      meta.additionalCities.forEach(({ city, zips }) => {
        const existing = data.cities.get(city) || [];
        zips.forEach(zip => {
          if (!existing.includes(zip)) existing.push(zip);
          data.zips.add(zip);
        });
        data.cities.set(city, existing);
      });
    }

    // Convert to sorted arrays
    const cities = Array.from(data.cities.entries())
      .map(([city, zips]) => ({ city, zips: zips.sort() }))
      .sort((a, b) => a.city.localeCompare(b.city));

    return {
      name: `${county} County`,
      county,
      cities,
      zips: Array.from(data.zips).sort(),
      description: meta.description,
      featured: meta.featured
    };
  });
};

const COUNTY_AREAS = buildCountyData();

// Get all available services for display
const ALL_SERVICES = [
  ...getPrimaryServices(),
  ...getSpecializedServices().slice(0, 2) // Add Business & Healthcare
];

const ServiceAreas = () => {
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
        showCTA={false}
      >
        {/* Counties Overview - Now immediately after hero */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Counties We Serve</h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Click on any city to view local notary services, or browse all locations below.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {COUNTY_AREAS.map((area, index) => (
                <Card key={index} className={`h-full ${area.featured ? 'ring-2 ring-primary/20' : ''}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        {area.name}
                      </CardTitle>
                      {area.featured && (
                        <Badge variant="default">Core Area</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>
                      {area.description}
                    </CardDescription>
                    
                    {/* Services Available */}
                    <div>
                      <p className="font-medium text-sm mb-2 flex items-center gap-1">
                        <FileText className="h-4 w-4 text-primary" />
                        Services Available:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {ALL_SERVICES.map((service) => (
                          <Badge key={service.id} variant="outline" className="text-xs">
                            {service.serviceName}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Cities & ZIP Codes */}
                    <div>
                      <p className="font-medium text-sm mb-2">Cities & ZIP Codes:</p>
                      <div className="flex flex-wrap gap-2">
                        {area.cities.slice(0, 8).map(({ city, zips }, cityIndex) => (
                          <Badge key={cityIndex} variant="secondary" className="text-xs">
                            {city} ({zips.join(', ')})
                          </Badge>
                        ))}
                        {area.cities.length > 8 && (
                          <Badge variant="secondary" className="text-xs bg-primary/10">
                            +{area.cities.length - 8} more cities
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Total ZIP codes served */}
                    <p className="text-xs text-muted-foreground">
                      {area.zips.length} ZIP codes served in {area.name}
                    </p>
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