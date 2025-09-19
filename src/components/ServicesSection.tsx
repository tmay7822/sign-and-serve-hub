import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
      link: "/general-notary"
    },
    {
      icon: Home,
      title: "Loan Signings",
      description: "Buyer, seller, refinance, HELOC, and investor loan document signings.",
      link: "/loan-signings"
    },
    {
      icon: FileSignature,
      title: "Estate Plans & Health Care",
      description: "Wills, trusts, power of attorney, healthcare directives, and medical document signings.",
      link: "/estate-plans"
    },
    {
      icon: Building,
      title: "Real Estate",
      description: "Deeds, closings, investor documents, and property transfers.",
      link: "/real-estate"
    },
    {
      icon: Globe,
      title: "Apostille",
      description: "Document authentication for international use and recognition.",
      link: "/apostille"
    },
    {
      icon: Briefcase,
      title: "Business Services",
      description: "I-9 verification, vendor agreements, and corporate documents.",
      link: "/business-services"
    }
  ];

  return (
    <section className="py-12 bg-brand-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive notary and signing services delivered to your location 
            with precision and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="gradient-card border-2 border-black/10 hover:border-brand-blue/30 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group bg-white/80 backdrop-blur-sm min-h-[280px] flex flex-col"
              >
                <CardHeader className="text-center pb-4 flex-shrink-0">
                  <div className="mx-auto w-16 h-16 lg:w-18 lg:h-18 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="h-7 w-7 lg:h-9 lg:w-9 text-white" />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl text-brand-navy leading-tight font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0 flex flex-col flex-grow">
                  <CardDescription className="text-base lg:text-lg mb-6 flex-grow text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="mt-auto pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full bg-brand-blue/5 border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 font-medium py-3"
                      asChild
                    >
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
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