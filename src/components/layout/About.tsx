import { Heart, Award, Users, Shield } from 'lucide-react';
import aboutImage from '@/assets/about-medictour.jpg';

const About = () => {
  const stats = [
    { icon: Heart, value: '10,000+', label: 'Happy Patients' },
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: Users, value: '50+', label: 'Medical Experts' },
    { icon: Shield, value: '100%', label: 'Success Rate' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Medictour Healthcare Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About <span className="text-gradient-gold">Medictour</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Medictour is Kerala's premier medical tourism facilitator, bridging the gap between
              world-class healthcare and the serene healing environment of God's Own Country. We
              combine cutting-edge medical technology with traditional Ayurvedic wisdom to provide
              holistic healing experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our network of internationally accredited hospitals and experienced medical
              professionals ensures that you receive the highest standard of care while experiencing
              Kerala's renowned hospitality and natural beauty.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-muted rounded-xl">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
