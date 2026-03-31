import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BasePageTemplate } from '@/components/templates/BasePageTemplate';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, MapPin, Clock, Users, Shield, Star, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { useGoogleReviews } from '@/hooks/useGoogleReviews';
import nnaLogo from '@/assets/nna-logo.png';
import lssLogo from '@/assets/lss-logo.png';

// Google logo SVG component
const GoogleLogo = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// Avatar colors for reviews
const avatarColors = [
  'bg-brand-blue',
  'bg-brand-navy',
  'bg-brand-gold',
  'bg-emerald-600',
  'bg-purple-600',
  'bg-rose-600',
];

const AboutUs = () => {
  const certifications = [
    {
      name: "National Notary Association Certified",
      logo: nnaLogo,
      description: "Certified and background-screened notary public"
    },
    {
      name: "Loan Signing System Certified",
      logo: lssLogo,
      description: "Specialized training in loan document execution"
    }
  ];

  const serviceAreas = [
    "Hamilton County", "Butler County", "Warren County", 
    "Clermont County", "Brown County", "Montgomery County"
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Available 7 Days a Week",
      description: "Flexible scheduling including evenings and weekends to meet your needs"
    },
    {
      icon: MapPin,
      title: "Mobile Service Area",
      description: "We come to you anywhere in Southwest Ohio - home, office, or hospital"
    },
    {
      icon: Shield,
      title: "Fully Insured & Bonded",
      description: "Complete protection with E&O insurance and surety bond coverage"
    },
    {
      icon: Users,
      title: "Professional Experience",
      description: "Thousands of successful notarizations with attention to detail"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About {BUSINESS_CONFIG.name} - Professional Mobile Notary Services</title>
        <meta name="description" content={`Learn about ${BUSINESS_CONFIG.name}, your trusted mobile notary service in Southwest Ohio. Professional, certified, and available 7 days a week.`} />
        <meta name="keywords" content="about mobile notary, notary public Southwest Ohio, certified notary, professional notary services" />
      </Helmet>

      <BasePageTemplate
        heroSection={
          <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About {BUSINESS_CONFIG.name}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your trusted mobile notary service bringing professional document services directly to you throughout Southwest Ohio
              </p>
            </div>
          </section>
        }
        defaultService="general-notary"
      >
        {/* Company Story */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <Card className="p-8">
              <CardContent className="text-lg leading-relaxed space-y-4">
                <p>
                  At {BUSINESS_CONFIG.name}, we understand that your time is valuable and important documents can't wait. 
                  That's why we bring professional notary services directly to you, whether you're at home, 
                  in the office, or even at a hospital.
                </p>
                <p>
                  Founded on the principles of reliability, professionalism, and convenience, we've built our 
                  reputation by making the notarization process as smooth and stress-free as possible. 
                  From simple acknowledgments to complex <Link to="/loan-signings" className="text-primary hover:underline">loan signings</Link>, we handle every document with the same 
                  level of care and attention to detail.
                </p>
                <p>
                  Our goal is simple: to provide you with fast, accurate, and professional notary services 
                  when and where you need them most. Whether you need <Link to="/estate-plans" className="text-primary hover:underline">estate planning documents</Link> notarized 
                  or require <Link to="/healthcare-notary" className="text-primary hover:underline">hospital notary services</Link>, we're here to help.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Professional Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center p-6">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <img 
                        src={cert.logo} 
                        alt={cert.name}
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                    <CardTitle className="text-xl">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {cert.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="text-center p-6 h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <item.icon className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area CTA */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Service Areas</h2>
            <Card className="p-8 text-center">
              <CardContent>
                <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Serving Southwest Ohio
                </h3>
                <p className="text-lg mb-6">
                  We provide mobile notary services across 6 counties including 
                  Hamilton, Warren, Butler, Montgomery, Clermont, and Brown counties.
                </p>
                <Link to="/service-areas">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-colors shadow-md hover:shadow-lg">
                    View Full Coverage Map & Cities
                    <MapPin className="h-5 w-5" />
                  </button>
                </Link>
                <p className="text-sm text-muted-foreground mt-4">
                  See detailed city-by-city coverage and ZIP code information
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience & Stats */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Experience</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">1000+</CardTitle>
                  <CardDescription>Documents Notarized</CardDescription>
                </CardHeader>
              </Card>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">7 Days</CardTitle>
                  <CardDescription>Weekly Availability</CardDescription>
                </CardHeader>
              </Card>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">6 Counties</CardTitle>
                  <CardDescription>Southwest Ohio Coverage</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <GoogleLogo className="h-7 w-7" />
                <h2 className="text-3xl font-bold">What Our Clients Say</h2>
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <span className="text-xl font-bold text-foreground">{GOOGLE_REVIEWS_AGGREGATE.averageRating.toFixed(1)}</span>
                <span className="text-muted-foreground">({GOOGLE_REVIEWS_AGGREGATE.totalReviews} reviews)</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFeaturedReviews(6).map((review, index) => (
                <Card key={review.id} className="h-full">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`${avatarColors[index % avatarColors.length]} h-10 w-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                        {review.reviewerInitial}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground text-sm truncate">{review.reviewerName}</div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-brand-gold text-brand-gold" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed line-clamp-4">
                      "{review.text}"
                    </p>
                    {review.location && (
                      <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {review.location}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/reviews">
                <Button variant="outline" size="lg" className="font-semibold">
                  See All {GOOGLE_REVIEWS_AGGREGATE.totalReviews} Reviews
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Professional Blog Resources */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Professional Resources</h2>
            <Card className="p-8">
              <CardContent>
                <h3 className="text-xl mb-6">Expert Guidance & Educational Content</h3>
                <div className="space-y-4">
                  <p>
                    For detailed guidance on specific notarization topics, explore our comprehensive blog articles:
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link to="/blog/witness-requirements" className="text-primary hover:underline block p-3 bg-secondary rounded-lg">
                      • Ohio Witness Requirements Guide
                    </Link>
                    <Link to="/blog/notary-fees-explained" className="text-primary hover:underline block p-3 bg-secondary rounded-lg">
                      • Notary Fees & Pricing Explained
                    </Link>
                    <Link to="/blog/trust-certification-banking" className="text-primary hover:underline block p-3 bg-secondary rounded-lg">
                      • Trust Certification for Banking
                    </Link>
                    <Link to="/blog/hcpoa-living-will-guide" className="text-primary hover:underline block p-3 bg-secondary rounded-lg">
                      • Healthcare POA & Living Wills
                    </Link>
                    <Link to="/blog/what-happens-loan-signing" className="text-primary hover:underline block p-3 bg-secondary rounded-lg">
                      • What Happens at Loan Signings
                    </Link>
                    <Link to="/blog/hospital-notary-what-to-expect" className="text-primary hover:underline block p-3 bg-secondary rounded-lg">
                      • Hospital Notary Services Guide
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We show up on time, every time. Your appointments are sacred to us, 
                    and we understand the importance of meeting deadlines.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Professionalism</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Every interaction reflects our commitment to excellence. 
                    From our appearance to our documentation, we maintain the highest standards.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Attention to detail is paramount in our work. We ensure every document 
                    is properly executed according to Ohio notary law and your specific requirements.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Convenience</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We come to you, saving you time and eliminating the hassle of finding 
                    a notary during business hours. Your convenience is our priority.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </BasePageTemplate>
    </>
  );
};

export default AboutUs;