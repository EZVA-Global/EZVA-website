import React from 'react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  href?: string;
  onButtonClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  href,
  onButtonClick,
}) => {
  const handleClick = () => {
    if (href) {
      window.location.href = href;
    } else if (onButtonClick) {
      onButtonClick();
    }
  };
  return (
    <div className="bg-card border border-border rounded-xl p-8 shadow-soft hover:shadow-hover transform hover:scale-105 transition-all duration-300 group">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="text-white text-2xl">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      
      <Button 
        variant="outline" 
        className="w-full font-semibold"
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ServiceCard;