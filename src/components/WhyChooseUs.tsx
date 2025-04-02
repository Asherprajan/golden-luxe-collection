import { ArrowRight, Shield, Award, Star, Users, Clock, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "Quality Assurance",
    description: "We use only the finest materials and rigorous quality control to ensure every piece meets our exacting standards.",
    icon: <Shield className="text-[#D4AF37] w-8 h-8" />
  },
  {
    title: "BIS Hallmarked Gold",
    description: "All our gold jewelry comes with BIS Hallmark certification, guaranteeing the purity of gold as mentioned.",
    icon: <Award className="text-[#D4AF37] w-8 h-8" />
  },
  {
    title: "Authentic Designs",
    description: "Our collection features both traditional Kerala designs and contemporary styles, each crafted with cultural authenticity.",
    icon: <Star className="text-[#D4AF37] w-8 h-8" />
  },
  {
    title: "Expert Artisans",
    description: "Our jewelry is crafted by skilled artisans with generations of experience in traditional jewelry making techniques.",
    icon: <Users className="text-[#D4AF37] w-8 h-8" />
  },
  {
    title: "Lifetime Support",
    description: "We offer lifetime maintenance and support for all our jewelry, ensuring your pieces remain as beautiful as the day you bought them.",
    icon: <Clock className="text-[#D4AF37] w-8 h-8" />
  },
  {
    title: "Ethical Sourcing",
    description: "We are committed to ethical sourcing practices, ensuring our materials come from responsible and conflict-free sources.",
    icon: <Gem className="text-[#D4AF37] w-8 h-8" />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#F8F7F4]">
      {/* Decorative light elements */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[120px] opacity-60"></div>
      <div className="absolute -left-40 bottom-0 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/8 blur-[100px] opacity-70"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm border-b border-[#D4AF37]/30 pb-1 inline-block">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-8 leading-tight font-serif">
            The Swarnalaya <span className="italic">Difference</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 flex flex-col items-center text-center shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-5 p-3 rounded-full bg-[#D4AF37]/10">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#D4AF37]/80 transition-all duration-300 group border-b border-transparent hover:border-[#D4AF37]/40 pb-1"
          >
            <span>Learn More About Our Values</span>
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
