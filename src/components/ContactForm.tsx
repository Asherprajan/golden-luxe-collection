import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
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
    <section className={minimal ? "" : "section-padding"}>
      {!minimal && (
        <>
          <span className="section-subtitle animate-fade-in">Get In Touch</span>
          <h2 className="section-title animate-fade-in">Contact Us</h2>
        </>
      )}

      <div className={`container mx-auto ${minimal ? "" : "mt-12"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {!minimal && (
            <div className="animate-fade-in">
              <div className="glass-card p-8 h-full">
                <h3 className="heading-md mb-6 text-gold">
                  Visit Our Showroom
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-beige mb-1">
                        Our Address
                      </h4>
                      <p className="text-beige/70">
                        2VX5+PCM, Parappanangadi
                        <br />
                        Kerala 676303
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-beige mb-1">Call Us</h4>
                      <p className="text-beige/70">+91 9876543210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-beige mb-1">
                        Email Us
                      </h4>
                      <p className="text-beige/70">info@swarnalaya.com</p>
                      <p className="text-beige/70">support@swarnalaya.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-beige mb-4">
                    Business Hours
                  </h4>
                  <div className="space-y-2 text-beige/70">
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
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="animate-fade-in">
            <div className={`glass-card p-8 ${minimal ? "h-auto" : "h-full"}`}>
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
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-beige">
                            Your Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-coffee-light border-beige/20 text-beige focus:border-gold focus:ring-gold"
                              placeholder="John Doe"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-beige">
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                className="bg-coffee-light border-beige/20 text-beige focus:border-gold focus:ring-gold"
                                placeholder="john@example.com"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-beige">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="tel"
                                className="bg-coffee-light border-beige/20 text-beige focus:border-gold focus:ring-gold"
                                placeholder="+91 98765 43210"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-beige">
                            Your Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="bg-coffee-light border-beige/20 text-beige focus:border-gold focus:ring-gold resize-none"
                              placeholder="How can we help you?"
                              rows={5}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`button-primary w-full flex items-center justify-center gap-2 ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
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
