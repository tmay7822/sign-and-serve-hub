import { Shield, Award, CheckCircle, Star } from 'lucide-react';

const TrustSignals = () => {
  const badges = [
    {
      icon: Shield,
      title: "Background Checked",
      description: "Fully vetted and verified"
    },
    {
      icon: CheckCircle,
      title: "E&O Insured",
      description: "Protected and bonded"
    },
    {
      icon: Award,
      title: "NNA Certified",
      description: "Nationally certified notary"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Trusted by hundreds"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
            Trusted & Certified Professionals
          </h2>
          <p className="text-lg text-muted-foreground">
            Your peace of mind is our priority
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div 
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="mx-auto w-20 h-20 border-2 border-brand-light rounded-full flex items-center justify-center mb-4 group-hover:border-brand-blue group-hover:bg-brand-light/50 transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-brand-blue group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-brand-navy mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;