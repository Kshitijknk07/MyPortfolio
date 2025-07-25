import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Coffee } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-gray-50/10 to-white/5" />

      {/* Creative Floating Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/6 text-pink-300/20"
      >
        <Coffee size={80} />
      </motion.div>

      {/* Code symbols floating around */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`about-particle-${i}`}
          className="absolute text-pink-400/20 font-mono text-2xl"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          {["⚡", "💻", "🚀", "💡", "⭐", "🎯"][i]}
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl border border-black/10 flex items-center justify-center relative overflow-hidden">
                <div className="text-8xl font-bold text-pink-400/60">KNK</div>

                {/* Animated Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 p-0.5"
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                  }}
                />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-6 -right-6 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "#ec4899",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 15px rgba(236, 72, 153, 0.3)",
                }}
              >
                Available for work
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                style={{
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <MapPin size={16} />
                Bengaluru, Karnataka India
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-5xl md:text-6xl font-bold mb-6"
                style={{ color: "#000000" }}
              >
                About{" "}
                <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>

              <div
                className="space-y-6 text-lg leading-relaxed"
                style={{ color: "#333333" }}
              >
                <p>
                  I'm a passionate Computer Science student at DSCE, Bengaluru,
                  with a deep fascination for building innovative software
                  solutions. My journey began with curiosity about how
                  technology works and has evolved into creating meaningful
                  projects that solve real-world problems.
                </p>
                <p>
                  I specialize in full-stack development and modern web
                  technologies, with a keen interest in clean code and user
                  experience. When I'm not coding, you'll find me exploring new
                  frameworks, contributing to open source projects, or building
                  something exciting during hackathons.
                </p>
                <p>
                  My approach combines technical learning with creative
                  problem-solving, ensuring that every project becomes a
                  stepping stone toward becoming a better developer. I believe
                  in continuous learning and sharing knowledge with the
                  community.
                </p>
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="text-pink-500" size={20} />
                <span style={{ color: "#666666" }}>Student at DSCE</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="text-pink-500" size={20} />
                <span style={{ color: "#666666" }}>Based in Bengaluru</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <Button
                className="transition-spring hover:scale-105"
                style={{
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  border: "none",
                }}
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="transition-spring hover:scale-105"
                style={{
                  borderColor: "#ec4899",
                  color: "#ec4899",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "#ec4899";
                  (e.target as HTMLElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor =
                    "transparent";
                  (e.target as HTMLElement).style.color = "#ec4899";
                }}
              >
                Let's Connect
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Orbs */}
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float opacity-50" />
      <div
        className="absolute top-1/4 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-float opacity-50"
        style={{ animationDelay: "3s" }}
      />
    </section>
  );
};

export default About;
