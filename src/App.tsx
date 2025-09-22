import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoShowcase from './components/LogoShowcase';
import VideoSection from './components/VideoSection';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import EthicalAI from './components/EthicalAI';
import Sustainability from './components/Sustainability';
import ProjectQuote from './components/ProjectQuote';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
      case 'ethical-ai':
        return <EthicalAI />;
      case 'sustainability':
        return <Sustainability />;
      case 'quote':
        return <ProjectQuote />;
      default:
        return (
          <>
            <Hero />
            <LogoShowcase />
            <VideoSection />
            <Services />
            <Products />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;