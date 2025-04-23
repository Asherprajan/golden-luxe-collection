import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden bg-[#2C1810]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          <img 
            src="/Swarnalaya_background_mobile.png" 
            alt="Swarnalaya Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <img 
            src="/Swarnalaya_background_pc.png" 
            alt="Swarnalaya Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-[#2C1810]/40"></div>
      </div>
      
      {/* Decorative light elements */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-[#F4A460]/10 blur-[120px] opacity-60"></div>
      <div className="absolute -left-40 bottom-0 w-[600px] h-[600px] rounded-full bg-[#DAA520]/15 blur-[100px] opacity-70"></div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-12 sm:h-20 bg-gradient-to-t from-[#2C1810] to-transparent z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-20 mt-8 sm:mt-12 md:mt-0">
        <div className="max-w-4xl mx-auto text-center px-2">
          <div className="inline-block mb-3 animate-fade-in-slow">
            <span className="text-[#FFD700] font-medium tracking-widest uppercase text-sm border-b border-[#FFD700]/30 pb-1">Since 2004</span>
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6 leading-tight animate-fade-in font-serif">
            <span className="block text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-transparent bg-clip-text animate-shimmer bg-[length:200%_100%]">Swarnalaya Gold & Diamonds</span>
            <span className="block">Your Trusted <span className="italic">Jewelers</span></span>
          </h1>
         
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-2">
            <Link to="/collections" className="bg-[#FFD700] hover:bg-[#FFDF00] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
              Explore Our Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link to="/contact" className="bg-[#FFFACD]/20 backdrop-blur-sm hover:bg-[#FFFACD]/30 text-white font-semibold py-3.5 px-6 rounded-lg border border-[#FFD700]/30 transition-colors duration-300">
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce opacity-70">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-[#DAA520]/60 rounded-full flex justify-center pt-1.5 sm:pt-2">
          <div className="w-1 h-2 sm:h-3 bg-[#DAA520]/60 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
