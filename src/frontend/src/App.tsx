import Hero from './components/Hero';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NetworkLines from './components/NetworkLines';
import ScanlineOverlay from './components/ScanlineOverlay';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen bg-terminal-black text-terminal-white overflow-x-hidden">
      {/* Matrix-style falling characters background */}
      <NetworkLines />
      
      {/* Scanline overlay for CRT effect */}
      <ScanlineOverlay />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <PersonalInfo />
        <Education />
        <Projects />
        <Experience />
        <Certifications />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
