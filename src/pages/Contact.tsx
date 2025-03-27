
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-coffee-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-subtitle animate-fade-in">Reach Out To Us</span>
            <h1 className="heading-xl mb-6 animate-fade-in">Contact Us</h1>
            <p className="paragraph mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
              We'd love to hear from you. Whether you have a question about our products, 
              services, or just want to say hello, our team is here to assist you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-coffee-light flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-gold w-6 h-6" />
              </div>
              <h3 className="heading-sm mb-3">Visit Us</h3>
              <p className="text-beige/70">
                123 Jewelry Lane, Goldsmith Plaza<br />
                Bangalore, Karnataka 560001
              </p>
            </div>
            
            <div className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-full bg-coffee-light flex items-center justify-center mx-auto mb-4">
                <Phone className="text-gold w-6 h-6" />
              </div>
              <h3 className="heading-sm mb-3">Call Us</h3>
              <p className="text-beige/70">
                +91 98765 43210<br />
                +91 98765 43211
              </p>
            </div>
            
            <div className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-14 h-14 rounded-full bg-coffee-light flex items-center justify-center mx-auto mb-4">
                <Mail className="text-gold w-6 h-6" />
              </div>
              <h3 className="heading-sm mb-3">Email Us</h3>
              <p className="text-beige/70">
                info@swarnalaya.com<br />
                support@swarnalaya.com
              </p>
            </div>
            
            <div className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="w-14 h-14 rounded-full bg-coffee-light flex items-center justify-center mx-auto mb-4">
                <Clock className="text-gold w-6 h-6" />
              </div>
              <h3 className="heading-sm mb-3">Business Hours</h3>
              <p className="text-beige/70">
                Monday - Saturday: 10:00 AM - 8:00 PM<br />
                Sunday: 11:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <ContactForm />
      
      {/* Google Map */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass-card p-6 animate-fade-in">
            <h2 className="heading-md text-center mb-6">Find Us on Map</h2>
            <div className="h-96 w-full bg-coffee-light rounded-lg overflow-hidden">
              {/* Placeholder for Google Map */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-beige/50">Google Map will be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-coffee-light">
        <div className="container mx-auto">
          <span className="section-subtitle animate-fade-in">Questions? We've Got Answers</span>
          <h2 className="section-title animate-fade-in">Frequently Asked Questions</h2>
          
          <div className="mt-12 max-w-3xl mx-auto">
            {[
              {
                question: "Do you offer international shipping?",
                answer: "Yes, we offer secure international shipping for our pieces. Shipping costs and delivery times vary based on location. Please contact our customer service for specific details about shipping to your country."
              },
              {
                question: "What is your return policy?",
                answer: "We offer a 15-day return policy for all our ready-made jewelry. Custom-designed pieces, however, are non-returnable. All returns must be in their original condition with tags and certificates."
              },
              {
                question: "How do I know the gold purity?",
                answer: "All our gold jewelry comes with BIS Hallmark certification, guaranteeing the purity of gold as mentioned. You can verify the hallmark details through the official BIS website or app."
              },
              {
                question: "Do you provide jewelry insurance?",
                answer: "While we don't provide insurance directly, we offer detailed appraisal certificates that you can use to insure your jewelry through your preferred insurance provider."
              },
              {
                question: "Can I track my order?",
                answer: "Yes, once your order is shipped, you will receive a tracking number via email or SMS that allows you to monitor your package's journey until it reaches you."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="mb-6 glass-card p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="heading-sm mb-3 text-gold">{faq.question}</h3>
                <p className="text-beige/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
     
    </div>
  );
};

export default Contact;
