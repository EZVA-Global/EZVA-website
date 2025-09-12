import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import readyToScaleImage from '@/assets/ready-to-scale.jpg';

const ReadyToScaleSection: React.FC = () => {
  const benefits = [
    "Increase revenue",
    "Reduce operational costs",
    "Automate manual processes",
    "Scale your team efficiently",
    "Access exclusive partnerships and deals"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={readyToScaleImage} 
              alt="Ready to scale your business"
              className="w-full h-auto rounded-2xl shadow-soft"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to <span className="text-accent">Scale</span> Your Business?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our team of virtual assistants helps you streamline your operations, increase efficiency, 
              and stay ahead in your industry. From administrative support to digital marketing, we've got you covered.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="flex-1">
                START SCALING NOW
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Check reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToScaleSection;