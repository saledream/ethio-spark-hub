import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Award, Coffee, Heart } from "lucide-react";
import influencerPortrait from "@/assets/influencer-portrait.jpg";

const AboutSection = () => {
  const achievements = [
    { icon: Users, label: "Followers", value: "2.5M+", color: "text-primary" },
    { icon: Award, label: "Creator Awards", value: "15", color: "text-secondary" },
    { icon: Coffee, label: "Coffee Reviews", value: "200+", color: "text-accent" },
    { icon: Heart, label: "Brand Partnerships", value: "50+", color: "text-primary" }
  ];

  const skills = [
    "Content Creation",
    "Cultural Storytelling", 
    "Video Editing",
    "Social Media Strategy",
    "Ethiopian Cuisine",
    "Travel Vlogging",
    "Traditional Dance",
    "Community Building"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-base px-4 py-2">
            👋 Get to Know Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ethiopian-gradient">
            About Abebe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate storyteller bridging Ethiopian heritage with modern digital content, inspiring millions to discover the beauty of our culture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Portrait */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={influencerPortrait} 
                  alt="Abebe Mengistu - Ethiopian Content Creator"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Addis Ababa, Ethiopia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Creating since 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6">
              Sharing Ethiopia's Story with the World
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                Born and raised in the heart of Addis Ababa, I've always been passionate about showcasing the rich cultural heritage of Ethiopia to a global audience. Through my content, I share the authentic beauty of our traditions, from the sacred coffee ceremony to the ancient wonders of Lalibela.
              </p>
              <p>
                My journey began in 2019 when I started documenting everyday Ethiopian life. Today, with over 2.5 million followers across platforms, I continue to be a cultural ambassador, breaking stereotypes and building bridges between Ethiopia and the world.
              </p>
              <p>
                Beyond entertainment, my mission is to educate, inspire, and preserve our cultural narratives for future generations while embracing modern storytelling techniques.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-3 py-1 hover-glow smooth-transition animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <Button variant="cultural" size="lg" className="px-8">
              Read Full Story
              <Heart className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.label} 
              className="text-center hover-lift card-gradient border-0 shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <achievement.icon className={`h-8 w-8 mx-auto mb-3 ${achievement.color}`} />
                <h4 className="text-2xl font-bold mb-1">{achievement.value}</h4>
                <p className="text-sm text-muted-foreground">{achievement.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;