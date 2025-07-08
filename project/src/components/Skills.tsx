import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaJenkins,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiShadcnui,
  SiGin,
  SiGo,
  SiExpress,
  SiFirebase,
  SiGithubactions,
  SiTerraform,
  SiKubernetes,
  SiNginx,
  SiRust,
  SiPostgresql,
  SiMongodb,
  SiRedis,
} from "react-icons/si";

const frontendTools = [
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Redux", icon: SiRedux },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Shadcn", icon: SiShadcnui },
];

const backendTools = [
  { name: "Go", icon: SiGo },
  { name: "Gin", icon: SiGin },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "Firebase", icon: SiFirebase },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
];

const programmingLanguages = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: FaJs },
  { name: "Go", icon: SiGo },
  { name: "Rust", icon: SiRust },
  { name: "Python", icon: FaPython },
];

const devopsTools = [
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Docker", icon: FaDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "AWS", icon: FaAws },
  { name: "Jenkins", icon: FaJenkins },
  { name: "Nginx", icon: SiNginx },
  { name: "Terraform", icon: SiTerraform },
];

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillCards = entry.target.querySelectorAll(".tool-card");
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up");
              }, index * 60);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderToolGrid = (tools: { name: string; icon: any }[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
      {tools.map((tool, index) => {
        const ToolIcon = tool.icon;
        return (
          <div
            key={tool.name}
            className="tool-card bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 flex flex-col items-center justify-center shadow-lg hover:bg-white/60 transition-all duration-300 group opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 group-hover:scale-110 transition-transform duration-300 shadow-md">
              <ToolIcon className="w-8 h-8 text-slate-700" />
            </div>
            <span className="text-slate-800 text-base font-medium text-center tracking-wide">
              {tool.name}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <section ref={skillsRef} className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-3 mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
            <Star className="w-5 h-5 text-slate-600" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-light mb-4 text-slate-800">
            Tools I Work With
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A selection of the frameworks, languages, and platforms I use to
            craft modern digital experiences.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            Frontend
          </h3>
          {renderToolGrid(frontendTools)}
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            Programming Languages
          </h3>
          {renderToolGrid(programmingLanguages)}
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            Backend
          </h3>
          {renderToolGrid(backendTools)}
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            DevOps Tools
          </h3>
          {renderToolGrid(devopsTools)}
        </div>
      </div>
    </section>
  );
}
