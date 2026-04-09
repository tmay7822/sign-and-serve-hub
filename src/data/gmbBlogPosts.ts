// GMB Blog Posts Data
// 30 pre-written posts for Google My Business covering all locations and services

export interface GMBBlogPost {
  id: number;
  title: string;           // Max 80 chars for GMB
  content: string;         // Max 1,500 chars for GMB
  callToAction: string;    // Button text
  ctaLink: string;         // Website URL
  category: 'location' | 'major-city' | 'service' | 'seasonal' | 'tips';
  linkedPage: string;      // Internal page path
  publishDate?: string;    // Suggested publish date
  county?: string;         // For location posts
  city?: string;           // For city-specific posts
  weekNumber?: number;     // For calendar scheduling
  dayOfWeek?: 'Monday' | 'Wednesday' | 'Friday';
}

// Posting Calendar - 15 weeks, 2-3 posts per week
export interface PostSchedule {
  postId: number;
  suggestedDate: string;
  dayOfWeek: 'Monday' | 'Wednesday' | 'Friday';
  weekNumber: number;
  theme: string;
}

export const GMB_POSTING_CALENDAR: PostSchedule[] = [
  // Week 1-2: Hamilton & Warren Counties
  { postId: 1, suggestedDate: "2026-01-19", dayOfWeek: "Monday", weekNumber: 1, theme: "Location" },
  { postId: 2, suggestedDate: "2026-01-21", dayOfWeek: "Wednesday", weekNumber: 1, theme: "Location" },
  { postId: 3, suggestedDate: "2026-01-23", dayOfWeek: "Friday", weekNumber: 1, theme: "Location" },
  { postId: 4, suggestedDate: "2026-01-26", dayOfWeek: "Monday", weekNumber: 2, theme: "Location" },
  { postId: 5, suggestedDate: "2026-01-28", dayOfWeek: "Wednesday", weekNumber: 2, theme: "Location" },
  // Week 3-4: Montgomery & Butler Counties
  { postId: 6, suggestedDate: "2026-02-02", dayOfWeek: "Monday", weekNumber: 3, theme: "Location" },
  { postId: 7, suggestedDate: "2026-02-04", dayOfWeek: "Wednesday", weekNumber: 3, theme: "Location" },
  { postId: 8, suggestedDate: "2026-02-06", dayOfWeek: "Friday", weekNumber: 3, theme: "Location" },
  { postId: 9, suggestedDate: "2026-02-09", dayOfWeek: "Monday", weekNumber: 4, theme: "Location" },
  // Week 5-6: Major Cities Focus
  { postId: 10, suggestedDate: "2026-02-16", dayOfWeek: "Monday", weekNumber: 5, theme: "Major City" },
  { postId: 11, suggestedDate: "2026-02-18", dayOfWeek: "Wednesday", weekNumber: 5, theme: "Major City" },
  { postId: 12, suggestedDate: "2026-02-20", dayOfWeek: "Friday", weekNumber: 5, theme: "Major City" },
  { postId: 13, suggestedDate: "2026-02-23", dayOfWeek: "Monday", weekNumber: 6, theme: "Major City" },
  { postId: 14, suggestedDate: "2026-02-25", dayOfWeek: "Wednesday", weekNumber: 6, theme: "Major City" },
  { postId: 15, suggestedDate: "2026-02-27", dayOfWeek: "Friday", weekNumber: 6, theme: "Major City" },
  // Week 7-9: Service Deep Dives
  { postId: 16, suggestedDate: "2026-03-02", dayOfWeek: "Monday", weekNumber: 7, theme: "Service" },
  { postId: 17, suggestedDate: "2026-03-04", dayOfWeek: "Wednesday", weekNumber: 7, theme: "Service" },
  { postId: 18, suggestedDate: "2026-03-06", dayOfWeek: "Friday", weekNumber: 7, theme: "Service" },
  { postId: 19, suggestedDate: "2026-03-09", dayOfWeek: "Monday", weekNumber: 8, theme: "Service" },
  { postId: 20, suggestedDate: "2026-03-11", dayOfWeek: "Wednesday", weekNumber: 8, theme: "Service" },
  { postId: 21, suggestedDate: "2026-03-13", dayOfWeek: "Friday", weekNumber: 8, theme: "Service" },
  { postId: 22, suggestedDate: "2026-03-16", dayOfWeek: "Monday", weekNumber: 9, theme: "Service" },
  { postId: 23, suggestedDate: "2026-03-18", dayOfWeek: "Wednesday", weekNumber: 9, theme: "Service" },
  // Week 10-12: Seasonal Content
  { postId: 24, suggestedDate: "2026-03-23", dayOfWeek: "Monday", weekNumber: 10, theme: "Seasonal" },
  { postId: 25, suggestedDate: "2026-03-25", dayOfWeek: "Wednesday", weekNumber: 10, theme: "Seasonal" },
  { postId: 26, suggestedDate: "2026-03-27", dayOfWeek: "Friday", weekNumber: 10, theme: "Seasonal" },
  { postId: 27, suggestedDate: "2026-03-30", dayOfWeek: "Monday", weekNumber: 11, theme: "Seasonal" },
  // Week 13-15: Educational Tips
  { postId: 28, suggestedDate: "2026-04-06", dayOfWeek: "Monday", weekNumber: 13, theme: "Tips" },
  { postId: 29, suggestedDate: "2026-04-08", dayOfWeek: "Wednesday", weekNumber: 13, theme: "Tips" },
  { postId: 30, suggestedDate: "2026-04-10", dayOfWeek: "Friday", weekNumber: 13, theme: "Tips" },
  // Week 14-16: Additional City Posts
  { postId: 31, suggestedDate: "2026-04-13", dayOfWeek: "Monday", weekNumber: 14, theme: "Major City" },
  { postId: 32, suggestedDate: "2026-04-15", dayOfWeek: "Wednesday", weekNumber: 14, theme: "Major City" },
  { postId: 33, suggestedDate: "2026-04-17", dayOfWeek: "Friday", weekNumber: 14, theme: "Major City" },
  { postId: 34, suggestedDate: "2026-04-20", dayOfWeek: "Monday", weekNumber: 15, theme: "Major City" },
  { postId: 35, suggestedDate: "2026-04-22", dayOfWeek: "Wednesday", weekNumber: 15, theme: "Major City" },
  { postId: 36, suggestedDate: "2026-04-24", dayOfWeek: "Friday", weekNumber: 15, theme: "Major City" },
  { postId: 37, suggestedDate: "2026-04-27", dayOfWeek: "Monday", weekNumber: 16, theme: "Major City" },
  { postId: 38, suggestedDate: "2026-04-29", dayOfWeek: "Wednesday", weekNumber: 16, theme: "Major City" },
  { postId: 39, suggestedDate: "2026-05-01", dayOfWeek: "Friday", weekNumber: 16, theme: "Major City" },
  { postId: 40, suggestedDate: "2026-05-04", dayOfWeek: "Monday", weekNumber: 17, theme: "Major City" },
];

