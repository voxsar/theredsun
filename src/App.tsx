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
import EmployeeWelfare from './components/EmployeeWelfare';
import ProjectQuote from './components/ProjectQuote';
import Footer from './components/Footer';
import TechStacks from './components/TechStacks';
import LeanStack from './components/tech-stacks/LeanStack';
import MeanStack from './components/tech-stacks/MeanStack';
import LampStack from './components/tech-stacks/LampStack';
import WampStack from './components/tech-stacks/WampStack';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
      case 'ethical-ai':
        return <EthicalAI />;
      case 'employee-welfare':
        return <EmployeeWelfare />;
      case 'quote':
        return <ProjectQuote />;
      case 'tech-stacks':
        return <TechStacks setCurrentPage={setCurrentPage} />;
      case 'tech-stack-lean':
        return <LeanStack setCurrentPage={setCurrentPage} />;
      case 'tech-stack-mean':
        return <MeanStack setCurrentPage={setCurrentPage} />;
      case 'tech-stack-lamp':
        return <LampStack setCurrentPage={setCurrentPage} />;
      case 'tech-stack-wamp':
        return <WampStack setCurrentPage={setCurrentPage} />;
      default:
        return (
          <>
            <Hero />
            <LogoShowcase />
            <VideoSection />
            <Services setCurrentPage={setCurrentPage} />
            <Products />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-orange-100">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-16 bg-orange-100">
        {renderPage()}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;