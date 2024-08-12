/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        gradientRight: 'rgba(105, 2, 3, 1)',
        gradientLeft: 'rgba(26, 2, 37, 1)',
        gradientBackground: 'rgba(37, 7, 61, 1)',
        gradientBackgroundRight: 'rgba(105, 2, 3, 1)',
        gradientBackgroundLeft: 'rgba(26, 2, 37, 1)',
        showcaseHeader: 'rgba(168, 24, 73, 1)',
        gradientShowcaseHeaderLeft: 'rgba(239, 21, 23, 1)',
        btnBackground: 'rgba(0, 0, 0, 0.2)',
        btnBackgroundHover: 'rgba(255, 255, 255, 0.1)',
        btnOutline: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
