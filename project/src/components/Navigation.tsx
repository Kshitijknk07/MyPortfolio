import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Navigation: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const logo = logoRef.current;
    const links = linksRef.current;

    if (!nav || !logo || !links) return;

    // Initial animation
    gsap.set([logo, ...links.children], { y: -50, opacity: 0 });
    
    const tl = gsap.timeline({ delay: 0.5 });
    tl.to(logo, { duration: 0.8, y: 0, opacity: 1, ease: "power3.out" })
      .to(links.children, { 
        duration: 0.6, 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        ease: "power3.out" 
      }, "-=0.4");

    // Scroll hide/show animation
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        gsap.to(nav, { duration: 0.3, y: -100, ease: "power2.out" });
      } else {
        gsap.to(nav, { duration: 0.3, y: 0, ease: "power2.out" });
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, { 
        duration: 1, 
        scrollTo: { y: element.offsetTop - 80 }, 
        ease: "power2.inOut" 
      });
    }
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          ref={logoRef}
          className="text-2xl font-bold tracking-tight cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => scrollToSection('hero')}
        >
          Portfolio
        </div>
        
        <ul ref={linksRef} className="flex space-x-8">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-sm font-medium tracking-wide uppercase hover:text-gray-600 transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;