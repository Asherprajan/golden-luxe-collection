import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative  mt-20 mb-20">
      {/* Banner Image */}
      <div className="relative w-full">
        <img 
          src={isMobile ? "/swarnalaya_mobile.jpeg" : "/swarnalaya_desktop.jpeg"}
          alt="Swarnalaya Banner"
          className="w-full h-[95vh] object-cover"
        />
        
      </div>
      <div className={`absolute ${isMobile ? 'bottom-20' : 'bottom-10'} w-screen bg-[#8d092a]/50 flex justify-between items-center px-[25%] py-3`}> 
        <div onClick={() => window.location.href = '/collections'} className={`cursor-pointer hover:text-gray-300 transition-colors ${isMobile ? 'text-[10px]' : ''}`}>Explore Our Collections</div>
        <div onClick={() => window.location.href = '/contact'} className={`cursor-pointer hover:text-gray-300 transition-colors ${isMobile ? 'text-[10px]' : ''}`}>Book An Appointment</div>
      </div>

    </section>

  );
};

export default Hero;
