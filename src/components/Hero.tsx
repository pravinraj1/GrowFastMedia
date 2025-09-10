import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/20" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Grow Your Social Media
            <br />
            <span className="text-foreground">10x Faster</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            AI-powered tools for Instagram & YouTube growth, plus exclusive access to discounted premium subscriptions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="brand" className="text-lg px-8 py-6">
              Start Growing Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <img 
          src={heroImage} 
          alt="GrowFastMedia Dashboard Preview" 
          className="w-full h-auto rounded-t-2xl shadow-glow border border-border"
        />
      </div>
    </section>
  );
};

export default Hero;