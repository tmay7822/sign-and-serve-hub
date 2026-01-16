import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, FileText, Car, AlertTriangle, Phone, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';

const faqs = [
  {
    question: "Do I need a notary for an Ohio car title transfer?",
    answer: "Yes. In Ohio, the seller's signature on the vehicle title must be notarized for the title transfer to be valid at the BMV. The buyer's signature typically does not require notarization, but having a notary present ensures all signatures are completed correctly and the title is filled out properly."
  },
  {
    question: "Can I notarize a car title without the buyer present?",
    answer: "Yes, only the seller's signature requires notarization. The seller can sign and have their signature notarized without the buyer being present. However, both parties being present can help avoid errors and ensure all required information is completed correctly."
  },
  {
    question: "What if I make a mistake on the title?",
    answer: "Mistakes on an Ohio vehicle title can cause the BMV to reject the transfer. Minor errors may be corrected with a line through the mistake and initials, but major errors often require a duplicate title. Always use black or blue ink and print clearly."
  },
  {
    question: "Do I need a bill of sale in Ohio?",
    answer: "While Ohio doesn't legally require a bill of sale for private vehicle sales, it's highly recommended. A bill of sale provides proof of the purchase price (important for tax purposes), documents the transfer date, and protects both buyer and seller. We can notarize your bill of sale along with the title."
  },
  {
    question: "Can you come to my location to notarize the title?",
    answer: "Yes! As a mobile notary service, we travel to your location throughout Greater Cincinnati, Dayton, and surrounding Ohio counties. We can meet at your home, workplace, or any convenient location. Same-day appointments are often available."
  },
  {
    question: "How much does it cost to notarize a car title in Ohio?",
    answer: "Ohio notary fees are regulated by state law at $5 per notarial act. However, mobile notary services include a travel fee for the convenience of coming to your location. Contact us for a complete quote including travel to your area."
  }
];

