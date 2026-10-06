/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-cadet": "#25344F",
        "slate-gray": "#617891",
        tan: "#D5B893",
        coffee: "#6F4038",
        cream: "#F8F5F0",
      },
    },
  },
  plugins: [],
};