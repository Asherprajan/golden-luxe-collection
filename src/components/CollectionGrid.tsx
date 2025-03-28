
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Category } from '@/types/supabase';
import { Skeleton } from '@/components/ui/skeleton';

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
  
  const { data: categoryProductCounts, isLoading: isLoadingCounts } = useQuery({
    queryKey: ['categoryProductCounts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('category_id, id');
      
      if (error) {
        console.error('Error fetching product counts:', error);
        throw new Error('Failed to fetch product counts');
      }
      
      // Calculate counts per category
      const counts: Record<string, number> = {};
      data.forEach(product => {
        counts[product.category_id] = (counts[product.category_id] || 0) + 1;
      });
      
      return counts;
    },
    enabled: !!categories
  });
  
  // Process categories with limits if specified
  const displayedCategories = limit && categories ? categories.slice(0, limit) : categories;
  
  if (error) {
    return (
      <section className="section-padding">
        <div className="text-center py-10">
          <p className="text-red-400">Failed to load collections. Please try again later.</p>
        </div>
      </section>
    );
  }
  
  return (
    <section className="section-padding">
      {showHeading && (
        <>
          <span className="section-subtitle animate-fade-in">Exquisite Selection</span>
          <h2 className="section-title animate-fade-in">Our Collections</h2>
        </>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {isLoading ? (
          // Skeleton loaders while loading
          Array.from({ length: limit || 6 }).map((_, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-[4/5] animate-pulse">
              <Skeleton className="h-full w-full" />
            </div>
          ))
        ) : displayedCategories?.map((category, index) => (
          <Link
            key={category.id}
            to={`/collections?category=${category.slug}`}
            className={`relative group overflow-hidden rounded-lg aspect-[4/5] card-hover animate-fade-in`}
            style={{ 
              animationDelay: animationDelay ? `${index * 100}ms` : '0ms' 
            }}
            onMouseEnter={() => setHoveredId(category.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            {/* Use first product image from category as the category image */}
            <img 
              src={getImageForCategory(category.slug)} 
              alt={category.name} 
              className={`w-full h-full object-cover transition-transform duration-700 
              ${hoveredId === category.id ? 'scale-110' : 'scale-100'}`}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
              <h3 className="heading-md text-white mb-2">{category.name}</h3>
              <p className="text-beige/90 text-sm">
                {isLoadingCounts ? 'Loading...' : (categoryProductCounts?.[category.id] || 0)} Products
              </p>
              <div className="w-10 h-0.5 bg-gold mt-3 transition-all duration-300 group-hover:w-16"></div>
            </div>
          </Link>
        ))}
      </div>
      
      {limit && categories && categories.length > limit && (
        <div className="text-center mt-12">
          <Link to="/collections" className="button-outline">
            View All Collections
          </Link>
        </div>
      )}
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
