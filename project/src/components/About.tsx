import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Palette,
  Rocket,
  Users,
  Award,
  Calendar,
  MapPin,
  Coffee,
  Zap,
  Target,
  Heart,
  Star,
} from "lucide-react";

interface AnimatedDot {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  delay: number;
}

interface FloatingParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const dotsRef = useRef<AnimatedDot[]>([]);
  const particlesRef = useRef<FloatingParticle[]>([]);
  const animationRef = useRef<number>();

  // Professional data
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "5+" },
    { icon: Code2, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Clients Served", value: "25+" },
    { icon: Award, label: "Awards Won", value: "8" },
  ];

  const specializations = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building scalable web applications with modern frameworks and cloud technologies.",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive user experiences with attention to detail and accessibility.",
      skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed, scalability, and exceptional user experience.",
      skills: ["Web Vitals", "Caching", "CDN", "Database Optimization"],
    },
  ];

  const experience = [
    {
      company: "TechCorp Solutions",
      role: "Senior Full-Stack Developer",
      period: "2022 - Present",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced application load time by 60% through optimization",
        "Mentored 5 junior developers and established coding standards",
      ],
    },
    {
      company: "Digital Innovations Inc",
      role: "Frontend Developer",
      period: "2020 - 2022",
      achievements: [
        "Built responsive web applications using React and TypeScript",
        "Implemented design system used across 15+ products",
        "Collaborated with UX team to improve user engagement by 40%",
      ],
    },
  ];

  // Initialize animated dots grid
  useEffect(() => {
    const initializeDots = () => {
      const dots: AnimatedDot[] = [];
      const spacing = 40;
      // Reduce dots on small screens
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);
      const maxDots = width < 600 ? 40 : cols * rows;
      let count = 0;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (count++ >= maxDots) break;
          dots.push({
            x: i * spacing,
            y: j * spacing,
            opacity: Math.random() * 0.3 + 0.1,
            scale: Math.random() * 0.5 + 0.5,
            delay: Math.random() * 2000,
          });
        }
      }
      dotsRef.current = dots;
    };

    // Initialize floating particles
    const initializeParticles = () => {
      const particles: FloatingParticle[] = [];
      const colors = ["#64748b", "#94a3b8", "#cbd5e1"];
      // Reduce particles on small screens
      const count = window.innerWidth < 600 ? 5 : 15;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.4 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      particlesRef.current = particles;
    };

    initializeDots();
    initializeParticles();

    const handleResize = () => {
      initializeDots();
      if (canvasRef.current) {
        // Use devicePixelRatio for crispness and less pixel work
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        canvasRef.current.style.width = window.innerWidth + "px";
        canvasRef.current.style.height = window.innerHeight + "px";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use devicePixelRatio for crispness and less pixel work
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    let running = true;
    // Pause animation when tab is not visible
    const handleVisibility = () => {
      running = document.visibilityState === "visible";
      if (running) animate();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const animate = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw animated dots
      dotsRef.current.forEach((dot, index) => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - dot.x, 2) +
            Math.pow(mousePosition.y - dot.y, 2)
        );

        const maxDistance = 150;
        const influence = Math.max(0, 1 - distance / maxDistance);
        const finalOpacity = dot.opacity + influence * 0.4;
        const finalScale = dot.scale + influence * 0.5;

        ctx.globalAlpha = finalOpacity;
        ctx.fillStyle = "#64748b";
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1 * finalScale, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections between nearby dots
        if (influence > 0.3) {
          dotsRef.current.slice(index + 1).forEach((otherDot) => {
            const dotDistance = Math.sqrt(
              Math.pow(dot.x - otherDot.x, 2) + Math.pow(dot.y - otherDot.y, 2)
            );

            if (dotDistance < 80) {
              ctx.globalAlpha = (1 - dotDistance / 80) * 0.2 * influence;
              ctx.strokeStyle = "#64748b";
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(otherDot.x, otherDot.y);
              ctx.stroke();
            }
          });
        }
      });

      // Animate floating particles
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Mouse interaction
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - particle.x, 2) +
            Math.pow(mousePosition.y - particle.y, 2)
        );

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += (particle.x - mousePosition.x) * force * 0.001;
          particle.vy += (particle.y - mousePosition.y) * force * 0.001;
        }

        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-32 px-4 relative overflow-hidden"
    >
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-3 mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
            <Star className="w-5 h-5 text-slate-600" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
          </div>

          <h2
            className="text-5xl md:text-6xl font-light mb-6 text-slate-800 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            About Me
          </h2>

          <p
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            I'm a Computer Science student passionate about building creative
            digital solutions. I enjoy working with modern web and backend
            technologies, and I'm always eager to learn, grow, and collaborate
            with others.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:bg-white/80 transition-all duration-500 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <div className="text-3xl font-light text-slate-800 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Professional Summary */}
          <div className="space-y-8">
            <div
              className="bg-white/40 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-slate-700" />
                </div>
                <h3 className="text-2xl font-light text-slate-800">
                  My Journey
                </h3>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  With over 5 years of experience in software development, I've
                  had the privilege of working with startups and established
                  companies to bring innovative ideas to life. My journey began
                  with a fascination for how code can create beautiful,
                  functional experiences.
                </p>

                <p>
                  I specialize in full-stack development with a strong focus on
                  frontend technologies, user experience design, and performance
                  optimization. Every project is an opportunity to push
                  boundaries and create something meaningful.
                </p>

                <div className="flex items-center gap-6 pt-6 border-t border-slate-200/50">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Coffee className="w-4 h-4 text-slate-500" />
                    <span>Coffee Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="space-y-6">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.title}
                  className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 hover:bg-white/60 transition-all duration-500 group opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${1.4 + index * 0.2}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-slate-800 mb-3">
                        {spec.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {spec.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {spec.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs text-slate-600 bg-slate-100/60 rounded-lg border border-slate-200/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div
          className="bg-white/40 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "2s" }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
              <Target className="w-7 h-7 text-slate-700" />
            </div>
            <h3 className="text-2xl font-light text-slate-800">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.company} className="relative">
                {index !== experience.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-20 bg-gradient-to-b from-slate-300 to-transparent" />
                )}

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-medium text-slate-800">
                          {exp.role}
                        </h4>
                        <p className="text-slate-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-slate-500 bg-slate-100/60 px-3 py-1 rounded-lg border border-slate-200/50 mt-2 md:mt-0 self-start">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-slate-600 text-sm leading-relaxed flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "2.4s" }}
        >
          <p className="text-slate-600 mb-8 text-lg font-light">
            Ready to bring your next project to life?
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="interactive px-8 py-4 bg-slate-800 text-white rounded-2xl font-medium hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl btn-animate"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
}
