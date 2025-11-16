/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        infratech: {
          black: '#0A0A0A',
          gold: '#FFD700',
          slate: '#111827',
        },
      },
    },
  },
  plugins: [],
};
