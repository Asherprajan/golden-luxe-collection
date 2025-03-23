
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Category } from "@/types/supabase";
import { supabase } from "@/integrations/supabase/client";
import { Pencil, Trash2, Save, X, Plus } from "lucide-react";

const CategoryManager = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newCategory, setNewCategory] = useState({ name: "", slug: "" });
  const [editForm, setEditForm] = useState({ name: "", slug: "" });
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (category: Category) => {
    setEditingId(category.id);
    setEditForm({ name: category.name, slug: category.slug });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleSaveEdit = async (id: string) => {
    try {
      const { error } = await supabase
        .from('categories')
        .update({ name: editForm.name, slug: editForm.slug })
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Category updated",
        description: "The category has been updated successfully",
      });
      
      fetchCategories();
      setEditingId(null);
    } catch (error: any) {
      toast({
        title: "Error updating category",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      // Check if there are products using this category
      const { data: products, error: checkError } = await supabase
        .from('products')
        .select('id')
        .eq('category_id', id);
      
      if (checkError) throw checkError;
      
      if (products && products.length > 0) {
        return toast({
          title: "Cannot delete category",
          description: "This category has products assigned to it. Remove those products first.",
          variant: "destructive",
        });
      }

      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Category deleted",
        description: "The category has been deleted successfully",
      });
      
      fetchCategories();
    } catch (error: any) {
      toast({
        title: "Error deleting category",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleAddCategory = async () => {
    try {
      if (!newCategory.name || !newCategory.slug) {
        return toast({
          title: "Missing fields",
          description: "Name and slug are required",
          variant: "destructive",
        });
      }

      const { error } = await supabase
        .from('categories')
        .insert([
          { name: newCategory.name, slug: newCategory.slug }
        ]);

      if (error) throw error;
      
      toast({
        title: "Category added",
        description: "The new category has been added successfully",
      });
      
      setNewCategory({ name: "", slug: "" });
      setShowAddForm(false);
      fetchCategories();
    } catch (error: any) {
      toast({
        title: "Error adding category",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-coffee">Categories</h2>
        <Button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-gold hover:bg-gold/80 text-coffee"
        >
          <Plus className="mr-2 h-4 w-4" /> 
          {showAddForm ? "Cancel" : "Add Category"}
        </Button>
      </div>

      {showAddForm && (
        <div className="bg-beige/10 p-4 rounded-md mb-6">
          <h3 className="text-lg font-medium mb-4">Add New Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input
                value={newCategory.name}
                onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                placeholder="Category name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Slug</label>
              <Input
                value={newCategory.slug}
                onChange={(e) => setNewCategory({...newCategory, slug: e.target.value})}
                placeholder="category-slug"
              />
            </div>
          </div>
          <Button 
            onClick={handleAddCategory}
            className="bg-gold hover:bg-gold/80 text-coffee"
          >
            Add Category
          </Button>
        </div>
      )}

      {isLoading ? (
        <div className="text-center py-8">Loading categories...</div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-4">
                  No categories found
                </TableCell>
              </TableRow>
            ) : (
              categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>
                    {editingId === category.id ? (
                      <Input
                        value={editForm.name}
                        onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      />
                    ) : (
                      category.name
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === category.id ? (
                      <Input
                        value={editForm.slug}
                        onChange={(e) => setEditForm({...editForm, slug: e.target.value})}
                      />
                    ) : (
                      category.slug
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {editingId === category.id ? (
                      <div className="flex justify-end space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleSaveEdit(category.id)}
                          className="text-green-600 border-green-600 hover:bg-green-50"
                        >
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={handleCancelEdit}
                          className="text-gray-500 border-gray-500 hover:bg-gray-50"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex justify-end space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleEdit(category)}
                          className="text-blue-600 border-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleDelete(category.id)}
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default CategoryManager;
