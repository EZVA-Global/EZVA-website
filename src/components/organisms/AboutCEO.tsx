import React from 'react';
import { Button } from '@/components/ui/button';
import ceoImage from '@/assets/CEO.png';

const AboutCEO: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src={ceoImage} 
                  alt="Torey Eisenman - CEO of EZVA Global" 
                  className="w-full max-w-md h-96 object-cover rounded-2xl shadow-hover"
                />
                <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl"></div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <span className="text-accent">Torey Eisenman</span>
                </h2>
                <h3 className="text-xl font-semibold text-primary mb-6">CEO</h3>
              </div>
              
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  "At EZVA Global, our mission has always been simple — to empower businesses by providing exceptional virtual support that drives real results. We take pride in the trust our clients place in us and the impact our team makes every day. Behind every task we handle is a commitment to excellence, professionalism, and helping our clients focus on what truly matters — growing their business."
                </p>
              </div>
              
              <Button 
                variant="outline" 
                size="lg"
                className="font-semibold"
                onClick={() => window.open('https://toreyeisenman.com/', '_blank')}
              >
                MORE ABOUT TOREY
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCEO;