
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, X } from 'lucide-react';
import Footer from '@/components/Footer';

// Product data
const products = [
  // Necklaces
  {
    id: 1,
    name: "Radiant Lotus Necklace",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
    price: 78500,
    category: "necklaces",
    material: "gold",
    occasion: "wedding"
  },
  {
    id: 2,
    name: "Diamond Cascade Pendant",
    image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cb?w=600&auto=format&fit=crop&q=80",
    price: 95000,
    category: "necklaces",
    material: "diamond",
    occasion: "party"
  },
  {
    id: 3,
    name: "Pearl Elegance Choker",
    image: "https://images.unsplash.com/photo-1635767798638-3e7e6d3d2e9b?w=600&auto=format&fit=crop&q=80",
    price: 42000,
    category: "necklaces",
    material: "gold",
    occasion: "casual"
  },
  // Rings
  {
    id: 4,
    name: "Infinity Promise Ring",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80",
    price: 38500,
    category: "rings",
    material: "diamond",
    occasion: "engagement"
  },
  {
    id: 5,
    name: "Golden Bloom Solitaire",
    image: "https://images.unsplash.com/photo-1603561595341-765e5873836e?w=600&auto=format&fit=crop&q=80",
    price: 65000,
    category: "rings",
    material: "diamond",
    occasion: "wedding"
  },
  {
    id: 6,
    name: "Vintage Rose Gold Band",
    image: "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?w=600&auto=format&fit=crop&q=80",
    price: 27500,
    category: "rings",
    material: "gold",
    occasion: "anniversary"
  },
  // Bangles
  {
    id: 7,
    name: "Classic Gold Bangle Set",
    image: "https://images.unsplash.com/photo-1619119069939-8f29d5991570?w=600&auto=format&fit=crop&q=80",
    price: 125000,
    category: "bangles",
    material: "gold",
    occasion: "wedding"
  },
  {
    id: 8,
    name: "Diamond Accent Cuff",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80",
    price: 86000,
    category: "bangles",
    material: "diamond",
    occasion: "party"
  },
  {
    id: 9,
    name: "Twisted Gold Bangle",
    image: "https://images.unsplash.com/photo-1630019852942-7a3592372a2e?w=600&auto=format&fit=crop&q=80",
    price: 43500,
    category: "bangles",
    material: "gold",
    occasion: "casual"
  },
  // Earrings
  {
    id: 10,
    name: "Floral Diamond Studs",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&auto=format&fit=crop&q=80",
    price: 56000,
    category: "earrings",
    material: "diamond",
    occasion: "wedding"
  },
  {
    id: 11,
    name: "Chandelier Drops",
    image: "https://images.unsplash.com/photo-1635767798638-3e7e6d3d2e9b?w=600&auto=format&fit=crop&q=80",
    price: 72000,
    category: "earrings",
    material: "diamond",
    occasion: "party"
  },
  {
    id: 12,
    name: "Simple Gold Hoops",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&auto=format&fit=crop&q=80",
    price: 28000,
    category: "earrings",
    material: "gold",
    occasion: "casual"
  },
  // Bridal Sets
  {
    id: 13,
    name: "Royal Bridal Collection",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&auto=format&fit=crop&q=80",
    price: 350000,
    category: "bridal",
    material: "gold",
    occasion: "wedding"
  },
  {
    id: 14,
    name: "Diamond Bridal Set",
    image: "https://images.unsplash.com/photo-1620783770629-122b7f187703?w=600&auto=format&fit=crop&q=80",
    price: 485000,
    category: "bridal",
    material: "diamond",
    occasion: "wedding"
  },
  {
    id: 15,
    name: "Traditional Bridal Jewelry",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&auto=format&fit=crop&q=80",
    price: 275000,
    category: "bridal",
    material: "gold",
    occasion: "wedding"
  },
  // Coins
  {
    id: 16,
    name: "1g Gold Coin",
    image: "https://images.unsplash.com/photo-1610375461249-f3288718c5e3?w=600&auto=format&fit=crop&q=80",
    price: 6500,
    category: "coins",
    material: "gold",
    occasion: "investment"
  },
  {
    id: 17,
    name: "5g Gold Coin",
    image: "https://images.unsplash.com/photo-1624365169198-2d4650ea9862?w=600&auto=format&fit=crop&q=80",
    price: 32000,
    category: "coins",
    material: "gold",
    occasion: "investment"
  },
  {
    id: 18,
    name: "10g Lakshmi Gold Coin",
    image: "https://images.unsplash.com/photo-1610375461249-f3288718c5e3?w=600&auto=format&fit=crop&q=80",
    price: 64500,
    category: "coins",
    material: "gold",
    occasion: "investment"
  },
];

