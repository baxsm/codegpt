/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode support
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        backgroundLight: '#F4F4F4',
        backgroundDark: '#212121',

        // Text colors
        textLight: '#FFFFFF',
        textDark: '#1A1A1A',

        lightBlue: '#4fd1c5',
      },
      screens: {
        // Define your custom breakpoints here
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}

