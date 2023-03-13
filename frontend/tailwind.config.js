/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'red':{
        'light': '#FDE6E6',
        'light-h': '#FCDADA',
        'light-a': '#F8B2B2',

        'medium': '#E90606',
        'medium-h': '#D20505',
        'medium-a': '#BA0505',

        'dark': '#AF0505',
        'dark-h': '#8C0404',
        'dark-a': '#690303',
      },
      'blue':{
        'light': '#E6F2FB',
        'light-h': '#D9EBF9',
        'light-a': '#B0D6F3',

        'medium': '#007BD9',
        'medium-h': '#006FC3',
        'medium-a': '#0062AE',

        'dark': '#005CA3',
        'dark-h': '#004A82',
        'dark-a': '#003762',
      },
      'grey':{
        'light': '#EEEFF0',
        'light-h': '#E5E7E8',
        'light-a': '#CACDCF',

        'medium': '#545D64',
        'medium-h': '#4C545A',
        'medium-a': '#434A50',

        'dark': '#3F464B',
        'dark-h': '#32383C',
        'dark-a': '#262A2D',
      },
    },
    fontSize: {
      sm:'0.75rem',
      base: '1rem',
      lg:'1.25rem',
      xl: '2.125rem',
      '2xl': '3rem',

    },
    borderRadius: {
      'none': '0',
      rounded : '20px',
    },
    extend: {
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '24px',
        '5': '32px',
        '6': '64px',
      },
    },
  },
  plugins: [],
}