// Filter categories
const categories = [
  { value: "all", label: "All Categories" },
  { value: "necklaces", label: "Necklaces" },
  { value: "rings", label: "Rings" },
  { value: "bangles", label: "Bangles" },
  { value: "earrings", label: "Earrings" },
  { value: "bridal", label: "Bridal Sets" },
  { value: "coins", label: "Gold Coins" },
];

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
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  
  // Initialize filters from URL
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);
  
  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by material
    if (selectedMaterial !== "all") {
      result = result.filter(product => product.material === selectedMaterial);
    }
    
    // Filter by occasion
    if (selectedOccasion !== "all") {
      result = result.filter(product => product.occasion === selectedOccasion);
    }
    
    // Filter by search
    if (searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, selectedMaterial, selectedOccasion, searchQuery]);
  
  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-coffee-light py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle animate-fade-in">Our Products</span>
            <h1 className="heading-xl mb-6 animate-fade-in">Jewelry Collections</h1>
            <p className="paragraph mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
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
                className="w-full py-3 px-5 pl-12 bg-coffee border border-beige/20 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-beige"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-beige/60" size={18} />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-beige/60 hover:text-gold"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <button
                className="flex items-center gap-2 px-4 py-2 border border-beige/20 rounded-lg text-beige hover:border-gold"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                {showFilters ? "Hide Filters" : "Show Filters"} 
              </button>
            </div>
            
            {/* Filters Sidebar */}
            <div 
              className={`lg:w-64 flex-shrink-0 ${
                showFilters ? 'block' : 'hidden lg:block'
              }`}
            >
              <div className="glass-card p-6 sticky top-24">
                <h3 className="heading-sm mb-6 text-gold">Filters</h3>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-beige">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category.value}
                          onChange={() => setSelectedCategory(category.value)}
                          className="form-radio text-gold"
                        />
                        <span className="text-beige/80">{category.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Material Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-beige">Material</h4>
                  <div className="space-y-2">
                    {materials.map((material) => (
                      <label key={material.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="material"
                          checked={selectedMaterial === material.value}
                          onChange={() => setSelectedMaterial(material.value)}
                          className="form-radio text-gold"
                        />
                        <span className="text-beige/80">{material.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Occasion Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-beige">Occasion</h4>
                  <div className="space-y-2">
                    {occasions.map((occasion) => (
                      <label key={occasion.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="occasion"
                          checked={selectedOccasion === occasion.value}
                          onChange={() => setSelectedOccasion(occasion.value)}
                          className="form-radio text-gold"
                        />
                        <span className="text-beige/80">{occasion.label}</span>
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
                  className="w-full py-2 px-4 border border-gold text-gold rounded-md hover:bg-gold hover:text-coffee transition-colors duration-300"
                >
                  Reset Filters
                </button>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold text-beige">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-beige/70">Sort by:</span>
                  <select className="bg-coffee-light border border-beige/20 rounded-md py-1.5 px-3 text-beige focus:outline-none focus:border-gold">
                    <option>Latest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
              
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="mb-4 text-beige/40">
                    <Search size={48} className="mx-auto" />
                  </div>
                  <h3 className="heading-md mb-2">No Products Found</h3>
                  <p className="text-beige/70 mb-6">
                    We couldn't find any products matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedMaterial("all");
                      setSelectedOccasion("all");
                      setSearchQuery("");
                    }}
                    className="button-outline"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div 
                      key={product.id} 
                      className="glass-card overflow-hidden rounded-lg card-hover animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => setSelectedProduct(product.id)}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg text-beige mb-2">{product.name}</h3>
                        <div className="flex justify-between items-center">
                          <span className="text-gold font-medium">{formatPrice(product.price)}</span>
                          <button className="text-xs px-3 py-1 bg-coffee rounded-full text-beige/70">
                            {product.category}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Lightbox */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-slow">
          <div className="relative max-w-4xl w-full bg-coffee rounded-lg overflow-hidden animate-scale-in">
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-gold hover:text-coffee"
              onClick={() => setSelectedProduct(null)}
            >
              <X size={20} />
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src={products.find(p => p.id === selectedProduct)?.image} 
                  alt={products.find(p => p.id === selectedProduct)?.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="heading-md text-gold mb-2">
                  {products.find(p => p.id === selectedProduct)?.name}
                </h3>
                <p className="text-2xl font-semibold text-beige mb-4">
                  {formatPrice(products.find(p => p.id === selectedProduct)?.price || 0)}
                </p>
                
                <div className="space-y-4 mb-6">
                  <p className="text-beige/80">
                    This exquisite piece showcases the finest craftsmanship and attention to detail that Swarnalaya is known for. 
                    Perfect for special occasions and daily wear alike.
                  </p>
                  
                  <div className="flex gap-2">
                    <span className="text-gold">Category:</span>
                    <span className="text-beige/80">
                      {categories.find(c => c.value === products.find(p => p.id === selectedProduct)?.category)?.label}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <span className="text-gold">Material:</span>
                    <span className="text-beige/80">
                      {materials.find(m => m.value === products.find(p => p.id === selectedProduct)?.material)?.label}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <span className="text-gold">Occasion:</span>
                    <span className="text-beige/80">
                      {occasions.find(o => o.value === products.find(p => p.id === selectedProduct)?.occasion)?.label}
                    </span>
                  </div>
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
      )}
      
      <Footer />
    </div>
  );
};

export default Collections;
