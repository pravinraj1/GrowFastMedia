import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            GrowFastMedia
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/auth">
            <Button variant="ghost">Log In</Button>
          </Link>
          <Link to="/auth">
            <Button variant="brand">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;