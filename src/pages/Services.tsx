import React from 'react';
import MainLayout from '@/components/templates/MainLayout';
import ServicesHero from '@/components/organisms/ServicesHero';
import ServicesGrid from '@/components/organisms/ServicesGrid';
import ServicesCTA from '@/components/organisms/ServicesCTA';

const Services: React.FC = () => {
  return (
    <MainLayout>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </MainLayout>
  );
};

export default Services;