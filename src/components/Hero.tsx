
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-coffee/70"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1920&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: 'multiply',
          }}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-coffee to-transparent z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 mt-12 md:mt-0">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block section-subtitle animate-fade-in-slow">Since 1987</span>
          <h1 className="heading-xl mb-6 animate-fade-in">
            <span className="block text-gradient-gold">Timeless Elegance</span>
            <span className="block text-beige">Crafted in Gold</span>
          </h1>
          <p className="paragraph mb-10 max-w-2xl mx-auto animate-fade-in opacity-90">
            Experience the artistry of finely crafted jewelry that transcends generations. Each piece tells a story of heritage, 
            craftsmanship, and timeless beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/collections" className="button-primary flex items-center justify-center gap-2">
              View Collections <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="button-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce opacity-70">
        <div className="w-8 h-12 border-2 border-beige/60 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-beige/60 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
