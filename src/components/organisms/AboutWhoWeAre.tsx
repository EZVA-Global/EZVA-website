import React from 'react';

const AboutWhoWeAre: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Who We <span className="text-accent">Are</span>
          </h2>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-hover border border-border/50">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are more than just a Virtual Assistant Agency — We are a team of dedicated professionals committed to delivering high-quality, dependable support. Leverage over{' '}
              <span className="text-accent font-semibold">15 years of expertise</span>{' '}
              in connecting businesses with skilled virtual assistants worldwide. Whether you need support for specific projects, part-time assistance, or full-time help, our flexible solutions are designed to adapt to your unique requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;