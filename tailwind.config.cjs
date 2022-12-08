/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        bgGradientLeft: "hsl(214, 47%, 23%)",
        bgGradientRight: "hsl(237, 49%, 15%)",
        darkelement: "hsl(209, 23%, 22%)",
        lightbg: "hsl(0, 0%, 98%)",
        lighttext: "hsl(200, 15%, 8%)",
        lightelement: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
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
}
