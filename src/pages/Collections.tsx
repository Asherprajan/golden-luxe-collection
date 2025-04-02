import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Filter, Search, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Product, Category } from '@/types/supabase';
import ProductCard from '@/components/ProductCard';
import ProductDetail from '@/components/ProductDetail';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';
import SEO from '@/components/SEO';

// Filter categories
const materials = [
  { value: "all", label: "All Materials" },
  { value: "gold", label: "Gold" },
  { value: "diamond", label: "Diamond" },
];

const occasions = [
  { value: "all", label: "All Occasions" },
  { value: "wedding", label: "Wedding" },
  { value: "engagement", label: "Engagement" },
  { value: "party", label: "Party" },
  { value: "casual", label: "Casual" },
  { value: "anniversary", label: "Anniversary" },
  { value: "investment", label: "Investment" },
];

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  // Initialize filters from URL
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Fetch categories
  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data as Category[];
    }
  });

  // Create categories filter options
  const categoryOptions = [
    { value: "all", label: "All Categories" },
    ...(categories?.map(cat => ({ value: cat.slug, label: cat.name })) || [])
  ];

  // Fetch products with filters
  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ['products', selectedCategory, selectedMaterial, selectedOccasion, searchQuery],
    queryFn: async () => {
      let query = supabase.from('products').select('*');

      // Apply category filter
      if (selectedCategory !== "all") {
        const categoryId = categories?.find(cat => cat.slug === selectedCategory)?.id;
        if (categoryId) {
          query = query.eq('category_id', categoryId);
        }
      }

      // Apply material filter
      if (selectedMaterial !== "all") {
        query = query.eq('material', selectedMaterial);
      }

      // Apply occasion filter
      if (selectedOccasion !== "all") {
        query = query.eq('occasion', selectedOccasion);
      }

      // Get results
      const { data, error } = await query;
      
      if (error) throw error;
      
      // Apply search filter in memory (since we can't do this easily on the server)
      let filteredData = data as Product[];
      if (searchQuery) {
        filteredData = filteredData.filter(product => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      return filteredData;
    },
    enabled: !!categories
  });

  // Get selected product details
  const selectedProductData = selectedProduct ? products?.find(p => p.id === selectedProduct) || null : null;
  
  // Find category name for the selected product
  const getProductCategoryName = (categoryId: string) => {
    const category = categories?.find(cat => cat.id === categoryId);
    return category?.name || '';
  };

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <>
      <SEO
        title="Our Collections - Swarnalaya Gold & Diamonds"
        description="Explore our wide range of gold and diamond jewelry collections. Find the perfect piece for every occasion."
        image="https://swarnalaya.com/og-collections.jpg"
      />
      <div className="min-h-screen pt-20 bg-white">
        {/* Hero Section - Light Theme */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-[#F8F7F4]">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-black/5"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600262302726-7f1e1e8d1037?w=1920&auto=format&fit=crop&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.15,
              }}
            />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider animate-fade-in">Our Products</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 animate-fade-in">Jewelry Collections</h1>
              <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in">
                Explore our exquisite range of handcrafted gold and diamond jewelry. 
                Each piece tells a story of tradition, elegance, and timeless beauty.
              </p>
              
              {/* Search Bar - Light Theme */}
              <div className="relative max-w-xl mx-auto animate-fade-in">
                <input
                  type="text"
                  placeholder="Search jewelry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 px-5 pl-12 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors text-gray-700 shadow-sm"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#D4AF37]"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Mobile Filter Toggle - Light Theme */}
              <div className="lg:hidden mb-6">
                <button
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:border-[#D4AF37] bg-white shadow-sm"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={16} />
                  {showFilters ? "Hide Filters" : "Show Filters"} 
                </button>
              </div>
              
              {/* Filters Sidebar - Light Theme */}
              <div 
                className={`lg:w-72 flex-shrink-0 ${
                  showFilters ? 'block' : 'hidden lg:block'
                }`}
              >
                <div className="bg-[#F8F7F4] p-6 sticky top-24 border border-gray-200 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Refine Your Search</h3>
                  
                  {/* Category Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 text-gray-700">Category</h4>
                    {categoriesLoading ? (
                      <div className="space-y-2">
                        {[1, 2, 3, 4].map((i) => (
                          <Skeleton key={i} className="h-6 w-full bg-gray-200" />
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        {categoryOptions.map((category) => (
                          <label key={category.value} className="flex items-center gap-3 cursor-pointer hover:text-[#D4AF37] transition-colors py-1">
                            <input
                              type="radio"
                              name="category"
                              checked={selectedCategory === category.value}
                              onChange={() => setSelectedCategory(category.value)}
                              className="form-radio text-[#D4AF37] h-4 w-4 border-gray-300"
                            />
                            <span className="text-gray-600">{category.label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Material Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 text-gray-700">Material</h4>
                    <div className="space-y-2.5">
                      {materials.map((material) => (
                        <label key={material.value} className="flex items-center gap-3 cursor-pointer hover:text-[#D4AF37] transition-colors py-1">
                          <input
                            type="radio"
                            name="material"
                            checked={selectedMaterial === material.value}
                            onChange={() => setSelectedMaterial(material.value)}
                            className="form-radio text-[#D4AF37] h-4 w-4 border-gray-300"
                          />
                          <span className="text-gray-600">{material.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Occasion Filter */}
                  <div className="mb-8">
                    <h4 className="font-medium mb-3 text-gray-700">Occasion</h4>
                    <div className="space-y-2.5">
                      {occasions.map((occasion) => (
                        <label key={occasion.value} className="flex items-center gap-3 cursor-pointer hover:text-[#D4AF37] transition-colors py-1">
                          <input
                            type="radio"
                            name="occasion"
                            checked={selectedOccasion === occasion.value}
                            onChange={() => setSelectedOccasion(occasion.value)}
                            className="form-radio text-[#D4AF37] h-4 w-4 border-gray-300"
                          />
                          <span className="text-gray-600">{occasion.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Reset Filters - Light Theme */}
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedMaterial("all");
                      setSelectedOccasion("all");
                      setSearchQuery("");
                    }}
                    className="w-full py-3 px-4 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Reset All Filters</span>
                    <X size={16} />
                  </button>
                </div>
              </div>
              
              {/* Products Grid - Light Theme */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {productsLoading ? (
                      <Skeleton className="h-7 w-32 bg-gray-200" />
                    ) : (
                      <>
                        {products?.length || 0} {products?.length === 1 ? 'Product' : 'Products'}
                      </>
                    )}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 hidden sm:inline">Sort by:</span>
                    <select className="bg-white border border-gray-200 rounded-md py-1.5 px-3 text-gray-700 focus:outline-none focus:border-[#D4AF37] shadow-sm">
                      <option>Latest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>
                  </div>
                </div>
                
                {productsLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="bg-white overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <Skeleton className="aspect-square w-full bg-gray-200" />
                        <div className="p-4 space-y-2">
                          <Skeleton className="h-6 w-3/4 bg-gray-200" />
                          <div className="flex justify-between">
                            <Skeleton className="h-4 w-1/3 bg-gray-200" />
                            <Skeleton className="h-4 w-1/4 bg-gray-200" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : products?.length === 0 ? (
                  <div className="text-center py-16 bg-[#F8F7F4] p-8 border border-gray-200 rounded-lg shadow-sm">
                    <div className="mb-4 text-gray-300">
                      <Search size={48} className="mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">No Products Found</h3>
                    <p className="text-gray-600 mb-6">
                      We couldn't find any products matching your criteria.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory("all");
                        setSelectedMaterial("all");
                        setSelectedOccasion("all");
                        setSearchQuery("");
                      }}
                      className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-colors duration-300 shadow-sm"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products?.map((product, index) => (
                      <ProductCard 
                        key={product.id}
                        product={product}
                        onClick={(id) => setSelectedProduct(id)}
                        index={index}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Lightbox - Light Theme will be handled in ProductDetail component */}
        {selectedProductData && (
          <ProductDetail 
            product={selectedProductData}
            onClose={() => setSelectedProduct(null)}
            materials={materials}
            occasions={occasions}
            categoryName={getProductCategoryName(selectedProductData.category_id)}
          />
        )}
      </div>
    </>
  );
};

export default Collections;
