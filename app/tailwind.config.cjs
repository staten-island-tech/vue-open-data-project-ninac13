module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signika: ["Signika Negative", "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["nord"],
  },
}
