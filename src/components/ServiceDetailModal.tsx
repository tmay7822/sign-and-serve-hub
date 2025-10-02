import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { SERVICE_CONTENT } from "@/data/serviceContent";

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: LucideIcon;
    name: string;
    description: string;
    price: string;
    link: string;
    serviceId?: string;
  };
  onBookNow: () => void;
}

export function ServiceDetailModal({ isOpen, onClose, service, onBookNow }: ServiceDetailModalProps) {
  const Icon = service.icon;
  
  // Get additional content from SERVICE_CONTENT if available
  const serviceContent = service.serviceId ? SERVICE_CONTENT[service.serviceId] : null;
  const specificServices = serviceContent?.specificServices.slice(0, 4) || [];
  const tips = serviceContent?.tips.slice(0, 3) || [];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-lg bg-accent/10">
              <Icon className="h-8 w-8 text-accent" />
            </div>
            <DialogTitle className="text-2xl">{service.name}</DialogTitle>
          </div>
          <DialogDescription className="text-base">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Pricing Section */}
          <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-accent">{service.price}</span>
              <span className="text-sm text-muted-foreground">+ travel fee by zone</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Final pricing calculated based on your ZIP code
            </p>
          </div>

          {/* What's Included */}
          {specificServices.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                What's Included
              </h3>
              <ul className="grid gap-2">
                {specificServices.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quick Tips */}
          {tips.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                What to Know
              </h3>
              <div className="grid gap-3">
                {tips.map((tip, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg p-3">
                    <p className="font-medium text-sm mb-1">{tip.title}</p>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Typical Duration */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Typical duration: 30-45 minutes</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
          <Button 
            size="lg" 
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            onClick={() => {
              onClose();
              onBookNow();
            }}
          >
            Book This Service Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            asChild
            className="flex-1"
          >
            <Link to={service.link}>
              View Full Details
            </Link>
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground pt-2">
          Get instant pricing when you book - no surprises
        </p>
      </DialogContent>
    </Dialog>
  );
}
