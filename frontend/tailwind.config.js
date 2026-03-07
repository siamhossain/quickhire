/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            primary: "#000000",
            secondary: "#1E293B",
            border: "#E5E7EB",
        }
    },
  },
  plugins: [],
};