import { Globe, DollarSign, Stethoscope, Languages, Plane, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Globe,
      title: 'World-Class Standards',
      description: 'JCI accredited hospitals with international quality protocols',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Save up to 70% compared to Western countries without compromising quality',
    },
    {
      icon: Stethoscope,
      title: 'Expert Doctors',
      description: 'Internationally trained and experienced medical professionals',
    },
    {
      icon: Languages,
      title: 'No Language Barrier',
      description: 'English-speaking staff and translators for your comfort',
    },
    {
      icon: Plane,
      title: 'Travel Assistance',
      description: 'Complete travel and accommodation arrangements for you and your family',
    },
    {
      icon: Clock,
      title: 'Minimal Wait Time',
      description: 'Quick appointments and procedures without long waiting periods',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose <span className="text-gradient-gold">Medictour</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the advantages of choosing Kerala for your medical journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:border-accent animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
