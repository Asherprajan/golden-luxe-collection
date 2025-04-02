import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if the current route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Swarnalaya Gold & Diamonds" 
              className="h-10 sm:h-12"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-[#D4AF37] transition-colors ${
                isActive('/') ? 'text-[#D4AF37] font-medium' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/collections" 
              className={`text-gray-700 hover:text-[#D4AF37] transition-colors ${
                isActive('/collections') ? 'text-[#D4AF37] font-medium' : ''
              }`}
            >
              Collections
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-[#D4AF37] transition-colors ${
                isActive('/about') ? 'text-[#D4AF37] font-medium' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`text-gray-700 hover:text-[#D4AF37] transition-colors ${
                isActive('/services') ? 'text-[#D4AF37] font-medium' : ''
              }`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-[#D4AF37] transition-colors ${
                isActive('/contact') ? 'text-[#D4AF37] font-medium' : ''
              }`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
          
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-[#D4AF37]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`py-2 text-gray-700 hover:text-[#D4AF37] ${
                  isActive('/') ? 'text-[#D4AF37] font-medium' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/collections" 
                className={`py-2 text-gray-700 hover:text-[#D4AF37] ${
                  isActive('/collections') ? 'text-[#D4AF37] font-medium' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
              <Link 
                to="/about" 
                className={`py-2 text-gray-700 hover:text-[#D4AF37] ${
                  isActive('/about') ? 'text-[#D4AF37] font-medium' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`py-2 text-gray-700 hover:text-[#D4AF37] ${
                  isActive('/services') ? 'text-[#D4AF37] font-medium' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className={`py-2 text-gray-700 hover:text-[#D4AF37] ${
                  isActive('/contact') ? 'text-[#D4AF37] font-medium' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
