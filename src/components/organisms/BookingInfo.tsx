import React from 'react';
import { Card } from '@/components/ui/card';
import { Clock, Users, MessageCircle } from 'lucide-react';

const BookingInfo: React.FC = () => {
  const consultationDetails = [
    {
      icon: Clock,
      title: '30-Minute Session',
      description: 'Comprehensive discussion about your business needs and goals'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Meet with our experienced professionals who understand your industry'
    },
    {
      icon: MessageCircle,
      title: 'Personalized Solutions',
      description: 'Get customized recommendations tailored to your specific requirements'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What to Expect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your consultation is completely free with no obligations. We're here to understand your needs and show you how we can help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultationDetails.map((detail, index) => {
              const IconComponent = detail.icon;
              return (
                <Card key={index} className="p-8 text-center shadow-soft border-0 bg-white hover:shadow-elegant transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {detail.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {detail.description}
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

export default BookingInfo;