/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //Añadir colores
    extend: {
      colors: {
        "blanco": "#ffffff"
      },
      //spacing - medida
      width:{
        "42": "170px"
      },
      //screens para modificar breakpoints
    },
  },
  plugins: [],
}

