import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const MiniTestimonials = () => {
  const testimonials = [
    {
      text: "Fast, professional, and friendly. They made our loan signing process seamless!",
      author: "S. Reynolds",
      rating: 5
    },
    {
      text: "They came to us after hours when we needed urgent document signing—absolute lifesaver!",
      author: "J. Carter",
      rating: 5
    },
    {
      text: "Quick response time and flexible scheduling. Perfect for busy professionals.",
      author: "A. Chen",
      rating: 5
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
            ))}
          </div>
          <span className="text-lg font-bold text-primary">5.0</span>
        </div>
        <p className="text-muted-foreground">Trusted by 500+ satisfied clients</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-accent/20">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <blockquote className="text-sm text-foreground mb-3 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <cite className="text-sm font-medium text-primary">
                – {testimonial.author}
              </cite>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
