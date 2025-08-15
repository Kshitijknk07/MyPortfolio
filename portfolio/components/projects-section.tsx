"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-dancing-script bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <ProjectCard 
            title="E-Commerce Platform" 
            description="Full-stack e-commerce solution with payment integration"
            techStack={["React", "Node.js", "MongoDB", "Stripe"]}
            icon={<CodeIcon />}
            colors={[[59, 130, 246], [147, 51, 234]]}
          />
          <ProjectCard 
            title="Task Management App" 
            description="Collaborative project management with real-time updates"
            techStack={["Next.js", "TypeScript", "Prisma", "Socket.io"]}
            icon={<TaskIcon />}
            colors={[[34, 197, 94], [16, 185, 129]]}
          />
          <ProjectCard 
            title="AI Chat Assistant" 
            description="Intelligent chatbot powered by machine learning"
            techStack={["Python", "TensorFlow", "FastAPI", "Redis"]}
            icon={<AIIcon />}
            colors={[[239, 68, 68], [220, 38, 127]]}
          />
          <ProjectCard 
            title="Portfolio Website" 
            description="Modern responsive portfolio with smooth animations"
            techStack={["React", "Tailwind CSS", "Framer Motion", "Vercel"]}
            icon={<PortfolioIcon />}
            colors={[[6, 182, 212], [14, 165, 233]]}
          />
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({
  title,
  description,
  techStack,
  icon,
  colors,
}: {
  title: string;
  description: string;
  techStack: string[];
  icon: React.ReactNode;
  colors: number[][];
}) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-gray-200 group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[30rem] rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-blue-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-blue-600" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-blue-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-blue-600" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 rounded-lg overflow-hidden"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-gradient-to-br from-blue-50 to-blue-100"
              colors={colors}
              dotSize={2}
            />
            {/* Radial gradient for the fade effect */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-white/50" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center w-full">
        <div className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center mb-4">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-black group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 mb-3">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 group-hover/canvas-card:text-white/90 group-hover/canvas-card:-translate-y-2 transition duration-200 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 justify-center group-hover/canvas-card:-translate-y-2 transition duration-200">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full group-hover/canvas-card:bg-white/20 group-hover/canvas-card:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CodeIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-blue-600 group-hover/canvas-card:text-white"
  >
    <path
      d="M8 6L3 12L8 18M16 6L21 12L16 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TaskIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-green-600 group-hover/canvas-card:text-white"
  >
    <path
      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AIIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-red-600 group-hover/canvas-card:text-white"
  >
    <path
      d="M9.75 17L9 20L12 19L15 20L14.25 17M3 13H21M5 17H19C20.1046 17 21 16.1046 21 15V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V15C3 16.1046 3.89543 17 5 17Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PortfolioIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-cyan-600 group-hover/canvas-card:text-white"
  >
    <path
      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
