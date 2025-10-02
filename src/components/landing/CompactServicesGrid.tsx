import { Card, CardContent } from '@/components/ui/card';
import { FileText, Home, Briefcase, Heart, Globe, FileSignature } from 'lucide-react';
import { useState } from 'react';
import { ServiceDetailModal } from '@/components/ServiceDetailModal';

export const CompactServicesGrid = ({ onServiceSelect }: { onServiceSelect?: (serviceName: string) => void }) => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const services = [
    {
      icon: FileText,
      name: "General Notary",
      description: "Acknowledgments, jurats, and document certifications for any personal or business need",
      price: "$75",
      link: "/general-notary",
      serviceId: "general-notary"
    },
    {
      icon: Home,
      name: "Loan Signings",
      description: "Professional mortgage, refinance, and HELOC closings with certified signing agent",
      price: "$150",
      link: "/loan-signings",
      serviceId: "loan-signings"
    },
    {
      icon: Heart,
      name: "Estate Planning",
      description: "Wills, trusts, powers of attorney, and healthcare directives with witness coordination",
      price: "$100",
      link: "/estate-plans",
      serviceId: "estate-plans"
    },
    {
      icon: Briefcase,
      name: "Business Documents",
      description: "Corporate documents, contracts, and business agreements for all industries",
      price: "$100",
      link: "/business-services",
      serviceId: "business-services"
    },
    {
      icon: Globe,
      name: "Apostille Services",
      description: "International document authentication for use in foreign countries",
      price: "$225",
      link: "/apostille",
      serviceId: "apostille"
    },
    {
      icon: FileSignature,
      name: "Real Estate",
      description: "Deeds, property transfers, and real estate documents for buyers and sellers",
      price: "$100",
      link: "/real-estate",
      serviceId: "real-estate"
    }
  ];

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const handleBookNow = () => {
    if (selectedService && onServiceSelect) {
      onServiceSelect(selectedService.name);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              onClick={() => handleServiceClick(service)}
              className="cursor-pointer"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-accent/50">
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
            </div>
          );
        })}
      </div>

      {selectedService && (
        <ServiceDetailModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
          onBookNow={handleBookNow}
        />
      )}
    </>
  );
};
