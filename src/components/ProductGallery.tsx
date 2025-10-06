import ProductCard from "./ProductCard";
import ringGold from "@/assets/ring-gold.jpg";
import necklacePearl from "@/assets/necklace-pearl.jpg";
import braceletSilver from "@/assets/bracelet-silver.jpg";
import earringsGold from "@/assets/earrings-gold.jpg";
import ringGemstone from "@/assets/ring-gemstone.jpg";
import necklaceSilver from "@/assets/necklace-silver.jpg";

const products = [
  {
    name: "Eternal Elegance Ring",
    price: "₹20,500",
    image: ringGold,
    description: "A timeless 14k gold band with a delicate diamond accent"
  },
  {
    name: "Pearl Pendant Necklace",
    price: "₹26,800",
    image: necklacePearl,
    description: "Rose gold chain featuring a lustrous freshwater pearl"
  },
  {
    name: "Celestial Bracelet",
    price: "₹23,900",
    image: braceletSilver,
    description: "Sterling silver bracelet adorned with moonstone gems"
  },
  {
    name: "Golden Harmony Earrings",
    price: "₹16,300",
    image: earringsGold,
    description: "Delicate gold drops with cultured pearl accents"
  },
  {
    name: "Burgundy Dreams Ring",
    price: "₹31,400",
    image: ringGemstone,
    description: "Rose gold setting showcasing a natural garnet gemstone"
  },
  {
    name: "Whisper Necklace",
    price: "₹17,600",
    image: necklaceSilver,
    description: "Minimalist silver chain with an elegant charm pendant"
  }
];

const ProductGallery = () => {
  return (
    <section id="collection" className="py-24 px-6 bg-gradient-elegant">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Collection
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece is carefully handcrafted with attention to detail and designed to be treasured for a lifetime
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {products.map((product, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
