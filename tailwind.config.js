/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAF3E0",
        secondary: "#D9C7A3",
        accent: "#4A7C2C",
        sage: "#B2C6B8",
      },
    },
  },
  plugins: [],
};
