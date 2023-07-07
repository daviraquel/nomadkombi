/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBgOp: "#10384fcc",
        whiteBgOp: "rgba(255, 255, 255, 0.4)",
        white: "#fff",

        lighterGray: "#f6f6f7",
        lightGray: "#dfdedd",
        gray: "#b3bfc6",
        darkGray: "#95a5a6",
        grayBgOp: "#95a5a6cc",

        mainBlue: "#6c9bc7",
        mainBlueOp: "#6c9bc799",
        brightBlue: "#00bcff",
        brightBlueOp: "#00bcffcc",
        blue: "#0091df",
        midBlue: "#00617f",
        darkBlue: "#10384f",
        darkBlueOp: "#10384fcc",

        brightGreen: "#89d329",
        brightGreenOp: "#89d329cc",
        green: "#66b512",
        midGreen: "#2b6636",
        darkGreen: "#004422",
        darkGreenOp: "#004422cc",

        fuchsia: "#ff3162",
        fuchsiaOp: "#ff3162cc",
        raspberry: "#d30f4b",
        midPurple: "#624963",
        darkPurple: "#443247",
        darkPurpleOp: "#443247cc",

        yellow: "#ffff00",
        red: "#ff3838",
      },
      fontFamily: {
        arial: ["arial", "sans-serif"],
      },
      fontSize: {
        xlMobile: "24px",
        xlDesktop: "40px",
      },
      textShadow: {
        normal: "2px 2px 4px black",
        none: "0px 0px 0px black",
      },
      boxShadow: {
        normal: "2px 2px 4px black",
      },
      skew: {
        12: "-12deg",
      },
    },
  },
  plugins: [],
}
