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
      answer: "Yes, we come to you anywhere in our 6-county Cincinnati–Dayton service area. That includes your home, office, hospital, or any location that works for you."
    },
    {
      question: "What IDs do I need?",
      answer: "Bring one current, unexpired government-issued photo ID. A driver's license, state ID, passport, or military ID all work — it must clearly show your photo and signature."
    },
    {
      question: "Do you offer after-hours service?",
      answer: "Yes, we offer evening, weekend, and holiday appointments. Emergency and rush services are also available for urgent document needs."
    },
    {
      question: "What are your fees?",
      answer: "A travel fee applies based on distance, plus Ohio's per-signature notarization fee. Call or use our contact form for an exact quote — no hidden fees, no surprises."
    },
    {
      question: "Which loan packages do you handle?",
      answer: "We handle all loan package types — buyer, seller, refinance, HELOC, reverse mortgage, and investor/commercial closings. Every signing is handled by a trained loan signing agent."
    },
    {
      question: "How far in advance should I schedule?",
      answer: "Same-day appointments are often available. For best availability — especially loan signings and large document packages — schedule 24–48 hours in advance."
    },
    {
      question: "Are you insured and bonded?",
      answer: "Yes, we carry Errors & Omissions insurance and are fully bonded. We are also background-checked and professionally certified for your peace of mind."
    },
    {
      question: "Can you notarize documents in languages other than English?",
      answer: "Yes, we can notarize documents written in any language. The signer must communicate with the notary in English, or bring a qualified translator to the appointment."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-100" id="faq">
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
                <AccordionContent className={`text-foreground leading-relaxed pb-6${index === 0 || index === 1 || index === 2 ? ' speakable-answer' : ''}`}>
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