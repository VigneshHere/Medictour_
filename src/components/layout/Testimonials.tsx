import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'United Kingdom',
      treatment: 'Cardiac Surgery',
      rating: 5,
      text: 'The care I received at Medictour was exceptional. The doctors were highly skilled, and the traditional Kerala treatments during recovery made the experience truly unique.',
      image: '🇬🇧',
    },
    {
      name: 'Michael Chen',
      country: 'Singapore',
      treatment: 'Orthopedic Surgery',
      rating: 5,
      text: 'Outstanding medical facilities combined with personalized attention. The cost savings were significant, and the quality exceeded my expectations.',
      image: '🇸🇬',
    },
    {
      name: 'Emma Williams',
      country: 'Australia',
      treatment: 'Ayurvedic Treatment',
      rating: 5,
      text: 'A life-changing experience! The blend of modern medicine and ancient Ayurveda provided holistic healing I could not find anywhere else.',
      image: '🇦🇺',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Patient <span className="text-gradient-gold">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our patients about their transformative medical journey with Medictour
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-accent/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                    <div className="text-xs text-accent">{testimonial.treatment}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
