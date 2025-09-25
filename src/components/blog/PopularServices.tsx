import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Home, Building, Scroll } from 'lucide-react';

const PopularServices = () => {
  const services = [
    {
      icon: FileText,
      title: 'Loan Signings',
      href: '/loan-signings'
    },
    {
      icon: Scroll,
      title: 'Wills, Trusts & POA',
      href: '/wills-trusts-estates'
    },
    {
      icon: Home,
      title: 'Hospital & Senior Care',
      href: '/healthcare-notary'
    },
    {
      icon: Building,
      title: 'Service Areas',
      href: '/service-areas'
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-card/50 to-accent/5 border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-base text-foreground">Popular Services</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                to={service.href}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/20 transition-colors group"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </span>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default PopularServices;