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
    date: "2025-01-10",
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
    date: "2025-01-08",
    isVerified: true,
    service: "mortgage",
    location: "South Lebanon",
    source: 'google'
  },
  {
    id: 3,
    reviewerName: "Debra Gilliam",
    reviewerInitial: "D",
    rating: 5,
    text: "He did a great job. Very thorough with details.",
    date: "2025-01-05",
    isVerified: true,
    service: "general",
    source: 'google'
  },
  {
    id: 4,
    reviewerName: "Esther Webb",
    reviewerInitial: "E",
    rating: 5,
    text: "Terri came to our house and did a real estate closing. He did a wonderful job and was very professional. Highly recommend him.",
    date: "2025-01-03",
    isVerified: true,
    service: "real-estate",
    source: 'google'
  },
  {
    id: 5,
    reviewerName: "Casey Sellers",
    reviewerInitial: "C",
    rating: 5,
    text: "On time, very knowledgeable and professional. I would use Terry again and recommend him to others.",
    date: "2024-12-28",
    isVerified: true,
    service: "mobile-notary",
    source: 'google'
  },
  {
    id: 6,
    reviewerName: "Ryan Bissman",
    reviewerInitial: "R",
    rating: 5,
    text: "Terry was approachable and kind. Appointment went very quickly and easy process. Got my new home with my new job, so grateful!",
    date: "2024-12-20",
    isVerified: true,
    service: "loan-signing",
    location: "Lebanon",
    source: 'google'
  },
  {
    id: 7,
    reviewerName: "Deneen Wells",
    reviewerInitial: "D",
    rating: 5,
    text: "Terry May was fantastic helping us with our refinancing!",
    date: "2024-12-15",
    isVerified: true,
    service: "refinance",
    source: 'google'
  },
  {
    id: 8,
    reviewerName: "Brenda Thomas",
    reviewerInitial: "B",
    rating: 5,
    text: "Excellent service for estate document notarization.",
    date: "2024-12-10",
    isVerified: true,
    service: "estate",
    source: 'google'
  },
  {
    id: 9,
    reviewerName: "Marnie Smith",
    reviewerInitial: "M",
    rating: 5,
    text: "Terry did great service to me in helping with estate matters. Helped me sell my grandparents' home in Mason.",
    date: "2024-12-05",
    isVerified: true,
    service: "estate",
    location: "Mason",
    source: 'google'
  },
  {
    id: 10,
    reviewerName: "B Cloonan",
    reviewerInitial: "B",
    rating: 5,
    text: "Terry was absolutely great. I had a very small window of time to complete my documents for a real estate transaction. He was flexible, responsive, and most importantly, experienced. As a real estate professional I see what can go wrong! This went extremely smoothly with Terry!",
    date: "2024-11-28",
    isVerified: true,
    service: "real-estate",
    source: 'google'
  },
  {
    id: 11,
    reviewerName: "David Bias",
    reviewerInitial: "D",
    rating: 5,
    text: "I recently met with Terry to have a document notarized. Terry was very accommodating and responsive! I would absolutely trust Terry with any future notary needs.",
    date: "2024-11-20",
    isVerified: true,
    service: "general",
    source: 'google'
  },
  {
    id: 12,
    reviewerName: "Amber",
    reviewerInitial: "A",
    rating: 5,
    text: "I recently had a document notarized by Terry and was impressed by his professionalism and efficiency. The process was quick and straightforward. Terry took the time to explain each step clearly, making the experience easy. I appreciate how friendly and patient he was throughout.",
    date: "2024-11-15",
    isVerified: true,
    service: "general",
    source: 'google'
  },
  {
    id: 13,
    reviewerName: "Paige Santini",
    reviewerInitial: "P",
    rating: 5,
    text: "Terry did a wonderful job. Very pleasant and friendly. Very knowledgeable.",
    date: "2024-11-10",
    isVerified: true,
    service: "general",
    location: "Xenia",
    source: 'google'
  },
  {
    id: 14,
    reviewerName: "Tony Santini",
    reviewerInitial: "T",
    rating: 5,
    text: "Very professional and easy to deal with. Travelled to Xenia for my notarization.",
    date: "2024-11-08",
    isVerified: true,
    service: "general",
    location: "Xenia",
    source: 'google'
  },
  {
    id: 15,
    reviewerName: "Durgha Rajamanickam",
    reviewerInitial: "D",
    rating: 5,
    text: "Terry was very helpful and flexible with us during closing. He was very patient and gave great explanation on the closing documents. We had a wonderful experience.",
    date: "2024-11-01",
    isVerified: true,
    service: "loan-signing",
    source: 'google'
  },
  {
    id: 16,
    reviewerName: "Timothy McDaniel",
    reviewerInitial: "T",
    rating: 5,
    text: "Came to Springboro late night very friendly punctual and did a great job!!! Got me my truck!",
    date: "2024-10-25",
    isVerified: true,
    service: "title-transfer",
    location: "Springboro",
    source: 'google'
  },
  {
    id: 17,
    reviewerName: "Eli S",
    reviewerInitial: "E",
    rating: 5,
    text: "Late night, last minute arrival. Friendly, came to springboro very quickly!",
    date: "2024-10-20",
    isVerified: true,
    service: "title-transfer",
    location: "Springboro",
    source: 'google'
  },
  {
    id: 18,
    reviewerName: "Michael Casciato",
    reviewerInitial: "M",
    rating: 5,
    text: "Terry was well prepared, efficient, and very friendly. He came to our house at our convenience and was really easy to work with.",
    date: "2024-10-15",
    isVerified: true,
    service: "general",
    location: "Maineville",
    source: 'google'
  },
  {
    id: 19,
    reviewerName: "Heather Schmit",
    reviewerInitial: "H",
    rating: 5,
    text: "Terry May is phenomenal! Great service and flexible to meet clients at their residence to accomplish timely notary services. As a military family, his flexibility was invaluable.",
    date: "2024-10-10",
    isVerified: true,
    service: "mobile-notary",
    location: "Beavercreek",
    source: 'google'
  },
  {
    id: 20,
    reviewerName: "Jun Les",
    reviewerInitial: "J",
    rating: 5,
    text: "I recently worked with Terry May for notary services in Montgomery County Ohio, and was extremely pleased with his professionalism and efficiency. He handled the apostille process for an international document flawlessly.",
    date: "2024-10-05",
    isVerified: true,
    service: "apostille",
    location: "Montgomery County",
    source: 'google'
  },
  {
    id: 21,
    reviewerName: "David Keith",
    reviewerInitial: "D",
    rating: 5,
    text: "Awesome service! Terry met us at our home after hours on a Friday night. Super friendly and efficient!",
    date: "2024-09-28",
    isVerified: true,
    service: "mobile-notary",
    source: 'google'
  },
  {
    id: 22,
    reviewerName: "Jill Van Auken",
    reviewerInitial: "J",
    rating: 5,
    text: "Terry was quick to respond and answered all my questions. He was flexible to meet at my convenience and was very professional. Highly recommend!",
    date: "2024-09-20",
    isVerified: true,
    service: "mobile-notary",
    source: 'google'
  },
  {
    id: 23,
    reviewerName: "Tina Allen",
    reviewerInitial: "T",
    rating: 5,
    text: "Terry came out to Clinton county for a closing. Great service all around!",
    date: "2024-09-15",
    isVerified: true,
    service: "loan-signing",
    location: "Wilmington",
    source: 'google'
  },
  {
    id: 24,
    reviewerName: "James Lakin",
    reviewerInitial: "J",
    rating: 5,
    text: "Did great service in Wilmington Ohio! Notarized camper title transfer documents quickly and professionally.",
    date: "2024-09-10",
    isVerified: true,
    service: "title-transfer",
    location: "Wilmington",
    source: 'google'
  },
  {
    id: 25,
    reviewerName: "Jeffery Lay",
    reviewerInitial: "J",
    rating: 5,
    text: "Terry is a terrific human being and total professional. He is always available and willing to travel to your location.",
    date: "2024-09-05",
    isVerified: true,
    service: "general",
    location: "Lebanon",
    source: 'google'
  },
  {
    id: 26,
    reviewerName: "Bob Hull",
    reviewerInitial: "B",
    rating: 5,
    text: "Loan closing at my home in Lebanon, OH, Warren County, was a pleasure working with Terry May. Prompt, friendly, and well organized.",
    date: "2024-08-28",
    isVerified: true,
    service: "loan-signing",
    location: "Lebanon",
    source: 'google'
  },
  {
    id: 27,
    reviewerName: "Ollie Lawson",
    reviewerInitial: "O",
    rating: 5,
    text: "Terry was very informative and explained everything in detail about my documents, helping me buy my first house. He drove 30+ mins to Germantown for us!",
    date: "2024-08-20",
    isVerified: true,
    service: "first-home",
    location: "Germantown",
    source: 'google'
  },
  {
    id: 28,
    reviewerName: "Walter Janz",
    reviewerInitial: "W",
    rating: 5,
    text: "Terry did a great job covering a last minute closing for us in Cincinnati. Professional and thorough!",
    date: "2024-08-15",
    isVerified: true,
    service: "loan-signing",
    location: "Cincinnati",
    source: 'google'
  },
  {
    id: 29,
    reviewerName: "Nathaniel Steinhoff",
    reviewerInitial: "N",
    rating: 5,
    text: "I can't recommend Terry highly enough. I'm a real estate professional who's been in the business for more than a decade and Terry is one of the best notaries I've worked with.",
    date: "2024-08-10",
    isVerified: true,
    service: "real-estate",
    source: 'google'
  },
  {
    id: 30,
    reviewerName: "Andy Culberson",
    reviewerInitial: "A",
    rating: 5,
    text: "Terry May did a great job and was very informative during my closing. Would definitely use again!",
    date: "2024-08-05",
    isVerified: true,
    service: "loan-signing",
    source: 'google'
  },
  {
    id: 31,
    reviewerName: "Bret Biggs",
    reviewerInitial: "B",
    rating: 5,
    text: "Terry was punctual, professional, and easy to work with. Made the whole notarization process smooth and stress-free.",
    date: "2024-07-28",
    isVerified: true,
    service: "general",
    source: 'google'
  },
  {
    id: 32,
    reviewerName: "Stephen Faris",
    reviewerInitial: "S",
    rating: 5,
    text: "He came on Sunday at his personal expense to help us with urgent documents. Above and beyond service!",
    date: "2024-07-20",
    isVerified: true,
    service: "urgent",
    source: 'google'
  },
  {
    id: 33,
    reviewerName: "Michele Weintraub",
    reviewerInitial: "M",
    rating: 5,
    text: "Running a successful signing agency for the last 16 years. Terry is an excellent notary signing agent. Professional, reliable, and thorough with every signing.",
    date: "2024-07-15",
    isVerified: true,
    service: "loan-signing",
    source: 'google'
  },
  {
    id: 34,
    reviewerName: "Joanna Sosiewicz",
    reviewerInitial: "J",
    rating: 5,
    text: "Terry was of great assistance when he went to our client's house to complete an urgent signing. Very professional and accommodating!",
    date: "2024-07-10",
    isVerified: true,
    service: "mobile-notary",
    source: 'google'
  },
  {
    id: 35,
    reviewerName: "Karolina Sites Smart",
    reviewerInitial: "K",
    rating: 5,
    text: "Excellent notary service. Professional and efficient!",
    date: "2024-07-05",
    isVerified: true,
    service: "general",
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

// Get unique service types for filters
export const getUniqueServices = (): string[] => {
  const services = GOOGLE_REVIEWS.map(r => r.service).filter(Boolean) as string[];
  return [...new Set(services)];
};

// Get unique locations for filters
export const getUniqueLocations = (): string[] => {
  const locations = GOOGLE_REVIEWS.map(r => r.location).filter(Boolean) as string[];
  return [...new Set(locations)];
};
