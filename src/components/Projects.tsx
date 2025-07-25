import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Star, GitFork } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EcoTracker",
      description:
        "A comprehensive carbon footprint tracking application that helps users monitor and reduce their environmental impact through smart analytics and personalized recommendations.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
      category: "Full Stack",
      status: "Live",
      stats: { stars: 342, forks: 89, views: "12.3k" },
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "CryptoVault",
      description:
        "Secure cryptocurrency portfolio management platform with real-time market data, advanced charting, and automated trading strategies.",
      tech: ["Next.js", "Python", "FastAPI", "Redis", "Chart.js"],
      category: "Web App",
      status: "In Development",
      stats: { stars: 156, forks: 34, views: "8.7k" },
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "DevCollab",
      description:
        "Real-time collaborative coding platform that enables seamless pair programming with integrated video chat, shared terminals, and version control.",
      tech: ["Vue.js", "Socket.io", "Docker", "MongoDB", "WebRTC"],
      category: "Platform",
      status: "Live",
      stats: { stars: 892, forks: 203, views: "25.1k" },
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "AIContentStudio",
      description:
        "AI-powered content creation suite that generates high-quality articles, social media posts, and marketing copy using advanced language models.",
      tech: ["React", "Python", "OpenAI API", "Supabase", "Tailwind"],
      category: "AI/ML",
      status: "Beta",
      stats: { stars: 445, forks: 67, views: "15.8k" },
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "SmartHome Hub",
      description:
        "IoT dashboard for smart home automation with voice control, energy monitoring, and predictive maintenance using machine learning algorithms.",
      tech: ["React Native", "IoT", "TensorFlow", "Firebase", "Arduino"],
      category: "IoT",
      status: "Live",
      stats: { stars: 267, forks: 78, views: "9.4k" },
      gradient: "from-teal-400 to-green-500",
    },
    {
      title: "GameStream",
      description:
        "Low-latency game streaming platform with adaptive bitrate technology, real-time multiplayer support, and cross-platform compatibility.",
      tech: ["WebRTC", "C++", "Node.js", "Kubernetes", "WebGL"],
      category: "Gaming",
      status: "Coming Soon",
      stats: { stars: 78, forks: 12, views: "3.2k" },
      gradient: "from-indigo-400 to-purple-500",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return {
          backgroundColor: "#ec4899",
          color: "#ffffff",
          borderColor: "#ec4899",
        };
      case "Beta":
        return {
          backgroundColor: "transparent",
          color: "#ec4899",
          borderColor: "#ec4899",
        };
      case "In Development":
        return {
          backgroundColor: "rgba(236, 72, 153, 0.1)",
          color: "#ec4899",
          borderColor: "#ec4899",
        };
      case "Coming Soon":
        return {
          backgroundColor: "transparent",
          color: "#666666",
          borderColor: "#666666",
        };
      default:
        return {
          backgroundColor: "transparent",
          color: "#666666",
          borderColor: "#666666",
        };
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-20 relative"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gray-50/10 to-white/5" />

      {/* Creative floating elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute opacity-15"
          style={{
            left: `${15 + i * 15}%`,
            top: `${25 + (i % 2) * 40}%`,
            fontSize: "18px",
            color: i % 2 === 0 ? "#ec4899" : "#000000",
          }}
          animate={{
            y: [-6, 6, -6],
            x: [-3, 3, -3],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          {["🚀", "💡", "⚡", "🎯", "✨", "💎"][i]}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: "#000000" }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#666666" }}
          >
            A showcase of innovative solutions and creative implementations that
            demonstrate my passion for building impactful digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div
                className="overflow-hidden rounded-2xl border transition-all duration-500 h-full group-hover:shadow-xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "rgba(236, 72, 153, 0.3)",
                  boxShadow: "0 4px 20px rgba(236, 72, 153, 0.1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#ec4899";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 30px rgba(236, 72, 153, 0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(236, 72, 153, 0.3)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 20px rgba(236, 72, 153, 0.1)";
                }}
              >
                <div className="relative overflow-hidden">
                  <div
                    className="h-48 flex items-center justify-center relative"
                    style={{ backgroundColor: "#ec4899" }}
                  >
                    <div className="text-4xl font-bold text-white">
                      {project.title.slice(0, 2)}
                    </div>

                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border"
                      style={getStatusColor(project.status)}
                    >
                      {project.status}
                    </div>

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        <button
                          className="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300"
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "#ffffff",
                            color: "#ffffff",
                          }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.backgroundColor =
                              "#ffffff";
                            (e.target as HTMLElement).style.color = "#000000";
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.backgroundColor =
                              "transparent";
                            (e.target as HTMLElement).style.color = "#ffffff";
                          }}
                        >
                          <Eye size={16} className="mr-2 inline" />
                          Preview
                        </button>
                        <button
                          className="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300"
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "#ffffff",
                            color: "#ffffff",
                          }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.backgroundColor =
                              "#ffffff";
                            (e.target as HTMLElement).style.color = "#000000";
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.backgroundColor =
                              "transparent";
                            (e.target as HTMLElement).style.color = "#ffffff";
                          }}
                        >
                          <Github size={16} className="mr-2 inline" />
                          Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className="text-xl font-bold transition-colors duration-300"
                      style={{ color: "#000000" }}
                    >
                      {project.title}
                    </h3>
                    <div
                      className="px-3 py-1 rounded-full text-xs font-medium border"
                      style={{
                        backgroundColor: "transparent",
                        color: "#ec4899",
                        borderColor: "#ec4899",
                      }}
                    >
                      {project.category}
                    </div>
                  </div>

                  <p
                    className="text-sm mb-4 leading-relaxed line-clamp-3"
                    style={{ color: "#666666" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <div
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300"
                        style={{
                          backgroundColor: "transparent",
                          color: "#ec4899",
                          borderColor: "#ec4899",
                        }}
                      >
                        {tech}
                      </div>
                    ))}
                    {project.tech.length > 3 && (
                      <div
                        className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{
                          backgroundColor: "#ec4899",
                          color: "#ffffff",
                          borderColor: "#ec4899",
                        }}
                      >
                        +{project.tech.length - 3}
                      </div>
                    )}
                  </div>

                  <div
                    className="flex items-center justify-between text-xs mb-4"
                    style={{ color: "#666666" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star size={12} style={{ color: "#ec4899" }} />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={12} style={{ color: "#ec4899" }} />
                        {project.stats.forks}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={12} style={{ color: "#ec4899" }} />
                        {project.stats.views}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="flex-1 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 flex items-center justify-center"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "#ec4899",
                        color: "#ec4899",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor =
                          "#ec4899";
                        (e.target as HTMLElement).style.color = "#ffffff";
                        (e.target as HTMLElement).style.transform =
                          "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor =
                          "transparent";
                        (e.target as HTMLElement).style.color = "#ec4899";
                        (e.target as HTMLElement).style.transform = "scale(1)";
                      }}
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Live Demo
                    </button>
                    <button
                      className="px-3 py-2 rounded-full border text-sm font-medium transition-all duration-300"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "#ec4899",
                        color: "#ec4899",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor =
                          "#ec4899";
                        (e.target as HTMLElement).style.color = "#ffffff";
                        (e.target as HTMLElement).style.transform =
                          "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor =
                          "transparent";
                        (e.target as HTMLElement).style.color = "#ec4899";
                        (e.target as HTMLElement).style.transform = "scale(1)";
                      }}
                    >
                      <Github size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            className="px-8 py-4 rounded-full border text-lg font-medium transition-all duration-300 flex items-center gap-3 mx-auto"
            style={{
              backgroundColor: "#000000",
              borderColor: "#ec4899",
              color: "#ffffff",
              boxShadow: "0 4px 20px rgba(236, 72, 153, 0.3)",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#ec4899";
              (e.target as HTMLElement).style.transform = "scale(1.05)";
              (e.target as HTMLElement).style.boxShadow =
                "0 8px 30px rgba(236, 72, 153, 0.5)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#000000";
              (e.target as HTMLElement).style.transform = "scale(1)";
              (e.target as HTMLElement).style.boxShadow =
                "0 4px 20px rgba(236, 72, 153, 0.3)";
            }}
          >
            <Github size={20} />
            View All Projects on GitHub
          </button>
        </motion.div>
      </div>

      {/* Enhanced Background Orbs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float opacity-50" />
      <div
        className="absolute bottom-1/4 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-float opacity-50"
        style={{ animationDelay: "5s" }}
      />
    </section>
  );
};

export default Projects;
