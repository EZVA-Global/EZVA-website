import React from 'react';
import { Card } from '@/components/ui/card';
import { Target, TrendingUp, Megaphone, BarChart3 } from 'lucide-react';

const DigitalMarketingInfo: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: "Targeted Campaigns",
      description: "Reach your ideal customers with precision-targeted marketing campaigns that drive engagement and conversions."
    },
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and increase organic traffic with our comprehensive SEO strategies."
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience across all major social media platforms."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Track your marketing performance with detailed analytics and actionable insights for continuous improvement."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose Our Digital Marketing Support?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive digital marketing services are designed to help your business grow and succeed in today's competitive online landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="p-8 text-center shadow-soft border-0 bg-white hover:shadow-elegant transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingInfo;