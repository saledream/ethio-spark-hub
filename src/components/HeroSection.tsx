import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube, MessageCircle, Instagram, Play, Users, Award, Calendar } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="absolute inset-0 ethiopian-pattern"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 rounded-full bg-secondary/20 backdrop-blur-sm"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm"></div>
      </div>
      <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in">
          <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
            🇪🇹 Ethiopian Content Creator
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-ethiopian-gradient">Abebe</span>
            <br />
            <span className="text-white">Mengistu</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Sharing Ethiopian culture, traditions, and modern lifestyle with the world through engaging content on TikTok & YouTube
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="h-5 w-5 text-secondary" />
              <span className="font-semibold">2.5M+</span>
              <span className="text-white/80">Followers</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Play className="h-5 w-5 text-accent" />
              <span className="font-semibold">50M+</span>
              <span className="text-white/80">Views</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="font-semibold">15+</span>
              <span className="text-white/80">Awards</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
              Watch Latest Videos
              <Play className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg text-white border-white hover:bg-white hover:text-primary">
              Collaborate With Me
              <Calendar className="h-5 w-5 ml-2" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="ghost" size="icon" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white">
              <Youtube className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white">
              <MessageCircle className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white">
              <Instagram className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;