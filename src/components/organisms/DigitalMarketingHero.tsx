import React from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const DigitalMarketingHero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Digital Marketing</span>{' '}
          <span className="text-accent">Support</span>
        </h1>
        
        <p className="text-xl text-white md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Ready to elevate your marketing efforts? Fill out our comprehensive form to get personalized digital marketing support tailored to your business needs.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DigitalMarketingHero;