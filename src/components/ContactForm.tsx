
import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

interface ContactFormProps {
  minimal?: boolean;
}

const ContactForm = ({ minimal = false }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section className={minimal ? '' : 'section-padding'}>
      {!minimal && (
        <>
          <span className="section-subtitle animate-fade-in">Get In Touch</span>
          <h2 className="section-title animate-fade-in">Contact Us</h2>
        </>
      )}
      
      <div className={`container mx-auto ${minimal ? '' : 'mt-12'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {!minimal && (
            <div className="animate-fade-in">
              <div className="glass-card p-8 h-full">
                <h3 className="heading-md mb-6 text-gold">Visit Our Showroom</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-beige mb-1">Our Address</h4>
                      <p className="text-beige/70">
                        123 Jewelry Lane, Goldsmith Plaza<br />
                        Bangalore, Karnataka 560001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-beige mb-1">Call Us</h4>
                      <p className="text-beige/70">+91 98765 43210</p>
                      <p className="text-beige/70">+91 98765 43211</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-beige mb-1">Email Us</h4>
                      <p className="text-beige/70">info@swarnalaya.com</p>
                      <p className="text-beige/70">support@swarnalaya.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-beige mb-4">Business Hours</h4>
                  <div className="space-y-2 text-beige/70">
                    <div className="flex justify-between">
                      <span>Monday - Saturday</span>
                      <span>10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>11:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-beige mb-4">Our Location</h4>
                  <div className="rounded-lg overflow-hidden h-60 bg-coffee-light">
                    {/* Placeholder for Google Maps */}
                    <div className="w-full h-full flex items-center justify-center bg-coffee-light">
                      <p className="text-beige/50">Google Map will be embedded here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="animate-fade-in">
            <div className={`glass-card p-8 ${minimal ? 'h-auto' : 'h-full'}`}>
              <h3 className="heading-md mb-6 text-gold">Send Us a Message</h3>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                    <Send className="text-gold" />
                  </div>
                  <h4 className="heading-sm mb-2">Message Sent!</h4>
                  <p className="text-beige/70">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-beige">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-coffee-light border border-beige/20 rounded-md focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-beige"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-beige">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-coffee-light border border-beige/20 rounded-md focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-beige"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-beige">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 bg-coffee-light border border-beige/20 rounded-md focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-beige"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-beige">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 bg-coffee-light border border-beige/20 rounded-md focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-beige resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`button-primary w-full flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-coffee border-t-transparent rounded-full"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
