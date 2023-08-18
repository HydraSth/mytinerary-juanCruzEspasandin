/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend:{
      colors: {
        'theme':'#fff',
        'inverse-theme':'#4b4b4b',
        'primary': '#4f46e5',
        'secondary': '#ebebeb'
      },
      height: {
        'footer':'10%',
      }
    },
  },
  plugins: [],
}

