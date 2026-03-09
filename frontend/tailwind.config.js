/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // App folder
    "./components/**/*.{js,ts,jsx,tsx}", // Components folder
    "./pages/**/*.{js,ts,jsx,tsx}"       // In case you have pages folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4640DE",
        secondary: "#26A4FF",
        border: "#E5E7EB",
        text: "#7C8493",
        nav: "#515B6F",
        heading: "#25324B",
        siam: "#26A4FF"
      },
      fontFamily: {
        epilogue: ["var(--font-epilogue)"],
        clash: ['"ClashDisplay"', "sans-serif"],
      },
      boxShadow: {
        "filter-box":
          "0px 79px 128px rgba(192, 192, 192, 0.09), 0px 28.8363px 46.7221px rgba(192, 192, 192, 0.0598508), 0px 13.9995px 22.6827px rgba(192, 192, 192, 0.0475723), 0px 6.86281px 11.1195px rgba(192, 192, 192, 0.0380675), 0px 2.71357px 4.39666px rgba(192, 192, 192, 0.0270615)",
      },
    },
  },
  plugins: [],
};