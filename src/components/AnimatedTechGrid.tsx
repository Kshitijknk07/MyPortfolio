import { motion } from "framer-motion";
import AnimatedTechItem from "./AnimatedTechItem";

interface TechItem {
  name: string;
  icon: string;
  description: string;
  category: string;
}

interface AnimatedTechGridProps {
  techItems: TechItem[];
  title: string;
}

export default function AnimatedTechGrid({
  techItems,
  title,
}: AnimatedTechGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="py-10">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {techItems.map((tech, index) => (
          <AnimatedTechItem
            key={index}
            name={tech.name}
            icon={tech.icon}
            description={tech.description}
            category={tech.category}
          />
        ))}
      </motion.div>
    </div>
  );
}
