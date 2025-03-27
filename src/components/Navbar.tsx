import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);
  
  return (
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-5 bg-blur bg-coffee/95">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-transform hover:scale-[1.02]"
        >
          <span className="font-playfair text-gold text-2xl md:text-3xl font-bold">Swarnalaya</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>
            Home
          </Link>
          <Link to="/collections" className={`nav-link ${isActive('/collections') ? 'nav-link-active' : ''}`}>
            Collections
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}>
            About Us
          </Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'nav-link-active' : ''}`}>
            Services
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}>
            Contact
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-beige" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-coffee-light/98 backdrop-blur-lg transition-all duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
          <Link to="/" className={`text-2xl ${isActive('/') ? 'text-gold' : 'text-beige'}`}>
            Home
          </Link>
          <Link to="/collections" className={`text-2xl ${isActive('/collections') ? 'text-gold' : 'text-beige'}`}>
            Collections
          </Link>
          <Link to="/about" className={`text-2xl ${isActive('/about') ? 'text-gold' : 'text-beige'}`}>
            About Us
          </Link>
          <Link to="/services" className={`text-2xl ${isActive('/services') ? 'text-gold' : 'text-beige'}`}>
            Services
          </Link>
          <Link to="/contact" className={`text-2xl ${isActive('/contact') ? 'text-gold' : 'text-beige'}`}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