const OhioCarTitleTransferRequirements = () => {
  return (
    <BlogPostTemplate
      title="Ohio Car Title Transfer Notary Requirements"
      subtitle="Step-by-step guide to notarizing vehicle title transfers in Ohio, plus 7 common mistakes to avoid"
      metaDescription="Complete guide to Ohio car title transfer notary requirements. Learn what signatures need notarization, what documents to bring, and 7 mistakes to avoid."
      publishDate="2026-01-16"
      readTime={8}
      tags={['Car Title', 'Bill of Sale', 'Ohio DMV', 'Vehicle Notary']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "Ohio Buyer & Seller Loan Signing Checklist",
        slug: "ohio-buyer-seller-loan-signing-checklist",
        description: "Complete checklist for real estate closings in Ohio"
      }}
    >
      {/* Quick Answer Box */}
      <Card className="bg-primary/5 border-primary/20 mb-8">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Quick Answer: Do I need a notary for an Ohio car title transfer?</h3>
              <p className="text-muted-foreground">
                <strong>Yes.</strong> In Ohio, the seller's signature on the vehicle title must be notarized for the title transfer to be valid. 
                The buyer's signature typically does not require notarization, but having a notary present ensures all signatures are completed correctly 
                and helps avoid costly BMV rejections.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <p className="text-lg mb-6">
        Transferring a vehicle title in Ohio requires specific signatures and notarization to be legally valid. Whether you're 
        buying or selling a car privately, understanding these requirements can save you time, money, and frustration at the BMV. 
        This guide covers everything you need to know about Ohio car title notarization.
      </p>

      {/* Step-by-Step Process */}
      <h2 className="text-2xl font-bold mt-10 mb-6 flex items-center gap-2">
        <FileText className="h-6 w-6 text-primary" />
        Step-by-Step Ohio Title Transfer Process
      </h2>

      <div className="space-y-6 mb-8">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
          <div>
            <h3 className="font-semibold text-lg">Locate the Title Assignment Section</h3>
            <p className="text-muted-foreground">
              On the back of the Ohio title, find the "Assignment of Ownership" section. This is where the seller will sign and 
              where the notarization takes place. Make sure the title is free of liens before proceeding.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
          <div>
            <h3 className="font-semibold text-lg">Complete the Odometer Disclosure</h3>
            <p className="text-muted-foreground">
              For vehicles less than 10 years old, federal law requires an odometer disclosure statement. The seller must 
              record the current mileage and certify its accuracy. This must be done before notarization.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
          <div>
            <h3 className="font-semibold text-lg">Seller Signs in Front of the Notary</h3>
            <p className="text-muted-foreground">
              The seller must sign the title in the presence of a notary public. <strong>Do not sign before the notary arrives!</strong> 
              The notary must witness the signature to notarize it. Bring valid government-issued photo ID.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
          <div>
            <h3 className="font-semibold text-lg">Notary Completes the Notarization</h3>
            <p className="text-muted-foreground">
              The notary will verify the seller's identity, witness the signature, and complete the notarial certificate with their 
              seal and signature. This makes the title transfer legally valid in Ohio.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">5</div>
          <div>
            <h3 className="font-semibold text-lg">Buyer Takes Title to the BMV</h3>
            <p className="text-muted-foreground">
              The buyer takes the notarized title to an Ohio BMV within 30 days to complete the transfer, pay taxes and fees, 
              and receive a new title in their name. Bring proof of insurance and payment for fees.
            </p>
          </div>
        </div>
      </div>

      {/* 7 Common Mistakes */}
      <h2 className="text-2xl font-bold mt-10 mb-6 flex items-center gap-2">
        <AlertTriangle className="h-6 w-6 text-destructive" />
        7 Common Mistakes to Avoid
      </h2>

      <div className="space-y-4 mb-8">
        <Card className="border-destructive/30">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">1. Signing Before the Notary Arrives</h4>
                <p className="text-sm text-muted-foreground">
                  The most common mistake! A notary must witness your signature. If you've already signed, the title cannot be notarized 
                  and you'll need to apply for a duplicate title—adding weeks to the process.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/30">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">2. Using White-Out or Correction Tape</h4>
                <p className="text-sm text-muted-foreground">
                  Never use white-out on a vehicle title. It will be rejected by the BMV. If you make a mistake, draw a single line 
                  through the error and initial it. Major errors require a duplicate title.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/30">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">3. Leaving Sections Blank</h4>
                <p className="text-sm text-muted-foreground">
                  All required fields must be completed before notarization, including the date of sale, purchase price, and 
                  odometer reading (for vehicles under 10 years old). Incomplete titles may be rejected.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/30">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">4. Not Bringing Valid ID</h4>
                <p className="text-sm text-muted-foreground">
                  The seller must present a valid, government-issued photo ID (driver's license, state ID, or passport) that is 
                  not expired. The name on the ID must match the name on the title exactly.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/30">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">5. Forgetting About Lienholders</h4>
                <p className="text-sm text-muted-foreground">
                  If the title shows a lienholder (bank or finance company), you'll need a lien release before the title can be 
                  transferred. Contact the lienholder to obtain this document before scheduling notarization.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/30">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">6. Missing Co-Owner Signatures</h4>
                <p className="text-sm text-muted-foreground">
                  If the title lists multiple owners with "AND" between names, ALL owners must sign. If it says "OR," only one 
                  signature is needed. Check your title carefully and ensure all required parties are present.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/30">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">7. Not Getting a Bill of Sale</h4>
                <p className="text-sm text-muted-foreground">
                  While not legally required in Ohio, a bill of sale protects both parties. It documents the sale price (important 
                  for tax purposes), transfer date, and vehicle condition. We recommend always having one notarized.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* What to Bring Checklist */}
      <h2 className="text-2xl font-bold mt-10 mb-6 flex items-center gap-2">
        <CheckCircle className="h-6 w-6 text-primary" />
        What to Bring: Complete Checklist
      </h2>

      <Card className="bg-muted/50 mb-8">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">For the Seller:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Original vehicle title (unsigned)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Valid government-issued photo ID</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Current odometer reading</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Lien release (if applicable)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">For the Buyer:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Valid government-issued photo ID</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Proof of insurance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Payment for purchase</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Payment for BMV fees</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Special Cases */}
      <h2 className="text-2xl font-bold mt-10 mb-6">Special Situations</h2>

      <div className="space-y-4 mb-8">
        <h3 className="font-semibold text-lg">Gifting a Vehicle</h3>
        <p className="text-muted-foreground mb-4">
          When gifting a vehicle in Ohio, the title transfer process is the same—the seller's signature must still be notarized. 
          Write "GIFT" as the purchase price. A Gift Affidavit may help reduce or eliminate sales tax at the BMV.
        </p>

        <h3 className="font-semibold text-lg">Out-of-State Titles</h3>
        <p className="text-muted-foreground mb-4">
          If you're purchasing a vehicle with an out-of-state title, notarization requirements vary by state. Ohio will accept 
          properly notarized out-of-state titles, but the BMV may require additional documentation.
        </p>

        <h3 className="font-semibold text-lg">Deceased Owner</h3>
        <p className="text-muted-foreground">
          Transferring a vehicle from a deceased owner requires additional documents such as a death certificate, letters of 
          authority from probate court, or a small estate affidavit. Contact us for guidance on your specific situation.
        </p>
      </div>

      {/* Service Areas CTA */}
      <Card className="bg-primary/5 border-primary/20 mt-10">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Car className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">Mobile Car Title Notary Service</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            We provide mobile notary services for car title transfers throughout Greater Cincinnati, Dayton, and surrounding Ohio counties. 
            Same-day appointments often available. We come to your home, workplace, or any convenient location.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <Link to="/car-title-notary-cincinnati" className="text-primary hover:underline">Cincinnati & Hamilton County</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/bill-of-sale-notary-dayton" className="text-primary hover:underline">Dayton & Montgomery County</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/car-title-notary-mason-warren" className="text-primary hover:underline">Mason & Warren County</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/vehicle-notary-west-chester-butler" className="text-primary hover:underline">West Chester & Butler County</Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <Link to="/book-now">
                <Calendar className="mr-2 h-4 w-4" />
                Book Car Title Notary
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}>
                <Phone className="mr-2 h-4 w-4" />
                {BUSINESS_CONFIG.phone}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Internal Link to Service Page */}
      <p className="mt-8">
        <Link to="/vehicles-dmv" className="text-primary hover:underline font-medium">
          → Learn more about all our vehicle notary services
        </Link>
      </p>
    </BlogPostTemplate>
  );
};

export default OhioCarTitleTransferRequirements;
