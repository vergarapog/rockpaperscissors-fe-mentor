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
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        scissorsGradient1: "hsl(40, 84%, 53%)",
        scissorsGradient2: "hsl(39, 89%, 49%)",
        paperGradient1: "hsl(230, 89%, 65%)",
        paperGradient2: " hsl(230, 89%, 62%)",
        rockGradient1: "hsl(349, 70%, 56%)",
        rockGradient2: "hsl(349, 71%, 52%)",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
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
