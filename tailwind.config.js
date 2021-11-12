/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E58FF',
          50: '#E6EBFF',
          100: '#D1DAFF',
          200: '#A8BAFF',
          300: '#8099FF',
          400: '#5779FF',
          500: '#2E58FF',
          600: '#0031F5',
          700: '#0026BD',
          800: '#001B85',
          900: '#000F4D',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
