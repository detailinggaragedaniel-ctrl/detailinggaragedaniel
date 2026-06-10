/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#01414a',
        card: '#01414a',
        primary: '#F5F1ED',
        secondary: '#A39994',
        accent: '#0a7c8c',
        warmBrown: '#5E4B43',
        border: 'rgba(10,124,140,0.18)',
        redAccentDark: '#2C0F12',
        redAccentMid: '#4A1518',
        redAccentLight: '#6B1E23',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Vollkorn', 'Georgia', 'serif'],
        serif: ['Vollkorn', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
