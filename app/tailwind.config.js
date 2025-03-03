
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        shrikhand: ["Shrikhand", "serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}