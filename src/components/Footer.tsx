
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-coffee-light/50 backdrop-blur-sm pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-playfair text-gold text-3xl font-bold">Swarnalaya</span>
            </Link>
            <p className="text-beige/70 mb-6">
              Exquisite gold and diamond jewelry crafted with precision and passion. 
              Where tradition meets contemporary design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-coffee flex items-center justify-center text-beige hover:bg-gold hover:text-coffee transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-coffee flex items-center justify-center text-beige hover:bg-gold hover:text-coffee transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-coffee flex items-center justify-center text-beige hover:bg-gold hover:text-coffee transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-coffee flex items-center justify-center text-beige hover:bg-gold hover:text-coffee transition-colors duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-beige/70 hover:text-gold transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/collections" className="text-beige/70 hover:text-gold transition-colors duration-300">Collections</Link>
              </li>
              <li>
                <Link to="/about" className="text-beige/70 hover:text-gold transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-beige/70 hover:text-gold transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-beige/70 hover:text-gold transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gold mb-6">Collections</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/collections?category=necklaces" className="text-beige/70 hover:text-gold transition-colors duration-300">Necklaces</Link>
              </li>
              <li>
                <Link to="/collections?category=rings" className="text-beige/70 hover:text-gold transition-colors duration-300">Rings</Link>
              </li>
              <li>
                <Link to="/collections?category=bangles" className="text-beige/70 hover:text-gold transition-colors duration-300">Bangles</Link>
              </li>
              <li>
                <Link to="/collections?category=earrings" className="text-beige/70 hover:text-gold transition-colors duration-300">Earrings</Link>
              </li>
              <li>
                <Link to="/collections?category=bridal" className="text-beige/70 hover:text-gold transition-colors duration-300">Bridal Sets</Link>
              </li>
              <li>
                <Link to="/collections?category=coins" className="text-beige/70 hover:text-gold transition-colors duration-300">Gold Coins</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-1" />
                <span className="text-beige/70">
                  123 Jewelry Lane, Goldsmith Plaza<br />
                  Bangalore, Karnataka 560001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span className="text-beige/70">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span className="text-beige/70">info@swarnalaya.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-beige/10 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-beige/60 text-sm mb-4 md:mb-0">
              © {currentYear} Swarnalaya Gold and Diamonds. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-beige/60">
              <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-colors duration-300">Return Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
