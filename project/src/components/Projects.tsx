import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Filter, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NebulaWeb",
    subtitle: "Web Dashboard",
    description: "Random demo project.",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["React", "TypeScript", "GSAP"],
    year: "2024",
    category: "web",
  },
  {
    id: 2,
    title: "PixelPulse",
    subtitle: "Creative Portfolio",
    description: "Random demo project.",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["Next.js", "Framer Motion", "Styled Components"],
    year: "2024",
    category: "web",
  },
  {
    id: 3,
    title: "Luminex",
    subtitle: "Interactive Gallery",
    description: "Random demo project.",
    image:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["Vue.js", "GSAP", "Sass"],
    year: "2023",
    category: "web",
  },
  {
    id: 4,
    title: "AetherFlow",
    subtitle: "Landing Page",
    description: "Random demo project.",
    image:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["React", "TailwindCSS", "GSAP"],
    year: "2023",
    category: "web",
  },
  {
    id: 5,
    title: "RusticSync",
    subtitle: "Rust API Service",
    description: "Random demo project.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["Rust", "Actix-web", "PostgreSQL"],
    year: "2024",
    category: "rust",
  },
  {
    id: 6,
    title: "FerrisBoard",
    subtitle: "Rust Dashboard",
    description: "Random demo project.",
    image:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["Rust", "Yew", "WebAssembly"],
    year: "2024",
    category: "rust",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Projects" },
  { id: "rust", label: "Rust Projects" },
];

// Add a helper to get a blurred placeholder (LQIP) for each image
const getBlurDataUrl = (url: string) => url + "&blur=40&w=20&h=20"; // Pexels supports resizing, simulate blur

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  const handleImageLoad = (projectId: number) => {
    setImagesLoaded((prev) => {
      const next = new Set(prev);
      next.add(projectId);
      return next;
    });
  };

  return (
    <section ref={projectsRef} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
            <Star className="w-5 h-5 text-slate-600" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-800 tracking-tight font-display">
            Projects
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed font-display">
            A curated selection of work that showcases the intersection of design, technology, and creative problem-solving.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-2 border border-slate-200/50">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`interactive px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-slate-800 text-white shadow-lg"
                      : "text-slate-600 hover:bg-white/60"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card interactive group relative overflow-hidden rounded-3xl bg-white/40 backdrop-blur-sm border border-slate-200/50 hover:bg-white/60 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                {/* Blurred placeholder for LQIP */}
                <img
                  src={getBlurDataUrl(project.image)}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-48 object-cover blur-lg scale-110 transition-opacity duration-300"
                  style={{
                    zIndex: 1,
                    opacity: imagesLoaded.has(project.id) ? 0 : 1,
                  }}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
                  onLoad={() => handleImageLoad(project.id)}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={project.id === 1 ? "high" : undefined}
                  style={{
                    zIndex: 2,
                    opacity: imagesLoaded.has(project.id) ? 1 : 0,
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"
                  style={{ zIndex: 3 }}
                />
                <div
                  className="absolute top-4 right-4 text-slate-100 font-light text-sm bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full"
                  style={{ zIndex: 4 }}
                >
                  {project.year}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-light text-slate-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium tracking-wide uppercase">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-slate-600 bg-slate-100/60 rounded-lg border border-slate-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="interactive flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 text-sm">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="interactive flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </button>
                </div>
              </div>
            </div>
          ))}
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
