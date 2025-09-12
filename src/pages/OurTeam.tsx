import React from 'react';
import MainLayout from '@/components/templates/MainLayout';
import OurTeamHero from '@/components/organisms/OurTeamHero';
import ExecutiveTeam from '@/components/organisms/ExecutiveTeam';
import TeamMembers from '@/components/organisms/TeamMembers';
import OurPartners from '@/components/organisms/OurPartners';

const OurTeam: React.FC = () => {
  return (
    <MainLayout>
      <OurTeamHero />
      <ExecutiveTeam />
      <TeamMembers />
      <OurPartners />
    </MainLayout>
  );
};

export default OurTeam;