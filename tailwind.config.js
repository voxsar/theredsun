/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'red-ncs': '#bf1e2eff',
        'dim-gray': '#6e6e6eff',
        'light-green': '#beef9eff',
        'olivine': '#a6c36fff',
        'peach': '#f4b393ff',
      },
      fontFamily: {
        sans: ['Tiempos Text', 'Georgia', 'serif'],
        title: ['Styrene A', 'Arial', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
      },
    },
  },
  plugins: [],
};