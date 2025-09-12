import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import workWithUsImage from '@/assets/virtual-assistant.jpg';

const ServicesCTA: React.FC = () => {
  const benefits = [
    "Administrative support",
    "Digital marketing expertise", 
    "Real estate assistance",
    "Development solutions"
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-hover border border-border/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left side - Text content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Ready to Elevate Your{' '}
                  <span className="text-accent">Business</span>?
                </h2>
                
                <h3 className="text-xl font-semibold text-primary">
                  Let EZVA Global help you scale with expert virtual assistance.
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team is ready to support your administrative, digital marketing, real estate, and development needs. Book a free consultation and discover how we can make your operations smoother and more efficient.
                </p>
                
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  size="lg" 
                  variant="cta"
                  className="w-full lg:w-auto text-lg px-12 py-6 font-bold shadow-soft hover:shadow-hover transform hover:scale-105 transition-all duration-300"
                >
                  BOOK A FREE CONSULTATION
                </Button>
              </div>
              
              {/* Right side - Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src={workWithUsImage} 
                    alt="Professional team collaboration" 
                    className="w-full max-w-lg h-80 object-cover rounded-2xl shadow-hover"
                  />
                  <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl"></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;