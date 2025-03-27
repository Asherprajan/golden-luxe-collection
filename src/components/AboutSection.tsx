import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-coffee to-coffee-dark">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.8\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S50 55.523 50 50zm0-40c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S50 15.523 50 10zm-40 40c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S10 55.523 10 50zm0-40c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S10 15.523 10 10z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Decorative light elements */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-gold/5 blur-[120px] opacity-60"></div>
      <div className="absolute -left-40 bottom-0 w-[600px] h-[600px] rounded-full bg-gold/8 blur-[100px] opacity-70"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-5 relative z-10">
            <div className="inline-block mb-3">
              <span className="text-gold font-light tracking-widest uppercase text-sm border-b border-gold/30 pb-1">Our Legacy</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-gold mb-8 leading-tight">
              A Heritage of <span className="italic">Excellence</span> <br />Since 1987
            </h2>
            <div className="space-y-6 text-beige/90">
              <p className="leading-relaxed">
                For over three decades, Swarnalaya has been crafting precious moments through exquisite jewelry. 
                What began as a small family workshop has blossomed into one of the region's most trusted names in gold and diamond jewelry.
              </p>
              <p className="leading-relaxed">
                Our journey is marked by an unwavering commitment to quality, craftsmanship, and customer satisfaction. 
                Every piece that bears the Swarnalaya name carries with it our promise of excellence and timeless beauty.
              </p>
            </div>
            <Link 
              to="/about" 
              className="mt-10 inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-all duration-300 group border-b border-transparent hover:border-gold/40 pb-1"
            >
              <span>Discover Our Story</span>
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
          
          {/* Image */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 border-t border-l border-gold/30"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border-b border-r border-gold/30"></div>
            <div className="relative overflow-hidden rounded-md shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573408301828-9145ea517a3c?w=800&auto=format&fit=crop&q=80" 
                alt="Goldsmith workshop" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/90 via-coffee/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-coffee/80 backdrop-blur-sm p-6 rounded-md border-l-2 border-gold/50">
                  <span className="text-gold font-playfair text-xl block mb-2">Artisan Craftsmanship</span>
                  <p className="text-beige/90">Every piece handcrafted with precision and care by our master jewelers</p>
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
