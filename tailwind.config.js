/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        'charcoal': '#212121',
        'sage': '#6D9886',
        'cream': '#D9CAB3',
        'light': '#F6F6F6',
      },
    },
  },
  plugins: [],
};
