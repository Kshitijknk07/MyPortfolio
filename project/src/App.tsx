import { useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom cursor styles
    document.body.style.cursor = 'none';
    
    // Performance optimization: Add will-change to animated elements
    const animatedElements = document.querySelectorAll('.interactive');
    animatedElements.forEach(el => {
      (el as HTMLElement).style.willChange = 'transform';
    });
    
    return () => {
      document.body.style.cursor = 'auto';
      // Clean up will-change
      animatedElements.forEach(el => {
        (el as HTMLElement).style.willChange = 'auto';
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      <AnimatedBackground />
      <CustomCursor />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <div id="projects">
          <Projects />
        </div>
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;