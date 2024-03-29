/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "ar-", // Prefix all classes to prevent CSS collisions
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
};
