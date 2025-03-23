
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
      className="glass-card overflow-hidden rounded-lg card-hover animate-fade-in cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onClick(product.id)}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image_url} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-beige mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-gold font-medium">{formatPrice(product.price)}</span>
          {product.material && (
            <span className="text-xs px-3 py-1 bg-coffee rounded-full text-beige/70">
              {product.material}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
