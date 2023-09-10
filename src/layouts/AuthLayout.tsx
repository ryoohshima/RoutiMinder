import React from 'react';
import { getBackgroundColor } from '@/utils/getClass';
import Header from '@/components/organisms/Header';

const AuthLayout = ({ children }) => {
  const bgColor = getBackgroundColor('tertiary');
  return (
    <>
      <Header />
      <main className={`flex flex-col min-h-screen pt-20 px-2 pb-2 ${bgColor}`}>
        {children}
      </main>
    </>
  );
}

export default AuthLayout;