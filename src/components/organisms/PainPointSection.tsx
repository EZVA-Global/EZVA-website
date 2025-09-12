import React from 'react';
import { Button } from '@/components/ui/button';

const PainPointSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-hover border border-border/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Question and description */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  What's your biggest{' '}
                  <span className="text-accent">pain point</span>?
                </h2>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  EZVA adapts to your needs - whether it's project-based work, 
                  part-time support, or full-time dedicated teams. We scale with your business.
                </p>
              </div>
              
              {/* Right side - CTA Button */}
              <div className="flex justify-center lg:justify-end">
                <Button 
                  size="lg" 
                  className="w-full lg:w-auto text-lg px-12 py-6 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-bold shadow-soft hover:shadow-hover transform hover:scale-105 transition-all duration-300 rounded-xl"
                >
                  Let's Solve It Together
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;