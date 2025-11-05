import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import About from '@/components/layout/About';
import Services from '@/components/layout/Services';
import WhyChooseUs from '@/components/layout/WhyChooseUs';
import Testimonials from '@/components/layout/Testimonials';
import Contact from '@/components/layout/Contact';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
