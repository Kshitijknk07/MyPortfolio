import { Mail, Github, Linkedin, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white py-16"
    >
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Portrait */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-72 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xl font-dancing-script text-gray-600">
                        KNK
                      </span>
                    </div>
                    <p className="text-sm">Portrait Placeholder</p>
                    <p className="text-xs mt-2">Add your photo here</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-30"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-light text-black leading-tight">
                  I'm{" "}
                  <span className="font-dancing-script text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    Kshitij
                  </span>
                  , a Full Stack Developer crafting digital experiences.
                </h2>
                <div className="w-20 h-0.5 bg-blue-500"></div>
              </div>

              {/* Body Text */}
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  I've spent the past 3+ years working across different areas of
                  web development: front-end development, back-end systems,
                  database design, and API development.
                </p>

                <p>
                  These days my time is spent researching, designing,
                  prototyping, and coding modern web applications. I also help
                  developers get started with their careers through open-source
                  contributions.
                </p>
              </div>

              {/* Skills/Tech Stack */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-black">
                  Technologies I work with:
                </h3>
                <div className="flex flex-wrap gap-2">
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
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex items-center gap-6 pt-2">
                <a
                  href="mailto:kshitij@example.com"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Get in touch</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
