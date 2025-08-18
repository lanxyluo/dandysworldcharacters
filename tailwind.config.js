/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a0a',
        'card-bg': '#1a1a1a',
        'border-gray': '#333333',
        'rainbow': 'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080)'
      },
      animation: {
        'rainbow-border': 'rainbow-border 3s linear infinite',
      },
      keyframes: {
        'rainbow-border': {
          '0%, 100%': { 'border-image': 'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080) 1' },
          '50%': { 'border-image': 'linear-gradient(45deg, #ff0080, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff) 1' }
        }
      }
    },
  },
  plugins: [],
}
