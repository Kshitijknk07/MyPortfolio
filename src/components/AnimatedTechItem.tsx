import { motion } from "framer-motion";
import { useState } from "react";

interface TechItemProps {
  name: string;
  icon: string;
  description: string;
  category: string;
}

export default function AnimatedTechItem({
  name,
  icon,
  description,
  category,
}: TechItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="tech-item bg-slate-800 rounded-lg p-4 shadow-lg transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-3">
        <img src={icon} alt={name} className="w-8 h-8 mr-2" />
        <h3 className="text-xl font-bold">{name}</h3>
      </div>

      <motion.p
        className="text-sm text-gray-300"
        animate={{ height: isHovered ? "auto" : "2.5rem", overflow: "hidden" }}
      >
        {description}
      </motion.p>

      <div className="mt-3">
        <span className="inline-block bg-blue-600 text-xs px-2 py-1 rounded-full">
          {category}
        </span>
      </div>
    </motion.div>
  );
}
