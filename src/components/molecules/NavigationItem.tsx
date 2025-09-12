import React from 'react';

interface NavigationItemProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: 'light' | 'dark';
}

const NavigationItem: React.FC<NavigationItemProps> = ({ 
  children, 
  href, 
  className, 
  variant = 'dark' 
}) => {
  return (
    <a
      href={href}
      className={`
        px-4 py-2 font-medium transition-all duration-300 relative
        ${variant === 'light' 
          ? 'text-white hover:text-accent' 
          : 'text-primary hover:text-accent'
        }
        hover:scale-105
        after:content-[''] after:absolute after:w-0 after:h-0.5 
        after:bg-accent after:left-1/2 after:bottom-0 
        after:transition-all after:duration-300
        hover:after:w-full hover:after:left-0
        ${className}
      `}
    >
      {children}
    </a>
  );
};

export default NavigationItem;