/**
 * Context Cursor - A custom cursor implementation
 */
export default class ContextCursor {
  constructor(options = {}) {
    // Default options
    this.options = {
      cursorSize: 20,
      cursorColor: "rgba(255, 255, 255, 0.5)",
      hoverScale: 1.5,
      ...options,
    };

    this.cursor = null;
    this.isActive = false;
    this.mouseX = 0;
    this.mouseY = 0;

    this.init();
  }

  init() {
    // Create cursor element
    this.cursor = document.createElement("div");
    this.cursor.classList.add("context-cursor");

    // Apply basic styles
    Object.assign(this.cursor.style, {
      position: "fixed",
      width: `${this.options.cursorSize}px`,
      height: `${this.options.cursorSize}px`,
      borderRadius: "50%",
      backgroundColor: this.options.cursorColor,
      pointerEvents: "none",
      zIndex: 9999,
      transform: "translate(-50%, -50%)",
      transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
      opacity: 0,
    });

    document.body.appendChild(this.cursor);

    // Add event listeners
    document.addEventListener("mousemove", this.onMouseMove.bind(this));
    document.addEventListener("mouseenter", this.onMouseEnter.bind(this));
    document.addEventListener("mouseleave", this.onMouseLeave.bind(this));

    // Add hover effect to interactive elements
    this.addHoverListeners();

    // Initial update
    this.update();
  }

  onMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  onMouseEnter() {
    this.isActive = true;
    this.cursor.style.opacity = 1;
  }

  onMouseLeave() {
    this.isActive = false;
    this.cursor.style.opacity = 0;
  }

  addHoverListeners() {
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        this.cursor.style.transform = `translate(-50%, -50%) scale(${this.options.hoverScale})`;
      });

      el.addEventListener("mouseleave", () => {
        this.cursor.style.transform = "translate(-50%, -50%) scale(1)";
      });
    });
  }

  update() {
    if (this.isActive) {
      this.cursor.style.left = `${this.mouseX}px`;
      this.cursor.style.top = `${this.mouseY}px`;
    }

    requestAnimationFrame(this.update.bind(this));
  }

  destroy() {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseenter", this.onMouseEnter);
    document.removeEventListener("mouseleave", this.onMouseLeave);

    if (this.cursor && this.cursor.parentNode) {
      this.cursor.parentNode.removeChild(this.cursor);
    }
  }
}
