import React from 'react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const ServicesHero: React.FC = () => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
          <span className="text-white">Our</span>{' '}
          <span className="text-accent">Services</span>
        </h1>
        
        <p className="text-xl text-white md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          At EZVA Global, we provide high-quality virtual assistance solutions to help your business grow and thrive. Explore our core services below.
        </p>
        

      </div>
    </section>
  );
};

export default ServicesHero;