import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Menon",
    role: "Bride",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    content: "Swarnalaya crafted my bridal jewelry set with such attention to detail. The traditional Kerala design elements combined with modern aesthetics made me feel like royalty on my special day. The compliments were endless!"
  },
  {
    id: 2,
    name: "Rahul Krishnan",
    role: "Anniversary Gift",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "I wanted something special for our 25th anniversary and Swarnalaya delivered beyond expectations. The custom pendant they designed based on our wedding motif brought tears to my wife's eyes. Exceptional craftsmanship!"
  },
  {
    id: 3,
    name: "Lakshmi Nair",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    content: "I've been a customer for over a decade, and Swarnalaya never disappoints. Their gold exchange program is the most transparent I've encountered, and their collection is always updated with the latest trends while respecting traditional designs."
  },
  {
    id: 4,
    name: "Arun Thomas",
    role: "Father of the Bride",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    content: "When it came to my daughter's wedding jewelry, I wanted nothing but the best. Swarnalaya's team guided us through the entire process, from selection to customization. The final sets were breathtaking and within our budget."
  },
  {
    id: 5,
    name: "Meera Jayakumar",
    role: "Gift Recipient",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "I received a pair of earrings from Swarnalaya as a graduation gift. Three years later, they still look as brilliant as day one. Their after-sales service is impeccable - they clean and polish my jewelry whenever I visit."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    
    if (!isPaused) {
      timeoutRef.current = window.setTimeout(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
    }
    
    return () => {
      resetTimeout();
    };
  }, [activeIndex, isPaused]);
  
  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Decorative light elements */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[120px] opacity-60"></div>
      <div className="absolute -left-40 bottom-0 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/8 blur-[100px] opacity-70"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm border-b border-[#D4AF37]/30 pb-1">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-8 leading-tight font-serif">
            What Our <span className="italic">Customers</span> Say
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            {/* Testimonial */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="flex text-[#D4AF37] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#D4AF37" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4 text-lg">"{testimonials[activeIndex].content}"</p>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-500">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4">
              <button 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-gray-600 hover:text-[#D4AF37] transform -translate-x-1/2"
                onClick={goToPrevious}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-gray-600 hover:text-[#D4AF37] transform translate-x-1/2"
                onClick={goToNext}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#D4AF37] w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
