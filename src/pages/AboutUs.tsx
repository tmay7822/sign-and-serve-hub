import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BasePageTemplate } from '@/components/templates/BasePageTemplate';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, MapPin, Clock, Users, Shield } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import nnaLogo from '@/assets/nna-logo.png';
import lssLogo from '@/assets/lss-logo.png';

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

        {/* Service Area Links */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Service Areas</h2>
            <Card className="p-8">
              <CardContent>
                <p className="text-lg text-center mb-6">
                  We proudly serve clients throughout Southwest Ohio, including all cities and townships in:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <Badge variant="secondary" className="text-sm py-2 px-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        {area}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center space-y-4">
                  <p className="text-muted-foreground">
                    Explore our specialized services in key areas:
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link to="/notary-cincinnati-45202" className="text-primary hover:underline">
                      Cincinnati Notary Services
                    </Link>
                    <Link to="/notary-dayton-45402" className="text-primary hover:underline">
                      Dayton Mobile Notary
                    </Link>
                    <Link to="/loan-signings" className="text-primary hover:underline">
                      Loan Signing Services
                    </Link>
                    <Link to="/estate-plans" className="text-primary hover:underline">
                      Estate Planning Documents
                    </Link>
                  </div>
                </div>
                <p className="text-center mt-6 text-muted-foreground">
                  Don't see your location? Call us - we may still be able to help!
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