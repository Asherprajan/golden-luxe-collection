
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import CollectionGrid from '@/components/CollectionGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <CollectionGrid limit={3} />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
