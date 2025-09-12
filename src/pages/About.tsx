import React from 'react';
import MainLayout from '@/components/templates/MainLayout';
import AboutHero from '@/components/organisms/AboutHero';
import AboutWhoWeAre from '@/components/organisms/AboutWhoWeAre';
import AboutMission from '@/components/organisms/AboutMission';
import AboutCEO from '@/components/organisms/AboutCEO';
import AboutTestimonial from '@/components/organisms/AboutTestimonial';
import AboutWhyChoose from '@/components/organisms/AboutWhyChoose';

const About: React.FC = () => {
  return (
    <MainLayout>
      <AboutHero />
      <AboutWhoWeAre />
      <AboutMission />
      <AboutCEO />
      <AboutWhyChoose />
    </MainLayout>
  );
};

export default About;