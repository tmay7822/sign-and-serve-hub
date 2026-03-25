import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

import { PricingDisplay } from '@/components/PricingDisplay';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Shield, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { EMERGENCY_FEES } from '@/config/servicepricing';
import GoogleReviewsBadge from '@/components/GoogleReviewsBadge';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`Pricing - ${BUSINESS_CONFIG.name}`}
        description="Transparent pricing for mobile notary services. Base rates starting at $75 with clear travel fees. Same-day appointments available."
      />
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional mobile notary services with clear, upfront pricing. 
                No hidden fees, no surprises.
              </p>
              <div className="flex justify-center mb-6">
                <GoogleReviewsBadge variant="card" />
              </div>
              <StandardCTAButtons />
            </div>
          </div>
        </section>

        {/* Pricing Display */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <PricingDisplay showCalculator={true} />
            </div>
          </div>
        </section>

        {/* Additional Fees */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Additional Services & Fees</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Rush Service
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Same Day</span>
                        <Badge>+${EMERGENCY_FEES.sameDay}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>After Hours/Weekends</span>
                        <Badge>+${EMERGENCY_FEES.afterHours}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Holidays</span>
                        <Badge>+${EMERGENCY_FEES.holidays}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      What's Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Mobile service to your location</li>
                      <li>• Professional notarization</li>
                      
                      <li>• Notary seal & signature</li>
                      <li>• Digital copies (when requested)</li>
                      <li>• $100K E&O insurance coverage</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Contact for Custom Quote
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Large volume signings, corporate contracts, or special arrangements
                      </p>
                      <StandardCTAButtons showCalculator={false} />
                      <p className="text-xs text-center">
                        Call {BUSINESS_CONFIG.phone} for immediate assistance
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How is travel calculated?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Travel fees are based on ZIP code zones. Our primary service area 
                      (Hamilton, Butler, Warren counties) has no travel fee. Secondary zones 
                      have a flat $25 fee.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">When is payment due?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Payment is due at the time of service. We accept cash, check, 
                      Venmo, Zelle, and all major credit cards.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can I get a discount for multiple documents?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Yes! Multiple documents in the same appointment often qualify for 
                      package pricing. Contact us for a custom quote.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What if I need to cancel?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Cancellations with 2+ hours notice have no fee. Same-day cancellations 
                      may incur a $25 trip fee if we're already en route.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Disclaimer */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg font-bold text-foreground">
                <strong>Pricing is subject to change and is based on Ohio law, travel fees, emergency services, and will be determined when we speak.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Schedule?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book online or call for immediate assistance. Same-day appointments available.
              </p>
              <StandardCTAButtons />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  );
}