import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { BUSINESS_CONFIG } from '@/config/business';

const TermsOfService: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | {BUSINESS_CONFIG.name}</title>
        <meta name="description" content={`Terms of Service for ${BUSINESS_CONFIG.name}. Review our service terms, conditions, and policies.`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Breadcrumbs */}
          <div className="bg-muted/30 border-b">
            <div className="container mx-auto px-4 py-3">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Terms of Service</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
                <p className="mb-4">
                  By accessing or using the services provided by {BUSINESS_CONFIG.name}, you agree to be bound by these Terms of Service.
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Services Provided</h2>
                <p className="mb-4">{BUSINESS_CONFIG.name} provides mobile notary public services throughout the Cincinnati-Dayton metro area, including:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>General notary services (acknowledgments, jurats, oaths)</li>
                  <li>Loan signing services (mortgages, refinances, HELOCs)</li>
                  <li>Estate planning document notarization</li>
                  <li>Real estate document notarization</li>
                  <li>Business document notarization</li>
                  <li>Apostille processing services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Service Appointments</h2>
                <h3 className="text-xl font-semibold mb-3">Scheduling</h3>
                <p className="mb-4">
                  Appointments can be scheduled via phone, email, or our online booking system. We strive to accommodate same-day and emergency requests when possible.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Cancellations</h3>
                <p className="mb-4">
                  Cancellations must be made at least 2 hours before the scheduled appointment to avoid cancellation fees. 
                  Last-minute cancellations (less than 2 hours) may be subject to a $50 cancellation fee.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">No-Shows</h3>
                <p className="mb-4">
                  If you are not present at the scheduled location and time, a $75 no-show fee will apply. This fee covers travel time and lost business opportunity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Pricing and Payment</h2>
                <h3 className="text-xl font-semibold mb-3">Service Fees</h3>
                <p className="mb-4">
                  All pricing is subject to Ohio state law limitations on notary fees. Our fees include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Base notary fee per signature/document</li>
                  <li>Mobile travel fee based on distance and service zone</li>
                  <li>After-hours or emergency service surcharges when applicable</li>
                  <li>Additional fees for complex services or rush processing</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Payment Methods</h3>
                <p className="mb-4">
                  We accept cash, credit cards, debit cards, Venmo, Zelle, and checks. Payment is due at the time of service unless prior arrangements have been made.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Price Changes</h3>
                <p className="mb-4">
                  Pricing is confirmed at the time of booking. We reserve the right to adjust prices for future services, but confirmed appointments will honor the quoted price.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Client Responsibilities</h2>
                <h3 className="text-xl font-semibold mb-3">Valid Identification</h3>
                <p className="mb-4">
                  All signers must provide current, government-issued photo identification (driver's license, passport, or state ID). Expired IDs cannot be accepted.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Document Preparation</h3>
                <p className="mb-4">
                  Clients are responsible for ensuring all documents are properly prepared prior to the appointment. We cannot provide legal advice or fill out documents for you.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Signer Presence</h3>
                <p className="mb-4">
                  All parties requiring notarization must be physically present at the time of signing. We cannot notarize pre-signed documents.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Accurate Information</h3>
                <p className="mb-4">
                  You agree to provide accurate and complete information when scheduling appointments and during the notarization process.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Limitations and Restrictions</h2>
                <h3 className="text-xl font-semibold mb-3">Scope of Services</h3>
                <p className="mb-4">
                  As a notary public, we are prohibited from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Providing legal advice or counsel</li>
                  <li>Preparing legal documents (except as permitted by law)</li>
                  <li>Acting as an immigration consultant</li>
                  <li>Notarizing documents for parties who are not present</li>
                  <li>Notarizing incomplete documents or blank forms</li>
                  <li>Certifying copies of vital records (birth/death certificates)</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Right to Refuse</h3>
                <p className="mb-4">
                  We reserve the right to refuse notarization if:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>The signer cannot be properly identified</li>
                  <li>The signer appears to be acting under duress or coercion</li>
                  <li>The signer appears to lack mental capacity</li>
                  <li>The document appears to be fraudulent or incomplete</li>
                  <li>The notarization would violate Ohio law or notary ethics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Liability and Insurance</h2>
                <p className="mb-4">
                  {BUSINESS_CONFIG.name} maintains professional liability insurance (E&O) as required by industry standards.
                  However, our liability is limited to the scope of notarial acts performed.
                </p>
                <p className="mb-4">
                  We are not responsible for the legal effect or validity of any document we notarize. Clients should consult with attorneys 
                  regarding the legal implications of their documents.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Record Keeping</h2>
                <p className="mb-4">
                  In accordance with Ohio law, we maintain detailed records of all notarial acts in our notary journal for a minimum of 5 years. 
                  These records include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Date and time of notarization</li>
                  <li>Type of notarial act performed</li>
                  <li>Type of identification provided</li>
                  <li>Description of documents notarized</li>
                  <li>Signer information and signatures</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Confidentiality</h2>
                <p className="mb-4">
                  We respect the confidential nature of the documents we notarize. All client information and document details are kept confidential 
                  and will not be disclosed to third parties except as required by law or with your express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                <p className="mb-4">
                  These Terms of Service are governed by the laws of the State of Ohio. All notarial acts are performed in accordance with 
                  the Ohio Revised Code and regulations of the Ohio Secretary of State.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
                <p className="mb-4">
                  Any disputes arising from our services shall be resolved through good faith negotiation. If resolution cannot be achieved, 
                  disputes may be submitted to mediation before pursuing legal action.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. 
                  Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li><strong>Business Name:</strong> {BUSINESS_CONFIG.name}</li>
                  <li><strong>Phone:</strong> <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-accent hover:underline">{BUSINESS_CONFIG.phone}</a></li>
                  <li><strong>Email:</strong> <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-accent hover:underline">{BUSINESS_CONFIG.email}</a></li>
                  <li><strong>Address:</strong> {BUSINESS_CONFIG.address.street}, {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} {BUSINESS_CONFIG.address.zip}</li>
                </ul>
              </section>

              <section className="text-sm text-muted-foreground border-t pt-6 mt-8">
                <p><strong>Last Updated:</strong> January 2025</p>
                <p className="mt-2">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
