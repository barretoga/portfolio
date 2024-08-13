/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        'gradient-right': 'rgba(105, 2, 3, 1)',
        'gradient-left': 'rgba(26, 2, 37, 1)',
        'gradient-background': 'rgba(37, 7, 61, 1)',
        'gradient-background-right': 'rgba(105, 2, 3, 1)',
        'gradient-background-left': 'rgba(26, 2, 37, 1)',
        'color-showcase-header': 'rgba(168, 24, 73, 1)',
        'gradient-showcase-header-left': 'rgba(239, 21, 23, 1)',
        'btn-background': 'rgba(0, 0, 0, 0.2)',
        'btn-background-hover': 'rgba(255, 255, 255, 0.1)',
        'btn-outline': 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
