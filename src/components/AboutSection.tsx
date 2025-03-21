
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section-padding relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="section-subtitle text-left animate-fade-in">Our Legacy</span>
            <h2 className="heading-lg text-left mb-6 animate-fade-in">
              A Heritage of Excellence Since 1987
            </h2>
            <p className="paragraph mb-5 animate-fade-in">
              For over three decades, Swarnalaya has been crafting precious moments through exquisite jewelry. 
              What began as a small family workshop has blossomed into one of the region's most trusted names in gold and diamond jewelry.
            </p>
            <p className="paragraph mb-7 animate-fade-in">
              Our journey is marked by an unwavering commitment to quality, craftsmanship, and customer satisfaction. 
              Every piece that bears the Swarnalaya name carries with it our promise of excellence and timeless beauty.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-gold hover:underline animate-fade-in">
              Discover Our Story <ArrowRight size={16} />
            </Link>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-gold opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-gold opacity-60"></div>
            <div className="relative overflow-hidden rounded-lg shadow-gold">
              <img 
                src="https://images.unsplash.com/photo-1573408301828-9145ea517a3c?w=800&auto=format&fit=crop&q=80" 
                alt="Goldsmith workshop" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-gold font-semibold text-lg block mb-1">Artisan Craftsmanship</span>
                <p className="text-beige/90 text-sm">Every piece handcrafted with precision and care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
