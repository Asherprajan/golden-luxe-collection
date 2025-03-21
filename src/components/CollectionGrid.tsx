
import { useState } from 'react';
import { Link } from 'react-router-dom';

type Collection = {
  id: number;
  name: string;
  image: string;
  category: string;
  count: number;
};

const collections: Collection[] = [
  {
    id: 1,
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80',
    category: 'necklaces',
    count: 24
  },
  {
    id: 2,
    name: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80',
    category: 'rings',
    count: 36
  },
  {
    id: 3,
    name: 'Bangles',
    image: 'https://images.unsplash.com/photo-1619119069939-8f29d5991570?w=600&auto=format&fit=crop&q=80',
    category: 'bangles',
    count: 18
  },
  {
    id: 4,
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&auto=format&fit=crop&q=80',
    category: 'earrings',
    count: 42
  },
  {
    id: 5,
    name: 'Bridal Sets',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&auto=format&fit=crop&q=80',
    category: 'bridal',
    count: 15
  },
  {
    id: 6,
    name: 'Gold Coins',
    image: 'https://images.unsplash.com/photo-1610375461249-f3288718c5e3?w=600&auto=format&fit=crop&q=80',
    category: 'coins',
    count: 10
  }
];

interface CollectionGridProps {
  limit?: number;
  showHeading?: boolean;
  animationDelay?: boolean;
}

const CollectionGrid = ({ limit, showHeading = true, animationDelay = false }: CollectionGridProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const displayedCollections = limit ? collections.slice(0, limit) : collections;
  
  return (
    <section className="section-padding">
      {showHeading && (
        <>
          <span className="section-subtitle animate-fade-in">Exquisite Selection</span>
          <h2 className="section-title animate-fade-in">Our Collections</h2>
        </>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {displayedCollections.map((collection, index) => (
          <Link
            key={collection.id}
            to={`/collections?category=${collection.category}`}
            className={`relative group overflow-hidden rounded-lg aspect-[4/5] card-hover animate-fade-in`}
            style={{ 
              animationDelay: animationDelay ? `${index * 100}ms` : '0ms' 
            }}
            onMouseEnter={() => setHoveredId(collection.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img 
              src={collection.image} 
              alt={collection.name} 
              className={`w-full h-full object-cover transition-transform duration-700 
              ${hoveredId === collection.id ? 'scale-110' : 'scale-100'}`}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
              <h3 className="heading-md text-white mb-2">{collection.name}</h3>
              <p className="text-beige/90 text-sm">{collection.count} Products</p>
              <div className="w-10 h-0.5 bg-gold mt-3 transition-all duration-300 group-hover:w-16"></div>
            </div>
          </Link>
        ))}
      </div>
      
      {limit && (
        <div className="text-center mt-12">
          <Link to="/collections" className="button-outline">
            View All Collections
          </Link>
        </div>
      )}
    </section>
  );
};

export default CollectionGrid;
