import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
}

const ProductCard = ({ name, price, image, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-500 bg-card">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
          <Button 
            size="sm"
            className="font-inter bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Inquire
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6 text-center">
        <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="font-inter text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        <p className="font-inter text-lg font-medium text-primary">
          {price}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
