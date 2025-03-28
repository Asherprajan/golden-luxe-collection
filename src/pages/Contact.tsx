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
                2VX5+PCM, Parappanangadi<br />
                Kerala 676303
              </p>
            </div>
            
            <div className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-full bg-coffee-light flex items-center justify-center mx-auto mb-4">
                <Phone className="text-gold w-6 h-6" />
              </div>
              <h3 className="heading-sm mb-3">Call Us</h3>
              <p className="text-beige/70">
                +91 9946553206<br />
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
                Monday, Wednesday - Friday: 9:30 AM - 7:00 PM<br />
                Tuesday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:30 AM - 7:00 PM<br />
                Sunday: Closed
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
            <div className="h-96 w-full rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.857182720278!2d75.85855230000001!3d11.049332599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba652ff29b71c83%3A0x2d36dbab75d05a90!2sSwarnalaya%20Jewellery!5e0!3m2!1sen!2sin!4v1743189478135!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
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
                question: "Do you offer traditional Kerala gold designs?",
                answer: "Yes, we specialize in authentic Kerala gold designs including traditional Palakka Mala, Manga Mala, Kasumalai, and other heritage patterns that reflect Kerala's rich cultural heritage. Our artisans are trained in traditional craftsmanship techniques."
              },
              {
                question: "What is the significance of Kerala's gold jewelry traditions?",
                answer: "Kerala's gold jewelry holds deep cultural significance, often passed down through generations. Traditional designs like Thali (marriage pendant), Mulla Mottu (jasmine bud), and Minnu are integral to Kerala weddings and cultural ceremonies."
              },
              {
                question: "Do you offer BIS hallmarked gold jewelry?",
                answer: "All our gold jewelry comes with BIS Hallmark certification, guaranteeing the purity of gold as mentioned. Kerala is known for its preference for 22K gold, and we maintain strict quality standards in line with this tradition."
              },
              {
                question: "Can you create custom designs based on traditional Kerala motifs?",
                answer: "Absolutely! We offer custom design services where our skilled artisans can create bespoke pieces incorporating traditional Kerala motifs with contemporary elements to suit your preferences."
              },
              {
                question: "Do you offer gold exchange programs common in Kerala?",
                answer: "Yes, we offer gold exchange programs where you can trade in your old gold jewelry for new pieces. We provide fair market rates based on current gold prices and deduct only minimal making charges as per Kerala jewelry market standards."
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
