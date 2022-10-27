/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "360px",
      xs: "475px",
      sm: "640px",
      md: "830px",
      bml: "912px",
      lg: "1024px",
      xl: "1280px",
      "1xl": "1315px",
      "1.5xl": "1420px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {},
  },
  plugins: [],
};
