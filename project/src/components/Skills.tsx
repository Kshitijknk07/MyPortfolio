import { useEffect, useRef } from "react";
import {
  Code2,
  Database,
  Palette,
  Settings,
  Layers,
  Globe,
  Smartphone,
  Cpu,
  Figma,
  Brush,
  GitBranch,
  Cloud,
  Container,
  Zap,
} from "lucide-react";
import { Star } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", icon: Layers },
      { name: "TypeScript", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "Three.js", icon: Cpu },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", icon: Cpu },
      { name: "Python", icon: Code2 },
      { name: "GraphQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
    ],
  },
  {
    title: "Design",
    icon: Palette,
    skills: [
      { name: "UI/UX", icon: Smartphone },
      { name: "Figma", icon: Figma },
      { name: "Motion", icon: Zap },
      { name: "Branding", icon: Brush },
    ],
  },
  {
    title: "Tools",
    icon: Settings,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "AWS", icon: Cloud },
      { name: "Blender", icon: Cpu },
    ],
  },
];

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillCards = entry.target.querySelectorAll(".skill-card");
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up");
              }, index * 100);
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

  return (
    <section ref={skillsRef} className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-3 mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
            <Star className="w-5 h-5 text-slate-600" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-light mb-6 text-slate-800">
            Skills
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A curated collection of technologies and methodologies that power my
            creative process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.title}
                className="skill-card opacity-0"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:bg-white/60 transition-all duration-500 group h-full">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CategoryIcon className="w-8 h-8 text-slate-700" />
                    </div>
                  </div>

                  <h3 className="text-xl font-light text-slate-800 mb-8 text-center">
                    {category.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="interactive flex flex-col items-center p-4 rounded-2xl bg-white/30 hover:bg-white/50 transition-all duration-300 group/skill"
                        >
                          <SkillIcon className="w-5 h-5 text-slate-600 mb-2 group-hover/skill:scale-110 transition-transform duration-200" />
                          <span className="text-slate-700 text-sm font-medium text-center">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-12 border border-slate-200/50 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-slate-700" />
              </div>
            </div>
            <h3 className="text-2xl font-light text-slate-800 mb-6">
              Continuous Evolution
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              As technology advances, so do I constantly exploring AI
              integration, cutting-edge animation, and the fusion of art with
              code. Every project is a chance to push creative boundaries,
              embrace innovation, and uncover new possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
