import { motion } from "framer-motion";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Sass/SCSS",
        "Framer Motion",
        "Three.js",
        "D3.js",
        "Redux",
        "Zustand",
        "React Query",
      ],
      color: "from-pink-500 to-pink-700",
      icon: "💻",
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Python",
        "Express.js",
        "FastAPI",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "GraphQL",
        "REST APIs",
        "WebSockets",
        "Microservices",
        "JWT",
        "OAuth",
        "Prisma",
      ],
      color: "from-black to-gray-800",
      icon: "⚙️",
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
        "Jenkins",
        "Nginx",
        "Serverless",
        "Lambda",
        "EC2",
        "S3",
        "CloudFront",
        "Load Balancers",
        "CI/CD",
      ],
      color: "from-pink-600 to-pink-800",
      icon: "☁️",
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "VS Code",
        "Figma",
        "Postman",
        "Linux",
        "Bash",
        "Webpack",
        "Vite",
        "ESLint",
        "Prettier",
        "Jest",
        "Cypress",
        "Storybook",
        "Firebase",
        "Supabase",
      ],
      color: "from-gray-700 to-black",
      icon: "🛠️",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 relative"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gray-50/10 to-white/5" />

      {/* Creative floating elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute opacity-20"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            fontSize: "20px",
            color: i % 2 === 0 ? "#ec4899" : "#000000",
          }}
          animate={{
            y: [-8, 8, -8],
            x: [-4, 4, -4],
            rotate: [0, 3, -3, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        >
          {["⚡", "💻", "🚀", "💡", "⭐", "🎯", "🔥", "✨"][i]}
        </motion.div>
      ))}

      {/* Enhanced Floating Code Symbols */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/6 text-6xl font-mono opacity-15"
        style={{ color: "#ec4899" }}
      >
        {"</>"}
      </motion.div>

      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [360, 180, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/6 text-5xl font-mono opacity-15"
        style={{ color: "#000000" }}
      >
        {"{...}"}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 z-10">
        {/* Header */}
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
            Technical{" "}
            <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#666666" }}
          >
            A comprehensive toolkit built through years of hands-on experience
            in modern web development, cloud architecture, and cutting-edge
            technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className="p-8 relative overflow-hidden rounded-2xl border transition-all duration-500 group-hover:shadow-xl"
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
                {/* Card Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Category Header */}
                <div className="relative z-10 mb-6 flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3
                      className="text-2xl font-bold mb-2 transition-colors duration-300"
                      style={{ color: "#000000" }}
                    >
                      {category.title}
                    </h3>
                    <div
                      className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full`}
                    />
                  </div>
                </div>

                {/* Skills List */}
                <div className="relative z-10 flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.05,
                        duration: 0.4,
                      }}
                      whileHover={{ scale: 1.08 }}
                      className="group/skill"
                    >
                      <div
                        className="px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 cursor-default"
                        style={{
                          backgroundColor: "transparent",
                          borderColor: "#ec4899",
                          color: "#ec4899",
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.backgroundColor =
                            "#ec4899";
                          (e.target as HTMLElement).style.color = "#ffffff";
                          (e.target as HTMLElement).style.borderColor =
                            "#ec4899";
                          (e.target as HTMLElement).style.transform =
                            "translateY(-1px)";
                          (e.target as HTMLElement).style.boxShadow =
                            "0 4px 12px rgba(236, 72, 153, 0.5)";
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.backgroundColor =
                            "transparent";
                          (e.target as HTMLElement).style.color = "#ec4899";
                          (e.target as HTMLElement).style.borderColor =
                            "#ec4899";
                          (e.target as HTMLElement).style.transform =
                            "translateY(0px)";
                          (e.target as HTMLElement).style.boxShadow = "none";
                        }}
                      >
                        {skill}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skill Count with enhanced design */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: categoryIndex * 0.2 + 0.5 }}
                  className="absolute top-6 right-6 flex items-center gap-2"
                >
                  <div
                    className="px-3 py-1 rounded-full text-xs font-bold border"
                    style={{
                      backgroundColor: "transparent",
                      color: "#ec4899",
                      borderColor: "#ec4899",
                    }}
                  >
                    {category.skills.length} skills
                  </div>
                </motion.div>

                {/* Decorative corner element */}
                <motion.div
                  className="absolute bottom-4 right-4 w-2 h-2 bg-pink-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: categoryIndex * 0.3,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Background Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float opacity-50" />
      <div
        className="absolute bottom-1/3 right-0 w-80 h-80 bg-black/5 rounded-full blur-3xl animate-float opacity-50"
        style={{ animationDelay: "4s" }}
      />
    </section>
  );
};

export default TechnicalSkills;
