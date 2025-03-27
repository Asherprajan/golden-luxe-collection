import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product, Category } from "@/types/supabase";
import { supabase } from "@/integrations/supabase/client";
import { Pencil, Trash2, Plus, Search } from "lucide-react";

const ProductManager = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<Product>>({
    name: "",
    description: "",
    price: 0,
    image_url: "",
    category_id: "",
    material: "",
    occasion: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('name');

      if (error) throw error;
      setProducts(data || []);
    } catch (error: any) {
      toast({
        title: "Error fetching products",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error: any) {
      toast({
        title: "Error fetching categories",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Product deleted",
        description: "The product has been deleted successfully",
      });
      
      fetchProducts();
    } catch (error: any) {
      toast({
        title: "Error deleting product",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleEdit = (product: Product) => {
    setCurrentProduct({
      ...product,
      // Convert price from database to form display (rupees)
      price: product.price
    });
    setIsEditing(true);
    setDialogOpen(true);
  };

  const handleAdd = () => {
    setCurrentProduct({
      name: "",
      description: "",
      price: 0,
      image_url: "",
      category_id: categories.length > 0 ? categories[0].id : "",
      material: "",
      occasion: "",
    });
    setIsEditing(false);
    setDialogOpen(true);
  };

  const handleSubmit = async () => {
    try {
      // Validate required fields
      if (!currentProduct.name || !currentProduct.image_url || !currentProduct.category_id) {
        return toast({
          title: "Missing required fields",
          description: "Name, image URL, and category are required",
          variant: "destructive",
        });
      }

      // Ensure price is a number
      if (typeof currentProduct.price !== 'number' || isNaN(currentProduct.price) || currentProduct.price < 0) {
        return toast({
          title: "Invalid price",
          description: "Price must be a positive number",
          variant: "destructive",
        });
      }

      if (isEditing) {
        // Update existing product
        const { error } = await supabase
          .from('products')
          .update({
            name: currentProduct.name,
            description: currentProduct.description,
            price: currentProduct.price,
            image_url: currentProduct.image_url,
            category_id: currentProduct.category_id,
            material: currentProduct.material,
            occasion: currentProduct.occasion,
          })
          .eq('id', currentProduct.id);

        if (error) throw error;
        
        toast({
          title: "Product updated",
          description: "The product has been updated successfully",
        });
      } else {
        // Add new product
        const { error } = await supabase
          .from('products')
          .insert([{
            name: currentProduct.name,
            description: currentProduct.description,
            price: currentProduct.price,
            image_url: currentProduct.image_url,
            category_id: currentProduct.category_id,
            material: currentProduct.material,
            occasion: currentProduct.occasion,
          }]);

        if (error) throw error;
        
        toast({
          title: "Product added",
          description: "The new product has been added successfully",
        });
      }
      
      setDialogOpen(false);
      fetchProducts();
    } catch (error: any) {
      toast({
        title: "Error saving product",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (product.material && product.material.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (product.occasion && product.occasion.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Format price from database integer (paise) to display string (rupees)
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Find category name by ID
  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl font-semibold text-coffee">Products</h2>
        <div className="flex w-full sm:w-auto gap-3">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 w-full bg-gray-800 border-gray-700 text-white focus:ring-gold focus:border-gold"
            />
          </div>
          <Button 
            onClick={handleAdd}
            className="bg-gold hover:bg-gold/80 text-coffee whitespace-nowrap"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-8 text-gray-300">Loading products...</div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700">
                <TableHead className="text-gray-300">Name</TableHead>
                <TableHead className="text-gray-300">Price</TableHead>
                <TableHead className="text-gray-300">Category</TableHead>
                <TableHead className="text-gray-300">Material</TableHead>
                <TableHead className="text-gray-300">Occasion</TableHead>
                <TableHead className="text-gray-300 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.length === 0 ? (
                <TableRow className="border-gray-700">
                  <TableCell colSpan={6} className="text-center py-4 text-gray-300">
                    No products found
                  </TableCell>
                </TableRow>
              ) : (
                filteredProducts.map((product) => (
                  <TableRow key={product.id} className="border-gray-700">
                    <TableCell className="font-medium text-gray-200">{product.name}</TableCell>
                    <TableCell className="text-gray-300">{formatPrice(product.price)}</TableCell>
                    <TableCell className="text-gray-300">{getCategoryName(product.category_id)}</TableCell>
                    <TableCell className="text-gray-300">{product.material || '-'}</TableCell>
                    <TableCell className="text-gray-300">{product.occasion || '-'}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleEdit(product)}
                          className="text-blue-600 border-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleDelete(product.id)}
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Add/Edit Product Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">
              {isEditing ? "Edit Product" : "Add New Product"}
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name *</label>
                <Input
                  value={currentProduct.name}
                  onChange={(e) => setCurrentProduct({...currentProduct, name: e.target.value})}
                  placeholder="Product name"
                  className="bg-gray-800 border-gray-700 text-white focus:ring-gold focus:border-gold"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Price (₹) *</label>
                <Input
                  type="number"
                  value={currentProduct.price}
                  onChange={(e) => setCurrentProduct({...currentProduct, price: Number(e.target.value)})}
                  placeholder="Price in rupees"
                  className="bg-gray-800 border-gray-700 text-white focus:ring-gold focus:border-gold"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Description</label>
              <Textarea
                value={currentProduct.description || ""}
                onChange={(e) => setCurrentProduct({...currentProduct, description: e.target.value})}
                placeholder="Product description"
                rows={3}
                className="bg-gray-800 border-gray-700 text-white focus:ring-gold focus:border-gold"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Category *</label>
                <Select
                  value={currentProduct.category_id}
                  onValueChange={(value) => setCurrentProduct({...currentProduct, category_id: value})}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:ring-gold focus:border-gold">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    {categories.map((category) => (
                      <SelectItem 
                        key={category.id} 
                        value={category.id}
                        className="hover:bg-gray-700 focus:bg-gray-700"
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Image URL *</label>
                <Input
                  value={currentProduct.image_url}
                  onChange={(e) => setCurrentProduct({...currentProduct, image_url: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                  className="bg-gray-800 border-gray-700 text-white focus:ring-gold focus:border-gold"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Material</label>
                <Input
                  value={currentProduct.material || ""}
                  onChange={(e) => setCurrentProduct({...currentProduct, material: e.target.value})}
                  placeholder="Gold, Silver, Diamond, etc."
                  className="bg-gray-800 border-gray-700 text-white focus:ring-gold focus:border-gold"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Occasion</label>
                <Input
                  value={currentProduct.occasion || ""}
                  onChange={(e) => setCurrentProduct({...currentProduct, occasion: e.target.value})}
                  placeholder="Wedding, Party, Daily, etc."
                  className="bg-gray-800 border-gray-700 text-white focus:ring-gold focus:border-gold"
                />
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setDialogOpen(false)}
              className="text-white border-gray-700 hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit} 
              className="bg-gold hover:bg-gold/80 text-gray-900"
            >
              {isEditing ? "Update Product" : "Add Product"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductManager;
