import { Mail, Github, Linkedin, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white py-20"
    >
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Portrait */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-96 h-[28rem] bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl shadow-xl flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-3xl font-dancing-script text-gray-600">
                        KNK
                      </span>
                    </div>
                    <p className="text-base">Portrait Placeholder</p>
                    <p className="text-sm mt-2">Add your photo here</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-blue-400 rounded-full opacity-30"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-light text-black leading-tight">
                  My{" "}
                  <span className="font-dancing-script text-5xl md:text-6xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    About
                  </span>
                </h2>
                <div className="w-32 h-1 bg-blue-500"></div>
              </div>

              {/* Body Text */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I've spent the past 3+ years working across different areas of
                  web development: front-end development, back-end systems,
                  database design, and API development. My journey has been driven by a passion for creating seamless digital experiences that solve real-world problems.
                </p>

                <p>
                  These days my time is spent researching, designing,
                  prototyping, and coding modern web applications. I also help
                  developers get started with their careers through open-source
                  contributions and mentoring programs. Every project is an opportunity to push boundaries and explore new technologies.
                </p>

                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring the latest trends in web development. I believe in continuous learning and sharing knowledge with the developer community.
                </p>
              </div>

              {/* Skills/Tech Stack */}
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-black">
                  Technologies I work with:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "Python",
                    "PostgreSQL",
                    "MongoDB",
                    "AWS",
                    "Docker",
                    "Git",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-base font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex items-center gap-8 pt-4">
                <a
                  href="mailto:kshitij@example.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-base">Get in touch</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-base">GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-base">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
