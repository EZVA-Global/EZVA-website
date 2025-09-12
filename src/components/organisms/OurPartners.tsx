import React from 'react';
import { Card } from '@/components/ui/card';
import { Handshake, Globe, TrendingUp, Shield } from 'lucide-react';

const OurPartners: React.FC = () => {
  const partnershipBenefits = [
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "We build long-term relationships with technology providers and service integrators to expand our capabilities."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Our partner ecosystem spans across continents, enabling us to serve clients in diverse markets and time zones."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth", 
      description: "Through strategic alliances, we continuously enhance our service offerings and market reach."
    },
    {
      icon: Shield,
      title: "Trusted Relationships",
      description: "We maintain the highest standards of partnership, ensuring mutual success and client satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-accent">Partners</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              EZVA Global collaborates with industry-leading partners to deliver comprehensive solutions that exceed our clients' expectations. Together, we create value that drives business success.
            </p>
          </div>

          {/* Partnership Benefits */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {partnershipBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-8 shadow-soft border-0 bg-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Partnership CTA */}
          <Card className="p-12 shadow-elegant border-0 bg-gradient-subtle text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Interested in Partnering with Us?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for strategic partners who share our commitment to excellence and client success. Let's explore how we can work together to create mutual value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:partnerships@ezvaglobal.com"
                className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Contact Partnership Team
              </a>
              <a 
                href="/booking"
                className="inline-flex items-center px-8 py-3 bg-transparent text-primary font-semibold border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Schedule a Meeting
              </a>
            </div>
          </Card>
          
        </div>
      </div>
    </section>
  );
};

export default OurPartners;