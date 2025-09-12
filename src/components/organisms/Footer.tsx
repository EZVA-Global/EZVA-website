import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import Logo from '@/components/atoms/Logo';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: 'home' },
    { label: 'Services', href: 'services' },
    { label: 'About', href: 'about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: 'contact' },
  ];

  const socialLinks = [
    { icon: <Facebook size={24} />, href: 'https://www.facebook.com/people/EZVA/61568151145695/', label: 'Facebook' },
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/company/ez-va-global/', label: 'LinkedIn' },
    { icon: <Instagram size={24} />, href: 'https://www.instagram.com/ezvaglobal/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Logo variant="light" className="mb-6" />
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Empowering businesses with tailored virtual solutions, strategic expertise,
              and global support. Your success is our commitment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:universal@ezvaglobal.com" className="hover:text-accent transition-colors">
                  universal@ezvaglobal.com
                </a>
              </p>
              <p>
                <strong>Address:</strong><br />
                Lake Mary, Florida
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 EZVA Global. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;