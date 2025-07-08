import { useEffect, useRef, useState } from "react";
import { MapPin, Coffee, Book, Star } from "lucide-react";
import gsap from "gsap";

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
  const [, setIsVisible] = useState(false);
  const dotsRef = useRef<AnimatedDot[]>([]);
  const particlesRef = useRef<FloatingParticle[]>([]);
  const animationRef = useRef<number>();

  const education = [
    {
      degree: "B.E. in Computer Science",
      institution: "Dayananda Sagar College of Engineering (DSCE)",
      year: "2022 - 2026",
      details: [],
    },
    {
      degree: "12th Std PUC in Science",
      institution: "Sri Chaitanya PU College (State Board)",
      year: "2020 - 2022",
      details: [],
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

  // GSAP animations for About story paragraphs using React refs
  const aboutPara1 = useRef<HTMLParagraphElement>(null);
  const aboutPara2 = useRef<HTMLParagraphElement>(null);
  const aboutPara3 = useRef<HTMLParagraphElement>(null);
  const aboutPara4 = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (
      aboutPara1.current &&
      aboutPara2.current &&
      aboutPara3.current &&
      aboutPara4.current
    ) {
      gsap.from(aboutPara1.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });
      gsap.from(aboutPara2.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });
      gsap.from(aboutPara3.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.8,
        ease: "power2.out",
      });
      gsap.from(aboutPara4.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1.1,
        ease: "power2.out",
      });
    }
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-8">
          {/* Professional Summary */}
          <div className="space-y-8">
            <div
              className="bg-white/40 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                  <Book className="w-7 h-7 text-slate-700" />
                </div>
                <h3 className="text-2xl font-light text-slate-800">
                  My Journey
                </h3>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p ref={aboutPara1}>
                  My coding adventure began in 2023, when I wrote my first line
                  of code and realized—hey, this is actually kind of magical!
                  Since then, I've been hooked on the thrill of turning ideas
                  into reality, one bug (and coffee) at a time.
                </p>
                <p ref={aboutPara2}>
                  I love building things—sometimes they work, sometimes they
                  break, but I always learn something new. Whether it's a quirky
                  web app, a handy tool, or just a fun experiment, I enjoy the
                  process of making stuff that others can use and smile at.
                </p>
                <p ref={aboutPara3}>
                  My journey is all about curiosity, creativity, and a little
                  bit of chaos. I believe the best projects are born from a mix
                  of late-night inspiration, a dash of stubbornness, and the joy
                  of seeing something come alive on the screen.
                </p>
                <p ref={aboutPara4}>
                  If you ever want to talk code, brainstorm wild ideas, or just
                  share a meme, I'm always up for it. Let's keep building,
                  breaking, and learning—because that's where the real fun is!
                </p>

                <div className="flex items-center gap-6 pt-6 border-t border-slate-200/50">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>bengaluru, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Coffee className="w-4 h-4 text-slate-500" />
                    <span>Tea Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 hover:bg-white/60 transition-all duration-500 group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${1.4 + index * 0.2}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Book className="w-6 h-6 text-slate-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-slate-800 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-slate-600 text-sm font-medium mb-2">
                      {edu.institution}
                    </p>
                    <span className="inline-block text-xs text-slate-500 bg-slate-100/60 px-3 py-1 rounded-lg border border-slate-200/50 mb-4">
                      {edu.year}
                    </span>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
                      {edu.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add extra margin at the bottom for balance */}
        <div className="h-8 md:h-16" />
      </div>
    </section>
  );
}
