/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#34D399", // mint accent
        sky: "#93C5FD", // soft blue accent
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
  extend: {
  colors: {
    accent: "#34D399",       // mint
    "accent-dark": "#059669",  // darker mint for contrast
    mint: "#D7F5E9",           // soft mint background
  },
},

};
