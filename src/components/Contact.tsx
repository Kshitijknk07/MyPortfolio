import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Send,
  Coffee,
  Calendar,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kshitijnk08@gmail.com",
      href: "mailto:kshitijnk08@gmail.com",
      color: "text-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka India",
      href: "#",
      color: "text-pink-500",
    },
    {
      icon: Coffee,
      label: "Coffee Chat",
      value: "Always available!",
      href: "#",
      color: "text-pink-500",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-pink-500" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-pink-500",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-pink-500",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:kshitijnk08@gmail.com",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center pt-32 pb-20 relative"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Background Elements */}
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
          {["💌", "📧", "☎️", "🤝", "✨", "💬"][i]}
        </motion.div>
      ))}

      {/* Enhanced Floating Elements */}
      <motion.div
        animate={{
          y: [-25, 25, -25],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/6 right-1/6 opacity-20"
        style={{ color: "#ec4899" }}
      >
        <Send size={60} />
      </motion.div>

      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [10, -10, 10],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/6 left-1/6 opacity-20"
        style={{ color: "#000000" }}
      >
        <Mail size={50} />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 z-10">
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
            Let's{" "}
            <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#666666" }}
          >
            Ready to bring your ideas to life? Let's discuss your next project
            over coffee (virtual or real!).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#000000" }}
              >
                Get in Touch
              </h3>
              <p className="mb-8 leading-relaxed" style={{ color: "#666666" }}>
                I'm always excited to discuss new opportunities, innovative
                projects, or just chat about the latest in tech. Whether you're
                a startup looking to build your MVP or an enterprise needing to
                scale, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer"
                >
                  <div
                    className="p-4 rounded-2xl border transition-all duration-300"
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "rgba(236, 72, 153, 0.3)",
                      boxShadow: "0 4px 20px rgba(236, 72, 153, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "#ec4899";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 8px 30px rgba(236, 72, 153, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(236, 72, 153, 0.3)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 4px 20px rgba(236, 72, 153, 0.1)";
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: "rgba(236, 72, 153, 0.1)" }}
                      >
                        <info.icon size={20} style={{ color: "#ec4899" }} />
                      </div>
                      <div>
                        <div className="text-sm" style={{ color: "#666666" }}>
                          {info.label}
                        </div>
                        <div
                          className="font-medium transition-colors duration-300"
                          style={{ color: "#000000" }}
                        >
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl border"
              style={{
                backgroundColor: "rgba(236, 72, 153, 0.05)",
                borderColor: "rgba(236, 72, 153, 0.3)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" />
                <span className="font-medium" style={{ color: "#ec4899" }}>
                  Available for new projects
                </span>
              </div>
              <p className="text-sm" style={{ color: "#666666" }}>
                Currently accepting freelance and contract opportunities.
                Typical response time: 24 hours.
              </p>
            </motion.div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4" style={{ color: "#000000" }}>
                Follow me on
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.2 }}
                    className="p-3 rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                      color: "#666666",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor =
                        "rgba(236, 72, 153, 0.1)";
                      (e.target as HTMLElement).style.color = "#ec4899";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor =
                        "rgba(0, 0, 0, 0.05)";
                      (e.target as HTMLElement).style.color = "#666666";
                    }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="p-8 rounded-2xl border relative overflow-hidden"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "rgba(236, 72, 153, 0.3)",
                boxShadow: "0 4px 20px rgba(236, 72, 153, 0.1)",
              }}
            >
              {/* Form Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-pink-500/5" />

              <div className="relative z-10">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#000000" }}
                >
                  Send a Message
                </h3>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#000000" }}
                      >
                        Name
                      </label>
                      <Input
                        placeholder="Your name"
                        className="border-pink-200 focus:border-pink-500 focus:ring-pink-500 focus:ring-1 placeholder:text-gray-400"
                        style={{
                          backgroundColor: "#fafafa",
                          color: "#000000",
                        }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#000000" }}
                      >
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="border-pink-200 focus:border-pink-500 focus:ring-pink-500 focus:ring-1 placeholder:text-gray-400"
                        style={{
                          backgroundColor: "#fafafa",
                          color: "#000000",
                        }}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#000000" }}
                    >
                      Subject
                    </label>
                    <Input
                      placeholder="What's this about?"
                      className="border-pink-200 focus:border-pink-500 focus:ring-pink-500 focus:ring-1 placeholder:text-gray-400"
                      style={{
                        backgroundColor: "#fafafa",
                        color: "#000000",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#000000" }}
                    >
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="border-pink-200 focus:border-pink-500 focus:ring-pink-500 focus:ring-1 placeholder:text-gray-400 resize-none"
                      style={{
                        backgroundColor: "#fafafa",
                        color: "#000000",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <button
                      className="w-full px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: "#ec4899",
                        color: "#ffffff",
                        boxShadow: "0 4px 20px rgba(236, 72, 153, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor =
                          "#d946ef";
                        (e.target as HTMLElement).style.transform =
                          "scale(1.05)";
                        (e.target as HTMLElement).style.boxShadow =
                          "0 8px 30px rgba(236, 72, 153, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor =
                          "#ec4899";
                        (e.target as HTMLElement).style.transform = "scale(1)";
                        (e.target as HTMLElement).style.boxShadow =
                          "0 4px 20px rgba(236, 72, 153, 0.3)";
                      }}
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </motion.div>
                </form>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 pt-6 border-t border-border/50"
                >
                  <p className="text-sm mb-4" style={{ color: "#666666" }}>
                    Or schedule a quick call
                  </p>
                  <div className="flex gap-3">
                    <button
                      className="flex-1 px-4 py-2 rounded-full border font-medium transition-all duration-300 flex items-center justify-center gap-2"
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
                      <Calendar size={16} />
                      Schedule Call
                    </button>
                    <button
                      className="flex-1 px-4 py-2 rounded-full border font-medium transition-all duration-300 flex items-center justify-center gap-2"
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
                      <Coffee size={16} />
                      Coffee Chat
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Background Orbs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-float opacity-50" />
      <div
        className="absolute bottom-1/4 right-0 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-float opacity-50"
        style={{ animationDelay: "6s" }}
      />
    </section>
  );
};

export default Contact;
