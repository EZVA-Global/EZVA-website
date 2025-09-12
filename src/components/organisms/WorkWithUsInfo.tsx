import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Lightbulb, TrendingUp, Heart } from 'lucide-react';

const WorkWithUsInfo: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work alongside industry experts and learn from the best in the business while building lasting professional relationships."
    },
    {
      icon: Lightbulb,
      title: "Cutting-Edge Projects",
      description: "Shape the future of business with innovative solutions and technologies that make a real impact in the market."
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Advance your career with mentorship, training, and leadership opportunities in a fast-growing company."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Enjoy flexible working arrangements and a supportive culture that values your personal and professional well-being."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Join Our Team?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At EZVA Global, we believe that our people are our greatest asset. Join a team that values innovation, collaboration, and personal growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-8 text-center shadow-soft border-0 bg-white hover:shadow-elegant transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
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

export default WorkWithUsInfo;