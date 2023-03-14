/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        policypink: "#FF585D",
        policyorange: "#FFB549",
      },
    },
  },
  plugins: [],
};
