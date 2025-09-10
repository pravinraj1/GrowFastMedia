import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Hashtag Generator",
      description: "Generate trending hashtags for Instagram posts using advanced AI algorithms",
      icon: "🎯",
    },
    {
      title: "YouTube SEO Optimizer",
      description: "Optimize your video titles, descriptions, and tags for maximum visibility",
      icon: "📈",
    },
    {
      title: "Content Scheduler",
      description: "Plan and schedule your posts across multiple platforms effortlessly",
      icon: "📅",
    },
    {
      title: "Analytics Dashboard",
      description: "Track your growth with detailed insights and performance metrics",
      icon: "📊",
    },
    {
      title: "Subscription Marketplace",
      description: "Get exclusive discounts on Canva Pro, Netflix, Spotify, and more",
      icon: "💰",
    },
    {
      title: "Team Collaboration",
      description: "Work together with your team to manage multiple accounts",
      icon: "👥",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Everything You Need to Grow
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools and exclusive deals to accelerate your social media success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-card bg-gradient-card hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;