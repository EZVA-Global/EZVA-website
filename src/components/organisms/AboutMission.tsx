import React from 'react';
import { Target } from 'lucide-react';

const AboutMission: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-hover border border-border/50">
            <div className="text-center space-y-8">
              
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center">
                  <Target className="w-10 h-10 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Our <span className="text-accent">Mission</span>
              </h2>
              
              {/* Mission Statement */}
              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                  To help entrepreneurs, small businesses, and busy professionals achieve more by taking care of the tasks that matter most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;