import { ArrowRight, Download, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white pt-16 overflow-hidden"
    >
      {/* Grid Background */}
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]'
        )}
      />

      {/* Radial gradient overlay for faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light text-black leading-tight">
              Hi, I'm{' '}
              <span className="font-dancing-script text-5xl md:text-7xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent drop-shadow-sm">
                Kshitij Narayan Kulkarni
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
              Full Stack Developer crafting digital experiences with passion and
              precision
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I build modern web applications that combine beautiful design with
            powerful functionality. From concept to deployment, I bring ideas to
            life through clean code and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="View my portfolio work"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <div className="flex items-center gap-4">
              <a
                href="mailto:kshitij@example.com"
                className="flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                aria-label="Send me an email"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>

              <button
                className="flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                aria-label="Download my CV"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>
          </div>

          {/* Quotes */}
          <div className="flex justify-center items-start gap-12 pt-16">
            <div className="max-w-xs text-center">
              <p className="text-lg md:text-xl italic text-gray-700">
                "Code is design made executable."
              </p>
              <span className="mt-2 inline-block text-sm text-gray-500">
                Craft with clarity
              </span>
            </div>
            <div className="w-px h-16 bg-gray-300" aria-hidden="true"></div>
            <div className="max-w-xs text-center">
              <p className="text-lg md:text-xl italic text-gray-700">
                "Simplicity is the ultimate sophistication."
              </p>
              <span className="mt-2 inline-block text-sm text-gray-500">
                Design with intent
              </span>
            </div>
            <div className="w-px h-16 bg-gray-300" aria-hidden="true"></div>
            <div className="max-w-xs text-center">
              <p className="text-lg md:text-xl italic text-gray-700">
                "Details create the experience."
              </p>
              <span className="mt-2 inline-block text-sm text-gray-500">
                Ship with care
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
