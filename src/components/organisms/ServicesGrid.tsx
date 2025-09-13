import React from 'react';
import { FileText, Share2, Home, Megaphone, HelpCircle, Video, Code, TrendingUp } from 'lucide-react';
import ServiceCard from '@/components/molecules/ServiceCard';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: <FileText />,
      title: "Administrative Support",
      description: "Streamline your daily tasks with our reliable administrative services, including email management, calendar scheduling, data entry, and travel arrangements. Let us handle the details so you can focus on growth. Elevate your brand!",
      buttonText: "Learn More"
    },
    {
      icon: <Share2 />,
      title: "Social Media Management",
      description: "Boost your online presence with content creation, post scheduling, audience engagement, and performance analytics. We help you turn social media into a powerful marketing tool.",
      buttonText: "Get Started"
    },
    {
      icon: <Home />,
      title: "Real Estate Virtual Assistance",
      description: "Simplify your real estate operations with services like MLS listing updates, CRM management, lead generation, and scheduling showings. Focus on closing deals while we handle the rest.",
      buttonText: "Explore Solutions"
    },
    {
      icon: <Megaphone />,
      title: "Digital Marketing Support",
      description: "Boost your marketing efforts with services like email campaign management, pay-per-click (PPC) ad support, keyword research, SEO optimization, and analytics reporting. We help you attract and convert leads effectively.",
      buttonText: "Get Started",
      href: "/#digital-marketing"
    },
    {
      icon: <HelpCircle />,
      title: "General Virtual Assistance",
      description: "Get versatile support for day-to-day operations, including data management, appointment setting, personal assistance, task tracking, and administrative organization. A jack-of-all-trades to help you stay ahead.",
      buttonText: "Learn More"
    },
    {
      icon: <Video />,
      title: "Video Editing",
      description: "Create impactful and professional videos that captivate your audience. From engaging promotional content to polished final edits, we bring your vision to life with precision and creativity.",
      buttonText: "Explore Options"
    },
    {
      icon: <Code />,
      title: "Website Development",
      description: "Build modern, responsive, and user-friendly websites tailored to your needs. Designing and developing platforms that enhance your online presence and deliver a seamless user experience.",
      buttonText: "Get Started"
    },
    {
      icon: <TrendingUp />,
      title: "Consulting Services",
      description: "Get expert guidance to streamline operations and maximize efficiency. Our consulting services are designed to align with your business goals and help you grow strategically.",
      buttonText: "Learn More"
    }
  ];

  return (
    <section className="relative -mt-32 z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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

export default ServicesGrid;