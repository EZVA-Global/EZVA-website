import React from 'react';
import MainLayout from '@/components/templates/MainLayout';
import DigitalMarketingHero from '@/components/organisms/DigitalMarketingHero';
import DigitalMarketingForm from '@/components/organisms/DigitalMarketingForm';
import DigitalMarketingInfo from '@/components/organisms/DigitalMarketingInfo';

const DigitalMarketing: React.FC = () => {
  return (
    <MainLayout>
      <DigitalMarketingHero />
      <DigitalMarketingForm />
      <DigitalMarketingInfo />
    </MainLayout>
  );
};

export default DigitalMarketing;