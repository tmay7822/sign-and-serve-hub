export interface GoogleReview {
  id: number;
  reviewerName: string;
  reviewerInitial: string;
  rating: number;
  text: string;
  date: string;
  isVerified: boolean;
  service?: string;
  location?: string;
  source: 'google';
}

export const GOOGLE_REVIEWS_AGGREGATE = {
  averageRating: 5.0,
  totalReviews: 35,
  gmbProfileUrl: "https://g.page/r/CR2JzdLd8-5sEBM/review",
  gmbViewUrl: "https://g.page/r/CR2JzdLd8-5sEBM",
  lastUpdated: "2026-01-14"
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 1,
    reviewerName: "Success Properties",
    reviewerInitial: "S",
    rating: 5,
    text: "Came all the way to West Chester to do a closing, notarized all the papers and gave me advice on lending. Awesome guy to work with.",
    date: "2024-12-15",
    isVerified: true,
    service: "loan-signing",
    location: "West Chester",
    source: 'google'
  },
  {
    id: 2,
    reviewerName: "Rohit Chauhan",
    reviewerInitial: "R",
    rating: 5,
    text: "Professional and punctual. Explained the signing documents for mortgage in detail!!",
    date: "2024-11-20",
    isVerified: true,
    service: "mortgage",
    location: "South Lebanon",
    source: 'google'
  },
  {
    id: 3,
    reviewerName: "Esther Webb",
    reviewerInitial: "E",
    rating: 5,
    text: "Terri came to our house and did a real estate closing. He did a wonderful job and was very professional. Highly recommend him.",
    date: "2024-10-25",
    isVerified: true,
    service: "real-estate",
    source: 'google'
  },
  {
    id: 4,
    reviewerName: "Ryan Bissman",
    reviewerInitial: "R",
    rating: 5,
    text: "Terry was approachable and kind. Appointment went very quickly and easy process. Got my new home with my new job, so grateful!",
    date: "2024-10-10",
    isVerified: true,
    service: "loan-signing",
    location: "Lebanon",
    source: 'google'
  },
  {
    id: 5,
    reviewerName: "Marnie Smith",
    reviewerInitial: "M",
    rating: 5,
    text: "Terry did great service to me in helping with estate matters. Helped me sell my grandparents' home in Mason.",
    date: "2024-09-15",
    isVerified: true,
    service: "estate",
    location: "Mason",
    source: 'google'
  },
  {
    id: 6,
    reviewerName: "Timothy McDaniel",
    reviewerInitial: "T",
    rating: 5,
    text: "Came to Springboro late night very friendly punctual and did a great job!!! Got me my truck!",
    date: "2024-09-01",
    isVerified: true,
    service: "title-transfer",
    location: "Springboro",
    source: 'google'
  },
  {
    id: 7,
    reviewerName: "Heather Schmit",
    reviewerInitial: "H",
    rating: 5,
    text: "Terry May is phenomenal! Great service and flexible to meet clients at their residence to accomplish timely notary services. As a military family, his flexibility was invaluable.",
    date: "2024-08-20",
    isVerified: true,
    service: "mobile-notary",
    location: "Beavercreek",
    source: 'google'
  },
  {
    id: 8,
    reviewerName: "Jun Les",
    reviewerInitial: "J",
    rating: 5,
    text: "I recently worked with Terry May for notary services in Montgomery County Ohio, and was extremely pleased with his professionalism and efficiency. He handled the apostille process for an international document flawlessly.",
    date: "2024-08-05",
    isVerified: true,
    service: "apostille",
    location: "Montgomery County",
    source: 'google'
  },
  {
    id: 9,
    reviewerName: "Bob Hull",
    reviewerInitial: "B",
    rating: 5,
    text: "Loan closing at my home in Lebanon, OH, Warren County, was a pleasure working with Terry May. Prompt, friendly, and well organized.",
    date: "2024-07-20",
    isVerified: true,
    service: "loan-signing",
    location: "Lebanon",
    source: 'google'
  },
  {
    id: 10,
    reviewerName: "Ollie Lawson",
    reviewerInitial: "O",
    rating: 5,
    text: "Terry was very informative and explained everything in detail about my documents, helping me buy my first house. He drove 30+ mins to Germantown for us!",
    date: "2024-07-05",
    isVerified: true,
    service: "first-home",
    location: "Germantown",
    source: 'google'
  },
  {
    id: 11,
    reviewerName: "Nathaniel Steinhoff",
    reviewerInitial: "N",
    rating: 5,
    text: "I can't recommend Terry highly enough. I'm a real estate professional who's been in the business for more than a decade and Terry is one of the best notaries I've worked with.",
    date: "2024-06-15",
    isVerified: true,
    service: "real-estate",
    source: 'google'
  },
  {
    id: 12,
    reviewerName: "Stephen Faris",
    reviewerInitial: "S",
    rating: 5,
    text: "He came on Sunday at his personal expense to help us with urgent documents. Above and beyond service!",
    date: "2024-06-01",
    isVerified: true,
    service: "urgent",
    source: 'google'
  }
];

// Get a subset of reviews for display
export const getFeaturedReviews = (count: number = 6): GoogleReview[] => {
  return GOOGLE_REVIEWS.slice(0, count);
};

// Get reviews by service type
export const getReviewsByService = (service: string): GoogleReview[] => {
  return GOOGLE_REVIEWS.filter(review => review.service === service);
};

// Get reviews by location
export const getReviewsByLocation = (location: string): GoogleReview[] => {
  return GOOGLE_REVIEWS.filter(review => 
    review.location?.toLowerCase().includes(location.toLowerCase())
  );
};
