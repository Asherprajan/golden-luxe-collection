import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden bg-white">
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
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Decorative light elements */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-[#D4AF37]/10 blur-[120px] opacity-60"></div>
      <div className="absolute -left-40 bottom-0 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/15 blur-[100px] opacity-70"></div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-12 sm:h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-20 mt-8 sm:mt-12 md:mt-0">
        <div className="max-w-4xl mx-auto text-center px-2">
          <div className="inline-block mb-3 animate-fade-in-slow">
            <span className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm border-b border-[#D4AF37]/30 pb-1">Since 2004</span>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6 leading-tight animate-fade-in font-serif">
            <span className="block text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#F5D76E] to-[#D4AF37] text-transparent bg-clip-text animate-shimmer bg-[length:200%_100%]">Swarnalaya Gold & Diamonds</span>
            <span className="block">Your Trusted <span className="italic">Jewelers</span></span>
          </h1>
         
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-2">
            <Link to="/collections" className="bg-[#D4AF37] hover:bg-[#C09A2F] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
              Explore Our Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link to="/contact" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3.5 px-6 rounded-lg border border-white/30 transition-colors duration-300">
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce opacity-70">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/60 rounded-full flex justify-center pt-1.5 sm:pt-2">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
