/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          strong: "#ca3300",
        },
        dark: "#0c0c0d",
      },
      borderColor: {
        DEFAULT: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
