
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import CategoryManager from "@/components/admin/CategoryManager";
import ProductManager from "@/components/admin/ProductManager";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel
} from "@/components/ui/sidebar";
import { LayoutDashboard, Tag, ShoppingBag, LogOut, Coins } from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("products");

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#1A1E2E] text-gray-100">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <Sidebar className="border-r border-gray-800">
            <SidebarHeader className="px-3 py-4">
              <h1 className="text-xl font-bold text-gold">SwannaLaya Admin</h1>
            </SidebarHeader>
            
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={activeTab === "overview"}
                      onClick={() => setActiveTab("overview")}
                    >
                      <LayoutDashboard className="h-5 w-5 mr-2" />
                      <span>Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={activeTab === "products"}
                      onClick={() => setActiveTab("products")}
                    >
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      <span>Products</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={activeTab === "categories"}
                      onClick={() => setActiveTab("categories")}
                    >
                      <Tag className="h-5 w-5 mr-2" />
                      <span>Categories</span>
                    </SidebarMenuButton>  
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={activeTab === "gold"}
                      onClick={() => setActiveTab("gold")}
                    >
                      <Coins className="h-5 w-5 mr-2" />
                      <span>Gold Rates</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter>
              <Button 
                variant="ghost" 
                onClick={handleLogout}
                className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </Button>
            </SidebarFooter>
          </Sidebar>
          
          <div className="flex-1 p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white">
                {activeTab === "overview" && "Dashboard Overview"}
                {activeTab === "products" && "Manage Products"}
                {activeTab === "categories" && "Manage Categories"}
              </h2>
              <p className="text-gray-400 mt-1">
                {activeTab === "overview" && "View store statistics and performance"}
                {activeTab === "products" && "Add, edit and remove products from your store"}
                {activeTab === "categories" && "Manage product categories for your store"}
              </p>
            </div>
            
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-medium text-gray-300">Total Products</h3>
                  <p className="text-3xl font-bold mt-2 text-white">12</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-medium text-gray-300">Categories</h3>
                  <p className="text-3xl font-bold mt-2 text-white">6</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-medium text-gray-300">Recent Updates</h3>
                  <p className="text-3xl font-bold mt-2 text-white">4</p>
                </div>
              </div>
            )}
            
            {activeTab === "products" && (
              <div className="bg-gray-800/30 rounded-lg border border-gray-700 p-6">
                <ProductManager />
              </div>
            )}
            
            {activeTab === "categories" && (
              <div className="bg-gray-800/30 rounded-lg border border-gray-700 p-6">
                <CategoryManager />
              </div>
            )}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Admin;
