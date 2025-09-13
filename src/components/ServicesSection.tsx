import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Home, 
  FileSignature, 
  Building, 
  Globe, 
  Briefcase,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "General Notary",
      description: "Acknowledgments, jurats, oaths, affirmations, and document witnessing.",
      link: "#general-notary"
    },
    {
      icon: Home,
      title: "Loan Signings",
      description: "Buyer, seller, refinance, HELOC, and investor loan document signings.",
      link: "#loan-signings"
    },
    {
      icon: FileSignature,
      title: "Estate Plans",
      description: "Wills, trusts, power of attorney, and healthcare directive signings.",
      link: "#estate-plans"
    },
    {
      icon: Building,
      title: "Real Estate",
      description: "Deeds, closings, investor documents, and property transfers.",
      link: "#real-estate"
    },
    {
      icon: Globe,
      title: "Apostille",
      description: "Document authentication for international use and recognition.",
      link: "#apostille"
    },
    {
      icon: Briefcase,
      title: "Business Services",
      description: "I-9 verification, vendor agreements, and corporate documents.",
      link: "#business-services"
    }
  ];

  return (
    <section className="py-20 bg-brand-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive notary and signing services delivered to your location 
            with precision and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="gradient-card border-0 hover:shadow-professional transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-brand-navy">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-6">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="text-brand-blue hover:text-brand-navy group-hover:gap-3 transition-all duration-300"
                    asChild
                  >
                    <a href={service.link}>
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;