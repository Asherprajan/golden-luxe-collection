import { ArrowRight, CheckCheck, History, Users, Award } from 'lucide-react';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const About = () => {
  return (
    <>
      <SEO
        title="About Us - Swarnalaya Gold & Diamonds"
        description="Learn about our rich heritage and commitment to quality craftsmanship in jewelry making since 2004."
        image="https://swarnalaya.com/og-about.jpg"
      />
      <div className="min-h-screen pt-20 bg-white">
        {/* Hero Section - Light Theme */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#F8F7F4]">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-black/5"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1623873528778-a4fa1f29eda6?w=1920&auto=format&fit=crop&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.15,
              }}
            />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider animate-fade-in">Our Story</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">About Swarnalaya Gold & Diamonds</h1>
              <p className="text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in">
                Discover the story behind our passion for crafting exquisite jewelry that transcends generations. 
                From our humble beginnings to becoming a trusted name in fine gold and diamond jewelry.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Legacy - Light Theme */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 animate-fade-in">
                <span className="block text-sm uppercase tracking-widest text-[#D4AF37] mb-2">Est. 2004</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">A Heritage of Excellence</h2>
                <p className="text-gray-600 mb-5">
                  For nearly two decades, Swarnalaya Gold & Diamonds in Parappanangadi, Kerala has been crafting precious moments through exquisite jewelry. What began as a small family workshop has blossomed into one of the region's most trusted names in gold and diamond jewelry.
                </p>
                <p className="text-gray-600 mb-5">
                  Our journey is marked by an unwavering commitment to quality, craftsmanship, and customer satisfaction. Every piece that bears the Swarnalaya name carries with it our promise of excellence and timeless beauty, rooted in the rich jewelry traditions of Kerala.
                </p>
                <p className="text-gray-600 mb-8">
                  Today, Swarnalaya stands as a symbol of trust, quality, and exceptional craftsmanship. Our journey is a testament to our commitment to excellence and our passion for creating jewelry that becomes a part of your cherished memories.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                    <span className="block text-[#D4AF37] text-3xl font-bold mb-1">20+</span>
                    <span className="text-gray-500 text-sm">Years of Excellence</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                    <span className="block text-[#D4AF37] text-3xl font-bold mb-1">10k+</span>
                    <span className="text-gray-500 text-sm">Happy Customers</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                    <span className="block text-[#D4AF37] text-3xl font-bold mb-1">5k+</span>
                    <span className="text-gray-500 text-sm">Unique Designs</span>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 animate-fade-in">
                <div className="relative">
                  <div className="absolute top-0 right-0 w-64 h-64 border-t-2 border-r-2 border-[#D4AF37] opacity-20"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 border-b-2 border-l-2 border-[#D4AF37] opacity-20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&auto=format&fit=crop&q=80" 
                    alt="Swarnalaya workshop" 
                    className="rounded-lg shadow-lg relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Vision & Values - Light Theme */}
        <section className="py-16 sm:py-20 md:py-24 bg-[#F8F7F4]">
          <div className="container mx-auto px-6">
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider animate-fade-in">Guiding Principles</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 animate-fade-in">Our Vision & Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 animate-fade-in">
                <div className="mb-6 p-3 rounded-full bg-[#D4AF37]/10 inline-block">
                  <CheckCheck size={28} className="text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Without Compromise</h3>
                <p className="text-gray-600">
                  We believe in creating jewelry that stands the test of time. Each piece is crafted with meticulous 
                  attention to detail, using only the finest materials to ensure exceptional quality and durability.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 animate-fade-in" style={{ animationDelay: '150ms' }}>
                <div className="mb-6 p-3 rounded-full bg-[#D4AF37]/10 inline-block">
                  <History size={28} className="text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Respecting Tradition</h3>
                <p className="text-gray-600">
                  While we embrace innovation, we deeply respect the rich traditions of jewelry crafting. Our designs 
                  pay homage to cultural heritage while incorporating contemporary aesthetics and techniques.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="mb-6 p-3 rounded-full bg-[#D4AF37]/10 inline-block">
                  <Users size={28} className="text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer-Centric Approach</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We strive to create not just beautiful jewelry, 
                  but meaningful experiences and lasting relationships built on trust, transparency, and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team - Light Theme */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-6">
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider animate-fade-in">The People Behind Our Creations</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 animate-fade-in">Meet Our Team</h2>
            
            <div className="mt-12">
              {[
                {
                  name: "Muhammad Rafeek",
                  position: "Founder & Director",
                  image: "/director.jpeg",
                  bio: "With over 25 years of experience in traditional Kerala jewelry craftsmanship, Rajesh Kumar founded Swarnalaya with a vision to preserve heritage designs while embracing modern techniques."
                }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm border border-gray-200 animate-fade-in lg:flex lg:items-stretch overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-48 lg:h-auto lg:w-1/3 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
                    <h3 className="text-xl lg:text-2xl font-semibold text-[#D4AF37] mb-2">{member.name}</h3>
                    <p className="text-gray-500 text-sm lg:text-base mb-4">{member.position}</p>
                    <p className="text-gray-600 lg:text-lg">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Certifications - Light Theme */}
        <section className="py-16 bg-[#F8F7F4]">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <Award size={40} className="text-[#D4AF37] mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">Our Certifications</h2>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                    <span className="text-[#D4AF37] font-bold">BIS</span>
                  </div>
                  <span className="text-gray-600">Bureau of Indian Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                    <span className="text-[#D4AF37] font-bold">GIA</span>
                  </div>
                  <span className="text-gray-600">Gemological Institute of America</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
