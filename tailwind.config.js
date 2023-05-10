/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: '#F0F0F5',
      primary: '#3C50C8',
      text: '#0A143C',
      greyText: '#8C96A0',
      greyEl: '#F0F0F5',
      white: '#FFFFFF',
    },
    fontFamily:{
      sans: ['Daikon','system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
    },
    extend: { 
    }

  },
  plugins: [],
}

