import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Do you travel to me?",
      answer: "Yes! We provide mobile notary services across Cincinnati–Dayton area. We come to your home, office, or any convenient location within our service area."
    },
    {
      question: "What IDs do I need?",
      answer: "You'll need a current, government-issued photo ID such as a driver's license, state ID, passport, or military ID. The ID must be unexpired and clearly show your photo and signature."
    },
    {
      question: "Do you offer after-hours service?",
      answer: "Absolutely! We offer evening and weekend appointments to accommodate your schedule. Emergency and rush services are available for urgent document needs."
    },
    {
      question: "What are your fees?",
      answer: "Our fees include travel within our service area plus per-signature notarization. We provide instant quotes over the phone or through our contact form. No hidden fees, transparent pricing."
    },
    {
      question: "Which loan packages do you handle?",
      answer: "We handle all types: buyer packages, seller packages, refinances, HELOCs, reverse mortgages, and investor/commercial loan documents. Fully trained in all major loan document types."
    },
    {
      question: "How far in advance should I schedule?",
      answer: "We often accommodate same-day requests, but we recommend scheduling 24-48 hours in advance for best availability, especially for loan signings and complex document packages."
    },
    {
      question: "Are you insured and bonded?",
      answer: "Yes, we carry comprehensive Errors & Omissions insurance and are fully bonded. We're also NNA (National Notary Association) certified and background-checked for your peace of mind."
    },
    {
      question: "Can you notarize documents in languages other than English?",
      answer: "We can notarize documents in any language, but the signer must be able to communicate directly with the notary in English, or a qualified translator must be present during the signing."
    }
  ];

  return (
    <section className="py-20 bg-brand-light/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our mobile notary services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-card border-0 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-navy hover:text-brand-blue py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;