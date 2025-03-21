
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Bride",
    quote: "My bridal set from Swarnalaya made me feel like royalty on my special day. The craftsmanship was exquisite, and the team went above and beyond to ensure every piece matched perfectly.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Rajesh Verma",
    role: "Anniversary Gift",
    quote: "I wanted something special for our 25th anniversary. The custom pendant I ordered exceeded all expectations. My wife was moved to tears when she opened it.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Regular Customer",
    quote: "What sets Swarnalaya apart is their attention to detail and customer service. I've been shopping here for over a decade and have never been disappointed.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    // Auto-advance testimonials
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Reset animation state after animation completes
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 600); // Match this with animation duration
      
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);
  
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <span className="section-subtitle animate-fade-in">Testimonials</span>
        <h2 className="section-title animate-fade-in">What Our Customers Say</h2>
        
        <div className="mt-12 relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-10 z-10">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-coffee-light/80 backdrop-blur-sm flex items-center justify-center text-beige hover:bg-gold hover:text-coffee transition-all duration-300"
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-10 z-10">
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-coffee-light/80 backdrop-blur-sm flex items-center justify-center text-beige hover:bg-gold hover:text-coffee transition-all duration-300"
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Testimonial */}
          <div className="overflow-hidden relative bg-coffee-light/50 backdrop-blur-sm rounded-xl p-10 glass-card">
            <div className="absolute top-6 left-6 opacity-20">
              <Quote size={60} className="text-gold" />
            </div>
            
            <div
              key={currentIndex} 
              className={`flex flex-col md:flex-row gap-8 items-center ${
                isAnimating 
                  ? direction === 'next' 
                    ? 'animate-slide-in-right' 
                    : 'animate-slide-in-left'
                  : ''
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gold">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg md:text-xl italic text-beige mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-gold font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-beige/70">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setDirection(index > currentIndex ? 'next' : 'prev');
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-gold' : 'bg-beige/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
