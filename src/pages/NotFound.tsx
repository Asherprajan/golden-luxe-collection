
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-coffee p-6">
      <div className="glass-card p-10 max-w-md w-full text-center animate-scale-in">
        <div className="w-24 h-24 bg-coffee-light/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/30">
          <span className="text-gold text-5xl font-playfair font-bold">404</span>
        </div>
        <h1 className="heading-lg mb-4 text-gold">Page Not Found</h1>
        <p className="text-beige/70 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="button-primary flex items-center justify-center gap-2 mx-auto w-full max-w-xs">
          <ArrowLeft size={16} /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
