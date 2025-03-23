
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import CategoryManager from "@/components/admin/CategoryManager";
import ProductManager from "@/components/admin/ProductManager";

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate("/admin/login");
  };

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-coffee">Admin Dashboard</h1>
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="text-beige/80 border-beige/30 hover:bg-beige/10"
        >
          Logout
        </Button>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="bg-white p-6 rounded-lg shadow-md">
          <ProductManager />
        </TabsContent>
        
        <TabsContent value="categories" className="bg-white p-6 rounded-lg shadow-md">
          <CategoryManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
