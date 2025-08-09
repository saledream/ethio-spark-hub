import { Button } from "@/components/ui/button";
import { Youtube, MessageCircle, Instagram, Facebook } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-ethiopian-gradient">
          EthioSpark
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary smooth-transition">
            Home
          </a>
          <a href="#videos" className="text-foreground hover:text-primary smooth-transition">
            Videos
          </a>
          <a href="#about" className="text-foreground hover:text-primary smooth-transition">
            About
          </a>
          <a href="#collaborations" className="text-foreground hover:text-primary smooth-transition">
            Collaborations
          </a>
          <a href="#contact" className="text-foreground hover:text-primary smooth-transition">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hover-glow">
            <Youtube className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover-glow">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover-glow">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="hero" className="hidden md:inline-flex">
            Collaborate
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;