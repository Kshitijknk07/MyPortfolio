import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Technical Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Animated bottom border on scroll */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollY.get() > 50 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`nav-particle-${i}`}
            className="absolute w-1 h-1 bg-pink-400/30 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: "50%",
            }}
            animate={{
              y: [-5, 5, -5],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-2xl font-bold"
          >
            {/* Creative logo with floating elements */}
            <div className="relative">
              <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                KNK
              </span>

              {/* Floating dots around logo */}
              <motion.div
                className="absolute -top-1 -right-2 w-2 h-2 bg-pink-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-1 -left-2 w-1.5 h-1.5 bg-black/40 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group transition-all duration-300"
                style={{
                  color: "#000000",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#ec4899";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "#000000";
                }}
              >
                {item.name}
                {/* Creative hover underline */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-pink-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating particle on hover */}
                <motion.div
                  className="absolute -top-2 left-1/2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [-2, -8, -2],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.a>
            ))}
          </div>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="p-2 rounded-lg transition-all duration-300 relative group"
                  style={{
                    color: "#666666",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "#ec4899";
                    (e.target as HTMLElement).style.backgroundColor =
                      "rgba(236, 72, 153, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "#666666";
                    (e.target as HTMLElement).style.backgroundColor =
                      "transparent";
                  }}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <Button
                variant="default"
                className="hidden md:flex transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                style={{
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.boxShadow =
                    "0 6px 20px rgba(236, 72, 153, 0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.15)";
                }}
              >
                <span className="relative z-10">Let's Talk</span>

                {/* Hover shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-all duration-300"
              style={{
                color: "#000000",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor =
                  "rgba(236, 72, 153, 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "transparent";
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="pt-6 pb-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="block py-2 transition-all duration-300 relative"
                style={{ color: "#000000" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#ec4899";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "#000000";
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Mobile Social Links */}
            <div
              className="flex items-center space-x-4 pt-4 border-t"
              style={{ borderTopColor: "rgba(0, 0, 0, 0.1)" }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    scale: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="p-2 transition-colors duration-300"
                  style={{ color: "#666666" }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "#ec4899";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "#666666";
                  }}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Button
                variant="default"
                className="w-full transition-all duration-300"
                style={{
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  border: "none",
                }}
              >
                Let's Talk
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
