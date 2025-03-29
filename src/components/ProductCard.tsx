import { useState } from 'react';
import { Product } from '@/types/supabase';

interface ProductCardProps {
  product: Product;
  onClick: (productId: string) => void;
  index: number;
}

const ProductCard = ({ product, onClick, index }: ProductCardProps) => {
  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden animate-fade-in shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onClick(product.id)}
    >
      {/* Image Container */}
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          src={product.image_url} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Floating Material Tag */}
        {product.material && (
          <span className="absolute top-3 right-3 text-xs px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full text-white/90 font-medium">
            {product.material}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-medium text-base sm:text-lg text-white/90 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-end">
          <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <svg 
              className="w-4 h-4 text-gold" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