export const GMB_BLOG_POSTS: GMBBlogPost[] = [
  // ============================================
  // SERVICE AREA SPOTLIGHTS (9 posts)
  // ============================================
  {
    id: 1,
    title: "Mobile Notary Services in Hamilton County, Ohio",
    content: `Signed On Time brings professional mobile notary services directly to you throughout Hamilton County. We serve Cincinnati, Blue Ash, Springdale, Forest Park, Norwood, and all surrounding communities.

Whether you need loan document signings, estate planning notarizations, or business contracts, our certified notary comes to your home, office, or hospital.

✅ Same-day appointments available 7 days a week
✅ NNA certified & background-checked
✅ We Come To You Anytime And Anywhere

Our services include:
• Loan signings & mortgage closings
• Wills, trusts, and power of attorney
• Real estate deed transfers
• Business contracts & I-9 verification
• Healthcare directives
• Apostille preparation

Don't waste time traveling to find a notary. We bring professional notary services right to your door in Hamilton County.

Call (513) 226-9052 for your free quote today!`,
    callToAction: "Get a Free Quote",
    ctaLink: "https://www.signedontime.com/contact",
    category: "location",
    linkedPage: "/notary-cincinnati-45202",
    county: "Hamilton"
  },
  {
    id: 2,
    title: "Mobile Notary in Warren County - Mason, Lebanon & More",
    content: `Need a notary in Warren County? Signed On Time provides mobile notary services to Mason, Lebanon, Springboro, Franklin, Waynesville, and all Warren County communities.

Our NNA-certified notary specializes in:
• Loan signings & refinances
• Wills and powers of attorney
• Real estate closings
• Healthcare directives
• Business document notarization

We travel to you - whether that's your home, office, senior community, or hospital. No need to leave home!

Why choose Signed On Time?
✅ Same-day appointments available
✅ Professional, certified service
✅ Competitive pricing with upfront quotes
✅ We Come To You Anytime And Anywhere

Serving the Kings Island area, downtown Mason, historic Lebanon, and everywhere in between.

Call (513) 226-9052 to schedule your appointment today!`,
    callToAction: "Book Appointment",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "location",
    linkedPage: "/notary-mason-45040",
    county: "Warren"
  },
  {
    id: 3,
    title: "Dayton Mobile Notary - Montgomery County Services",
    content: `Serving all of Montgomery County including Dayton, Kettering, Centerville, Miamisburg, Huber Heights, and Vandalia.

Signed On Time offers same-day mobile notary appointments for:
• Loan signings & mortgage closings
• Estate planning documents
• Business notarizations
• Healthcare directives
• Real estate transactions

Our notary travels to your location - homes, hospitals, nursing facilities, and offices.

What sets us apart:
✅ Certified, insured, and background-checked
✅ Available 7 days a week
✅ Same-day service available
✅ We Come To You Anytime And Anywhere

Whether you're in downtown Dayton, the Oregon District, or suburban Kettering, we bring professional notary services to you.

Don't wait in line at a shipping store. Get convenient, professional service at your location.

Call (513) 226-9052 for fast, reliable mobile notary service!`,
    callToAction: "Schedule Now",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "location",
    linkedPage: "/notary-dayton-45402",
    county: "Montgomery"
  },
  {
    id: 4,
    title: "Butler County Mobile Notary - Hamilton, Fairfield, West Chester",
    content: `Signed On Time provides trusted mobile notary services throughout Butler County.

We serve:
• Hamilton
• Fairfield
• West Chester
• Middletown
• Oxford
• Monroe

Our professional notarization services include:
✅ Mortgage loan signings
✅ Estate planning (wills, trusts, POA)
✅ Real estate transactions
✅ Business contracts
✅ Healthcare directives
✅ I-9 employment verification

From mortgage closings to estate planning, our certified notary comes to you. Same-day appointments available.

Why choose mobile notary service?
• No travel time for you
• Convenient scheduling
• Professional, certified service
• We Come To You Anytime And Anywhere

Whether you're at home, the office, or a healthcare facility, we bring the notary to you.

Contact us at (513) 226-9052 for fast, reliable service!`,
    callToAction: "Get a Free Quote",
    ctaLink: "https://www.signedontime.com/contact",
    category: "location",
    linkedPage: "/notary-west-chester-45069",
    county: "Butler"
  },
  {
    id: 5,
    title: "Mobile Notary in Greene County - Beavercreek, Fairborn, Xenia",
    content: `Need a notary near Wright-Patterson AFB? Signed On Time serves all of Greene County including Beavercreek, Fairborn, Xenia, Yellow Springs, and Bellbrook.

We specialize in:
• Military document notarizations
• Real estate closings
• Estate planning documents
• Loan signings
• Business contracts
• Powers of attorney

Our mobile notary comes to your base housing, office, or home. Convenient scheduling for military families and busy professionals.

Service highlights:
✅ Experience with military document requirements
✅ Same-day appointments available
✅ Certified, insured, background-checked
✅ We Come To You Anytime And Anywhere

Whether you're at WPAFB, downtown Xenia, or anywhere in Greene County, we bring professional notary services to you.

Call (513) 226-9052 today for your free quote!`,
    callToAction: "Book Now",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "location",
    linkedPage: "/service/greene-county",
    county: "Greene"
  },
  {
    id: 6,
    title: "Wilmington & Clinton County Mobile Notary Services",
    content: `Signed On Time provides mobile notary services to Wilmington, Blanchester, Sabina, and all Clinton County communities.

We understand that finding a local notary in rural areas can be challenging. That's why we come directly to you!

Our services include:
• Loan document signings
• Power of attorney notarizations
• Wills and estate documents
• Business contracts
• Real estate transactions
• Healthcare directives

Why choose mobile notary?
✅ No travel to find a notary
✅ Convenient appointments at your location
✅ Same-day service available
✅ Professional, certified service
✅ We Come To You Anytime And Anywhere

Whether you're in downtown Wilmington, on a farm property, or anywhere in Clinton County, we bring the notary to you.

No travel fee within our service area for most appointments.

Call (513) 226-9052 for same-day availability!`,
    callToAction: "Contact Us",
    ctaLink: "https://www.signedontime.com/contact",
    category: "location",
    linkedPage: "/service/clinton-county",
    county: "Clinton"
  },
  {
    id: 7,
    title: "Clermont County Mobile Notary - Milford, Batavia, Loveland",
    content: `Serving Clermont County residents and businesses with professional mobile notary services.

We cover:
• Milford
• Batavia
• Loveland
• Amelia
• Bethel
• Goshen

Our notarization services include:
✅ Loan signings & mortgage closings
✅ Estate documents (wills, trusts, POA)
✅ Real estate closings
✅ Business contracts
✅ Healthcare directives
✅ Apostille preparation

Our certified notary travels to your location for convenient service. Home, office, hospital, or any location that works for you.

Why choose Signed On Time?
• NNA certified
• Background-checked & insured
• Same-day appointments
• We Come To You Anytime And Anywhere

Don't waste time searching for a notary. We bring professional service to your door.

Call (513) 226-9052 for your quote!`,
    callToAction: "Get a Quote",
    ctaLink: "https://www.signedontime.com/contact",
    category: "location",
    linkedPage: "/service/clermont-county",
    county: "Clermont"
  },
  {
    id: 8,
    title: "Mobile Notary in Troy & Miami County, Ohio",
    content: `Signed On Time extends mobile notary services to Troy and all of Miami County.

Our services include:
• Loan signings & mortgage closings
• Estate planning documents
• Real estate transactions
• Business notarizations
• Healthcare directives
• Powers of attorney

We travel to your location:
✅ Homes & residences
✅ Offices & businesses
✅ Healthcare facilities
✅ Senior communities
✅ Any convenient location

Same-day availability for urgent needs.

Why mobile notary service?
• No travel time for you
• Convenient scheduling
• Professional, certified service
• Competitive pricing
• We Come To You Anytime And Anywhere

Whether you're in downtown Troy, Piqua, Tipp City, or anywhere in Miami County, we bring the notary to you.

Call (513) 226-9052 for professional, reliable service!`,
    callToAction: "Schedule Appointment",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "location",
    linkedPage: "/service/miami-county",
    county: "Miami"
  },
  {
    id: 9,
    title: "Mobile Notary - Georgetown, Hillsboro & Surrounding Areas",
    content: `Need a notary in Brown or Highland County? Signed On Time provides mobile notary services to Georgetown, Hillsboro, and surrounding rural communities.

We understand the challenge of finding local notary services in rural areas. That's why we come directly to you!

Our services:
• Loan signings
• Estate planning documents
• Real estate transactions
• Business contracts
• Powers of attorney
• Healthcare directives

What we offer:
✅ Mobile service to your location
✅ Same-day appointments when available
✅ Professional, certified notary
✅ Competitive rural area pricing
✅ We Come To You Anytime And Anywhere

Whether you're on a farm, in town, or anywhere in Brown or Highland County, we bring professional notary services to you.

No need to drive to the city for notary services.

Call (513) 226-9052 to book your appointment!`,
    callToAction: "Book Now",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "location",
    linkedPage: "/service",
    county: "Brown"
  },

  // ============================================
  // MAJOR CITY FEATURES (6 posts)
  // ============================================
  {
    id: 10,
    title: "Downtown Cincinnati Mobile Notary - Same Day Service",
    content: `Looking for a notary in downtown Cincinnati? Signed On Time offers same-day mobile notary service to the CBD, Over-the-Rhine, The Banks, Pendleton, and all downtown neighborhoods.

Perfect for busy professionals who can't leave the office!

We come to:
• Your workplace
• Condos & apartments
• Coffee shops
• Hotel lobbies
• Any convenient location

Services available:
✅ Loan signings & mortgage closings
✅ Real estate transactions
✅ Business contracts
✅ Powers of attorney
✅ Estate planning documents
✅ I-9 employment verification

Why wait in line at a shipping store? Get professional mobile notary service at your location.

Our certified notary is:
• NNA certified
• Background-checked
• Insured
• We Come To You Anytime And Anywhere

Call (513) 226-9052 for same-day downtown Cincinnati notary service!`,
    callToAction: "Get Started",
    ctaLink: "https://www.signedontime.com/contact",
    category: "location",
    linkedPage: "/notary-cincinnati-45202",
    city: "Cincinnati"
  },
  {
    id: 11,
    title: "Mobile Notary in Mason, Ohio - Warren County",
    content: `Signed On Time proudly serves Mason and the Kings Island area with professional mobile notary services.

We handle:
• Real estate closings
• Loan signings & refinances
• Wills and trusts
• Powers of attorney
• Healthcare directives
• Business contracts

Our notary travels to your Mason home, office, or any location convenient for you.

Why choose Signed On Time?
✅ Background-checked & insured
✅ NNA certified
✅ Same-day appointments available
✅ Professional, reliable service
✅ We Come To You Anytime And Anywhere

Serving all Mason neighborhoods including:
• Downtown Mason
• Deerfield Township
• Kings Mills
• Heritage Oak area

Whether you're closing on a new home, updating your estate plan, or need business documents notarized, we bring the service to you.

Call (513) 226-9052 to schedule your appointment!`,
    callToAction: "Book Appointment",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "location",
    linkedPage: "/notary-mason-45040",
    city: "Mason"
  },
  {
    id: 12,
    title: "Dayton Mobile Notary - Downtown & Surrounding Areas",
    content: `Serving downtown Dayton, Oregon District, and all Montgomery County!

Signed On Time provides certified mobile notary services for:
• Loan signings & mortgage closings
• Estate planning documents
• Healthcare directives
• Business documents
• Real estate transactions
• Powers of attorney

We come to:
✅ Homes & residences
✅ Hospitals & healthcare facilities
✅ Offices & businesses
✅ Senior communities
✅ Any convenient location

Same-day appointments available 7 days a week.

Our certified notary is:
• NNA certified
• Background-checked & insured
• Experienced with all document types
• We Come To You Anytime And Anywhere

Whether you're in downtown Dayton, the Oregon District, Kettering, Centerville, or Miamisburg, we bring professional notary services to you.

Don't waste time traveling. Let us come to you!

Call (513) 226-9052 today to schedule!`,
    callToAction: "Schedule Now",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "location",
    linkedPage: "/notary-dayton-45402",
    city: "Dayton"
  },
  {
    id: 13,
    title: "West Chester Mobile Notary - Butler County, Ohio",
    content: `Need a notary in West Chester Township? Signed On Time offers mobile notary services to Liberty Center, Voice of America Park area, Union Centre, and all West Chester neighborhoods.

We specialize in:
• Real estate closings
• Loan signings & refinances
• Business contracts
• Estate planning documents
• Healthcare directives
• I-9 employment verification

Convenient appointments at your home or office. Same-day service available.

Why choose mobile notary?
✅ No travel time for you
✅ Professional, certified service
✅ Flexible scheduling
✅ Competitive pricing
✅ We Come To You Anytime And Anywhere

Serving all West Chester areas:
• Liberty Center
• Union Centre
• Beckett Ridge
• Voice of America area
• Tylersville Road corridor

Whether you're a busy professional, homeowner, or business owner, we bring the notary to you.

Call (513) 226-9052 for your free quote!`,
    callToAction: "Get a Quote",
    ctaLink: "https://www.signedontime.com/contact",
    category: "location",
    linkedPage: "/notary-west-chester-45069",
    city: "West Chester"
  },
  {
    id: 14,
    title: "Mobile Notary in Kettering, OH - Montgomery County",
    content: `Signed On Time serves Kettering and surrounding areas including Oakwood, Far Hills, and Town & Country.

Our certified mobile notary handles:
• Estate planning documents
• Loan closings & refinances
• Healthcare directives
• Business contracts
• Real estate transactions
• Powers of attorney

We travel to:
✅ Your home
✅ Your office
✅ Kettering Health facilities
✅ Senior communities
✅ Any convenient location

Same-day availability for urgent document needs.

Why choose Signed On Time?
• NNA certified notary
• Background-checked & insured
• Professional, reliable service
• We Come To You Anytime And Anywhere

Serving all Kettering neighborhoods and surrounding communities. From Far Hills to Town & Country, we bring professional notary services to you.

Don't waste time searching for a notary. Let us come to you!

Call (513) 226-9052 for same-day availability!`,
    callToAction: "Book Now",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "location",
    linkedPage: "/notary-kettering-45429",
    city: "Kettering"
  },
  {
    id: 15,
    title: "Mobile Notary in Hamilton, Ohio - Butler County Seat",
    content: `Serving Hamilton, Ohio and the Butler County courthouse area with professional mobile notary services.

Perfect for:
• Court filings & legal documents
• Real estate transactions
• Loan signings & closings
• Estate documents
• Business contracts
• Powers of attorney

Our notary travels to you anywhere in Hamilton:
✅ Downtown Hamilton
✅ German Village
✅ Riverside
✅ Lindenwald
✅ Any convenient location

We Come To You Anytime And Anywhere.

Why mobile notary service?
• No travel time for you
• Convenient scheduling
• Professional, certified service
• Same-day appointments available
• Competitive pricing

Whether you need documents notarized for the courthouse, a real estate closing, or estate planning, we bring the service to you.

Call (513) 226-9052 for fast, professional service!`,
    callToAction: "Contact Us",
    ctaLink: "https://www.signedontime.com/contact",
    category: "location",
    linkedPage: "/service/butler-county/hamilton-45011",
    city: "Hamilton"
  },

  // ============================================
  // SERVICE DEEP DIVES (8 posts)
  // ============================================
  {
    id: 16,
    title: "Certified Loan Signing Agent - Mortgage Closings Made Easy",
    content: `Buying or refinancing a home? Signed On Time provides NNA-certified loan signing agent services for:

• Purchase mortgages
• Refinances
• HELOCs
• Reverse mortgages
• Construction loans

We work with all major lenders and title companies for smooth, accurate closings.

What to expect:
✅ Experienced signing agent who knows the documents
✅ Careful review of all paperwork
✅ Error-free notarization
✅ Proper document handling & return
✅ Closing at your kitchen table

Why choose a mobile loan signing agent?
• Sign at YOUR location (home, office, etc.)
• Flexible scheduling including evenings & weekends
• Same-day signings for urgent closings
• We Come To You Anytime And Anywhere

Serving Cincinnati, Dayton, and surrounding areas. We make your mortgage closing convenient and stress-free.

Call (513) 226-9052 to schedule your loan signing!`,
    callToAction: "Schedule Signing",
    ctaLink: "https://www.signedontime.com/loan-signings",
    category: "service",
    linkedPage: "/loan-signings"
  },
  {
    id: 17,
    title: "Wills, Trusts & Power of Attorney Notarization",
    content: `Protect your family with properly notarized estate planning documents.

Signed On Time specializes in:
• Will notarization
• Living trusts
• Healthcare powers of attorney
• Financial POAs
• Living wills / advance directives
• Trust certifications

We coordinate witnesses when needed and travel to:
✅ Homes & residences
✅ Hospitals & healthcare facilities
✅ Senior communities
✅ Attorney offices
✅ Any convenient location

Don't delay your estate planning - we make it convenient!

Why mobile estate document notarization?
• No travel for elderly or mobility-challenged signers
• Convenient for families coordinating documents
• Same-day service for urgent situations
• We Come To You Anytime And Anywhere

Our certified notary understands estate documents and witnesses signatures and coordinates witnesses when needed.

Serving Cincinnati, Dayton, and surrounding areas.

Call (513) 226-9052 to schedule your estate document signing!`,
    callToAction: "Book Estate Docs",
    ctaLink: "https://www.signedontime.com/estate-plans",
    category: "service",
    linkedPage: "/estate-plans"
  },
  {
    id: 18,
    title: "Real Estate Document Notarization - Deeds & Closings",
    content: `Buying or selling property? Signed On Time handles all real estate document notarizations including:

• Warranty deeds
• Quit claim deeds
• Seller signings
• Closing documents
• Title transfers
• Mortgage documents

Our mobile notary comes to you for convenient closings at:
✅ Your home
✅ Your office
✅ Title company
✅ Attorney's office
✅ Any convenient location

Fast, accurate, professional service.

Why choose mobile real estate notarization?
• Convenient scheduling
• Same-day service available
• Experienced with all deed types
• We Come To You Anytime And Anywhere

Whether you're a buyer, seller, agent, or attorney, we make real estate closings easy.

Serving the Cincinnati-Dayton metro area and surrounding counties.

Call (513) 226-9052 for your real estate notarization needs!`,
    callToAction: "Get Started",
    ctaLink: "https://www.signedontime.com/real-estate",
    category: "service",
    linkedPage: "/real-estate"
  },
  {
    id: 19,
    title: "Apostille & Document Authentication for International Use",
    content: `Need documents authenticated for use abroad? Signed On Time offers apostille services for:

• Birth certificates
• Diplomas & transcripts
• Marriage licenses
• Death certificates
• Business documents
• Powers of attorney

We handle Ohio Secretary of State apostille processing and can notarize translation affidavits.

Perfect for:
✅ Immigration applications
✅ International employment
✅ Studying abroad
✅ Foreign business transactions
✅ Marriage abroad
✅ Dual citizenship applications

Our apostille services include:
• Document review & preparation
• Notarization of eligible documents
• Submission to Secretary of State
• Return of authenticated documents

We Come To You Anytime And Anywhere for the notarization portion of your apostille needs.

Serving Cincinnati, Dayton, and surrounding areas.

Call (513) 226-9052 for apostille information!`,
    callToAction: "Learn More",
    ctaLink: "https://www.signedontime.com/apostille",
    category: "service",
    linkedPage: "/apostille"
  },
  {
    id: 20,
    title: "Hospital & Nursing Home Notary Services",
    content: `Need a notary at the hospital or nursing home? Signed On Time provides sensitive, professional healthcare notary services.

We handle:
• Healthcare directives
• Powers of attorney
• Wills
• Living wills
• Trust documents
• Urgent legal documents

Available for bedside service at:
✅ Hospitals
✅ Nursing homes
✅ Rehabilitation centers
✅ Assisted living facilities
✅ Hospice care

Same-day service for urgent needs.

Our approach:
• Sensitive, patient interaction
• Experience with hospital protocols
• Flexible scheduling including evenings
• We Come To You Anytime And Anywhere

We understand the urgency of healthcare situations and provide prompt, professional service when families need it most.

Serving Cincinnati, Dayton, and surrounding areas.

Call (513) 226-9052 for hospital & healthcare notary services!`,
    callToAction: "Request Service",
    ctaLink: "https://www.signedontime.com/healthcare-notary",
    category: "service",
    linkedPage: "/healthcare-notary"
  },
  {
    id: 21,
    title: "Business Document Notarization - Contracts & Corporate Docs",
    content: `Signed On Time serves businesses with professional notarization for:

• Contracts & agreements
• Partnership documents
• Corporate resolutions
• I-9 employment verification
• Vendor packets
• Affidavits
• Licensing documents

We come to your office for convenient service that doesn't disrupt your workday.

Perfect for:
✅ Busy professionals
✅ HR departments
✅ Legal teams
✅ Small business owners
✅ Contractors & vendors

Why choose mobile business notarization?
• No employee travel time
• Same-day service available
• Flexible scheduling
• We Come To You Anytime And Anywhere

Whether you need one document or multiple signers, we handle your business notarization needs efficiently.

Serving Cincinnati, Dayton, and surrounding business communities.

Call (513) 226-9052 for your business notarization quote!`,
    callToAction: "Business Quote",
    ctaLink: "https://www.signedontime.com/business-services",
    category: "service",
    linkedPage: "/business-services"
  },
  {
    id: 22,
    title: "Mobile Notary Public - All Document Types",
    content: `Need something notarized? Signed On Time handles all types of notarizations including:

• Acknowledgments
• Jurats
• Oaths & affirmations
• Copy certifications
• Signature witnessing

No document too simple or complex!

Our certified notary comes to:
✅ Your home
✅ Your office
✅ Coffee shops
✅ Libraries
✅ Any convenient location

Same-day service available 7 days a week.

Common documents we notarize:
• Affidavits
• Powers of attorney
• Contracts
• Deeds
• Loan documents
• Court documents
• Travel consent forms
• And much more!

Why choose mobile notary?
• Convenient - we come to you
• Fast - same-day appointments
• Professional - certified & insured
• We Come To You Anytime And Anywhere

Serving Cincinnati, Dayton, and surrounding areas.

Call (513) 226-9052 for same-day notary service!`,
    callToAction: "Get a Quote",
    ctaLink: "https://www.signedontime.com/general-notary",
    category: "service",
    linkedPage: "/general-notary"
  },
  {
    id: 23,
    title: "Notary Services for College Students & Young Adults",
    content: `Turning 18? Heading to college? Signed On Time helps young adults with essential documents:

• FAFSA verification
• Lease agreements
• Study abroad documents
• Passport applications
• Employment documents

The Essential 18+ Document Package:
✅ Healthcare Power of Attorney
✅ FERPA release forms
✅ Financial POA (optional)
✅ HIPAA authorization

Why do 18-year-olds need these documents? Once you turn 18, your parents no longer have legal authority to make decisions for you or access your records. These documents ensure your family can help in emergencies.

We travel to:
• College campuses
• Dorms & apartments
• Family homes
• Any convenient location

We Come To You Anytime And Anywhere.

Perfect for Miami University, UC, Xavier, Wright State, and other area students.

Call (513) 226-9052 to schedule!`,
    callToAction: "Learn More",
    ctaLink: "https://www.signedontime.com/college-18-plus",
    category: "service",
    linkedPage: "/college-18-plus"
  },

  // ============================================
  // SEASONAL/TIMELY CONTENT (4 posts)
  // ============================================
  {
    id: 24,
    title: "Tax Season Notary Services - Fast, Same-Day Appointments",
    content: `Tax season is here! Signed On Time offers quick notarization for tax-related documents including:

• IRS forms & affidavits
• Financial affidavits
• Business tax filings
• Extension requests
• Amended return documents

Don't wait in long lines at shipping stores or banks!

Our mobile notary comes to:
✅ Your home
✅ Your office
✅ Your accountant's office
✅ Any convenient location

Same-day appointments available throughout the Cincinnati-Dayton metro area.

Why choose mobile notary for tax documents?
• Fast service - no waiting
• Convenient - we come to you
• Accurate - experienced with tax-related documents
• We Come To You Anytime And Anywhere

Serving Hamilton, Warren, Montgomery, Butler, Greene, and Clinton counties.

Beat the tax season rush with convenient mobile notary service!

Call (513) 226-9052 to schedule your appointment!`,
    callToAction: "Book Today",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "seasonal",
    linkedPage: "/tax-season-notary"
  },
  {
    id: 25,
    title: "Back-to-School Document Notarization",
    content: `Getting ready for the school year? Signed On Time helps families with:

• School enrollment documents
• Guardianship affidavits
• Sports physicals authorization
• Medical consent forms
• Study abroad paperwork
• Custody agreements

For college-bound students turning 18:
✅ Healthcare Power of Attorney
✅ FERPA release forms
✅ HIPAA authorization
✅ Financial POA (optional)

These essential documents ensure parents can still help their adult children in emergencies.

Our mobile notary comes to your home for convenient service. No need to take time off work or fight crowds at the bank!

We Come To You Anytime And Anywhere.

Serving Cincinnati, Dayton, Mason, and surrounding areas.

Get ahead of the back-to-school rush!

Call (513) 226-9052 to schedule your appointment!`,
    callToAction: "Schedule Now",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "seasonal",
    linkedPage: "/back-to-school-documents"
  },
  {
    id: 26,
    title: "Year-End Estate Planning - Get Your Documents in Order",
    content: `Before the year ends, make sure your estate documents are current!

Signed On Time helps with:
• Will updates & execution
• Power of attorney documents
• Healthcare directives
• Living wills
• Trust certifications
• Beneficiary designations

Why update estate documents now?
✅ Tax planning benefits
✅ New year peace of mind
✅ Family changes addressed
✅ Legal requirements current

Our mobile notary travels to you for convenient appointments:
• Homes & residences
• Senior communities
• Healthcare facilities
• Attorney offices

We Come To You Anytime And Anywhere.

Don't wait until it's too late! Life changes - births, deaths, marriages, divorces - may require document updates.

Serving Cincinnati, Dayton, and surrounding areas.

Call (513) 226-9052 to schedule your estate document signing!`,
    callToAction: "Book Appointment",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "seasonal",
    linkedPage: "/year-end-planning-notary"
  },
  {
    id: 27,
    title: "Spring Home Buying Season - Loan Signing Services",
    content: `Buying a home this spring? Signed On Time provides certified loan signing agent services for your mortgage closing.

We handle:
• Purchase mortgages
• Refinances
• HELOCs
• Construction loans
• Jumbo loans

We work with all major lenders and title companies for smooth, accurate closings.

Schedule your signing at:
✅ Your new home
✅ Your current home
✅ Your office
✅ Any convenient location

Why choose a mobile loan signing agent?
• Convenient scheduling
• Experienced with all loan packages
• Error-free closings
• We Come To You Anytime And Anywhere

Spring is the busiest time for home sales. Schedule early for best availability!

Serving Cincinnati, Dayton, Mason, and all surrounding areas.

Call (513) 226-9052 to schedule your loan signing!`,
    callToAction: "Schedule Signing",
    ctaLink: "https://www.signedontime.com/loan-signings",
    category: "seasonal",
    linkedPage: "/home-buying-season-notary"
  },

  // ============================================
  // EDUCATIONAL TIPS (3 posts)
  // ============================================
  {
    id: 28,
    title: "What to Bring to Your Notary Appointment",
    content: `Preparing for a notary appointment? Here's what you need:

1️⃣ VALID GOVERNMENT-ISSUED PHOTO ID
• Driver's license
• Passport
• State ID card
• Military ID
Must NOT be expired!

2️⃣ ALL DOCUMENTS READY FOR SIGNING
• Do NOT sign beforehand
• All pages printed
• Know where to sign

3️⃣ ANY REQUIRED WITNESSES
Some documents require witnesses. Ask if unsure.

4️⃣ PAYMENT METHOD
• Cash, check, or card accepted

Our mobile notary brings everything else needed:
✅ Notary seal & stamp
✅ Journal for records
✅ Knowledge of proper procedures

Tips for a smooth appointment:
• Review documents before signing
• Have questions ready
• Ensure all signers present

We Come To You Anytime And Anywhere.

Have questions? Call (513) 226-9052 - we're happy to help!`,
    callToAction: "Book Now",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "tips",
    linkedPage: "/blog/general-notary-what-to-bring"
  },
  {
    id: 29,
    title: "Notary ID Requirements - What ID Do You Need?",
    content: `What ID works for notarization?

ACCEPTABLE IDs:
✅ Valid driver's license
✅ US passport (or passport card)
✅ State-issued ID card
✅ Military ID

REQUIREMENTS:
• Must be CURRENT (not expired)
• Must have clear PHOTO
• Must show SIGNATURE

EXPIRED ID?
Contact us about alternatives. We can sometimes use:
• Multiple forms of ID
• Credible identifying witnesses
• Other state-approved methods

COMMON QUESTIONS:

Q: Can I use an expired ID?
A: Generally no, but alternatives may be available.

Q: What if my name changed?
A: Bring supporting documents (marriage certificate, court order).

Q: Do both spouses need ID?
A: Yes, all signers need valid ID.

We Come To You Anytime And Anywhere.

Questions about ID requirements? Call (513) 226-9052 before your appointment!`,
    callToAction: "Learn More",
    ctaLink: "https://www.signedontime.com/faq",
    category: "tips",
    linkedPage: "/blog/expired-id-options"
  },
  {
    id: 30,
    title: "How Much Does Mobile Notary Service Cost?",
    content: `Wondering about notary fees? Here's what to expect:

OHIO NOTARY FEES:
• Up to $5 per notarial act (state regulated)

MOBILE NOTARY TRAVEL FEES:
• $0-25 depending on your location
• Many locations have NO travel fee

LOAN SIGNING FEES:
• Priced separately based on package size
• Contact us for quote

WHAT'S INCLUDED:
✅ Travel to your location
✅ Professional notarization
✅ Proper document handling
✅ Flexible scheduling

NO SURPRISES:
We provide upfront pricing BEFORE every appointment. You'll know exactly what to expect.

WHY MOBILE MAY COST MORE:
• We come to YOU (saves your time)
• Evening/weekend availability
• Same-day service available
• We Come To You Anytime And Anywhere

Get your FREE quote today!

Call (513) 226-9052 for transparent, upfront pricing!`,
    callToAction: "Get Free Quote",
    ctaLink: "https://www.signedontime.com/contact",
    category: "tips",
    linkedPage: "/blog/notary-fees-and-mobile-travel"
  },

  // ============================================
  // ADDITIONAL MAJOR CITY POSTS (10 posts)
  // ============================================
  {
    id: 31,
    title: "Mobile Notary in Beavercreek, OH - Near Wright-Patt AFB",
    content: `Need a notary in Beavercreek? Signed On Time provides professional mobile notary services to Beavercreek and the Wright-Patterson AFB area.

We specialize in:
• Military document notarizations
• Real estate closings
• Estate planning documents
• Powers of attorney
• I-9 employment verification

CONVENIENT LOCATIONS WE SERVE:
📍 Beavercreek neighborhoods
📍 Wright-Patterson AFB housing
📍 The Greene Town Center area
📍 Fairfield Commons area

WHY CHOOSE US:
✅ Same-day appointments available
✅ Evening and weekend service
✅ NNA certified & background-checked
✅ Military-friendly service

We understand the unique needs of military families and civilians working at Wright-Patt. We Come To You Anytime And Anywhere.

Call (513) 226-9052 today!`,
    callToAction: "Schedule Now",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "major-city",
    linkedPage: "/notary-beavercreek-45431",
    county: "Greene",
    city: "Beavercreek"
  },
  {
    id: 32,
    title: "Lebanon Ohio Mobile Notary - Warren County Seat",
    content: `Looking for a notary in Lebanon, Ohio? Signed On Time serves Lebanon and surrounding Warren County communities with professional mobile notary services.

OUR SERVICES IN LEBANON:
• Loan signings & mortgage closings
• Wills, trusts, and POA documents
• Real estate deed transfers
• Business contracts
• Court document notarizations

WE COME TO YOU:
📍 Downtown Lebanon
📍 Historic district
📍 Lebanon business parks
📍 Surrounding townships

As the Warren County seat, Lebanon has unique notary needs - from courthouse filings to real estate transactions. Our certified notary understands local requirements.

SAME-DAY AVAILABILITY:
✅ 7 days a week service
✅ Evening appointments
✅ We Come To You Anytime And Anywhere

Perfect for busy Lebanon residents and businesses!

Call (513) 226-9052 for your free quote!`,
    callToAction: "Get a Quote",
    ctaLink: "https://www.signedontime.com/contact",
    category: "major-city",
    linkedPage: "/notary-lebanon-45036",
    county: "Warren",
    city: "Lebanon"
  },
  {
    id: 33,
    title: "Fairborn Mobile Notary - Wright State University Area",
    content: `Signed On Time provides mobile notary services to Fairborn and the Wright State University community.

PERFECT FOR:
🎓 Wright State students (FERPA releases, study abroad docs)
🎓 University staff & faculty
🏠 Fairborn homeowners
✈️ Wright-Patterson AFB personnel

OUR SERVICES:
• Student document notarization
• Lease agreements
• Powers of attorney for students
• Real estate closings
• Estate planning documents

SERVING ALL FAIRBORN:
📍 Wright State campus area
📍 Downtown Fairborn
📍 Residential neighborhoods
📍 Business districts

We understand the unique needs of college students turning 18 - including the essential documents young adults need.

✅ Same-day appointments
✅ Affordable student-friendly pricing
✅ We Come To You Anytime And Anywhere

Call (513) 226-9052!`,
    callToAction: "Book Appointment",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "major-city",
    linkedPage: "/notary-fairborn-45324",
    county: "Greene",
    city: "Fairborn"
  },
  {
    id: 34,
    title: "Springboro Mobile Notary Services - Warren County",
    content: `Need a notary in Springboro? Signed On Time brings professional mobile notary services directly to your Springboro home or office.

SPRINGBORO SERVICES:
• Loan signings & refinances
• Estate planning documents
• Real estate transactions
• Business contract notarization
• Healthcare directives

WE SERVE:
📍 Downtown Springboro
📍 Clearcreek Township
📍 Austin Landing area
📍 All Springboro neighborhoods

WHY SPRINGBORO RESIDENTS CHOOSE US:
✅ No need to drive to a notary
✅ Same-day appointments available
✅ Evening and weekend service
✅ NNA certified notary

Springboro families trust us for their important document needs. From first-time homebuyers to estate planning, we handle it all.

We Come To You Anytime And Anywhere.

Call (513) 226-9052 today!`,
    callToAction: "Get Free Quote",
    ctaLink: "https://www.signedontime.com/contact",
    category: "major-city",
    linkedPage: "/notary-springboro-45066",
    county: "Warren",
    city: "Springboro"
  },
  {
    id: 35,
    title: "Centerville Ohio Mobile Notary - Montgomery County",
    content: `Serving Centerville and Washington Township with professional mobile notary services. Signed On Time comes to you!

CENTERVILLE COVERAGE:
📍 Uptown Centerville
📍 Washington Township
📍 The Greene area
📍 All residential neighborhoods

OUR NOTARY SERVICES:
• Mortgage loan closings
• Wills and trusts
• Powers of attorney
• Real estate deeds
• Business documents
• Healthcare directives

WHY CENTERVILLE TRUSTS US:
✅ Same-day service available
✅ Evening & weekend appointments
✅ NNA certified & insured
✅ Background-checked notary

Centerville is known for excellent schools and family-friendly neighborhoods. We help families protect what matters with properly notarized estate documents.

We Come To You Anytime And Anywhere.

Call (513) 226-9052 for your appointment!`,
    callToAction: "Schedule Now",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "major-city",
    linkedPage: "/notary-centerville-45459",
    county: "Montgomery",
    city: "Centerville"
  },
  {
    id: 36,
    title: "Miamisburg Mobile Notary - Same Day Service Available",
    content: `Need a notary in Miamisburg? Signed On Time provides fast, professional mobile notary services throughout Miamisburg and Miami Township.

MIAMISBURG SERVICES:
• Loan document signings
• Estate planning notarizations
• Real estate closings
• Business contracts
• Affidavits and oaths

AREAS WE COVER:
📍 Downtown Miamisburg
📍 Austin Landing
📍 Miami Township
📍 All Miamisburg neighborhoods

SAME-DAY APPOINTMENTS:
✅ Available 7 days a week
✅ Morning, afternoon, or evening
✅ We come to your home or office
✅ No travel fee for many locations

Our certified notary serves Miamisburg businesses and residents with quick, reliable service. Perfect for busy professionals who need documents notarized without leaving work.

We Come To You Anytime And Anywhere.

Call (513) 226-9052 now!`,
    callToAction: "Get a Quote",
    ctaLink: "https://www.signedontime.com/contact",
    category: "major-city",
    linkedPage: "/notary-miamisburg-45342",
    county: "Montgomery",
    city: "Miamisburg"
  },
  {
    id: 37,
    title: "Milford Ohio Mobile Notary - Clermont County",
    content: `Signed On Time serves Milford and eastern Clermont County with professional mobile notary services.

MILFORD NOTARY SERVICES:
• Real estate closings
• Loan document signings
• Estate planning documents
• Powers of attorney
• Business notarizations

COVERAGE AREA:
📍 Downtown Milford
📍 Miami Township
📍 Terrace Park nearby
📍 Eastern Cincinnati suburbs

CONVENIENT SERVICE:
✅ Same-day appointments
✅ Evening availability
✅ Weekend service
✅ We travel to you

Milford residents enjoy our convenient mobile service. No need to fight traffic or find parking - we bring professional notary services to your door.

Perfect for Milford homebuyers, families, and businesses.

We Come To You Anytime And Anywhere.

Call (513) 226-9052!`,
    callToAction: "Book Now",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "major-city",
    linkedPage: "/notary-milford-45150",
    county: "Clermont",
    city: "Milford"
  },
  {
    id: 38,
    title: "Huber Heights Mobile Notary - Montgomery County North",
    content: `Need a notary in Huber Heights? Signed On Time provides mobile notary services to Huber Heights and northern Montgomery County.

SERVING HUBER HEIGHTS:
📍 All Huber Heights neighborhoods
📍 Wayne Township area
📍 Near Wright-Patterson AFB
📍 Surrounding communities

OUR SERVICES:
• Mortgage closings & refinances
• Wills and estate documents
• Powers of attorney
• Military document notarization
• Business contracts
• I-9 verification

WHY CHOOSE US:
✅ Same-day service available
✅ Evening appointments
✅ Weekend availability
✅ NNA certified notary

Huber Heights residents appreciate our flexible scheduling and professional service. We come to your home, office, or any convenient location.

We Come To You Anytime And Anywhere.

Call (513) 226-9052 today!`,
    callToAction: "Schedule Appointment",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "major-city",
    linkedPage: "/notary-huber-heights-45424",
    county: "Montgomery",
    city: "Huber Heights"
  },
  {
    id: 39,
    title: "Xenia Ohio Mobile Notary - Greene County Seat",
    content: `Looking for a notary in Xenia? Signed On Time serves the Greene County seat with professional mobile notary services.

XENIA NOTARY SERVICES:
• Court document notarizations
• Real estate transactions
• Estate planning documents
• Business contracts
• Loan signings

XENIA COVERAGE:
📍 Downtown Xenia
📍 Greene County Courthouse area
📍 Xenia Township
📍 All neighborhoods

AS THE COUNTY SEAT:
Xenia has unique notary needs for court filings, property transfers, and legal documents. Our certified notary understands local requirements.

✅ Same-day availability
✅ Court-ready documents
✅ Professional service
✅ We Come To You Anytime And Anywhere

Perfect for Xenia attorneys, real estate professionals, and residents who need reliable notary service.

Call (513) 226-9052!`,
    callToAction: "Get a Quote",
    ctaLink: "https://www.signedontime.com/contact",
    category: "major-city",
    linkedPage: "/notary-xenia-45385",
    county: "Greene",
    city: "Xenia"
  },
  {
    id: 40,
    title: "Middletown Ohio Mobile Notary - Butler County",
    content: `Signed On Time provides mobile notary services to Middletown and surrounding Butler County communities.

MIDDLETOWN SERVICES:
• Loan document signings
• Real estate closings
• Estate planning notarizations
• Business contracts
• Healthcare directives

WE SERVE:
📍 Downtown Middletown
📍 Middletown business district
📍 Surrounding townships
📍 Industrial areas

FLEXIBLE SCHEDULING:
✅ Same-day appointments available
✅ Morning, afternoon, or evening
✅ Weekend service
✅ No travel fee for many locations

Middletown businesses and residents trust us for professional, reliable notary service. We come to your location - home, office, factory, or anywhere convenient.

We Come To You Anytime And Anywhere.

Call (513) 226-9052 for your free quote!`,
    callToAction: "Book Appointment",
    ctaLink: "https://www.signedontime.com/book-now",
    category: "major-city",
    linkedPage: "/notary-middletown-45042",
    county: "Butler",
    city: "Middletown"
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all posts for a specific category
 */
export const getGMBPostsByCategory = (category: GMBBlogPost['category']): GMBBlogPost[] => {
  return GMB_BLOG_POSTS.filter(post => post.category === category);
};

/**
 * Get posts linking to a specific page
 */
export const getGMBPostsByLinkedPage = (page: string): GMBBlogPost[] => {
  return GMB_BLOG_POSTS.filter(post => post.linkedPage === page);
};

/**
 * Get posts for a specific county
 */
export const getGMBPostsByCounty = (county: string): GMBBlogPost[] => {
  return GMB_BLOG_POSTS.filter(post => post.county?.toLowerCase() === county.toLowerCase());
};

/**
 * Format post for GMB with character counts
 */
export const formatForGMB = (post: GMBBlogPost): { 
  title: string; 
  body: string; 
  cta: string; 
  charCount: number;
  isValid: boolean;
} => {
  const charCount = post.content.length;
  return {
    title: post.title,
    body: post.content,
    cta: post.callToAction,
    charCount,
    isValid: charCount <= 1500 && post.title.length <= 80
  };
};

/**
 * Export all posts as plain text for copying
 */
export const exportAllPostsAsText = (): string => {
  return GMB_BLOG_POSTS.map(post => 
    `=== POST ${post.id}: ${post.title} ===
Category: ${post.category}
${post.county ? `County: ${post.county}` : ''}
${post.city ? `City: ${post.city}` : ''}

${post.content}

CTA: ${post.callToAction}
Link: ${post.ctaLink}
Website Page: ${post.linkedPage}

Character Count: ${post.content.length}/1500
`
  ).join('\n\n');
};

/**
 * Export posts as CSV format
 */
export const exportPostsAsCSV = (): string => {
  const headers = 'ID,Title,Category,County,City,Content,CTA,CTA Link,Website Page,Char Count';
  const rows = GMB_BLOG_POSTS.map(post => 
    `${post.id},"${post.title.replace(/"/g, '""')}",${post.category},"${post.county || ''}","${post.city || ''}","${post.content.replace(/"/g, '""')}","${post.callToAction}","${post.ctaLink}","${post.linkedPage}",${post.content.length}`
  );
  return [headers, ...rows].join('\n');
};

/**
 * Get post statistics
 */
export const getPostStats = () => {
  const posts = GMB_BLOG_POSTS;
  const categories = {
    location: posts.filter(p => p.category === 'location').length,
    'major-city': posts.filter(p => p.category === 'major-city').length,
    service: posts.filter(p => p.category === 'service').length,
    seasonal: posts.filter(p => p.category === 'seasonal').length,
    tips: posts.filter(p => p.category === 'tips').length
  };
  
  const avgCharCount = Math.round(
    posts.reduce((sum, p) => sum + p.content.length, 0) / posts.length
  );
  
  const invalidPosts = posts.filter(p => 
    p.content.length > 1500 || p.title.length > 80
  );
  
  return {
    totalPosts: posts.length,
    categories,
    avgCharCount,
    invalidPosts: invalidPosts.length,
    allValid: invalidPosts.length === 0
  };
};

// ============================================
// CALENDAR HELPER FUNCTIONS
// ============================================

/**
 * Get scheduled posts for a specific week
 */
export const getPostsByWeek = (week: number): (GMBBlogPost & { schedule: PostSchedule })[] => {
  const weekSchedule = GMB_POSTING_CALENDAR.filter(s => s.weekNumber === week);
  return weekSchedule.map(schedule => {
    const post = GMB_BLOG_POSTS.find(p => p.id === schedule.postId);
    return { ...post!, schedule };
  }).filter(p => p !== undefined);
};

/**
 * Get all scheduled posts with their calendar data
 */
export const getScheduledPosts = (): (GMBBlogPost & { schedule: PostSchedule })[] => {
  return GMB_POSTING_CALENDAR.map(schedule => {
    const post = GMB_BLOG_POSTS.find(p => p.id === schedule.postId);
    return { ...post!, schedule };
  }).filter(p => p !== undefined);
};

/**
 * Get posts grouped by week
 */
export const getPostsGroupedByWeek = (): Record<number, (GMBBlogPost & { schedule: PostSchedule })[]> => {
  const grouped: Record<number, (GMBBlogPost & { schedule: PostSchedule })[]> = {};
  
  GMB_POSTING_CALENDAR.forEach(schedule => {
    const post = GMB_BLOG_POSTS.find(p => p.id === schedule.postId);
    if (post) {
      if (!grouped[schedule.weekNumber]) {
        grouped[schedule.weekNumber] = [];
      }
      grouped[schedule.weekNumber].push({ ...post, schedule });
    }
  });
  
  return grouped;
};

/**
 * Export calendar as CSV for scheduling tools
 */
export const exportCalendarAsCSV = (): string => {
  const headers = 'Post ID,Title,Suggested Date,Day of Week,Week Number,Theme,Category,Content,CTA,CTA Link';
  const rows = GMB_POSTING_CALENDAR.map(schedule => {
    const post = GMB_BLOG_POSTS.find(p => p.id === schedule.postId);
    if (!post) return '';
    return `${schedule.postId},"${post.title.replace(/"/g, '""')}","${schedule.suggestedDate}","${schedule.dayOfWeek}",${schedule.weekNumber},"${schedule.theme}","${post.category}","${post.content.replace(/"/g, '""')}","${post.callToAction}","${post.ctaLink}"`;
  }).filter(r => r !== '');
  return [headers, ...rows].join('\n');
};

/**
 * Export calendar as iCal format
 */
export const exportCalendarAsICS = (): string => {
  let ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Signed On Time//GMB Posting Calendar//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
`;

  GMB_POSTING_CALENDAR.forEach(schedule => {
    const post = GMB_BLOG_POSTS.find(p => p.id === schedule.postId);
    if (!post) return;
    
    const date = schedule.suggestedDate.replace(/-/g, '');
    const uid = `gmb-post-${schedule.postId}@signedontime.com`;
    
    ics += `BEGIN:VEVENT
UID:${uid}
DTSTART:${date}
DTEND:${date}
SUMMARY:GMB Post: ${post.title}
DESCRIPTION:Category: ${post.category}\\nCTA: ${post.callToAction}\\n\\nPost Content:\\n${post.content.substring(0, 200).replace(/\n/g, '\\n')}...
STATUS:CONFIRMED
END:VEVENT
`;
  });

  ics += 'END:VCALENDAR';
  return ics;
};

/**
 * Get calendar statistics
 */
export const getCalendarStats = () => {
  const weeks = [...new Set(GMB_POSTING_CALENDAR.map(s => s.weekNumber))];
  const themes = GMB_POSTING_CALENDAR.reduce((acc, s) => {
    acc[s.theme] = (acc[s.theme] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return {
    totalWeeks: weeks.length,
    totalScheduledPosts: GMB_POSTING_CALENDAR.length,
    postsPerWeek: Math.round(GMB_POSTING_CALENDAR.length / weeks.length * 10) / 10,
    themeBreakdown: themes,
    startDate: GMB_POSTING_CALENDAR[0]?.suggestedDate,
    endDate: GMB_POSTING_CALENDAR[GMB_POSTING_CALENDAR.length - 1]?.suggestedDate
  };
};
