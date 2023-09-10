import React from 'react';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import { getBackgroundColor } from '@/utils/getClass';

const DefaultLayout = ({ children }) => {
  const bgColor = getBackgroundColor('tertiary');
  return (
    <div className={`flex flex-col min-h-screen ${bgColor}`}>
      <Header />
      <main className="px-2 py-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;