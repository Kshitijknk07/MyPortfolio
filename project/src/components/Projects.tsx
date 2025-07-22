import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      type: "Web Application"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Intuitive productivity tool for teams",
      tech: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      type: "SaaS Platform"
    },
    {
      id: 3,
      title: "Real-Time Chat App",
      description: "Instant messaging with modern features",
      tech: ["React Native", "Firebase", "WebRTC"],
      type: "Mobile App"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Data visualization and business intelligence",
      tech: ["Next.js", "D3.js", "Python", "AWS"],
      type: "Dashboard"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Creative portfolio with stunning animations",
      tech: ["React", "GSAP", "Tailwind", "Framer"],
      type: "Creative"
    },
    {
      id: 6,
      title: "API Gateway",
      description: "Microservices architecture solution",
      tech: ["Docker", "Kong", "Redis", "Kubernetes"],
      type: "Infrastructure"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const projectsContainer = projectsRef.current;

    if (!section || !title || !projectsContainer) return;

    // Title animation
    gsap.fromTo(title, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Projects animation
    gsap.fromTo(projectsContainer.children,
      { 
        y: 60, 
        opacity: 0,
        rotationX: 15
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsContainer,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Hover animations for project cards
    const projectCards = projectsContainer.children;
    Array.from(projectCards).forEach((card) => {
      const element = card as HTMLElement;
      
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          y: -10,
          scale: 1.02,
          duration: 0.4,
          ease: "power2.out"
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        });
      });
    });

    // Parallax effect
    gsap.to(section, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, []);

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold mb-16 text-center tracking-tight"
        >
          FEATURED PROJECTS
        </h2>
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-black/10 rounded-lg overflow-hidden hover:border-black/30 transition-all duration-300 cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-6xl font-bold text-gray-300">
                  {String(project.id).padStart(2, '0')}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 border-2 border-black text-black font-medium tracking-wide uppercase hover:bg-black hover:text-white transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
