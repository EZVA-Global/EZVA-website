import React from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const BookingHero: React.FC = () => {
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
          <span className="text-white">Schedule Your</span>{' '}
          <span className="text-accent">Free Consultation</span>
        </h1>

        <p className="text-xl text-white md:text-2xl mb-2 max-w-3xl mx-auto leading-relaxed">
          Ready to transform your business operations? Book a complimentary 30-minute consultation with our team to discover how EZVA Global can help you achieve more.
        </p>

      </div>
    </section>
  );
};

export default BookingHero;