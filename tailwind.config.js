/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#111B16",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        customGray: "#B8BBB9",
        customGreen:"#047135",
        customRed:"#942821",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        medieval: ["'MedievalSharp'", "serif"],
        adobe:  ["geneo-std", 'sans-serif'],
        adobe2: ["amandine", 'sans-serif'],
      },
      animation: {
        scroll: "scroll 5s linear infinite", // Animazione infinita
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translate(100%)" },
          "100%": { transform: "translate(-100%)" },
        },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
},
};