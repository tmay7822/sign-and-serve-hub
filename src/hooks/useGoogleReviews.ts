import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_AGGREGATE } from '@/data/googleReviews';

export interface ReviewData {
  id: string;
  reviewerName: string;
  reviewerInitial: string;
  rating: number;
  text: string;
  date: string;
  isVerified: boolean;
  service?: string;
  location?: string;
  source: string;
}

interface UseGoogleReviewsReturn {
  reviews: ReviewData[];
  loading: boolean;
  averageRating: number;
  totalReviews: number;
  gmbProfileUrl: string;
  gmbViewUrl: string;
  getFeaturedReviews: (count?: number) => ReviewData[];
  getReviewsByService: (service: string) => ReviewData[];
  getReviewsByServiceTypes: (serviceTypes: string[]) => ReviewData[];
  getReviewsByLocation: (location: string) => ReviewData[];
  getUniqueServices: () => string[];
  getUniqueLocations: () => string[];
  refetch: () => void;
}

const fallbackReviews: ReviewData[] = GOOGLE_REVIEWS.map(r => ({
  id: String(r.id),
  reviewerName: r.reviewerName,
  reviewerInitial: r.reviewerInitial,
  rating: r.rating,
  text: r.text,
  date: r.date,
  isVerified: r.isVerified,
  service: r.service,
  location: r.location,
  source: r.source,
}));

export function useGoogleReviews(): UseGoogleReviewsReturn {
  const [reviews, setReviews] = useState<ReviewData[]>(fallbackReviews);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('source', 'google')
        .order('review_date', { ascending: false });

      if (error) throw error;

      if (data && data.length > 0) {
        const mapped: ReviewData[] = data.map(row => ({
          id: row.id,
          reviewerName: row.reviewer_name,
          reviewerInitial: row.reviewer_name.charAt(0).toUpperCase(),
          rating: row.rating ?? 5,
          text: row.review_text,
          date: row.review_date ?? '',
          isVerified: row.verified ?? false,
          service: row.service_type ?? undefined,
          location: row.location ?? undefined,
          source: row.source ?? 'google',
        }));
        setReviews(mapped);
      }
    } catch (err) {
      console.error('Failed to fetch reviews, using fallback:', err);
      setReviews(fallbackReviews);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return GOOGLE_REVIEWS_AGGREGATE.averageRating;
    return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  }, [reviews]);

  const totalReviews = reviews.length;

  const getFeaturedReviews = (count: number = 6): ReviewData[] => {
    return reviews.slice(0, count);
  };

  const getReviewsByService = (service: string): ReviewData[] => {
    return reviews.filter(r => r.service === service);
  };

  const getReviewsByServiceTypes = (serviceTypes: string[]): ReviewData[] => {
    return reviews.filter(r => r.service && serviceTypes.includes(r.service));
  };

  const getReviewsByLocation = (location: string): ReviewData[] => {
    return reviews.filter(r =>
      r.location?.toLowerCase().includes(location.toLowerCase())
    );
  };

  const getUniqueServices = (): string[] => {
    const services = reviews.map(r => r.service).filter(Boolean) as string[];
    return [...new Set(services)];
  };

  const getUniqueLocations = (): string[] => {
    const locations = reviews.map(r => r.location).filter(Boolean) as string[];
    return [...new Set(locations)];
  };

  return {
    reviews,
    loading,
    averageRating,
    totalReviews,
    gmbProfileUrl: GOOGLE_REVIEWS_AGGREGATE.gmbProfileUrl,
    gmbViewUrl: GOOGLE_REVIEWS_AGGREGATE.gmbViewUrl,
    getFeaturedReviews,
    getReviewsByService,
    getReviewsByServiceTypes,
    getReviewsByLocation,
    getUniqueServices,
    getUniqueLocations,
    refetch: fetchReviews,
  };
}
