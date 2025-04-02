import { useState } from 'react';
import { Product } from '@/types/supabase';

interface ProductCardProps {
  product: Product;
  onClick: (productId: string) => void;
  index: number;
}

const ProductCard = ({ product, onClick, index }: ProductCardProps) => {
  // Format price from paise to rupees with appropriate formatting
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div 
      className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 animate-fade-in group"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onClick(product.id)}
    >
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={product.image_url} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Optional overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-[#D4AF37] font-medium">{formatPrice(product.price)}</span>
          {product.material && (
            <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">
              {product.material}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
