import { Home, FileText, Heart, Car, Briefcase, Shield } from 'lucide-react';
import CountyHubTemplate from '@/components/templates/CountyHubTemplate';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.signedontime.com/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.signedontime.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Montgomery County Guide", "item": "https://www.signedontime.com/blog/notary-guide-montgomery-county-ohio" }
  ]
};

const NotaryGuideMontgomeryCounty = () => (
  <CountyHubTemplate
    county="Montgomery County"
    title="Mobile Notary Services in Montgomery County, Ohio"
    subtitle="Serving Dayton, Kettering, Centerville, and all Montgomery County communities along the US-35 corridor from Waynesville."
    introText="Signed On Time is centrally located in Waynesville, Ohio — positioned between Cincinnati and Dayton along the US-35 and I-71 corridors. This means faster response times across all six counties than any notary based in either city alone. The communities along US-35 between Waynesville and Dayton are some of our most frequently served areas — same-day appointments throughout Montgomery County are standard. We serve Dayton, Kettering, Centerville, Miamisburg, Huber Heights, Vandalia, Oakwood, Trotwood, West Carrollton, and the rural communities beyond the city limits that other notaries rarely reach."
    publishDate="2026-04-08"
    readTime="7 min read"
    canonicalUrl="https://www.signedontime.com/blog/notary-guide-montgomery-county-ohio"
    metaTitle="Mobile Notary Montgomery County Ohio | Signed On Time"
    metaDescription="Mobile notary services throughout Montgomery County Ohio. Serving Dayton, Kettering, Centerville and surrounding areas. 30-40 minutes from Waynesville. Same-day appointments. Call (513) 226-9052."
    services={[
      {
        icon: Home,
        title: 'Loan Signing Services in Montgomery County',
        description: 'The Dayton metropolitan real estate market generates consistent loan signing volume across Montgomery County. From first-time homebuyers in Huber Heights and Trotwood to refinances in Kettering and Oakwood, we provide certified loan signing agent services for purchase closings, refinances, reverse mortgages, and HELOCs. The US-35 corridor makes Montgomery County one of our most efficient service areas — we regularly complete multiple closings in the Dayton area on the same day.',
        linkTo: '/loan-signings',
        linkText: 'Learn more about loan signing services',
      },
      {
        icon: FileText,
        title: 'Estate Planning Notarization in Montgomery County',
        description: 'Montgomery County Probate Court in downtown Dayton handles one of the highest volumes of estate filings in the region. We notarize wills, irrevocable and revocable trusts, durable powers of attorney, and healthcare directives at homes and attorney offices throughout the county. Many Centerville and Oakwood families work with Dayton-area estate attorneys — we coordinate directly with legal teams to ensure documents are properly witnessed and notarized before filing.',
        linkTo: '/estate-plans',
        linkText: 'Learn more about estate planning notarization',
      },
      {
        icon: Heart,
        title: 'Healthcare Document Notarization in Montgomery County',
        description: 'Montgomery County is home to Miami Valley Hospital, the Kettering Health Network facilities, and the Dayton VA Medical Center — all of which generate urgent healthcare notarization requests. We provide bedside notarization for living wills, healthcare powers of attorney, and HIPAA authorization forms at hospitals and rehabilitation facilities across the county. When a patient is admitted unexpectedly at Miami Valley or Kettering Medical Center, families need a notary who can arrive quickly — the US-35 route from Waynesville puts us there in 30-40 minutes.',
        linkTo: '/healthcare-notary',
        linkText: 'Learn more about healthcare notarization',
      },
      {
        icon: Shield,
        title: 'Military and Veterans Notary Services in Montgomery County',
        description: 'Wright-Patterson Air Force Base sits adjacent to Montgomery County\'s eastern border, and thousands of military families live in Huber Heights, Vandalia, and the surrounding communities. Deployment Powers of Attorney are among our most frequently requested documents — service members preparing for deployment need financial, legal, and healthcare POA documents notarized on tight timelines. We also assist veterans at the Dayton VA Medical Center with benefit applications and healthcare directives, offering flexible evening and weekend scheduling to accommodate military operations tempos.',
        linkTo: '/general-notary',
        linkText: 'Learn more about general notary services',
      },
      {
        icon: Car,
        title: 'Vehicle Title Notarization in Montgomery County',
        description: 'Whether you are buying a vehicle from a private seller in Dayton or completing a title transfer in Miamisburg, Ohio law requires notarized signatures on vehicle title documents. We handle title transfers, bills of sale, and lien releases at your location throughout Montgomery County — eliminating the need to visit a BMV branch and wait in line.',
        linkTo: '/vehicles-dmv',
        linkText: 'Learn more about vehicle title notarization',
      },
      {
        icon: Briefcase,
        title: 'Business Notary Services in Montgomery County',
        description: 'Dayton\'s manufacturing heritage and growing defense contractor community generate steady demand for business notarizations. From contract execution at downtown offices to vendor compliance affidavits at industrial facilities in West Carrollton and Trotwood, we bring mobile notary service to your workplace. The defense and aerospace companies near Wright-Patterson frequently require notarized documents for government contracts and security clearance paperwork.',
        linkTo: '/general-notary',
        linkText: 'Learn more about general notary services',
      },
    ]}
    faqs={[
      { question: 'Do you serve all of Dayton and the surrounding Montgomery County area?', answer: 'Yes — from downtown Dayton to Kettering, Centerville, Vandalia and the rural communities throughout Montgomery County. The US-35 corridor from Waynesville to Dayton is one of our most frequently traveled routes.' },
      { question: 'Can you notarize VA documents at the Dayton VA Medical Center?', answer: 'Yes, we provide mobile notary services at the Dayton VA Medical Center and other VA facilities in the area. We understand the specific documentation needs of veterans and military families.' },
      { question: 'Do you handle deployment POA for military families near Wright-Patterson AFB?', answer: 'Absolutely. Deployment Powers of Attorney are one of our most requested services for military families in the Greene and Montgomery County area. We offer flexible scheduling including evenings and weekends to accommodate deployment timelines.' },
      { question: 'How quickly can you reach Kettering or Centerville?', answer: 'Kettering and Centerville are approximately 35-40 minutes from our Waynesville base via US-35. Same-day appointments are regularly available throughout southern Montgomery County.' },
    ]}
    otherCounties={[
      { name: 'Hamilton County', href: '/blog/notary-guide-hamilton-county-ohio' },
      { name: 'Warren County', href: '/blog/notary-guide-warren-county-ohio' },
      { name: 'Butler County', href: '/blog/notary-guide-butler-county-ohio' },
      { name: 'Greene County', href: '/blog/notary-guide-greene-county-ohio' },
      { name: 'Clinton County', href: '/blog/notary-guide-clinton-county-ohio' },
    ]}
    bottomHeading="Professional Notary Services Along the US-35 Corridor"
    bottomText="From downtown Dayton to Kettering, Centerville, Vandalia, and the rural communities throughout Montgomery County — same-day mobile notary service is standard."
    breadcrumbSchema={breadcrumbSchema}
  />
);

export default NotaryGuideMontgomeryCounty;
