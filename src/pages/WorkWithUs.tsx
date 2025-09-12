import React from 'react';
import MainLayout from '@/components/templates/MainLayout';
import WorkWithUsHero from '@/components/organisms/WorkWithUsHero';
import WorkWithUsForm from '@/components/organisms/WorkWithUsForm';
import WorkWithUsInfo from '@/components/organisms/WorkWithUsInfo';

const WorkWithUs: React.FC = () => {
  return (
    <MainLayout>
      <WorkWithUsHero />
      <WorkWithUsForm />
      <WorkWithUsInfo />
    </MainLayout>
  );
};

export default WorkWithUs;