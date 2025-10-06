const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Story
          </h2>
        </div>
        
        <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed animate-fade-in-up">
          <p>
            Glams Jewels was born from Rushali Khera's passion for creating jewelry that speaks to the soul. 
            Based in the vibrant city of Delhi, India, each piece is a labor of love, meticulously handcrafted 
            to capture moments of beauty and elegance.
          </p>
          
          <p>
            Our journey began in a small studio in Delhi, where traditional Indian craftsmanship meets 
            contemporary design. We believe that jewelry should be more than just an accessory—it should 
            tell your story, celebrate your milestones, and become a cherished heirloom passed down through generations.
          </p>
          
          <p>
            Working with ethically sourced materials and sustainable practices, we create pieces that are 
            as responsible as they are beautiful. Every gemstone is carefully selected, every metal 
            thoughtfully shaped, and every detail perfected to ensure that when you wear our jewelry, 
            you're wearing something truly special.
          </p>
          
          <div className="text-center pt-8">
            <p className="font-playfair text-2xl text-primary italic">
              "Crafted with love, designed for life"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
