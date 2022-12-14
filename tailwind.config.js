/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  // plugins: [require("flowbite/plugin")],
  theme: {
    extend: {},
    fontFamily: {
      jost: ["Jost"],
      inter: ["Inter"],
      Plus: ["Plus Jakarta Sans"],
      Space: ["Space Grotesk"],
    },
  },
};
