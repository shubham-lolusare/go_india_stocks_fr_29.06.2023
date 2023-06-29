/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: { max: "1250px" },
      sm: { max: "912px" },
      mobile: { max: "550px" },
      xs: { max: "300px" },
      tall: { raw: "(max-height: 740px)" },
    },
    extend: {
      colors: {
        thematicColor: {
          DEFAULT: "#14397d",
        },
        borderColor: {
          DEFAULT: "#77b5d9",
        },
        bgColor: {
          DEFAULT: "#f5f5f7",
        },
      },
      animation: {
        "scroll-right-to-left": "rtl 40s infinite linear",
        "scroll-left-to-right": "ltr 20s infinite linear",
      },
      keyframes: {
        rtl: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        ltr: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
