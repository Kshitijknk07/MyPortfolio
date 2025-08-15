import React from "react";
import { EvervaultCard } from "./ui/evervault-card";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard that displays current weather conditions, forecasts, and interactive maps. Integrates with multiple weather APIs for accurate data.",
    tech: ["React", "Node.js", "OpenWeather API", "Chart.js"],
    link: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern portfolio website showcasing projects and skills. Features smooth animations, responsive design, and optimized performance for the best user experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-white py-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
              My{" "}
              <span className="font-dancing-script text-5xl md:text-6xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one represents
              a unique challenge and learning experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Image / Preview */}
                <div className="relative w-full h-44 bg-gray-50 flex items-center justify-center">
                  <EvervaultCard text="hover" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 font-light leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium rounded-full px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-gray-500 font-medium">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    className="mt-6 inline-block text-center text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full px-5 py-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow hover:shadow-lg"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-16">
            <button className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl mx-auto text-sm">
              View All Projects
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
