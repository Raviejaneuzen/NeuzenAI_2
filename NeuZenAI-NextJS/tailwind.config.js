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
        primary: {
          orange: '#f97316',
          'orange-dark': '#ea580c',
        },
        success: {
          green: '#10b981',
          'green-dark': '#059669',
        }
      },
    },
  },
  plugins: [],
}