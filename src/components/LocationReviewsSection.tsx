import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { GoogleReview, GOOGLE_REVIEWS_AGGREGATE } from '@/data/googleReviews';

const avatarColors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-orange-500',
];

interface LocationReviewsSectionProps {
  reviews: GoogleReview[];
  locationName: string;
}

const LocationReviewsSection = ({ reviews, locationName }: LocationReviewsSectionProps) => {
  if (reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            What {locationName} Clients Say
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.slice(0, 4).map((review, index) => (
              <Card key={review.id} className="border border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div 
                      className={`${avatarColors[index % avatarColors.length]} h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}
                    >
                      {review.reviewerInitial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">
                        {review.reviewerName}
                      </p>
                      {review.location && (
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground line-clamp-3">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/reviews" className="text-primary hover:underline font-medium">
              See all {GOOGLE_REVIEWS_AGGREGATE.totalReviews} reviews →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationReviewsSection;
