const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-muted/30 border-t border-border">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
            Glams Jewels
          </h3>
          <p className="font-inter text-muted-foreground mb-6">
            Handcrafted Jewelry by Rushali Khera • Delhi, India
          </p>
          
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="#collection" 
              className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Collection
            </a>
            <a 
              href="#about" 
              className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
          
          <p className="font-inter text-sm text-muted-foreground">
            © {new Date().getFullYear()} Glams Jewels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
