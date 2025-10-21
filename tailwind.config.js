/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b1020',
        card: '#121733',
        accent: '#3ccfcf',
        accent2: '#2aa9b0',
      },
      boxShadow: {
        glow: '0 0 30px rgba(124, 58, 237, 0.35)',
      },
      backgroundImage: {
        'grad-radial': 'radial-gradient(1200px 600px at 100% 0%, rgba(60, 207, 207, 0.20), transparent 60%)',
        'grad-radial-2': 'radial-gradient(1200px 600px at 0% 100%, rgba(42, 169, 176, 0.18), transparent 60%)',
        'grad-linear': 'linear-gradient(135deg, rgba(10,16,36,1) 0%, rgba(18,23,51,1) 50%, rgba(10,16,36,1) 100%)'
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
