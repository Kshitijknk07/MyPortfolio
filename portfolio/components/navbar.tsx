'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Home, User, Briefcase, Code, Award, Mail } from 'lucide-react';
import Lenis from 'lenis';

const navItems = [
  {
    name: 'Home',
    link: '#home',
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: 'About',
    link: '#about',
    icon: <User className="h-4 w-4" />,
  },
  {
    name: 'Projects',
    link: '#projects',
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: 'Skills',
    link: '#skills',
    icon: <Code className="h-4 w-4" />,
  },
  {
    name: 'Experience',
    link: '#experience',
    icon: <Award className="h-4 w-4" />,
  },
  {
    name: 'Contact',
    link: '#contact',
    icon: <Mail className="h-4 w-4" />,
  },
];

export function Navbar() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Get the Lenis instance from the provider
    lenisRef.current = (window as any).lenis;
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, { offset: -80 });
    }
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-8 h-16 flex items-center justify-center">
        <div className="flex max-w-fit border border-gray-200/30 rounded-full bg-white/30 backdrop-blur-sm shadow-sm pr-4 pl-6 py-3 items-center justify-center space-x-6">
          {/* Logo/Name */}
          <div className="flex items-center mr-4">
            <h1 className="text-xl font-dancing-script bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent drop-shadow-sm">
              KNK
            </h1>
          </div>

          {/* Navigation Items */}
          {navItems.map((navItem: any, idx: number) => (
            <button
              key={`link=${idx}`}
              onClick={() => scrollToSection(navItem.link.replace('#', ''))}
              className={cn(
                'relative items-center flex space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-dancing-script cursor-pointer'
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm font-medium">
                {navItem.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
