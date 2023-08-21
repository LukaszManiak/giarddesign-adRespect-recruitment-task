/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightBrown: "#DCC1AB",
        creamyWhite: "#F5F0EC",
        green: "#1B5B31",
        lightBlack: "#111111",
      },
    },
  },
  plugins: [],
};
