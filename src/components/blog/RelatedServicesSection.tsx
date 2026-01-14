import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface RelatedService {
  slug: string;
  title: string;
  description: string;
}

interface RelatedServicesSectionProps {
  services: RelatedService[];
  title?: string;
}

const RelatedServicesSection: React.FC<RelatedServicesSectionProps> = ({ 
  services, 
  title = "Related Services" 
}) => {
  return (
    <div className="my-8 bg-muted/50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service) => (
          <Link 
            key={service.slug}
            to={`/${service.slug}`}
            className="block"
          >
            <Card className="h-full hover:shadow-md hover:border-primary transition-all">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1 flex items-center gap-1">
                  {service.title}
                  <ArrowRight className="h-4 w-4 text-primary" />
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedServicesSection;
