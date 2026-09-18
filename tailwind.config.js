/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf3',
          100: '#f9f1dc',
          200: '#f1e0b3',
          300: '#e6cb85',
          400: '#dbb35c',
          500: '#c9a24a', // primary gold
          600: '#ad8639',
          700: '#8c692d',
          800: '#725629',
          900: '#5f4826',
          950: '#362611',
        },
        ivory: '#fffdf8',
        cream: '#faf6ee',
        charcoal: '#2b2622',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        script: ['"Alex Brush"', 'cursive'],
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e6cb85 0%, #c9a24a 50%, #8c692d 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'spin-slow': 'spin 12s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
