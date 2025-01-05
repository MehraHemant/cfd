/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screen:{
        '7xl': '1940px',
      },
      colors: {
        primary: '#CD0159',
        secondary: '#FF92C9'
      },
      fontFamily: {
        'rubik-dirt': ['"Rubik Dirt"'],
        'didact': ['"Didact Gothic"'],
        'body': ['Montserrat', 'sans'],
        'sans': ['Montserrat', 'sans']
      }
    }
  },
  plugins: [],
};
