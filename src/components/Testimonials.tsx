import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    text: "The most beautiful necklace I've ever owned. The craftsmanship is extraordinary, and I receive compliments every time I wear it.",
    rating: 5
  },
  {
    name: "Emily Chen",
    text: "I ordered a custom engagement ring and the result exceeded all my expectations. The attention to detail is remarkable.",
    rating: 5
  },
  {
    name: "Jessica Taylor",
    text: "These pieces are not just jewelry—they're wearable art. I've purchased several items and each one is perfect.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="font-inter text-lg text-muted-foreground">
            Hear from those who have experienced our craftsmanship
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-[var(--shadow-soft)] transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-inter text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-playfair font-semibold text-foreground">
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
