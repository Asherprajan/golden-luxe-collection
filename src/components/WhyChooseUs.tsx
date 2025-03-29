'use client'

import { Award, Sparkles, Scale } from 'lucide-react';
import GoldRateDisplay from './GoldRateDisplay';
const features = [
  {
    icon: <Award className="w-10 h-10 text-gold" />,
    title: "BIS Hallmark Assurance",
    description: "Every piece of jewelry comes with Bureau of Indian Standards hallmarking, guaranteeing authentic gold purity and quality."
  },
  {
    icon: <Sparkles className="w-10 h-10 text-gold" />,
    title: "Custom Jewelry Design",
    description: "Transform your vision into reality with our bespoke design service. Our master craftsmen bring your dream jewelry to life."
  },
  {
    icon: <Scale className="w-10 h-10 text-gold" />,
    title: "Transparent Pricing",
    description: "We believe in complete transparency. Our pricing is straightforward with no hidden charges, ensuring you get the best value."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-coffee-light">
      <div className="container mx-auto">
        <span className="section-subtitle animate-fade-in">Why Choose Us</span>
        <h2 className="section-title animate-fade-in">The Swarnalaya Difference</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-5 p-3 rounded-full bg-coffee/50 backdrop-blur-sm">{feature.icon}</div>
              <h3 className="heading-sm mb-4 text-beige">{feature.title}</h3>
              <p className="text-beige/80">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Gold Price Indicator */}
        {/* <div className="mt-16 glass-card p-6 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="heading-sm text-gold mb-1">Today's Gold Rate</h3>
              <p className="text-sm text-beige/80">Last updated: May 10, 2023 at 10:30 AM</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-coffee p-4 rounded-lg text-center min-w-[120px]">
                <span className="block text-sm text-beige/70">22K Gold</span>
                <span className="block text-xl font-semibold text-gold">₹5,380/g</span>
              </div>
              <div className="bg-coffee p-4 rounded-lg text-center min-w-[120px]">
                <span className="block text-sm text-beige/70">24K Gold</span>
                <span className="block text-xl font-semibold text-gold">₹5,820/g</span>
              </div>
              <div className="bg-coffee p-4 rounded-lg text-center min-w-[120px]">
                <span className="block text-sm text-beige/70">18K Gold</span>
                <span className="block text-xl font-semibold text-gold">₹4,430/g</span>
              </div>
            </div>
          </div>
        </div> */}
          {/* <GoldRateDisplay /> */}
      </div>
    
    </section>
    

  );
};

export default WhyChooseUs;
