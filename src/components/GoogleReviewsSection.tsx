import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink, MapPin } from 'lucide-react';
import { GOOGLE_REVIEWS_AGGREGATE, getFeaturedReviews } from '@/data/googleReviews';

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const formatRelativeDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
};

const avatarColors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-orange-500',
  'bg-pink-500',
  'bg-teal-500',
  'bg-indigo-500',
  'bg-red-500',
];

const GoogleReviewsSection = () => {
  const reviews = getFeaturedReviews(6);
  const { averageRating, totalReviews, gmbProfileUrl, gmbViewUrl } = GOOGLE_REVIEWS_AGGREGATE;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header with Google branding */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GoogleLogo />
            <span className="text-lg text-muted-foreground">Reviews from Google</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-4xl font-bold text-foreground">{averageRating.toFixed(1)}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-brand-gold text-brand-gold" />
              ))}
            </div>
          </div>
          
          <p className="text-muted-foreground">
            Based on {totalReviews} reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, index) => (
            <Card 
              key={review.id}
              className="border border-border hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Reviewer info */}
                <div className="flex items-start gap-3 mb-4">
                  <div 
                    className={`${avatarColors[index % avatarColors.length]} h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold text-lg flex-shrink-0`}
                  >
                    {review.reviewerInitial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">
                      {review.reviewerName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formatRelativeDate(review.date)}
                    </p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-brand-gold text-brand-gold" 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-foreground leading-relaxed mb-3 line-clamp-4">
                  "{review.text}"
                </blockquote>

                {/* Location Badge */}
                {review.location && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{review.location}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="gap-2"
          >
            <a href={gmbViewUrl} target="_blank" rel="noopener noreferrer">
              <GoogleLogo />
              See all reviews on Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          
          <Button
            size="lg"
            asChild
            className="gap-2 bg-primary hover:bg-primary/90"
          >
            <a href={gmbProfileUrl} target="_blank" rel="noopener noreferrer">
              <Star className="h-4 w-4" />
              Leave us a review
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
