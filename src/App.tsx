import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PromptGuide } from './components/PromptGuide';
import { PromptGenerator } from './components/PromptGenerator';
import { Templates } from './components/Templates';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { MobileMenu } from './components/MobileMenu';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      
      <Header 
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMenuOpen={isMobileMenuOpen}
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <main>
        <Hero />
        <PromptGuide />
        <PromptGenerator />
        <Templates />
        <Pricing />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;