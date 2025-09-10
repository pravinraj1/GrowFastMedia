const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent mb-4">
              GrowFastMedia
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              AI-powered social media growth tools and exclusive subscription deals to accelerate your online success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-brand-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-primary transition-colors">
                YouTube
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 GrowFastMedia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;