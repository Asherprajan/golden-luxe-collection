import { X } from 'lucide-react';
import { Product } from '@/types/supabase';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  materials: { value: string; label: string }[];
  occasions: { value: string; label: string }[];
  categoryName: string;
}

const ProductDetail = ({ product, onClose, materials, occasions, categoryName }: ProductDetailProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-1 sm:p-4 animate-fade-in-slow backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden animate-scale-in shadow-xl my-1 sm:my-4">
        <button 
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-sm"
          onClick={onClose}
        >
          <X size={16} className="sm:hidden" />
          <X size={20} className="hidden sm:block" />
        </button>
        
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-56 sm:h-80 md:h-auto">
            <img 
              src={product.image_url} 
              alt={product.name} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 p-3 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 mt-1 sm:mt-0">
              {product.name}
          y\    
            </h3>
            
            <div className="space-y-2 sm:space-y-4 mb-3 sm:mb-6">
              <p className="text-xs sm:text-base text-gray-600">
                {product.description || 'This exquisite piece showcases the finest craftsmanship and attention to detail that Swarnalaya is known for. Perfect for special occasions and daily wear alike.'}
              </p>

              
              <div className="grid grid-cols-2 gap-2 sm:gap-4 py-2 sm:py-4 border-y border-gray-200">
                <div>
                  <span className="text-gray-500 text-xs sm:text-sm">Category</span>
                  <p className="text-gray-800 font-medium text-xs sm:text-base">{categoryName}</p>
                </div>
                
                {product.material && (
                  <div>
                    <span className="text-gray-500 text-xs sm:text-sm">Material</span>
                    <p className="text-gray-800 font-medium text-xs sm:text-base">
                      {materials.find(m => m.value === product.material)?.label || product.material}
                    </p>
                  </div>
                )}
                
                {product.occasion && (
                  <div>
                    <span className="text-gray-500 text-xs sm:text-sm">Occasion</span>
                    <p className="text-gray-800 font-medium text-xs sm:text-base">
                      {occasions.find(o => o.value === product.occasion)?.label || product.occasion}
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <button className="w-full py-2 sm:py-3 px-4 bg-[#D4AF37] text-white rounded-lg hover:bg-[#C09A2F] transition-colors duration-300 font-medium text-xs sm:text-base">
                Request Price Quote
              </button>
              <button className="w-full py-2 sm:py-3 px-4 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300 font-medium text-xs sm:text-base">
                Book Showroom Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
