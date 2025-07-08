import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  MapPin,
  Star,
} from "lucide-react";

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={contactRef} className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-3 mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
            <Star className="w-5 h-5 text-slate-600" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-light mb-6 text-slate-800">
            Contact
          </h2>
          <p className="text-slate-600 mt-8 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Let's create something extraordinary together. Every great project
            starts with a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50">
              <h3 className="text-2xl font-light text-slate-800 mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:alex@example.com"
                  className="interactive flex items-center gap-6 text-slate-600 hover:text-slate-800 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-slate-500">
                      kshitijnk08@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-6 text-slate-600">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-slate-500">Bengaluru, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200/50">
                <p className="text-slate-500 text-sm mb-6">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Kshitijknk07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-slate-200 transition-colors duration-300"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5 text-slate-700" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kshitij-narayan-kulkarni-784a4a259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-slate-200 transition-colors duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5 text-slate-700" />
                  </a>
                  <a
                    href="https://x.com/KSHITIJ_NK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-slate-200 transition-colors duration-300"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-5 h-5 text-slate-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50">
            <h3 className="text-2xl font-light text-slate-800 mb-8">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-600 mb-3"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/60 border border-slate-200/50 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-600 mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/60 border border-slate-200/50 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-600 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/60 border border-slate-200/50 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="interactive w-full px-6 py-4 bg-slate-800 text-white rounded-2xl font-medium hover:bg-slate-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 btn-animate"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
