import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";

interface ContactFormProps {
  minimal?: boolean;
}

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^(\+91\s?)?[0-9]{10}$/, "Please enter a valid phone number"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = ({ minimal = false }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const formBody = new URLSearchParams();
      Object.entries(data).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxyJMOgjsQOsmuzWaW-KmLkYemejLo7Xq2Wiptc7AQTVpnZjruWfbuFpJSURPKw1rkU/exec",
        {
          method: "POST",
          body: formBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!!");
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went Wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went Wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[120px] opacity-60"></div>
      <div className="absolute -left-40 bottom-0 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/8 blur-[100px] opacity-70"></div>
      
      <div className="container mx-auto px-6 relative">
        {!minimal && (
          <div className="text-center mb-12">
            <div className="inline-block mb-3">
              <span className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm border-b border-[#D4AF37]/30 pb-1">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-800 mb-8 leading-tight font-bold">
              Contact <span className="text-[#D4AF37]">Us</span>
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {!minimal && (
            <div className="animate-fade-in">
              <div className="bg-white p-8 h-full shadow-lg rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Visit Our Showroom
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">
                        Our Address
                      </h4>
                      <p className="text-gray-600">
                        2VX5+PCM, Parappanangadi<br />
                        Kerala 676303
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Call Us</h4>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">
                        Email Us
                      </h4>
                      <p className="text-gray-600">info@swarnalaya.com</p>
                      <p className="text-gray-600">support@swarnalaya.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-700 mb-4">
                    Business Hours
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday</span>
                      <span>9:30 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tuesday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wednesday</span>
                      <span>9:30 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thursday</span>
                      <span>9:30 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span>9:30 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:30 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="animate-fade-in">
            <div className={`bg-white p-8 ${minimal ? "h-auto" : "h-full"} shadow-lg rounded-lg border border-gray-200`}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                    <Send className="text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">Message Sent!</h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <div className="flex items-center gap-2 text-[#D4AF37] hover:text-[#C09A2F] transition-all duration-300 mt-6 group cursor-pointer">
                    <span className="text-sm font-medium">Return to Home</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">
                            Your Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-white border-gray-200 text-gray-800 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                              placeholder="John Doe"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                className="bg-white border-gray-200 text-gray-800 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                                placeholder="john@example.com"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="tel"
                                className="bg-white border-gray-200 text-gray-800 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                                placeholder="+91 98765 43210"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">
                            Your Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="bg-white border-gray-200 text-gray-800 focus:border-[#D4AF37] focus:ring-[#D4AF37] resize-none"
                              placeholder="How can we help you?"
                              rows={5}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-[#D4AF37] hover:bg-[#C09A2F] text-white font-semibold py-3.5 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
