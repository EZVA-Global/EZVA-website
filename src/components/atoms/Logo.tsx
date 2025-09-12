import React from 'react';
import logoDark from '../../assets/logo-small2-cut2-blue.png';
import logoLight from '../../assets/logo-small2-cut2.png';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className, variant = 'dark' }) => {
  const logoSrc = variant === 'light' ? logoLight : logoDark;
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="EZVA Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
};

export default Logo;