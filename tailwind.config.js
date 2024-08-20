/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage:{
        'Background': "url('../img/Background.png')",
        'new':"url('../img/Quote mark.png')"
      }
    },
  },
  plugins: [],
}
