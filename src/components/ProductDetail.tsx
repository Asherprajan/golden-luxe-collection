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
  // Format price from paise to rupees with appropriate formatting
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-end sm:items-center justify-center animate-fade-in-slow overscroll-none">
      <div className="relative w-full h-[85vh] sm:h-auto sm:max-h-[90vh] max-w-4xl bg-gradient-to-b from-coffee/95 to-coffee rounded-t-3xl sm:rounded-2xl overflow-hidden animate-slide-up sm:animate-scale-in">
        <button 
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-gold hover:text-coffee transition-all duration-300"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        
        <div className="h-full sm:h-auto flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-1/2 h-[45vh] md:h-auto relative">
            <img 
              src={product.image_url} 
              alt={product.name} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/80 to-transparent md:hidden"></div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col h-[40vh] md:h-auto overflow-y-auto">
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <p className="text-gold/80 text-sm font-medium mb-2">{categoryName}</p>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                  {product.name}
                </h3>
                <p className="text-2xl sm:text-3xl font-bold text-gold">
                  {formatPrice(product.price)}
                </p>
              </div>
              <p className="text-white/70 text-base leading-relaxed">
                {product.description || 'This exquisite piece showcases the finest craftsmanship and attention to detail that Swarnalaya is known for. Perfect for special occasions and daily wear alike.'}
              </p>
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
                {product.material && (
                  <div>
                    <p className="text-white/50 text-sm mb-1">Material</p>
                    <p className="text-white/90">
                      {materials.find(m => m.value === product.material)?.label || product.material}
                    </p>
                  </div>
                )}
                
                {product.occasion && (
                  <div>
                    <p className="text-white/50 text-sm mb-1">Occasion</p>
                    <p className="text-white/90">
                      {occasions.find(o => o.value === product.occasion)?.label || product.occasion}
                    </p>
                  </div>
                )}
              </div>
              <div className="space-y-3 pt-4">
                <button className="w-full bg-gold hover:bg-gold/90 text-coffee font-semibold py-3.5 rounded-xl transition-colors duration-300">
                  Request Price Quote
                </button>
                <button className="w-full bg-white/5 hover:bg-white/10 text-white font-semibold py-3.5 rounded-xl border border-white/10 transition-colors duration-300">
                  Book Showroom Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
