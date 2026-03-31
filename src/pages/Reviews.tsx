import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BasePageTemplate } from '@/components/templates/BasePageTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Filter, X, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { useGoogleReviews } from '@/hooks/useGoogleReviews';
import ReviewSchema from '@/components/SEO/ReviewSchema';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Google logo SVG component
const GoogleLogo = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// Format date to relative time
const formatRelativeDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
};

// Service display names
const serviceDisplayNames: Record<string, string> = {
  'loan-signing': 'Loan Signing',
  'mortgage': 'Mortgage',
  'real-estate': 'Real Estate',
  'estate': 'Estate Planning',
  'title-transfer': 'Title Transfer',
  'mobile-notary': 'Mobile Notary',
  'apostille': 'Apostille',
  'urgent': 'Urgent Service',
  'first-home': 'First Home Purchase',
};

// Avatar colors
const avatarColors = [
  'bg-brand-blue',
  'bg-brand-navy',
  'bg-brand-gold',
  'bg-emerald-600',
  'bg-purple-600',
  'bg-rose-600',
  'bg-cyan-600',
  'bg-orange-600',
];

const Reviews = () => {
  const { averageRating, totalReviews } = GOOGLE_REVIEWS_AGGREGATE;
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  
  const uniqueServices = useMemo(() => getUniqueServices(), []);
  const uniqueLocations = useMemo(() => getUniqueLocations(), []);
  
  const filteredReviews = useMemo(() => {
    return GOOGLE_REVIEWS.filter(review => {
      const matchesService = serviceFilter === 'all' || review.service === serviceFilter;
      const matchesLocation = locationFilter === 'all' || review.location === locationFilter;
      return matchesService && matchesLocation;
    });
  }, [serviceFilter, locationFilter]);
  
  const hasFilters = serviceFilter !== 'all' || locationFilter !== 'all';
  
  const clearFilters = () => {
    setServiceFilter('all');
    setLocationFilter('all');
  };

  return (
    <>
      <Helmet>
        <title>Customer Reviews | {BUSINESS_CONFIG.name} - 35 Verified 5-Star Google Reviews</title>
        <meta name="description" content={`Read ${totalReviews} verified 5-star Google reviews from real customers. See why Southwest Ohio trusts ${BUSINESS_CONFIG.name} for mobile notary and loan signing services.`} />
        <meta name="keywords" content="notary reviews, mobile notary reviews Ohio, loan signing agent reviews, customer testimonials, 5-star notary" />
      </Helmet>
      
      <ReviewSchema />

      <BasePageTemplate
        heroSection={
          <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              {/* Google branding header */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <GoogleLogo className="h-8 w-8" />
                <span className="text-2xl font-bold text-foreground">Google Reviews</span>
              </div>
              
              {/* Star rating */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-7 w-7 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <span className="text-3xl font-bold text-foreground ml-2">{averageRating.toFixed(1)}</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-2">
                Based on <span className="font-semibold text-foreground">{totalReviews}</span> verified reviews
              </p>
              
              <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">What Our Clients Say</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real feedback from real customers across Southwest Ohio
              </p>
            </div>
          </section>
        }
        defaultService="general-notary"
      >
        {/* Filter Bar */}
        <section className="mb-8">
          <div className="max-w-6xl mx-auto">
            <Card className="p-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Filter className="h-4 w-4" />
                  <span>Filter by:</span>
                </div>
                
                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    {uniqueServices.map(service => (
                      <SelectItem key={service} value={service}>
                        {serviceDisplayNames[service] || service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {uniqueLocations.map(location => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                {hasFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
                    <X className="h-4 w-4 mr-1" />
                    Clear filters
                  </Button>
                )}
                
                <div className="ml-auto text-sm text-muted-foreground">
                  Showing {filteredReviews.length} of {GOOGLE_REVIEWS.length} reviews
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            {filteredReviews.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">No reviews match your filters.</p>
                <Button variant="link" onClick={clearFilters}>Clear filters</Button>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReviews.map((review, index) => (
                  <Card key={review.id} className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      {/* Header with avatar and name */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`${avatarColors[index % avatarColors.length]} h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                          {review.reviewerInitial}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-foreground truncate">{review.reviewerName}</div>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                            ))}
                          </div>
                        </div>
                        <GoogleLogo className="h-5 w-5 flex-shrink-0" />
                      </div>
                      
                      {/* Review text */}
                      <p className="text-foreground leading-relaxed mb-4">
                        "{review.text}"
                      </p>
                      
                      {/* Metadata */}
                      <div className="flex flex-wrap items-center gap-2 mt-auto">
                        {review.location && (
                          <Badge variant="secondary" className="text-xs">
                            <MapPin className="h-3 w-3 mr-1" />
                            {review.location}
                          </Badge>
                        )}
                        {review.service && (
                          <Badge variant="outline" className="text-xs">
                            {serviceDisplayNames[review.service] || review.service}
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground ml-auto">
                          {formatRelativeDate(review.date)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <h2 className="text-2xl font-bold mb-4">Experience Our 5-Star Service</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join hundreds of satisfied customers across Southwest Ohio. 
                Book your mobile notary appointment today and see why we maintain a perfect 5-star rating.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/book-now">
                  <Button size="lg" className="font-semibold">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="font-semibold">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </BasePageTemplate>
    </>
  );
};

export default Reviews;