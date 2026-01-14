import { GOOGLE_REVIEWS_AGGREGATE, GOOGLE_REVIEWS } from '@/data/googleReviews';
import { BUSINESS_CONFIG } from '@/config/business';

interface ReviewSchemaProps {
  includeIndividualReviews?: boolean;
  maxReviews?: number;
}

const ReviewSchema = ({ includeIndividualReviews = true, maxReviews = 5 }: ReviewSchemaProps) => {
  const { averageRating, totalReviews } = GOOGLE_REVIEWS_AGGREGATE;
  
  const reviewsToInclude = includeIndividualReviews 
    ? GOOGLE_REVIEWS.slice(0, maxReviews).map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.reviewerName
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": review.text,
        "datePublished": review.date
      }))
    : [];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_CONFIG.name,
    "image": BUSINESS_CONFIG.logo,
    "telephone": BUSINESS_CONFIG.phone,
    "email": BUSINESS_CONFIG.email,
    "url": BUSINESS_CONFIG.website,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": BUSINESS_CONFIG.address?.city || "Lebanon",
      "addressRegion": BUSINESS_CONFIG.address?.state || "OH",
      "postalCode": BUSINESS_CONFIG.address?.zip || "45036",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toString(),
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": totalReviews.toString(),
      "ratingCount": totalReviews.toString()
    },
    ...(reviewsToInclude.length > 0 && { "review": reviewsToInclude })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ReviewSchema;
