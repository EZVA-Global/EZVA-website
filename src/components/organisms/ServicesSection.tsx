import React from 'react';
import { UserStar, MessageCircleHeart, HousePlus, AtSign, Video, Code  } from 'lucide-react';
import ServiceCard from '@/components/molecules/ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <UserStar />,
      title: "General Virtual Assistance",
      description: "Get versatile support for day-to-day operations, including data management, appointment setting, personal assistance, and task tracking.",
      buttonText: "Delegate admin work NOW!"
    },
    {
      icon: <MessageCircleHeart />,
      title: "Social Media Management",
      description: "We help you turn social media into a powerful marketing tool by content creation, post scheduling, audience engagement, and more.",
      buttonText: "Boost your online presence NOW!"
    },
    {
      icon: <HousePlus />,
      title: "Real Estate Virtual Assistance",
      description: "Simplify your real estate operations with services like MLS listing updates, CRM management, lead generation, and scheduling showings.",
      buttonText: "Never miss a lead Again!"
    },
    {
      icon: <AtSign />,
      title: "Digital Marketing Support",
      description: "Boost your marketing efforts with services like email campaign management, PPC ad support, keyword research, SEO optimization, and analytics reporting.",
      buttonText: "See how we can help you grow!"
    },
    {
      icon: <Video />,
      title: "Video Editing",
      description: "Create impactful and professional videos that captivate your audience. From promotional content to polished final edits.",
      buttonText: "Transform your videos - Book a FREE demo"
    },
    {
      icon: <Code />,
      title: "Website Development",
      description: "Build modern, responsive, and user-friendly websites tailored to your needs to enhance your online presence. Let us build your dream website.",
      buttonText: "Start TODAY!"
    }
  ];

  return (
    <section className="relative -mt-32 z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;