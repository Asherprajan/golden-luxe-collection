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
    <section className="relative overflow-hidden bg-[#2C1810] mt-20">
      {/* Buttons above the image */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[635px] flex gap-80 z-20">
        <a href="/collections" className="text-white hover:underline">Explore Our Collections</a>
        <a href="/contact" className="text-white hover:underline">Schedule a Visit</a>
      </div>

      {/* Mobile Hero */}
      {isMobile ? (
        <div className="relative w-full aspect-[2/3]">
          <img 
            src="/swarnalaya_mobile.jpg" 
            alt="Swarnalaya Mobile Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ) : (
        // Desktop Hero
        <div className="relative w-full h-[95vh] aspect-[4160/2340]">
          <img 
            src="/swarnalaya_desktop.jpeg" 
            alt="Swarnalaya Desktop Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#000000FF]/40"></div>
        </div>
      )}
      
      {/* Decorative light elements */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-[#F4A460]/10 blur-[120px] opacity-60"></div>
      <div className="absolute -left-40 bottom-0 w-[600px] h-[600px] rounded-full bg-[#DAA520]/15 blur-[100px] opacity-70"></div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-12 sm:h-20 bg-gradient-to-t from-[#2C1810] to-transparent z-10"></div>
      
      {/* Red line spanning across buttons */}
      <div className={`absolute left-0 top-[625px] w-full h-[50px] bg-red-500/30 z-10`}></div>
    </section>
  );
};

export default Hero;
