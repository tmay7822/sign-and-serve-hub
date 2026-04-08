import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, ArrowRight, MapPin, Zap, Shield } from 'lucide-react';
import { PRICING_TIERS, PricingTier } from '@/config/pricing';
import Seo from '@/components/Seo';

const WhiteLabelPricing = () => {
  const [selectedTier, setSelectedTier] = useState<string>('professional');

  const handleGetStarted = (tier: PricingTier) => {
    const subject = encodeURIComponent(`White Label Setup - ${tier.name} Package`);
    const body = encodeURIComponent(`
Hi,

I'm interested in the ${tier.name} package for my notary business.

Package Details:
- ${tier.name}: $${tier.basePrice.toLocaleString()}
- Up to ${tier.maxLocations} locations
- ${tier.description}

Please contact me to discuss setup and customization options.

Thank you!
    `.trim());
    
    window.location.href = `mailto:sales@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            White Label Solution
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Launch Your Notary Website
            <span className="text-primary block">In 48 Hours</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional, SEO-optimized notary websites with local pages for every service area. 
            Complete with booking forms, schema markup, and mobile optimization.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-foreground">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-medium">48-Hour Setup</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-medium">SEO Optimized</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Local Pages Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {PRICING_TIERS.map((tier) => (
              <Card 
                key={tier.id}
                className={`relative transition-all duration-300 hover:shadow-xl ${
                  tier.recommended 
                    ? 'ring-2 ring-primary shadow-lg scale-105' 
                    : selectedTier === tier.id 
                      ? 'ring-1 ring-primary/50' 
                      : ''
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1 text-sm font-medium">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {tier.name}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4">
                    {tier.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      ${tier.basePrice.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      one-time
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Up to {tier.maxLocations} location pages
                  </p>
                </CardHeader>

                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    onClick={() => handleGetStarted(tier)}
                    className={`w-full ${
                      tier.recommended 
                        ? 'bg-primary hover:bg-primary/90 text-white' 
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Everything You Need to Dominate Local SEO
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Local Landing Pages",
                description: "Individual pages for each city/county you serve with optimized content",
                icon: <MapPin className="h-8 w-8 text-primary" />
              },
              {
                title: "Schema Markup",
                description: "Rich snippets and structured data for better search visibility",
                icon: <Check className="h-8 w-8 text-primary" />
              },
              {
                title: "Mobile Optimized",
                description: "Responsive design that looks perfect on all devices",
                icon: <Zap className="h-8 w-8 text-primary" />
              },
              {
                title: "Contact Forms",
                description: "Lead capture forms integrated with your email",
                icon: <Shield className="h-8 w-8 text-primary" />
              },
              {
                title: "Blog System",
                description: "SEO-optimized blog with notary-specific content templates",
                icon: <Star className="h-8 w-8 text-primary" />
              },
              {
                title: "Fast Loading",
                description: "Optimized for speed and Core Web Vitals",
                icon: <ArrowRight className="h-8 w-8 text-primary" />
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Launch Your Notary Website?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of notaries who've increased their bookings with our proven local SEO system.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
            onClick={() => handleGetStarted(PRICING_TIERS.find(t => t.recommended) || PRICING_TIERS[1])}
          >
            Get Started Today
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WhiteLabelPricing;