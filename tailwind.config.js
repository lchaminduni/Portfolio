/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "slide 7s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%)" },  // Start from the left
          "100%": { transform: "translateX(20%)" }, // End at the right
        },
      },
    },
  },
  plugins: [],
};
