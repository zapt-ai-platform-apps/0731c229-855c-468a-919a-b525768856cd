import React from 'react';

function Footer() {
  return (
    <footer className="py-4 bg-white shadow-md mt-auto">
      <div className="container mx-auto px-4 flex justify-center">
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-emerald-600 transition-colors duration-200"
        >
          Made on ZAPT
        </a>
      </div>
    </footer>
  );
}

export default Footer;