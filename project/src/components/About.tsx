import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    const stats = statsRef.current;

    if (!section || !title || !content || !stats) return;

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

    // Content animation
    gsap.fromTo(content.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: content,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stats animation
    gsap.fromTo(stats.children,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: stats,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Parallax effect
    gsap.to(section, {
      yPercent: -20,
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
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 
              ref={titleRef}
              className="text-5xl md:text-6xl font-bold mb-8 tracking-tight"
            >
              ABOUT
            </h2>
            
            <div ref={contentRef} className="space-y-6">
              <p className="text-xl leading-relaxed text-gray-700">
                I'm a passionate developer who transforms ideas into elegant digital solutions. 
                With a keen eye for design and a deep understanding of modern web technologies, 
                I create experiences that are both beautiful and functional.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                My journey in software development is driven by curiosity and the pursuit of 
                perfection. I believe in writing clean, efficient code that stands the test of time.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring developers.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="flex justify-center">
            <div ref={statsRef} className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 border border-black/10 rounded-lg">
                <div className="text-4xl font-bold mb-2">3+</div>
                <div className="text-sm uppercase tracking-wide text-gray-600">Years Experience</div>
              </div>
              
              <div className="text-center p-6 border border-black/10 rounded-lg">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm uppercase tracking-wide text-gray-600">Projects Completed</div>
              </div>
              
              <div className="text-center p-6 border border-black/10 rounded-lg">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm uppercase tracking-wide text-gray-600">Technologies</div>
              </div>
              
              <div className="text-center p-6 border border-black/10 rounded-lg">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm uppercase tracking-wide text-gray-600">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
