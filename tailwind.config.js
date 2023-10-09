/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        shabnam:['Shabnam' ,'Shabnam'],
        display:['Shabnam' ,'Shabnam']
      },
      colors:{
        themeColorB: "#7CD4D3",
        themeColorO: "#EE8A52",
        themeColorP :"#D47C9E",
        themeColorBB:"#7C93D4",
        themeColorOr:"#D49C7C",
        themeColorGG:"#7CD4B2"
      }
    },
  },
  plugins: [],
}
