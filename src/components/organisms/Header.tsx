import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/atoms/Logo';
import NavigationItem from '@/components/molecules/NavigationItem';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', 
      href: 'mailto:universal@ezvaglobal.com?subject=Inquiry about EZVA Global Services&body=Hello EZVA Global,%0D%0A%0D%0AI am interested in learning more about your virtual assistant services. Could you please provide additional information about:%0D%0A%0D%0A- [Please specify services of interest]%0D%0A%0D%0AThank you for your time, looking forward to hearing from you.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]' 
    },
  ];

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-soft' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo variant={isScrolled ? 'dark' : 'light'} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.label}
                href={item.href}
                variant={isScrolled ? 'dark' : 'light'}
              >
                {item.label}
              </NavigationItem>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant={isScrolled ? 'cta' : 'outline-light'}
              size="lg"
              onClick={() => window.location.href = '/#booking'}
            >
              Schedule a Meeting
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-soft animate-fade-in">
            <nav className="flex flex-col p-4">
              {navigationItems.map((item) => (
                <NavigationItem
                  key={item.label}
                  href={item.href}
                  variant="dark"
                  className="py-3 border-b border-border last:border-b-0"
                >
                  {item.label}
                </NavigationItem>
              ))}
              <div className="pt-4">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.location.href = '/booking'}
                >
                  Schedule a Meeting
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;