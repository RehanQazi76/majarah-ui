/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        aeonik: ['"Aeonik TRIAL"', 'sans-serif'], 
        inter: ['Inter', 'sans-serif'],// ✅ Added Aeonik TRIAL
      },
      animation: {
        'border-glow': 'glow 2s linear infinite',
        'meteor-effect': 'meteor-effect linear infinite',
        'gradient-x': 'gradient-x 4s ease infinite',
        'spin-smooth': 'spin 4s linear infinite',
        spotlight: 'spotlight 1.8s ease-out forwards',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 10px #7AC1FF',
          },
          '50%': {
            boxShadow: '0 0 20px #7AC1FF',
          },
        },
        'meteor-effect': {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(600px)',
            opacity: '0',
          },
        },
        spotlight: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '0.25' },
          '100%': { transform: 'scale(1)', opacity: '0.15' },
        },
      },
    },
  },
  plugins: [],
};
