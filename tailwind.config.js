/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'Cairo Fallback', 'Tahoma', 'Arial', 'sans-serif'],
        'cairo-light': ['Cairo', 'sans-serif', 'font-weight: 300'],
        'cairo-regular': ['Cairo', 'sans-serif', 'font-weight: 400'],
        'cairo-medium': ['Cairo', 'sans-serif', 'font-weight: 500'],
        'cairo-semibold': ['Cairo', 'sans-serif', 'font-weight: 600'],
        'cairo-bold': ['Cairo', 'sans-serif', 'font-weight: 700'],
        'cairo-extrabold': ['Cairo', 'sans-serif', 'font-weight: 800'],
        'cairo-black': ['Cairo', 'sans-serif', 'font-weight: 900'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-delay': 'fadeIn 0.8s ease-in 0.3s forwards',
        'slide-up': 'slideUp 0.3s ease-out',
        'shrink-width': 'shrinkWidth 3s linear forwards',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shrinkWidth: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animationDelay: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}