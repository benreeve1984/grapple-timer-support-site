/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'grapple-orange': '#FF6B4A',
        'grapple-blue': '#4A90E2',
        'grapple-green': '#50E3C2',
        'grapple-dark': '#1A1A1A',
      },
    },
  },
  plugins: [],
}