// ENHANCED SERVICE HUB TEMPLATE
// Service category pages with internal link clusters for SEO

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import QuickAnswerSection from '@/components/SEO/QuickAnswerSection';
import LocalBusinessSchema from '@/components/SEO/LocalBusinessSchema';
import { Service } from '@/data/services';
import { BlogPost, getPostsByService } from '@/data/blog';
import { getRoutesByService } from '@/data/locations';
import { getServiceContent } from '@/data/serviceContent';
import { BUSINESS_CONFIG } from '@/config/business';
import { ArrowRight, MapPin, FileText, Users, Clock, CheckCircle, Lightbulb } from 'lucide-react';

interface ServiceHubEnhancedProps {
  service: Service;
  quickAnswer?: {
    question: string;
    answer: string;
  };
  showBooking?: boolean;
  defaultService?: string;
}

const ServiceHubEnhanced: React.FC<ServiceHubEnhancedProps> = ({
  service,
  quickAnswer,
  showBooking = false,
  defaultService
}) => {
  const blogPosts = getPostsByService(service.slug).slice(0, 6);
  const localRoutes = getRoutesByService(service.slug).slice(0, 8);
  const serviceContent = getServiceContent(service.id);
  
  const defaultQuickAnswer = {
    question: `What is ${service.serviceName}?`,
    answer: service.summary
  };

  const answerData = quickAnswer || defaultQuickAnswer;

  return (
    <div className="min-h-screen bg-background">
      <LocalBusinessSchema 
        serviceName={service.serviceName}
        serviceDescription={service.summary}
      />
      <BreadcrumbSchema />
      <Header />
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 max-w-7xl pt-4">
        <BreadcrumbNav />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {service.serviceName}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {service.summary}
            </p>
            
            <StandardCTAButtons 
              defaultService={defaultService}
              className="text-lg"
            />
          </div>
        </div>
      </section>

      {/* Service Details with Document List */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - Left 2 columns */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Complete {service.serviceName} Services
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                {service.description}
              </div>
              
              {/* What We Notarize - Document List */}
              {serviceContent?.specificServices && serviceContent.specificServices.length > 0 && (
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    What We Notarize
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceContent.specificServices.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Quick Answer for AI Search - Below Document List */}
              <div className="mt-8">
                <QuickAnswerSection
                  question={answerData.question}
                  answer={answerData.answer}
                  location={BUSINESS_CONFIG.serviceArea.primary}
                  service={service.serviceName.toLowerCase()}
                />
              </div>
            </div>
            
            {/* Sidebar - Right column */}
            <div className="space-y-6">
              {/* Service Highlights */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Service Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Same-day service available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Mobile service to your location</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Licensed & insured notary</span>
                  </div>
                </div>
                
                {showBooking && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <StandardCTAButtons 
                      defaultService={defaultService}
                      className="flex-col gap-3"
                    />
                  </div>
                )}
              </Card>
              
              {/* Quick Tips */}
              {serviceContent?.tips && serviceContent.tips.length > 0 && (
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Quick Tips
                  </h3>
                  <div className="space-y-4">
                    {serviceContent.tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{tip.title}</h4>
                          <p className="text-muted-foreground text-sm">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      {serviceContent?.process && (
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {serviceContent.process.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceContent.process.steps.map((step, index) => (
                <div key={index} className="text-center bg-background rounded-lg p-6 shadow-sm border border-border">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local Service Areas */}
      {localRoutes.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {service.serviceName} Service Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                Professional mobile service throughout Southwest Ohio
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {localRoutes.map(route => (
                <Card key={route.path} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">
                      <Link 
                        to={route.path} 
                        className="hover:text-primary transition-colors"
                      >
                        {route.city}, {route.state}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {route.county} County • {route.primaryZip}
                    </p>
                    <Link 
                      to={route.path}
                      className="inline-flex items-center text-sm text-primary hover:underline"
                    >
                      Local service details
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/service-areas">
                  View All Service Areas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Expert Guides & Resources */}
      {blogPosts.length > 0 && (
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Expert {service.serviceName} Guides
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive resources and professional tips
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {post.readTime} min read
                      </span>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-primary hover:underline font-medium"
                      >
                        Read Guide
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready for Professional {service.serviceName}?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started with our expert mobile notary services today. 
            Same-day appointments available throughout {BUSINESS_CONFIG.serviceArea.primary}.
          </p>
          
          <StandardCTAButtons 
            defaultService={defaultService}
            className="text-lg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceHubEnhanced;