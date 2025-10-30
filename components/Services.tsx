import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Bone, Eye, Droplet } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiac Care',
      description:
        'Advanced cardiac treatments including bypass surgery, angioplasty, and preventive cardiology with world-class facilities.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Bone,
      title: 'Orthopedic Surgery',
      description:
        'Joint replacements, spine surgery, and sports medicine with cutting-edge technology and experienced surgeons.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Eye,
      title: 'Eye Care',
      description:
        'Comprehensive ophthalmology services including LASIK, cataract surgery, and retinal treatments by expert specialists.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Droplet,
      title: 'Ayurvedic Wellness',
      description:
        'Traditional Kerala Ayurveda treatments combined with modern wellness programs for holistic healing and rejuvenation.',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive medical services tailored to your needs, combining modern medicine with
            traditional healing practices.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
