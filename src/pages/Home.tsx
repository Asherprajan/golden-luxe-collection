import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <SEO
        title="Swarnalaya Gold & Diamonds - Exquisite Jewelry Collections"
        description="Discover our exquisite range of handcrafted gold and diamond jewelry. Each piece tells a story of tradition, elegance, and timeless beauty."
        image="https://swarnalaya.com/og-home.jpg"
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Light Theme */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-black/20"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1920&auto=format&fit=crop&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-xl">
              <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider animate-fade-in">Since 2004</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
                Timeless Elegance in Gold & Diamonds
              </h1>
              <p className="text-white/90 text-lg mb-8 animate-fade-in">
                Discover our exquisite collection of handcrafted jewelry that celebrates tradition, elegance, and timeless beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Link 
                  to="/collections" 
                  className="px-6 py-3 bg-[#D4AF37] text-white rounded-lg hover:bg-[#C09A2F] transition-colors duration-300 text-center font-medium"
                >
                  Explore Collections
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors duration-300 text-center"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Rest of the home page content... */}
      </div>
    </>
  );
}; 