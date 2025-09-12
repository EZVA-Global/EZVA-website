import React from 'react';
import { Quote } from 'lucide-react';

const AboutTestimonial: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Client <span className="text-accent">Testimonial</span>
          </h2>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-hover border border-border/50">
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Testimonial Content - Placeholder */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
                "EZVA Global has been instrumental in helping us scale our business. Their team is professional, reliable, and truly understands our needs. We couldn&apos;t be happier with the results."
              </p>
              
              <div className="pt-6 border-t border-border/50">
                <p className="text-lg font-semibold text-foreground">Sarah Johnson</p>
                <p className="text-muted-foreground">CEO, TechStart Solutions</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonial;