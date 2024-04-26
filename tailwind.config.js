/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("flowbite/plugin")],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Serif"],
        notoDis: ["Noto Serif Display"],
        ibm: ["IBM Plex Sans"],
        satoshi: ["satoshi"],
        varRound: ["Varela Round"],
        AlbertSans: ["Albert Sans"],
        JetBrains: ["JetBrains Mono"],
      },
      colors: {
        inputColor: "#ebf0f7",
      },
    },
  },
};
