/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include .jsx and .tsx for React files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')] ,
}
