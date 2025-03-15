/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',      // Indigo
        secondary: '#8b5cf6',    // Purple
        accent: '#06b6d4',       // Cyan
        lightHover: '#f0f9ff',   // Light blue hover
        darkHover: '#1e1b4b',    // Dark indigo
        darkTheme: '#0f172a',    // Slate dark
        lightBg: '#f8fafc',      // Slate light
        success: '#22c55e',      // Green
        warning: '#f59e0b',      // Amber
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
        'colored': '4px 4px 0 #6366f1',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};
