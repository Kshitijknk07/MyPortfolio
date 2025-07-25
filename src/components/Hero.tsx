import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Zap, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gray-50/10 to-white/5" />

      {/* Floating Code Icons */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 text-black/10"
      >
        <Code size={60} />
      </motion.div>

      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 right-1/4 text-black/10"
      >
        <Zap size={48} />
      </motion.div>

      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/3 left-1/6 text-black/10"
      >
        <Rocket size={52} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          staggerChildren: 0.2,
          delayChildren: 0.3,
        }}
        className="max-w-4xl mx-auto px-6 text-center z-10"
        style={{ color: "#000000" }}
      >
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-black/5 border border-black/20 rounded-full text-black text-sm font-medium">
            👋 Hello, I'm a Software Engineer
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ color: "#000000" }}
        >
          Designing{" "}
          <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent relative inline-block">
            Tomorrow's
            <svg
              className="absolute -bottom-3 left-0 w-full h-5"
              viewBox="0 0 400 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 15c15-2 30-5 45-3s30 3 45 2 30-3 45-2 30 2 45 1 30-2 45-1 30 2 45 0 30-2 45-1 30 2 45-2 30-3 45-2"
                stroke="#000000"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
              />
              <path
                d="M8 12c20-1 35-4 50-2s35 2 50 1 35-2 50-1 35 1 50 0 35-1 50 0 35 1 50-1 35-2 50-1"
                stroke="#000000"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
                style={{ animationDelay: "0.3s" }}
              />
            </svg>
          </span>
          <br />
          Technology
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#333333" }}
        >
          Computer Science student at DSCE with a passion for building
          innovative software solutions and robust infrastructure that solve
          real-world challenges.
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map(
            (tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm font-medium hover:bg-black/10 hover:border-black/30 transition-all duration-300"
                style={{ color: "#000000" }}
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mb-16"
        >
          <Button
            size="lg"
            className="transition-spring hover:scale-105"
            style={{
              backgroundColor: "#000000",
              color: "#FFFFFF",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col items-center"
        >
          <p className="text-sm mb-4" style={{ color: "#666666" }}>
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 border border-gray-300 rounded-full hover:border-black/50 transition-colors duration-300 cursor-pointer"
          >
            <ArrowDown size={20} style={{ color: "#666666" }} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-float opacity-50" />
      <div
        className="absolute bottom-1/3 right-0 w-64 h-64 bg-gray-800/5 rounded-full blur-3xl animate-float opacity-50"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
};

export default Hero;
