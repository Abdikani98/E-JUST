/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   slideLeft:{
      //   "0%": {transform: translatex("-100%")},
      //   "100%": {transform: translatex("0")}
      //   }
      // },
      // fideLeft: "slideLeft 3s",
      colors: {
        primaryColor: "#001A6E",
        secondaryColor: "#80C4E9",
        textColor: "#fff"
      }
    },
  },
  plugins: [],
}

