/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
      },
      dropShadow: {
        glow: "0 0 10px rgba(34,211,238,0.5)",
      },
    },
  },
  plugins: [],
};
