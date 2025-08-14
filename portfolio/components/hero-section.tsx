import { ArrowRight, Download, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 pt-16">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light text-slate-900 dark:text-white leading-tight">
              Hi, I'm{" "}
              <span className="font-dancing-script text-5xl md:text-7xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm">
                Kshitij Narayan Kulkarni
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Full Stack Developer crafting digital experiences with passion and
              precision
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I build modern web applications that combine beautiful design with
            powerful functionality. From concept to deployment, I bring ideas to
            life through clean code and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="View my portfolio work"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <div className="flex items-center gap-4">
              <a
                href="mailto:kshitij@example.com"
                className="flex items-center gap-2 px-6 py-3 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                aria-label="Send me an email"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>

              <button
                className="flex items-center gap-2 px-6 py-3 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                aria-label="Download my CV"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center gap-12 pt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white">
                3+
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Years Experience
              </div>
            </div>
            <div
              className="w-px h-12 bg-slate-200 dark:bg-slate-700"
              aria-hidden="true"
            ></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white">
                50+
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Projects Completed
              </div>
            </div>
            <div
              className="w-px h-12 bg-slate-200 dark:bg-slate-700"
              aria-hidden="true"
            ></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white">
                100%
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
