import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './App.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    gsap.to(window, { duration: 1, scrollTo: 0 });
    
    // Set up global animations
    gsap.set('body', { overflow: 'hidden' });
    
    // Page load animation
    const tl = gsap.timeline();
    tl.to('body', { duration: 0.5, overflow: 'auto', delay: 1 });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white text-black overflow-x-hidden">
        <Navigation />
        <main className="relative">
          <Hero />
          <About />
          <TechnicalSkills />
          <Projects />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;
