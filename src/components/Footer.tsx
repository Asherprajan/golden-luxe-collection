import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-coffee/95 backdrop-blur-sm border-t border-beige/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="animate-fade-in">
            <h3 className="heading-sm text-gold mb-4">About Swarnalaya</h3>
            <p className="text-beige/80 mb-4">
              Established in 2004, Swarnalaya Gold & Diamonds is a trusted name in fine jewelry, 
              offering exquisite designs that blend traditional craftsmanship with modern elegance.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-beige/70 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-beige/70 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-beige/70 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-beige/70 hover:text-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="heading-sm text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-beige/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-beige/80 hover:text-gold transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-beige/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-beige/80 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-beige/80 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="heading-sm text-gold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 text-gold w-5 h-5 mt-1" />
                <div className="text-beige/80">
                  2VX5+PCM, Parappanangadi<br />
                  Kerala 676303
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold w-5 h-5" />
                <a href="tel:+919946553206" className="text-beige/80 hover:text-gold">
                  +91 9946553206
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold w-5 h-5" />
                <a href="mailto:info@swarnalaya.com" className="text-beige/80 hover:text-gold">
                  info@swarnalaya.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-gold w-5 h-5 mt-1" />
                <div className="text-beige/80">
                  Mon, Wed-Fri: 9:30 AM - 7:00 PM<br />
                  Tue: 8:00 AM - 6:00 PM<br />
                  Sat: 9:30 AM - 7:00 PM<br />
                  Sun: Closed
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h3 className="heading-sm text-gold mb-4">Newsletter</h3>
            <p className="text-beige/80 mb-4">
              Subscribe to our newsletter for exclusive offers, new collections, and jewelry care tips.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 bg-coffee-light border border-beige/20 rounded-lg focus:outline-none focus:border-gold text-beige"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold text-coffee rounded-lg hover:bg-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-beige/10 mt-8 pt-8 text-center text-beige/70">
          <p>
            &copy; {new Date().getFullYear()} Swarnalaya Gold & Diamonds. All rights reserved.
          </p>
          <p className="mt-1 text-sm">
            Designed with ❤️ in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
