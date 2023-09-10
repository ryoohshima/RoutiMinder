import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header></header>

      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      <footer></footer>
    </div>
  );
}

export default AuthLayout;