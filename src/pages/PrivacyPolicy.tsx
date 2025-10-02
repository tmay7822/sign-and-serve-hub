import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { BUSINESS_CONFIG } from '@/config/business';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | {BUSINESS_CONFIG.name}</title>
        <meta name="description" content={`Privacy Policy for ${BUSINESS_CONFIG.name}. Learn how we collect, use, and protect your personal information.`} />
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
                    <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="mb-4">
                  Welcome to {BUSINESS_CONFIG.name}. We respect your privacy and are committed to protecting your personal data.
                  This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <p className="mb-4">We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Identity Data:</strong> First name, last name, username, or similar identifier</li>
                  <li><strong>Contact Data:</strong> Email address, telephone numbers, and mailing address</li>
                  <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
                  <li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us and your communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use your personal data for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>To provide and maintain our notary services</li>
                  <li>To notify you about appointments and service updates</li>
                  <li>To communicate with you about your notarization requests</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations and regulatory requirements</li>
                  <li>To send you marketing communications (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="mb-4">
                  We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. 
                  We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                </p>
                <p className="mb-4">
                  All notarization records are maintained in accordance with Ohio state law and professional notary standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
                <p className="mb-4">
                  We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                </p>
                <p className="mb-4">
                  Notary records are retained for a minimum of 5 years as required by Ohio law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Legal Rights</h2>
                <p className="mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
                <p className="mb-4">
                  Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links may allow third parties to collect or share data about you. 
                  We do not control these third-party websites and are not responsible for their privacy statements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                  Cookies are files with small amounts of data that are sent to your browser from a website and stored on your device.
                </p>
                <p className="mb-4">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, 
                  you may not be able to use some portions of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                <p className="mb-4">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li><strong>Business Name:</strong> {BUSINESS_CONFIG.name}</li>
                  <li><strong>Phone:</strong> <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-accent hover:underline">{BUSINESS_CONFIG.phone}</a></li>
                  <li><strong>Email:</strong> <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-accent hover:underline">{BUSINESS_CONFIG.email}</a></li>
                  <li><strong>Address:</strong> {BUSINESS_CONFIG.address.street}, {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} {BUSINESS_CONFIG.address.zip}</li>
                </ul>
              </section>

              <section className="text-sm text-muted-foreground border-t pt-6 mt-8">
                <p><strong>Last Updated:</strong> January 2025</p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
