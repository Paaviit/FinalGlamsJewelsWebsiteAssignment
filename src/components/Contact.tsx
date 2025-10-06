import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="font-inter text-lg text-muted-foreground">
            Have a question or want to create something special? We'd love to hear from you
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 animate-fade-in-up">
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-inter font-medium text-foreground">Email</p>
                    <p className="font-inter text-muted-foreground">rushalikhera@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-inter font-medium text-foreground">Phone</p>
                    <p className="font-inter text-muted-foreground">+91 9999004726</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-inter font-medium text-foreground">Studio</p>
                    <p className="font-inter text-muted-foreground">
                      Civil Lines, Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-luxury p-6 rounded-lg border border-border">
              <h4 className="font-playfair text-xl font-semibold text-foreground mb-2">
                Custom Orders Welcome
              </h4>
              <p className="font-inter text-muted-foreground">
                Looking for something unique? We specialize in creating custom pieces tailored to your vision. 
                Let's bring your dream jewelry to life.
              </p>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-inter font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="font-inter border-border focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-inter font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="font-inter border-border focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-inter font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="font-inter border-border focus:border-primary min-h-[150px]"
                  placeholder="Tell us about your inquiry or custom order..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full font-inter bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
