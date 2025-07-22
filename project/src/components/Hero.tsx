import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const name = nameRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const shape = shapeRef.current;
    const circle = circleRef.current;

    if (!hero || !name || !title || !subtitle || !shape || !circle) return;

    // Set initial states
    gsap.set([name, title, subtitle], { y: 100, opacity: 0 });
    gsap.set(shape, { x: -200, rotation: 0, opacity: 0 });
    gsap.set(circle, { scale: 0, opacity: 0 });

    // Main timeline
    const tl = gsap.timeline({ delay: 1 });

    // Animate geometric shapes
    tl.to(shape, {
      duration: 1.5,
      x: 0,
      rotation: 360,
      opacity: 1,
      ease: "power3.out"
    })
    .to(circle, {
      duration: 1,
      scale: 1,
      opacity: 0.1,
      ease: "elastic.out(1, 0.3)"
    }, "-=1")
    
    // Animate text elements
    .to(name, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      ease: "power3.out"
    }, "-=0.8")
    .to(title, {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power3.out"
    }, "-=0.6")
    .to(subtitle, {
      duration: 0.8,
      y: 0,
      opacity: 1,
      ease: "power3.out"
    }, "-=0.4");

    // Continuous animations
    gsap.to(shape, {
      duration: 20,
      rotation: "+=360",
      repeat: -1,
      ease: "none"
    });

    gsap.to(circle, {
      duration: 6,
      rotation: "+=360",
      repeat: -1,
      ease: "none"
    });

    // Parallax effect on scroll
    gsap.to(hero, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, []);

  return (
    <section 
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Geometric Shapes */}
      <div 
        ref={shapeRef}
        className="absolute top-20 right-20 w-20 h-20 border-2 border-black"
      />
      
      <div 
        ref={circleRef}
        className="absolute bottom-20 left-20 w-40 h-40 rounded-full border border-black"
      />

      {/* Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <h1 
          ref={nameRef}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-4"
        >
          KSHITIJ NK
        </h1>
        
        <h2 
          ref={titleRef}
          className="text-2xl md:text-4xl font-light tracking-wide mb-6 text-gray-600"
        >
          CREATIVE DEVELOPER
        </h2>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
        >
          Crafting digital experiences through code, design, and innovation.
          <br />
          Pushing boundaries with modern web technologies.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
