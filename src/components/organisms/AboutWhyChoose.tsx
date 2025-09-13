import React from 'react';
import { Users, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutWhyChoose: React.FC = () => {
  const features = [
    {
      icon: <Users />,
      title: "Experienced Professionals",
      description: "Our team consists of highly skilled virtual assistants with expertise in various industries."
    },
    {
      icon: <Clock />,
      title: "24/7 Availability", 
      description: "We provide round-the-clock support to cater to your business needs at any time."
    },
    {
      icon: <Heart />,
      title: "Client-Centric Approach",
      description: "We tailor our services to match the unique requirements of each client."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-accent">EZVA</span>?
            </h2>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-hover transform hover:scale-105 transition-all duration-300 group text-center"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white text-2xl">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Meet Our Team CTA */}
          <div className="text-center mt-12">
            <a href="/#our-team">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-12 py-6 font-bold shadow-soft hover:shadow-hover transform hover:scale-105 transition-all duration-300"
              >
                Meet Our Team
              </Button>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;