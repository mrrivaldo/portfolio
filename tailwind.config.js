/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#c8ff00',
        'dark-gray': '#0f0f0f',
        'light-gray': '#f5f5f5',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        condensed: ['Bebas Neue', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};