import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us - Swarnalaya Gold & Diamonds"
        description="Get in touch with Swarnalaya Gold & Diamonds. Visit our store or contact us for inquiries and appointments."
        image="https://swarnalaya.com/og-contact.jpg"
      />
      <div className="min-h-screen pt-20 bg-white">
        {/* Hero Section - Light Theme */}
        <section className="py-16 md:py-24 bg-[#F8F7F4]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider animate-fade-in">Reach Out To Us</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">Contact Us</h1>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
                We'd love to hear from you. Whether you have a question about our products, 
                services, or just want to say hello, our team is here to assist you.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Cards - Light Theme */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 text-center rounded-lg shadow-sm border border-gray-200 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-[#D4AF37] w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Visit Us</h3>
                <p className="text-gray-600">
                  2VX5+PCM, Parappanangadi<br />
                  Kerala 676303
                </p>
              </div>
              
              <div className="bg-white p-6 text-center rounded-lg shadow-sm border border-gray-200 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-[#D4AF37] w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Call Us</h3>
                <p className="text-gray-600">
                  +91 9946553206<br />
                </p>
              </div>
              
              <div className="bg-white p-6 text-center rounded-lg shadow-sm border border-gray-200 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-[#D4AF37] w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Email Us</h3>
                <p className="text-gray-600">
                  info@swarnalaya.com<br />
                  support@swarnalaya.com
                </p>
              </div>
              
              <div className="bg-white p-6 text-center rounded-lg shadow-sm border border-gray-200 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-[#D4AF37] w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Business Hours</h3>
                <p className="text-gray-600">
                  Monday, Wednesday - Friday: 9:30 AM - 7:00 PM<br />
                  Tuesday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:30 AM - 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form - Already updated in previous sections */}
        <ContactForm />
        
        {/* Google Map - Light Theme */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Find Us on Map</h2>
              <div className="h-96 w-full rounded-lg overflow-hidden border border-gray-100">
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
        
        {/* FAQ Section - Light Theme */}
        <section className="py-16 sm:py-20 md:py-24 bg-[#F8F7F4]">
          <div className="container mx-auto px-6">
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider animate-fade-in">Questions? We've Got Answers</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 animate-fade-in">Frequently Asked Questions</h2>
            
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
                  className="mb-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
