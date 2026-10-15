/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fbf7f0',
        beige: '#eee2d2',
        sand: '#d9c2a9',
        brown: {
          DEFAULT: '#684a37',
          light: '#835f47',
          dark: '#543b2c',
        },
        deep: '#35271f',
        muted: '#79695d',
        paper: '#fffdf9',
        softbg: '#f2e9dd',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 18px 45px rgba(65, 43, 28, 0.09)',
        'warm-hover': '0 20px 35px rgba(104, 74, 55, 0.16)',
        'soft': '0 4px 15px rgba(53, 39, 31, 0.03)',
      },
    },
  },
  plugins: [],
}
