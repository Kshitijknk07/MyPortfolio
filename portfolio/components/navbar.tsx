"use client";

import {
  Home,
  User,
  Briefcase,
  Code,
  Award,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { ExpandedTabs } from "@/components/ui/expanded-tabs";

const tabs = [
  { title: "Home", icon: Home },
  { title: "About", icon: User },
  { title: "Projects", icon: Briefcase },
  { title: "Skills", icon: Code },
  { type: "separator" as const },
  { title: "Experience", icon: Award },
  { title: "Contact", icon: Mail },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-dancing-script text-slate-900 dark:text-white">
            Kshitij Narayan Kulkarni
          </h1>
        </div>

        <div className="flex items-center">
          <ExpandedTabs
            tabs={tabs}
            className="bg-white/20 dark:bg-slate-900/20 border-slate-200/30 dark:border-slate-700/30 backdrop-blur-sm"
            activeColor="text-slate-900 dark:text-white"
          />
        </div>
      </div>
    </nav>
  );
}
