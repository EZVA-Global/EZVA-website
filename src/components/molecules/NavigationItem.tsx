import React from "react";
import { Link } from "react-router-dom";

interface NavigationItemProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: "light" | "dark";
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  children,
  href,
  className,
  variant = "dark",
}) => {
  const isExternalLink = /^(https?:|mailto:|tel:)/i.test(href);
  const itemClassName = `
    px-4 py-2 font-medium transition-all duration-300 relative
    ${
      variant === "light"
        ? "text-white hover:text-accent"
        : "text-primary hover:text-accent"
    }
    hover:scale-105
    after:content-[''] after:absolute after:w-0 after:h-0.5 
    after:bg-accent after:left-1/2 after:bottom-0 
    after:transition-all after:duration-300
    hover:after:w-full hover:after:left-0
    ${className}
  `;

  if (isExternalLink || href.startsWith("#")) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={itemClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={itemClassName}>
      {children}
    </Link>
  );
};

export default NavigationItem;
