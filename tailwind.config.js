/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    backgroundPosition: {
      "right-20%": "top right 20%",
    },
    animation: {
      "bounce-0.5": "bounce 0.5s infinite",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#39B7DF",
        secondary: "#7755D8",
        gradient: {
          g1: "#0E3062",
          g2: "#121D3A",
        },
        dark: "#2B282F",
        warm: "#FE5F50",
      },
      opacity: {
        38: "0.38",
        85: "0.85",
        87: "0.87",
      },
      fontFamily: {
        primary: ["Noto Sans TC", "sans-serif"],
      },
      spacing: {
        auto: "auto",
      },
    },
  },
  variants: {
    extend: false,
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
