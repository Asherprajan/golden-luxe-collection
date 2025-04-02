import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Decorative light elements */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[120px] opacity-60"></div>
      <div className="absolute -left-40 bottom-0 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/8 blur-[100px] opacity-70"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-block mb-3">
              <span className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm border-b border-[#D4AF37]/30 pb-1">Our Legacy</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-800 mb-8 leading-tight font-serif">
              A Heritage of <span className="italic">Excellence</span> <br />Since 2004
            </h2>
            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                For nearly two decades, Swarnalaya Gold & Diamonds in Parappanangadi, Kerala has been crafting precious moments through exquisite jewelry. 
                What began as a small family workshop has blossomed into one of the region's most trusted names in gold and diamond jewelry.
              </p>
              <p className="leading-relaxed">
                Our journey is marked by an unwavering commitment to quality, craftsmanship, and customer satisfaction. 
                Every piece that bears the Swarnalaya name carries with it our promise of excellence and timeless beauty, rooted in the rich jewelry traditions of Kerala.
              </p>
            </div>
            <Link 
              to="/about" 
              className="mt-10 inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#D4AF37]/80 transition-all duration-300 group border-b border-transparent hover:border-[#D4AF37]/40 pb-1"
            >
              <span>Discover Our Story</span>
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
          
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 border-t border-l border-[#D4AF37]/30"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border-b border-r border-[#D4AF37]/30"></div>
            <div className="relative overflow-hidden rounded-md shadow-xl">
              <img 
                src="/about.jpg" 
                alt="Goldsmith workshop" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-md border-l-2 border-[#D4AF37] shadow-md">
                  <span className="text-[#D4AF37] font-serif text-xl block mb-2">Artisan Craftsmanship</span>
                  <p className="text-gray-700">Every piece handcrafted with precision and care by our master jewelers in Parappanangadi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
