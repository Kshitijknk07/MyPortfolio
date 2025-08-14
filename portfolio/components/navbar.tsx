"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Code, Award, Mail } from "lucide-react";

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <User className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <Code className="h-4 w-4" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <Award className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <Mail className="h-4 w-4" />,
  },
];

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-8 h-16 flex items-center justify-center">
        <div className="flex max-w-fit border border-slate-200/50 dark:border-slate-700/50 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg pr-4 pl-6 py-3 items-center justify-center space-x-6">
          {/* Logo/Name */}
          <div className="flex items-center mr-4">
            <h1 className="text-xl font-dancing-script bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm">
              KNK
            </h1>
          </div>

          {/* Navigation Items */}
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-dancing-script"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm font-medium">
                {navItem.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
