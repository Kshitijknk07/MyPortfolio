import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechnicalSkills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    // Frontend
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'SASS/SCSS', category: 'Frontend' },
    { name: 'GSAP', category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Django', category: 'Backend' },
    { name: 'FastAPI', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Backend' },
    { name: 'MongoDB', category: 'Backend' },
    { name: 'Redis', category: 'Backend' },
    
    // DevOps & Tools
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'DevOps' },
    { name: 'Git', category: 'DevOps' },
    { name: 'Linux', category: 'DevOps' },
    { name: 'Vercel', category: 'DevOps' },
    { name: 'Nginx', category: 'DevOps' },
    
    // Mobile & Others
    { name: 'React Native', category: 'Mobile' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'GraphQL', category: 'API' },
    { name: 'REST APIs', category: 'API' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const skillsContainer = skillsRef.current;

    if (!section || !title || !skillsContainer) return;

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

    // Skills animation with stagger
    gsap.fromTo(skillsContainer.children,
      { 
        y: 30, 
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: {
          amount: 1.5,
          grid: "auto",
          from: "center"
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsContainer,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Hover animations for skill items
    const skillItems = skillsContainer.children;
    Array.from(skillItems).forEach((item) => {
      const element = item as HTMLElement;
      
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          y: -5,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Parallax effect
    gsap.to(section, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, []);

  const categories = ['Frontend', 'Backend', 'DevOps', 'Mobile', 'API'];

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold mb-16 text-center tracking-tight"
        >
          TECHNICAL SKILLS
        </h2>
        
        <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg border border-black/5 hover:border-black/20 transition-all duration-300 cursor-pointer"
            >
              <div className="text-center">
                <h3 className="font-medium text-gray-900 mb-2">
                  {skill.name}
                </h3>
                <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter Visualization */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <div 
              key={category}
              className="px-4 py-2 rounded-full border border-black/10 text-sm font-medium text-gray-600 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;