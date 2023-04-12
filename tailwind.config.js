/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend:
    {
      colors: {
        phOrange: '#FFA500',
      },
      fontFamily: {
        montserrat: ['Montserrat'],

      },
    },
    
    
  },
  plugins: [],
}