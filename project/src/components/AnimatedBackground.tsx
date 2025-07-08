import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
  hue: number;
}

interface FloatingShape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: "circle" | "square" | "triangle";
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const shapesRef = useRef<FloatingShape[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use devicePixelRatio for crispness and less pixel work
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);
    };

    // Reduce particles/shapes on small screens
    const getParticleCount = () => (window.innerWidth < 600 ? 10 : 25);
    const getShapeCount = () => (window.innerWidth < 600 ? 3 : 8);

    // Initialize particles with subtle movement
    const initParticles = () => {
      particlesRef.current = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          life: Math.random() * 300 + 200,
          maxLife: 300,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.15 + 0.05,
          hue: Math.random() * 60 + 200, // Blue to purple range
        });
      }
    };

    // Initialize floating geometric shapes
    const initShapes = () => {
      shapesRef.current = [];
      const shapeTypes: ("circle" | "square" | "triangle")[] = [
        "circle",
        "square",
        "triangle",
      ];
      const count = getShapeCount();
      for (let i = 0; i < count; i++) {
        shapesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 20 + 10,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          opacity: Math.random() * 0.08 + 0.02,
          type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
      initShapes();
    });

    initParticles();
    initShapes();

    let running = true;
    // Pause animation when tab is not visible
    const handleVisibility = () => {
      running = document.visibilityState === "visible";
      if (running) animate();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const drawShape = (shape: FloatingShape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.globalAlpha = shape.opacity;

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size);
      gradient.addColorStop(0, `hsla(220, 30%, 70%, ${shape.opacity})`);
      gradient.addColorStop(1, `hsla(220, 30%, 70%, 0)`);

      ctx.fillStyle = gradient;
      ctx.strokeStyle = `hsla(220, 30%, 60%, ${shape.opacity * 0.5})`;
      ctx.lineWidth = 1;

      switch (shape.type) {
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          break;
        case "square":
          ctx.fillRect(
            -shape.size / 2,
            -shape.size / 2,
            shape.size,
            shape.size
          );
          ctx.strokeRect(
            -shape.size / 2,
            -shape.size / 2,
            shape.size,
            shape.size
          );
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(-shape.size / 2, shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          break;
      }

      ctx.restore();
    };

    const animate = () => {
      if (!running) return;
      timeRef.current += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animate particles with subtle breathing effect
      particlesRef.current.forEach((particle) => {
        particle.x +=
          particle.vx + Math.sin(timeRef.current + particle.x * 0.01) * 0.1;
        particle.y +=
          particle.vy + Math.cos(timeRef.current + particle.y * 0.01) * 0.1;
        particle.life--;

        // Wrap around screen
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Reset particle if dead
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Draw particle with subtle glow
        const alpha = (particle.life / particle.maxLife) * particle.opacity;
        const size =
          particle.size +
          Math.sin(timeRef.current * 2 + particle.x * 0.01) * 0.3;

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          size * 3
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 40%, 70%, ${alpha})`);
        gradient.addColorStop(
          0.5,
          `hsla(${particle.hue}, 40%, 70%, ${alpha * 0.3})`
        );
        gradient.addColorStop(1, `hsla(${particle.hue}, 40%, 70%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Animate floating shapes
      shapesRef.current.forEach((shape) => {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;

        // Wrap around screen
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

        drawShape(shape);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 30%, #e2e8f0 70%, #cbd5e1 100%)",
      }}
    />
  );
}
