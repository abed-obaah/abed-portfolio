/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          strong: "#ca3300",
        },
        dark: "#0a0a0a",
        card: " rgb(255 255 255 / .015)",
      },
      borderColor: {
        DEFAULT: "#1a1a1a",
      },
      animation: {
        title: "title 3s ease-out forwards",
        "fade-in": "fade-in 3s ease-in-out",
      },
      keyframes: {
        title: {
          "0%": {
            opacity: 0,
            "line-height": "0%",
            transform: "scale(1.25)",
          },
          "25%": {
            opacity: 0,
            "line-height": "0%",
            transform: "scale(1.25)",
          },
          "80%": {
            opacity: 1,
            "line-height": "50%",
          },
          "100%": {
            opacity: 1,
            "line-height": "100%",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "75%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
