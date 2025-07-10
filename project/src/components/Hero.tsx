import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20"
    >
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div
          className="mb-12 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="inline-block mb-8">
            <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl shadow-slate-200/50 flex items-center justify-center animate-float">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">KNK</span>
              </div>
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-light mb-6 text-slate-800 tracking-tight">
            Kshitij Narayan Kulkarni
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto" />
        </div>

        <p
          className="text-2xl md:text-3xl text-slate-600 mb-6 font-light opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Software Developer
        </p>

        <p
          className="text-lg text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          Code with purpose. Design with precision. Crafting seamless software
          experiences from the ground up.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.1s" }}
        >
          <button
            onClick={scrollToProjects}
            className="interactive px-8 py-4 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl btn-animate"
          >
            View Projects
          </button>
          <button
            onClick={() => navigate("/resume")}
            className="interactive px-8 py-4 border border-slate-300 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-all duration-300 btn-animate"
          >
            My Resume
          </button>
        </div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-slate-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-slate-300 rounded-full animate-ping opacity-40" />
        <div
          className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-slate-500 rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 right-1/4 w-px h-8 bg-gradient-to-b from-transparent via-slate-300 to-transparent opacity-30 animate-float" />
        <div
          className="absolute bottom-1/3 right-1/2 w-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="interactive absolute bottom-12 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-300 animate-pulse"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
}
