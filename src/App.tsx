import React from 'react';
import './index.css';
import Header from './components/Header';
import DonationForm from './components/DonationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 to-teal-100 text-gray-800">
      <Header />
      
      <main className="h-full flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <DonationForm />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;