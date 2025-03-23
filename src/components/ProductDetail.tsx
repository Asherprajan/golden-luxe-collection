
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
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-slow">
      <div className="relative max-w-4xl w-full bg-coffee rounded-lg overflow-hidden animate-scale-in">
        <button 
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-gold hover:text-coffee"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img 
              src={product.image_url} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="heading-md text-gold mb-2">
              {product.name}
            </h3>
            <p className="text-2xl font-semibold text-beige mb-4">
              {formatPrice(product.price)}
            </p>
            
            <div className="space-y-4 mb-6">
              <p className="text-beige/80">
                {product.description || 'This exquisite piece showcases the finest craftsmanship and attention to detail that Swarnalaya is known for. Perfect for special occasions and daily wear alike.'}
              </p>
              
              <div className="flex gap-2">
                <span className="text-gold">Category:</span>
                <span className="text-beige/80">{categoryName}</span>
              </div>
              
              {product.material && (
                <div className="flex gap-2">
                  <span className="text-gold">Material:</span>
                  <span className="text-beige/80">
                    {materials.find(m => m.value === product.material)?.label || product.material}
                  </span>
                </div>
              )}
              
              {product.occasion && (
                <div className="flex gap-2">
                  <span className="text-gold">Occasion:</span>
                  <span className="text-beige/80">
                    {occasions.find(o => o.value === product.occasion)?.label || product.occasion}
                  </span>
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <button className="button-primary w-full">
                Request Price Quote
              </button>
              <button className="button-outline w-full">
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
