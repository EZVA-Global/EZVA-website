import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MapPin } from 'lucide-react';
import teamImage from '@/assets/ezva-team.jpg';

const TeamMembers: React.FC = () => {
  const departments = [
    {
      name: "General Management",
      manager: {
        name: "Jessa Millanar-Marfa",
        country: "Philippines",
        image: "/placeholder.svg",
        initials: "JS"
      }
    },
    {
      name: "Accounting",
      manager: {
        name: "Nilmas Ortis",
        country: "Unites States",
        image: "/placeholder.svg",
        initials: "NO"
      }
    },
    {
      name: "Sales and Marketing",
      manager: {
        name: "Juniel Luzon",
        country: "Philippines",
        image: "/placeholder.svg",
        initials: "JL"
      }
    },
    {
      name: "Recruitment",
      manager: {
        name: "Axl Ramirez",
        country: "Philippines",
        image: "/placeholder.svg",
        initials: "AR"
      }
    },
    {
      name: "Software Development",
      manager: {
        name: "Carla Acevedo",
        country: "Ecuador",
        image: "/placeholder.svg",
        initials: "CA"
      }
    },
    {
      name: "Property Management & Real Estate",
      manager: {
        name: "Charmaine Jumao-as",
        country: "Philippines",
        image: "/placeholder.svg",
        initials: "CJ"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-accent">Department Managers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Meet the experienced managers who lead each department at EZVA Global, bringing expertise from around the world to deliver exceptional results.
            </p>
          </div>

          {/* Team Image */}
          <div className="mb-16">
            <img 
              src={teamImage} 
              alt="EZVA Global Team"
              className="w-full h-96 object-cover rounded-2xl shadow-elegant"
            />
          </div>

          {/* Department Managers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground text-center mb-6">
                  {dept.name}
                </h3>
                <Card className="p-8 text-center shadow-soft border-0 bg-white hover:shadow-elegant transition-all duration-300">
                  <div className="mb-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={dept.manager.image} alt={dept.manager.name} />
                      <AvatarFallback className="text-xl font-semibold bg-primary/10 text-primary">
                        {dept.manager.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    {dept.manager.name}
                  </h4>
                  
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">
                      {dept.manager.country}
                    </span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;