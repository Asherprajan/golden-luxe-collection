import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: {
    name: string;
    slug: string;
    description?: string;
    image_url: string;
  };
  onClick: (slug: string) => void;
}

const CategoryCard = ({ category, onClick }: CategoryCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-sm border border-gray-200 cursor-pointer animate-fade-in"
      onClick={() => onClick(category.slug)}
    >
      <div className="aspect-[3/4] relative">
        <img 
          src={category.image_url} 
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
          <p className="text-white/80 text-sm mb-4">{category.description}</p>
          <span className="inline-flex items-center text-[#D4AF37] text-sm font-medium group-hover:text-white transition-colors duration-300">
            View Collection <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard; 