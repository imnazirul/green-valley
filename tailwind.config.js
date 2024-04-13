/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: '"Jost", sans-serif',
        mulish: '"Mulish", sans-serif',
        roboto: '"Roboto", sans-serif',
      },

      colors: {
        blue: {
          999: "#27AE60",
        },
        btn: {
          1: "#3B7197",
        },
        darkBlue: {
          1: "#0054A5",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
