import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, MessageCircle, Share2, Eye } from "lucide-react";

const VideoShowcase = () => {
  const videos = [
    {
      id: 1,
      title: "Traditional Ethiopian Coffee Ceremony",
      platform: "YouTube",
      views: "1.2M",
      likes: "45K",
      comments: "2.1K",
      thumbnail: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&h=300&fit=crop",
      duration: "8:45",
      category: "Culture"
    },
    {
      id: 2,
      title: "Modern Addis Ababa City Tour",
      platform: "TikTok",
      views: "3.5M",
      likes: "120K",
      comments: "5.2K",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
      duration: "0:59",
      category: "Travel"
    },
    {
      id: 3,
      title: "Ethiopian Traditional Dance",
      platform: "YouTube",
      views: "890K",
      likes: "32K",
      comments: "1.8K",
      thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
      duration: "6:20",
      category: "Dance"
    },
    {
      id: 4,
      title: "Injera Making Tutorial",
      platform: "TikTok",
      views: "2.1M",
      likes: "85K",
      comments: "3.4K",
      thumbnail: "https://images.unsplash.com/photo-1606142096297-ad8f51c04b44?w=500&h=300&fit=crop",
      duration: "1:30",
      category: "Food"
    },
    {
      id: 5,
      title: "Lalibela Churches Documentary",
      platform: "YouTube",
      views: "650K",
      likes: "28K",
      comments: "1.2K",
      thumbnail: "https://images.unsplash.com/photo-1571771019070-5e68c7faa6e2?w=500&h=300&fit=crop",
      duration: "12:15",
      category: "History"
    },
    {
      id: 6,
      title: "Ethiopian Street Food Challenge",
      platform: "TikTok",
      views: "4.2M",
      likes: "180K",
      comments: "7.1K",
      thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
      duration: "0:45",
      category: "Food"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-muted/50 ethiopian-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-base px-4 py-2">
            📺 Latest Content
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ethiopian-gradient">
            Video Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest videos showcasing Ethiopian culture, food, travel, and lifestyle content that has captivated millions of viewers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card 
              key={video.id} 
              className="group hover-lift card-gradient border-0 shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 smooth-transition"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      variant="hero" 
                      size="icon" 
                      className="h-16 w-16 rounded-full opacity-90 group-hover:opacity-100 group-hover:scale-110 smooth-transition"
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>

                  {/* Duration & Platform */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={video.platform === "YouTube" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {video.platform}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="outline" className="text-xs bg-black/50 text-white border-white/20">
                      {video.duration}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {video.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary smooth-transition">
                    {video.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{video.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{video.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button variant="ethiopian" size="lg" className="px-8">
            View All Videos
            <Play className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;