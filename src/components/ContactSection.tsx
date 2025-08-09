import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Briefcase, 
  Star, 
  Clock,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    budget: "",
    timeline: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully! ✨",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      budget: "",
      timeline: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const collaborationTypes = [
    { title: "Brand Partnerships", description: "Product reviews, sponsored content, brand ambassadorships", price: "$2,000 - $5,000" },
    { title: "Cultural Consultancy", description: "Authentic Ethiopian cultural guidance for brands and media", price: "$1,000 - $3,000" },
    { title: "Event Appearances", description: "Speaking engagements, cultural events, conferences", price: "$3,000 - $8,000" },
    { title: "Content Creation", description: "Custom video content for your brand or campaign", price: "$1,500 - $4,000" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 ethiopian-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-base px-4 py-2">
            🤝 Let's Collaborate
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ethiopian-gradient">
            Work With Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to create authentic Ethiopian content that resonates with your audience? Let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            <Card className="card-gradient border-0 shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">abebe@ethiospark.com</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Response within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-secondary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+251 911 123 456</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Business inquiries only
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Available for global projects
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Rating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  5.0 from 50+ collaborations
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="card-gradient border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company/Brand</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="budget">Project Budget</Label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="$2,000 - $10,000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Brand collaboration, speaking engagement, etc."
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell me about your project, goals, and how we can work together..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                    <Send className="h-5 w-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Collaboration Types */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 animate-fade-in">
            Collaboration Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationTypes.map((type, index) => (
              <Card 
                key={type.title} 
                className="card-gradient border-0 shadow-lg hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {type.description}
                  </p>
                  <Badge variant="secondary" className="text-sm font-semibold">
                    {type.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-6">Why Brands Choose Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3 p-4 bg-primary/10 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span className="font-semibold">100% Authentic Content</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-secondary/10 rounded-lg">
              <Clock className="h-6 w-6 text-secondary" />
              <span className="font-semibold">On-Time Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-accent/10 rounded-lg">
              <Briefcase className="h-6 w-6 text-accent" />
              <span className="font-semibold">Professional Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;