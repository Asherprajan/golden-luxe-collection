import { useState } from 'react';
import { ArrowRight, Palette, Repeat, Wrench, Sparkles, Scale, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const services = [
  {
    id: 1,
    title: "Custom Jewelry Design",
    description: "Transform your vision into reality with our bespoke jewelry design service. Our expert designers will work closely with you to create personalized pieces that reflect your style and sentiment.",
    icon: <Palette className="text-gold w-10 h-10" />,
    features: [
      "One-on-one consultation with our design team",
      "3D modeling and rendering for visualization",
      "Gemstone selection and placement guidance",
      "Iterative design process to perfect your vision",
      "Handcrafted production by master jewelers"
    ],
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Gold Exchange & Testing",
    description: "Trade in your old gold jewelry and get the best market value. Our transparent evaluation process ensures you receive fair pricing based on current market rates.",
    icon: <Repeat className="text-gold w-10 h-10" />,
    features: [
      "Expert assessment of gold purity and weight",
      "Transparent pricing with no hidden charges",
      "Option to exchange for new jewelry with added benefits",
      "Quick and hassle-free process",
      "Documentation provided for all transactions"
    ],
    image: "https://images.unsplash.com/photo-1611598935678-c88dca238fce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Jewelry Maintenance & Polishing",
    description: "Keep your precious jewelry looking as stunning as the day you bought it. Our professional maintenance services extend the life and luster of your beloved pieces.",
    icon: <Wrench className="text-gold w-10 h-10" />,
    features: [
      "Deep cleaning to remove dirt and residues",
      "Professional polishing to restore shine",
      "Prong tightening and stone security check",
      "Minor repairs and clasp reinforcement",
      "Rhodium plating for white gold pieces"
    ],
    image: "https://images.unsplash.com/photo-1588891825655-aa526b56f805?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "Diamond and Gemstone Certification",
    description: "Ensure the authenticity and quality of your precious stones with our professional certification service. We provide detailed analysis and documentation of your gemstones.",
    icon: <Sparkles className="text-gold w-10 h-10" />,
    features: [
      "Comprehensive gemstone evaluation",
      "Certification from internationally recognized laboratories",
      "Detailed analysis of the 4Cs for diamonds",
      "Authentication of rare and precious gemstones",
      "Documentation with photographs and specifications"
    ],
    image: "https://images.unsplash.com/photo-1600119612651-0db31b3a7baa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    title: "Jewelry Appraisal Services",
    description: "Get professional valuation of your jewelry for insurance, estate planning, or resale purposes. Our expert appraisers provide accurate and detailed assessments.",
    icon: <Scale className="text-gold w-10 h-10" />,
    features: [
      "Comprehensive evaluation by certified appraisers",
      "Detailed documentation with photographs",
      "Market value assessment for insurance purposes",
      "Authentication of antique and period jewelry",
      "Confidential and secure handling of your valuables"
    ],
    image: "https://images.unsplash.com/photo-1601121141418-c1caa10a2a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    title: "Jewelry Gifting Solutions",
    description: "Make every special occasion memorable with our personalized gifting solutions. From corporate gifts to anniversary surprises, we help you select the perfect piece.",
    icon: <Package className="text-gold w-10 h-10" />,
    features: [
      "Personalized gift selection assistance",
      "Custom engraving and personalization",
      "Elegant packaging and presentation",
      "Gift registry for special occasions",
      "Corporate gifting programs with bulk discounts"
    ],
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  
  return (
    <>
      <SEO
        title="Our Services - Swarnalaya Gold & Diamonds"
        description="Discover our comprehensive jewelry services including custom designs, repairs, and gold exchange."
        image="https://swarnalaya.com/og-services.jpg"
      />
      <div className="min-h-screen pt-20 bg-white">
        {/* Hero Section - Light Theme */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#F8F7F4]">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div
              className="absolute inset-0 bg-black/5"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1573408301828-9145ea517a3c?w=1920&auto=format&fit=crop&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
                opacity: 0.15,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
              <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider animate-fade-in">Our Expertise</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">Specialized Services</h1>
              <p className="text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in">
              From custom designs to jewelry care, we offer a comprehensive range of services 
              to enhance your jewelry experience and ensure your precious pieces last for generations.
            </p>
          </div>
        </div>
      </section>
      
        {/* Services List - Light Theme */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                  className={`bg-white overflow-hidden rounded-lg shadow-sm border border-gray-200 transition-all duration-300 animate-fade-in ${
                    activeService === service.id ? 'ring-2 ring-[#D4AF37] shadow-lg' : 'hover:shadow-md'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveService(service.id === activeService ? null : service.id)}
              >
                <div className="aspect-[2/1] overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-white/30 backdrop-blur-sm">
                          <div className="text-white w-10 h-10">
                        {service.icon}
                      </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <ul className="space-y-2 mt-4 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="text-[#D4AF37]">•</span>
                            <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button
                        className="text-[#D4AF37] flex items-center gap-1 hover:underline transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveService(service.id === activeService ? null : service.id);
                      }}
                    >
                      {activeService === service.id ? 'Show Less' : 'Learn More'}
                      <ArrowRight size={16} className={`transition-transform duration-300 ${
                        activeService === service.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                    
                    <Link 
                      to="/contact" 
                        className="text-sm py-1.5 px-4 border border-[#D4AF37] rounded-full text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
        {/* Process Section - Light Theme */}
        <section className="py-16 sm:py-20 md:py-24 bg-[#F8F7F4]">
          <div className="container mx-auto px-6">
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider animate-fade-in">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 animate-fade-in">Our Service Process</h2>
          
          <div className="relative mt-16">
            {/* Process steps */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#D4AF37]/30"></div>
            
            <div className="space-y-16">
              {[
                {
                  number: "01",
                  title: "Initial Consultation",
                  description: "Schedule a meeting with our experts to discuss your requirements and preferences. We'll understand your vision and provide initial guidance."
                },
                {
                  number: "02",
                  title: "Proposal & Design",
                  description: "Based on your consultation, we'll prepare a detailed proposal including design concepts, timeline, and cost estimates for your approval."
                },
                {
                  number: "03",
                  title: "Creation & Crafting",
                  description: "Once approved, our artisans will begin the meticulous process of crafting your piece, keeping you updated throughout the journey."
                },
                {
                  number: "04",
                  title: "Quality Assurance",
                  description: "Every piece undergoes rigorous quality checks to ensure it meets our high standards of craftsmanship and your expectations."
                },
                {
                  number: "05",
                  title: "Final Delivery",
                  description: "We present your perfectly crafted jewelry in elegant packaging, ready to be cherished for generations to come."
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="inline-block text-3xl font-serif font-bold text-[#D4AF37] mb-2">{step.number}</span>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center relative z-10">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center shadow-sm">
                        <span className="text-[#D4AF37] font-bold">{step.number}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
        {/* CTA Section - Light Theme */}
      <section className="py-20 relative overflow-hidden">
        <div 
            className="absolute inset-0 z-0 bg-gradient-to-r from-gray-900/60 to-gray-800/60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1920&auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
              <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider animate-fade-in">Get Started</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in">Ready to Experience Our Services?</h2>
              <p className="text-white/90 mb-8 animate-fade-in">
              Whether you're looking to create a custom piece, maintain your jewelry collection, or trade in your gold, 
              our team of experts is ready to assist you. Schedule a consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Link to="/contact" className="px-6 py-3 bg-[#D4AF37] text-white rounded-lg hover:bg-[#C09A2F] transition-colors duration-300 font-medium">
                Contact Us Now
              </Link>
                <Link to="/collections" className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors duration-300">
                Explore Collections
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;
