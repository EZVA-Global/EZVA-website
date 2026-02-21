import React from 'react';
import MainLayout from '@/components/templates/MainLayout';
import Hero from '@/components/organisms/Hero';
import ServicesSection from '@/components/organisms/ServicesSection';
import PainPointSection from '@/components/organisms/PainPointSection';
import ReadyToScaleSection from '@/components/organisms/ReadyToScaleSection';
import WorkWithUsSection from '@/components/organisms/WorkWithUsSection';
import FAQSection from '@/components/organisms/FAQSection';
import StorePromoSection from '@/components/organisms/StorePromoSection';

const Index: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <ServicesSection />
      <PainPointSection />
      <StorePromoSection />
      <ReadyToScaleSection />
      <WorkWithUsSection />
      <FAQSection />
    </MainLayout>
  );
};

export default Index;