import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Category } from '@/types/supabase';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowRight } from 'lucide-react';

interface CollectionGridProps {
  limit?: number;
  showHeading?: boolean;
  animationDelay?: boolean;
}

const CollectionGrid = ({ limit, showHeading = true, animationDelay = false }: CollectionGridProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');
      
      if (error) {
        console.error('Error fetching categories:', error);
        throw new Error('Failed to fetch categories');
      }
      
      return data as Category[];
    }
  });
  
  // Process categories with limits if specified
  const displayedCategories = limit && categories ? categories.slice(0, limit) : categories;
  
  if (error) {
    return (
      <section className="py-20 md:py-28 relative overflow-hidden bg-white">
        <div className="text-center py-10">
          <p className="text-red-500">Failed to load collections. Please try again later.</p>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#F8F7F4]">
      {/* Decorative light elements */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[120px] opacity-60"></div>
      <div className="absolute -left-40 bottom-0 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/8 blur-[100px] opacity-70"></div>
      
      <div className="container mx-auto px-6 relative">
        {showHeading && (
          <div className="text-center mb-12">
            <div className="inline-block mb-3">
              <span className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm border-b border-[#D4AF37]/30 pb-1">Exquisite Selection</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-800 mb-8 leading-tight font-serif">
              Our <span className="italic">Collections</span>
            </h2>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {isLoading ? (
            // Skeleton loaders while loading
            Array.from({ length: limit || 6 }).map((_, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-[4/5] animate-pulse bg-gray-200">
                <Skeleton className="h-full w-full bg-gray-300" />
              </div>
            ))
          ) : displayedCategories?.map((category, index) => (
            <Link
              key={category.id}
              to={`/collections?category=${category.slug}`}
              className={`relative group overflow-hidden rounded-lg shadow-sm border border-gray-200 aspect-[4/5] animate-fade-in`}
              style={{ 
                animationDelay: animationDelay ? `${index * 100}ms` : '0ms' 
              }}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>
              {/* Use first product image from category as the category image */}
              <img 
                src={getImageForCategory(category.slug)} 
                alt={category.name} 
                className={`w-full h-full object-cover transition-transform duration-700 ease-in-out
                ${hoveredId === category.id ? 'scale-110' : 'scale-100'}`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-2xl text-white mb-2 font-semibold">{category.name}</h3>
                <div className="flex items-center gap-2 text-[#D4AF37] hover:text-white transition-all duration-300 group-hover:translate-x-1">
                  <span className="text-sm">Explore Collection</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {limit && categories && categories.length > limit && (
          <div className="text-center mt-12">
            <Link 
              to="/collections" 
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#D4AF37]/80 transition-all duration-300 group border-b border-transparent hover:border-[#D4AF37]/40 pb-1"
            >
              <span>View All Collections</span>
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

// Helper function to get sample images for categories
const getImageForCategory = (slug: string) => {
  const categoryImages: Record<string, string> = {
    'necklaces': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80',
    'rings': 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80',
    'bangles': 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'earrings': 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'bridal': 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&auto=format&fit=crop&q=80',
    'coins': 'https://images.unsplash.com/photo-1610375461249-f3288718c5e3?w=600&auto=format&fit=crop&q=80'
  };
  
  return categoryImages[slug] || categoryImages.necklaces;
};

export default CollectionGrid;
