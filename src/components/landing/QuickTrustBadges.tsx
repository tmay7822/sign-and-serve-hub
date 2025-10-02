import { Shield, Award, CheckCircle, Clock } from 'lucide-react';

export const QuickTrustBadges = () => {
  const badges = [
    { icon: Shield, text: "Background Checked" },
    { icon: Award, text: "NNA Certified" },
    { icon: CheckCircle, text: "Fully Insured" },
    { icon: Clock, text: "Same Day Availability" }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div 
            key={index}
            className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full"
          >
            <Icon className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              {badge.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};
