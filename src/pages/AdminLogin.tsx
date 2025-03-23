
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple authentication for demo purposes
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        localStorage.setItem("adminAuthenticated", "true");
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard",
        });
        navigate("/admin");
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1E2E] p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800/30 rounded-lg border border-gray-700 shadow-xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gold">SwannaLaya Admin</h1>
          <p className="mt-2 text-gray-400">Sign in to access the dashboard</p>
        </div>
        
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-gray-300">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-gold focus:border-gold"
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-gray-300">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-gold focus:border-gold"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-gold hover:bg-gold-light text-coffee"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
          
          <div className="text-center text-sm text-gray-400 mt-4">
            <p>Demo credentials: admin / 1234</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
