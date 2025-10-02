import { Card, CardContent } from '@/components/ui/card';
import { FileText, Home, Briefcase, Heart, Globe, FileSignature } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CompactServicesGrid = () => {
  const services = [
    {
      icon: FileText,
      name: "General Notary",
      description: "Affidavits, acknowledgments, jurats",
      price: "$75",
      link: "/general-notary"
    },
    {
      icon: Home,
      name: "Loan Signings",
      description: "Purchase, refinance, HELOC closings",
      price: "$150",
      link: "/loan-signings"
    },
    {
      icon: Heart,
      name: "Estate Planning",
      description: "Wills, trusts, POA, healthcare directives",
      price: "$100",
      link: "/estate-plans"
    },
    {
      icon: Briefcase,
      name: "Business Documents",
      description: "Contracts, agreements, corporate docs",
      price: "$100",
      link: "/business-services"
    },
    {
      icon: Globe,
      name: "Apostille Services",
      description: "International document authentication",
      price: "$225",
      link: "/apostille"
    },
    {
      icon: FileSignature,
      name: "Real Estate",
      description: "Deeds, titles, property transfers",
      price: "$100",
      link: "/real-estate"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Link 
            to={service.link}
            key={index}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-accent/50 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-primary mb-1">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {service.description}
                    </p>
                    <p className="text-accent font-bold">
                      Starting at {service.price}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
