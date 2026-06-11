import React from 'react';
import MainLayout from '@/components/templates/MainLayout';
import BookingHero from '@/components/organisms/BookingHero';
import BookingCalendar from '@/components/organisms/BookingCalendar';
import BookingInfo from '@/components/organisms/BookingInfo';
import BookingConsentSection from '@/components/organisms/BookingConsentSection';

const Booking: React.FC = () => {
  return (
    <MainLayout>
      <BookingHero />
      <BookingCalendar />
      <BookingConsentSection />
      <BookingInfo />
    </MainLayout>
  );
};

export default Booking;