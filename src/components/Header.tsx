import React from 'react';

function Header() {
  return (
    <header className="py-6 bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-600">Food Donation App</h1>
      </div>
    </header>
  );
}

export default Header;