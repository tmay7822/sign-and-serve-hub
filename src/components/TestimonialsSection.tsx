import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Fast, professional, and friendly. They made our loan signing process seamless. Highly recommend!",
      author: "S. Reynolds",
      rating: 5
    },
    {
      text: "Handled our loan signing flawlessly. Arrived on time and explained everything clearly.",
      author: "M. Patel", 
      rating: 5
    },
    {
      text: "They came to us after hours when we needed urgent document signing—absolute lifesaver!",
      author: "J. Carter",
      rating: 5
    },
    {
      text: "Professional service, competitive rates, and exceptional attention to detail. Will use again.",
      author: "T. Williams",
      rating: 5
    },
    {
      text: "Made our estate planning documents so easy to complete. Very knowledgeable and patient.",
      author: "R. Johnson",
      rating: 5
    },
    {
      text: "Quick response time and flexible scheduling. Perfect for busy professionals like myself.",
      author: "A. Chen",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their important documents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border border-brand-light hover:shadow-card transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-brand-gold text-brand-gold" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <cite className="text-brand-navy font-medium">
                  – {testimonial.author}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;