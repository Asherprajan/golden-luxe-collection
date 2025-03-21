
import { ArrowRight, CheckCheck, History, Users, Award } from 'lucide-react';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-coffee/80"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1623873528778-a4fa1f29eda6?w=1920&auto=format&fit=crop&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              mixBlendMode: 'multiply',
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle animate-fade-in">Our Story</span>
            <h1 className="heading-xl mb-6 animate-fade-in">About Swarnalaya</h1>
            <p className="paragraph mb-10 max-w-2xl mx-auto animate-fade-in opacity-90">
              Discover the story behind our passion for crafting exquisite jewelry that transcends generations. 
              From our humble beginnings to becoming a trusted name in fine gold and diamond jewelry.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Legacy */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <span className="block text-sm uppercase tracking-widest text-gold mb-2">Est. 1987</span>
              <h2 className="heading-lg mb-6">A Legacy of Excellence</h2>
              <p className="paragraph mb-5">
                The journey of Swarnalaya began in 1987 when our founder, Mr. Rajesh Kumar, opened a small jewelry workshop 
                with a vision to create pieces that blend traditional craftsmanship with contemporary designs.
              </p>
              <p className="paragraph mb-5">
                What started as a modest establishment has now evolved into one of the most respected names in jewelry. 
                Through three decades of dedication, we have perfected the art of creating timeless pieces that celebrate 
                life's precious moments.
              </p>
              <p className="paragraph mb-8">
                Today, Swarnalaya stands as a symbol of trust, quality, and exceptional craftsmanship. Our journey is a 
                testament to our commitment to excellence and our passion for creating jewelry that becomes a part of your 
                cherished memories.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="glass-card p-4 text-center">
                  <span className="block text-gold text-3xl font-bold mb-1">35+</span>
                  <span className="text-beige/70 text-sm">Years of Excellence</span>
                </div>
                <div className="glass-card p-4 text-center">
                  <span className="block text-gold text-3xl font-bold mb-1">10k+</span>
                  <span className="text-beige/70 text-sm">Happy Customers</span>
                </div>
                <div className="glass-card p-4 text-center">
                  <span className="block text-gold text-3xl font-bold mb-1">15+</span>
                  <span className="text-beige/70 text-sm">Design Awards</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="relative">
                <div className="absolute top-0 right-0 w-64 h-64 border-t-2 border-r-2 border-gold opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 border-b-2 border-l-2 border-gold opacity-40"></div>
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
      
      {/* Our Vision & Values */}
      <section className="section-padding bg-coffee-light">
        <div className="container mx-auto">
          <span className="section-subtitle animate-fade-in">Guiding Principles</span>
          <h2 className="section-title animate-fade-in">Our Vision & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="glass-card p-8 animate-fade-in">
              <div className="mb-6 p-3 rounded-full bg-coffee/60 inline-block">
                <CheckCheck size={28} className="text-gold" />
              </div>
              <h3 className="heading-sm mb-4">Quality Without Compromise</h3>
              <p className="text-beige/80">
                We believe in creating jewelry that stands the test of time. Each piece is crafted with meticulous 
                attention to detail, using only the finest materials to ensure exceptional quality and durability.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <div className="mb-6 p-3 rounded-full bg-coffee/60 inline-block">
                <History size={28} className="text-gold" />
              </div>
              <h3 className="heading-sm mb-4">Respecting Tradition</h3>
              <p className="text-beige/80">
                While we embrace innovation, we deeply respect the rich traditions of jewelry crafting. Our designs 
                pay homage to cultural heritage while incorporating contemporary aesthetics and techniques.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="mb-6 p-3 rounded-full bg-coffee/60 inline-block">
                <Users size={28} className="text-gold" />
              </div>
              <h3 className="heading-sm mb-4">Customer-Centric Approach</h3>
              <p className="text-beige/80">
                Our customers are at the heart of everything we do. We strive to create not just beautiful jewelry, 
                but meaningful experiences and lasting relationships built on trust, transparency, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section-padding">
        <div className="container mx-auto">
          <span className="section-subtitle animate-fade-in">The People Behind Our Creations</span>
          <h2 className="section-title animate-fade-in">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                name: "Rajesh Kumar",
                position: "Founder & Master Craftsman",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80"
              },
              {
                name: "Anita Sharma",
                position: "Head Designer",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80"
              },
              {
                name: "Vikram Patel",
                position: "Gemologist",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80"
              },
              {
                name: "Priya Gupta",
                position: "Customer Experience Manager",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="glass-card overflow-hidden rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gold mb-1">{member.name}</h3>
                  <p className="text-beige/70 text-sm">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 bg-coffee-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <Award size={40} className="text-gold mx-auto mb-4" />
            <h2 className="heading-md mb-8">Our Certifications</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-16 h-16 bg-coffee rounded-full flex items-center justify-center">
                  <span className="text-gold font-bold">BIS</span>
                </div>
                <span className="text-beige">Bureau of Indian Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-16 bg-coffee rounded-full flex items-center justify-center">
                  <span className="text-gold font-bold">IGI</span>
                </div>
                <span className="text-beige">International Gemological Institute</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-16 bg-coffee rounded-full flex items-center justify-center">
                  <span className="text-gold font-bold">GIA</span>
                </div>
                <span className="text-beige">Gemological Institute of America</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
