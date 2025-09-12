import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail } from 'lucide-react';
import ceoImage from '@/assets/CEO.png';

const ExecutiveTeam: React.FC = () => {
  const executives = [
    {
      name: "Torey Eisenman",
      position: "Chief Executive Officer",
      image: ceoImage,
      bio: "Torey leads EZVA Global with a vision to transform how businesses leverage virtual assistance. With over 10 years of experience in business development and team management, she has built EZVA into a trusted partner for companies worldwide.",
      linkedin: "https://www.linkedin.com/in/toreyeisenman",
      email: "torey@ezvaglobal.com",
      website: "https://toreyeisenman.com/"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Executive <span className="text-accent">Leadership</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the visionary leaders who guide EZVA Global's mission to deliver exceptional virtual assistance solutions.
            </p>
          </div>
          
          <div className="grid gap-12">
            {executives.map((executive, index) => (
              <Card key={index} className="p-8 shadow-elegant border-0 bg-card">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="relative mx-auto lg:mx-0 w-64 h-80">
                      <img 
                        src={executive.image} 
                        alt={executive.name}
                        className="w-full h-full object-cover rounded-2xl shadow-soft"
                      />
                      <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl"></div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {executive.name}
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-4">
                        {executive.position}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {executive.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      {executive.linkedin && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(executive.linkedin, '_blank')}
                          className="flex items-center gap-2"
                        >
                          <Linkedin size={16} />
                          LinkedIn
                        </Button>
                      )}
                      {executive.email && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(`mailto:${executive.email}`, '_blank')}
                          className="flex items-center gap-2"
                        >
                          <Mail size={16} />
                          Email
                        </Button>
                      )}
                      {executive.website && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(executive.website, '_blank')}
                        >
                          Learn More
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;