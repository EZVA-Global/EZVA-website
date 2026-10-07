import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import ScrollIndicator from "@/components/molecules/ScrollIndicator";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Transform Your </span>
            <span className="text-accent">Business</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Eliminate your admin stress! — EZVA connects you with top-tier
            virtual assistants, giving you the freedom to focus on what matters
            most. No more overwhelm. Just seamless productivity
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => navigate("/booking")}
            >
              Get Started Today!
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => navigate("/services")}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
