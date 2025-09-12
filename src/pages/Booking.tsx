import React from 'react';
import MainLayout from '@/components/templates/MainLayout';
import BookingHero from '@/components/organisms/BookingHero';
import BookingCalendar from '@/components/organisms/BookingCalendar';
import BookingInfo from '@/components/organisms/BookingInfo';

const Booking: React.FC = () => {
  return (
    <MainLayout>
      <BookingHero />
      <BookingCalendar />
      <BookingInfo />
    </MainLayout>
  );
};

export default Booking;