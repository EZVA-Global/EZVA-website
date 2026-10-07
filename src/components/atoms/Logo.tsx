import React from "react";
import { Link } from "react-router-dom";
import logoDark from "../../assets/logo-small2-cut2-blue.png";
import logoLight from "../../assets/logo-small2-cut2.png";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({ className, variant = "dark" }) => {
  const logoSrc = variant === "light" ? logoLight : logoDark;

  return (
    <Link
      to="/"
      aria-label="EZVA Global home"
      className={`flex items-center ${className}`}
    >
      <img src={logoSrc} alt="EZVA Logo" className="h-10 w-auto" />
    </Link>
  );
};

export default Logo;
