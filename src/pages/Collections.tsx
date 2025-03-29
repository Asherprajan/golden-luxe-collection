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
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-coffee-light py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-subtitle animate-fade-in">Our Products</span>
              <h1 className="heading-xl mb-4 sm:mb-6 animate-fade-in">Jewelry Collections</h1>
              <p className="paragraph mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
                Explore our exquisite range of handcrafted gold and diamond jewelry. 
                Each piece tells a story of tradition, elegance, and timeless beauty.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto animate-fade-in">
                <input
                  type="text"
                  placeholder="Search jewelry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2.5 sm:py-3 px-4 sm:px-5 pl-10 sm:pl-12 bg-coffee border border-beige/20 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-beige text-sm sm:text-base"
                />
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-beige/60" size={16} />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-beige/60 hover:text-gold"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4">
                <button
                  className="flex items-center gap-2 px-4 py-2 border border-beige/20 rounded-lg text-beige hover:border-gold text-sm"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={16} />
                  {showFilters ? "Hide Filters" : "Show Filters"} 
                </button>
              </div>
              
              {/* Filters Sidebar */}
              <div 
                className={`lg:w-64 flex-shrink-0 ${
                  showFilters ? 'block' : 'hidden lg:block'
                }`}
              >
                <div className="glass-card p-4 sm:p-6 sticky top-24">
                  <h3 className="heading-sm mb-4 sm:mb-6 text-gold">Filters</h3>
                  
                  {/* Category Filter */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold mb-2 sm:mb-3 text-beige text-sm sm:text-base">Category</h4>
                    {categoriesLoading ? (
                      <div className="space-y-2">
                        {[1, 2, 3, 4].map((i) => (
                          <Skeleton key={i} className="h-5 sm:h-6 w-full" />
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-1.5 sm:space-y-2">
                        {categoryOptions.map((category) => (
                          <label key={category.value} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="category"
                              checked={selectedCategory === category.value}
                              onChange={() => setSelectedCategory(category.value)}
                              className="form-radio text-gold"
                            />
                            <span className="text-beige/80 text-sm sm:text-base">{category.label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Material Filter */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold mb-2 sm:mb-3 text-beige text-sm sm:text-base">Material</h4>
                    <div className="space-y-1.5 sm:space-y-2">
                      {materials.map((material) => (
                        <label key={material.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="material"
                            checked={selectedMaterial === material.value}
                            onChange={() => setSelectedMaterial(material.value)}
                            className="form-radio text-gold"
                          />
                          <span className="text-beige/80 text-sm sm:text-base">{material.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Occasion Filter */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold mb-2 sm:mb-3 text-beige text-sm sm:text-base">Occasion</h4>
                    <div className="space-y-1.5 sm:space-y-2">
                      {occasions.map((occasion) => (
                        <label key={occasion.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="occasion"
                            checked={selectedOccasion === occasion.value}
                            onChange={() => setSelectedOccasion(occasion.value)}
                            className="form-radio text-gold"
                          />
                          <span className="text-beige/80 text-sm sm:text-base">{occasion.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Reset Filters */}
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedMaterial("all");
                      setSelectedOccasion("all");
                      setSearchQuery("");
                    }}
                    className="w-full py-2 px-4 border border-gold text-gold rounded-md hover:bg-gold hover:text-coffee transition-colors duration-300 text-sm sm:text-base"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-beige">
                    {productsLoading ? (
                      <Skeleton className="h-6 sm:h-7 w-24 sm:w-32" />
                    ) : (
                      <>
                        {products?.length || 0} {products?.length === 1 ? 'Product' : 'Products'}
                      </>
                    )}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-beige/70 text-sm hidden sm:inline">Sort by:</span>
                    <select className="bg-coffee-light border border-beige/20 rounded-md py-1 sm:py-1.5 px-2 sm:px-3 text-beige text-sm sm:text-base focus:outline-none focus:border-gold">
                      <option>Latest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>
                  </div>
                </div>
                
                {productsLoading ? (
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="glass-card overflow-hidden rounded-lg">
                        <Skeleton className="aspect-square w-full" />
                        <div className="p-3 sm:p-4 space-y-1 sm:space-y-2">
                          <Skeleton className="h-5 sm:h-6 w-3/4" />
                          <div className="flex justify-between">
                            <Skeleton className="h-4 w-1/3" />
                            <Skeleton className="h-4 w-1/4" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : products?.length === 0 ? (
                  <div className="text-center py-10 sm:py-16">
                    <div className="mb-3 sm:mb-4 text-beige/40">
                      <Search size={36} className="mx-auto" />
                    </div>
                    <h3 className="heading-md mb-2">No Products Found</h3>
                    <p className="text-beige/70 mb-4 sm:mb-6 text-sm sm:text-base">
                      We couldn't find any products matching your criteria.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory("all");
                        setSelectedMaterial("all");
                        setSelectedOccasion("all");
                        setSearchQuery("");
                      }}
                      className="button-outline text-sm sm:text-base py-2 px-4"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
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
        
        {/* Product Lightbox */}
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
