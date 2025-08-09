import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoShowcase from "@/components/VideoShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VideoShowcase />
        <AboutSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-ethiopian-gradient">
              EthioSpark Hub
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Bridging Ethiopian culture with the world through authentic storytelling and engaging content.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>© 2024 Abebe Mengistu</span>
              <span>•</span>
              <span>Made with ❤️ in Ethiopia</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
