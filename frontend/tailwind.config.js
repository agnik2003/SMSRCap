/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {
extend: {
  colors: {
    brand: {
      black: "#050505",
      dark: "#0a0a0a",
      green: "#00ff41", // Matrix/Neon Green
      greenGlow: "rgba(0, 255, 65, 0.5)"
    }
  },
  boxShadow: {
    'neon': '0 0 10px rgba(0, 255, 65, 0.5), 0 0 20px rgba(0, 255, 65, 0.3)',
    'neon-hover': '0 0 15px rgba(0, 255, 65, 0.8), 0 0 30px rgba(0, 255, 65, 0.5)'
  }
},
},
plugins: [],
}