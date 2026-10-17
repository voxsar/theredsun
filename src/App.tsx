import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkHighlights from './components/WorkHighlights';
import Services from './components/Services';
import Work from './components/Work';
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

  const goTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services setCurrentPage={goTo} />;
      case 'work':
        return <Work setCurrentPage={goTo} />;
      case 'contact':
        return <Contact />;
      case 'ethical-ai':
        return <EthicalAI />;
      case 'employee-welfare':
        return <EmployeeWelfare />;
      case 'quote':
        return <ProjectQuote />;
      case 'tech-stacks':
        return <TechStacks setCurrentPage={goTo} />;
      case 'tech-stack-lean':
        return <LeanStack setCurrentPage={goTo} />;
      case 'tech-stack-mean':
        return <MeanStack setCurrentPage={goTo} />;
      case 'tech-stack-lamp':
        return <LampStack setCurrentPage={goTo} />;
      case 'tech-stack-wamp':
        return <WampStack setCurrentPage={goTo} />;
      default:
        return (
          <>
            <Hero setCurrentPage={goTo} />
            <WorkHighlights setCurrentPage={goTo} />
            <Services setCurrentPage={goTo} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-orange-100">
      <Header currentPage={currentPage} setCurrentPage={goTo} />
      <main className="pt-16 bg-orange-100">
        {renderPage()}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={goTo} />
    </div>
  );
}

export default App;
