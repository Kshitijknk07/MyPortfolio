import { useEffect } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const animatedElements = document.querySelectorAll(".interactive");
    animatedElements.forEach((el) => {
      (el as HTMLElement).style.willChange = "transform";
    });

    return () => {
      animatedElements.forEach((el) => {
        (el as HTMLElement).style.willChange = "auto";
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      <AnimatedBackground />
      <main className="relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <div id="projects">
                  <Projects />
                </div>
                <Skills />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
