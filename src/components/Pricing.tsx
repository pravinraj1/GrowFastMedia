import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Basic hashtag generator",
        "Limited YouTube tags",
        "Blog access",
        "Community support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "Best for content creators",
      features: [
        "Advanced hashtag generator",
        "YouTube SEO optimizer",
        "Content scheduler",
        "Canva Pro discount access",
        "Analytics dashboard",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$49.99",
      period: "per month",
      description: "For teams and agencies",
      features: [
        "Team accounts (up to 10 users)",
        "Unlimited analytics",
        "All subscription deals",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 priority support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your growth journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-2 ${
                plan.popular 
                  ? 'border-brand-primary shadow-brand bg-gradient-card' 
                  : 'border-border bg-gradient-card'
              } hover:shadow-card transition-all duration-300 hover:-translate-y-1`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "brand" : "outline"}
                  size="lg"
                >
                  {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;