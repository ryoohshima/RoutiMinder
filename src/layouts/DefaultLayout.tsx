import React from 'react';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <Footer />

    </div>
  );
}

export default DefaultLayout;