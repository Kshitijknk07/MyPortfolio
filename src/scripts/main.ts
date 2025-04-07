import ContextCursor from "../libs/context-cursor/contextCursor";
var mq = window.matchMedia("(min-width: 640px)");
if (mq.matches) {
  // Initialize the context cursor for desktop devices
  const cursor = new ContextCursor({
    cursorSize: 24,
    cursorColor: "rgba(255, 255, 255, 0.7)",
    hoverScale: 1.8,
  });

  // Re-add hover listeners after page content changes
  document.addEventListener("astro:page-load", () => {
    cursor.addHoverListeners();
  });
}
