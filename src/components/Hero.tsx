import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-coffee/70 mix-blend-multiply"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-coffee to-transparent z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-20 mt-8 sm:mt-12 md:mt-0">
        <div className="max-w-4xl mx-auto text-center px-2">
          <span className="inline-block section-subtitle animate-fade-in-slow">Since 2004</span>
          <h1 className="heading-xl mb-4 sm:mb-6 animate-fade-in">
            <span className="block text-gradient-gold">Swarnalaya Gold & Diamonds</span>
            <span className="block text-beige">Your Trusted Jewelers</span>
          </h1>
          <p className="paragraph mb-6 sm:mb-10 max-w-2xl mx-auto animate-fade-in opacity-90 px-2">
            Discover exquisite gold and diamond jewelry that blends traditional craftsmanship with modern elegance. 
            Each piece from Swarnalaya is a testament to our commitment to quality and timeless design.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center animate-fade-in px-2">
            <Link to="/collections" className="button-primary flex items-center justify-center gap-2">
              Explore Our Collection <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="button-outline">
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce opacity-70">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-beige/60 rounded-full flex justify-center pt-1.5 sm:pt-2">
          <div className="w-1 h-2 sm:h-3 bg-beige/60 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
