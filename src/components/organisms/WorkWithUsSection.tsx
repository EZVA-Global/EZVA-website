import React from 'react';
import { Button } from '@/components/ui/button';
import workWithUsImage from '@/assets/VA-team.jpg';

const WorkWithUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Work <span className="text-accent">With Us</span> - Join the EZVA Team
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join a team of innovators, problem-solvers, and growth experts who are passionate 
              about transforming businesses and creating lasting impact in the market.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Collaborative Environment
                  </h3>
                  <p className="text-muted-foreground">
                    Work alongside industry experts and learn from the best in the business.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Cutting-Edge Projects
                  </h3>
                  <p className="text-muted-foreground">
                    Shape the future of business with innovative solutions and technologies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Growth Opportunities
                  </h3>
                  <p className="text-muted-foreground">
                    Advance your career with mentorship, training, and leadership opportunities.
                  </p>
                </div>
              </div>
            </div>
            
            <a href="/work-with-us">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Apply Now
              </Button>
            </a>
          </div>
          
          {/* Image */}
          <div>
            <img 
              src={workWithUsImage} 
              alt="Join our team"
              className="w-full h-auto rounded-2xl shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;