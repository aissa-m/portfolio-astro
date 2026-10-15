/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Pantone Sea Angel 14-4315
        sea: "#98BFCB",
        // Pantone Super Sonic 18-4143
        sonic: "#4178BC",
        // Pantone Lemon Tonic 12-0645
        lemon: "#FCF951",
        ink: "#0F1B2D",
        paper: "#F7F7F2",
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        'blob': 'blob 18s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee 40s linear infinite reverse',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(8%, -10%) scale(1.15)' },
          '66%': { transform: 'translate(-6%, 8%) scale(0.95)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
