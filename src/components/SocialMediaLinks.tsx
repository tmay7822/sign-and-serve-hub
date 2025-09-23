import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

interface SocialMediaLinksProps {
  className?: string;
  iconSize?: number;
  variant?: "default" | "footer";
}

export const SocialMediaLinks = ({ className = "", iconSize = 20, variant = "default" }: SocialMediaLinksProps) => {
  const socialPlatforms = [
    { name: 'Facebook', icon: Facebook, url: BUSINESS_CONFIG.socialMedia.facebook },
    { name: 'Twitter', icon: Twitter, url: BUSINESS_CONFIG.socialMedia.twitter },
    { name: 'Instagram', icon: Instagram, url: BUSINESS_CONFIG.socialMedia.instagram },
    { name: 'LinkedIn', icon: Linkedin, url: BUSINESS_CONFIG.socialMedia.linkedin },
    { name: 'YouTube', icon: Youtube, url: BUSINESS_CONFIG.socialMedia.youtube },
    { name: 'WhatsApp', icon: MessageCircle, url: BUSINESS_CONFIG.socialMedia.whatsapp },
  ];

  const activeSocials = socialPlatforms.filter(platform => platform.url);

  const getIconClasses = () => {
    switch (variant) {
      case "footer":
        return "w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 text-white/80";
      default:
        return "text-muted-foreground hover:text-primary transition-colors";
    }
  };

  if (activeSocials.length === 0) return null;

  return (
    <div className={`flex gap-4 ${className}`}>
      {activeSocials.map((platform) => {
        const IconComponent = platform.icon;
        
        if (variant === "footer") {
          return (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={getIconClasses()}
              aria-label={`Follow us on ${platform.name}`}
            >
              <IconComponent size={iconSize} />
            </a>
          );
        }

        return (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={getIconClasses()}
            aria-label={`Follow us on ${platform.name}`}
          >
            <IconComponent size={iconSize} />
          </a>
        );
      })}
    </div>
  );
};