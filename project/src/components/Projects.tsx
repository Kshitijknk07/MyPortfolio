import { useRef, useState } from "react";
import { Filter, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Projects Coming Soon!",
    subtitle: "",
    description: "My personal projects will be added here soon. Stay tuned!",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    tech: [],
    year: "",
    category: "personal",
  },
];

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [filteredProjects] = useState(projects);
  const [] = useState<Set<number>>(new Set());

  return (
    <section ref={projectsRef} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
            <Star className="w-5 h-5 text-slate-600" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
          </div>
          <h2
            className="text-5xl md:text-6xl font-light mb-6 text-slate-800 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Projects
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed font-display">
            A curated selection of work that showcases the intersection of
            design, technology, and creative problem-solving.
          </p>
        </div>

        {/* Single Category Label */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-3 border border-slate-200/50 shadow text-lg font-semibold text-slate-700">
            Personal Projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="flex justify-center">
          <div className="project-card bg-white/60 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50 flex flex-col items-center justify-center shadow-lg max-w-lg w-full">
            <img
              src={projects[0].image}
              alt="Projects coming soon"
              className="w-32 h-32 object-cover rounded-2xl mb-6 shadow"
              style={{ filter: "grayscale(0.2) blur(0.5px)" }}
            />
            <h3 className="text-2xl font-extralight text-slate-800 mb-2 text-center">
              {projects[0].title}
            </h3>
            <p className="text-slate-600 text-base text-center mb-2">
              {projects[0].description}
            </p>
            <span className="inline-block text-xs text-slate-500 bg-slate-100/80 px-3 py-1 rounded-lg border border-slate-200/50 mt-2">
              Yet to be added
            </span>
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
