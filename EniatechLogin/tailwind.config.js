/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'azul': '#0000A0',
        'rojo': '#FF0000',
        'gris': '#D0D0D0',
        'azul-claro': '#00DCFA',
        'verde': '#A6DB00'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}

