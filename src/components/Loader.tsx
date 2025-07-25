import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("Initializing...");

  const loadingMessages = [
    "Initializing...",
    "Loading components...",
    "Setting up animations...",
    "Preparing portfolio...",
    "Finalizing layout...",
    "Almost ready!",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setStatusMessage("Complete!");
          setTimeout(onComplete, 500);
          return 100;
        }

        // Update status message based on progress
        const messageIndex = Math.floor((prev / 100) * loadingMessages.length);
        if (messageIndex < loadingMessages.length) {
          setStatusMessage(loadingMessages[messageIndex]);
        }

        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [loadingMessages, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "#FFFFFF" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center space-y-8">
        {/* Logo/Brand */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
            KNK
          </div>
          {/* Creative rotating elements around KNK */}
          {/* Rotating code brackets */}
          <motion.div
            className="absolute -inset-6 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-pink-500">
                {"<"}
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-pink-500">
                {">"}
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-black/60">
                {"{"}
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-black/60">
                {"}"}
              </div>
            </div>
          </motion.div>

          {/* Rotating geometric shapes */}
          <motion.div
            className="absolute -inset-8"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2"
                style={{
                  backgroundColor: i % 2 === 0 ? "#ec4899" : "#000000",
                  left: `${50 + 35 * Math.cos((i * Math.PI) / 3)}%`,
                  top: `${50 + 35 * Math.sin((i * Math.PI) / 3)}%`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Pulsing rings */}
          <motion.div
            className="absolute -inset-10 border-2 border-pink-300/40 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -inset-12 border border-black/20 rounded-full"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-medium" style={{ color: "#000000" }}>
            Loading Portfolio
          </h2>

          {/* Dynamic status message */}
          <motion.p
            className="text-sm font-medium"
            style={{ color: "#ec4899" }}
            key={statusMessage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {statusMessage}
          </motion.p>

          {/* Creative Progress Animation */}
          <div className="relative w-64 h-8 mx-auto">
            {/* Background track */}
            <div className="absolute inset-0 bg-gray-200 rounded-full" />

            {/* Animated progress */}
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{ backgroundColor: "#f3f4f6" }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-pink-500 to-pink-700 relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: [-100, 300] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Progress dots */}
            <div className="absolute inset-0 flex items-center justify-between px-2">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full"
                  style={{
                    backgroundColor:
                      progress > i * 12.5 ? "#FFFFFF" : "#00000020",
                  }}
                  animate={{
                    scale: progress > i * 12.5 ? [1, 1.5, 1] : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: progress > i * 12.5 ? Infinity : 0,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Progress percentage */}
          <motion.div
            className="text-sm font-mono font-bold"
            style={{ color: "#000000" }}
            key={progress}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {progress}%
          </motion.div>
        </motion.div>

        {/* Enhanced floating elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: i % 4 === 0 ? "8px" : i % 3 === 0 ? "6px" : "4px",
              height: i % 4 === 0 ? "8px" : i % 3 === 0 ? "6px" : "4px",
              backgroundColor:
                i % 5 === 0 ? "#ec4899" : i % 3 === 0 ? "#f472b6" : "#00000015",
              borderRadius: i % 2 === 0 ? "50%" : "2px",
              left: `${10 + i * 4}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-8, 8, -8],
              opacity: [0.1, 0.9, 0.1],
              scale: [0.5, 1.3, 0.5],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 4 + i * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.08,
            }}
          />
        ))}

        {/* Code rain effect */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-xs font-mono opacity-30"
            style={{
              left: `${5 + i * 12}%`,
              color: i % 2 === 0 ? "#ec4899" : "#000000",
            }}
            animate={{
              y: [-50, 800],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
          >
            {["<>", "{}", "[]", "//", "&&", "||", "=>", "++"][i]}
          </motion.div>
        ))}

        {/* Geometric pattern animations */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute opacity-20"
            style={{
              width: "20px",
              height: "20px",
              border: "2px solid",
              borderColor: i % 2 === 0 ? "#ec4899" : "#000000",
              left: `${80 + i * 3}%`,
              top: `${15 + i * 12}%`,
            }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 0.5, 1, 1.5, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.4,
            }}
          />
        ))}

        {/* Complex orbiting system */}
        {[...Array(3)].map((layer) => (
          <div key={`layer-${layer}`}>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`orbit-${layer}-${i}`}
                className="absolute rounded-full"
                style={{
                  width: layer === 0 ? "8px" : layer === 1 ? "6px" : "4px",
                  height: layer === 0 ? "8px" : layer === 1 ? "6px" : "4px",
                  backgroundColor: layer % 2 === 0 ? "#ec4899" : "#000000",
                  opacity: 0.7 - layer * 0.2,
                }}
                animate={{
                  x:
                    Math.cos((i * Math.PI) / 2 + (layer * Math.PI) / 6) *
                    (60 + layer * 20),
                  y:
                    Math.sin((i * Math.PI) / 2 + (layer * Math.PI) / 6) *
                    (60 + layer * 20),
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 5 + layer,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.25 + layer * 0.5,
                }}
              />
            ))}
          </div>
        ))}

        {/* Pulse waves from center */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute border border-pink-400/30 rounded-full"
            style={{
              width: "100px",
              height: "100px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [0, 3],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 1,
            }}
          />
        ))}

        {/* Background grid animation */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(10)].map((_, row) => (
            <div key={`row-${row}`} className="flex">
              {[...Array(10)].map((_, col) => (
                <motion.div
                  key={`cell-${row}-${col}`}
                  className="w-10 h-10 border border-black/20"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: (row + col) * 0.1,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
