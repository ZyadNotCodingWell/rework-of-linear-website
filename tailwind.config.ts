import type { Config } from "tailwindcss";

const config: Config = {
  container:{
    center: true,
    self: "center",
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transform: true,
      colors: {
        'custom-white': '#FFFFFA',
        'custom-black': '#000000',
        'custom-gray': '#F7F7F7',
      },
      lineHeight: {
        10: '1.0752',
        11: '1.23',
        12: '1.75',
        15: '2.25',
        20: '3',
      },
      textColor: {
        'card': '#F7F7F7',
        'grey': 'rgb(174, 174, 174)',
        'success-green': '#71CE60',
        'error-red': '#FF0000',
        'warning-yellow': '#FFB300',
      },
      animation: {
        'ease-in-out': 'ease-in-out 0.5s',
      },
      backgroundImage :{
        'custom-gradient': 'linear-gradient(155deg, rgba(0,0,0,1) 8%, rgba(35,35,35,1) 24%, rgba(0,0,0,1) 45%);',
        'section' : 'linear-gradient(180deg, transparent, rgba(97, 106, 115, .22) 30%, rgba(97, 106, 115, .22) 70%, rgba(97, 106, 115, 0));',
        'sectionProduct' : 'linear-gradient(180deg, transparent, rgba(97, 106, 115, .22) 40%, rgba(97, 106, 115, 0));',
        "toBlack" : 'linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 85%);'
      },
      backgroundColor: {
        'header-glass': "rgba( 255, 255, 255, 0.03 )",
        'gray' : '#161616',
        'sucess-green': '#69CC58',
        'error-red': '#FF0000',
        'warning-yellow': '#FFB300',
        'carrousel-card': 'rgba(40,40,40,0.4)',
        'violet' : '#B59AFF',
      },
      boxShadow: {
        'header-glass': "0 0 0 1px rgba( 255, 255, 255, 0.12 )",
      },
      backdropBlur: {
        'header-glass': '12px',
      },
      borderColor: {
        'plus' : 'rgba(80,80,80,1)',
        'plus-left' : 'rgba(60,60,60,1)',
        'plus-right' : 'rgba(60,60,60,1)',
        'plus-bot' : 'rgba(60,60,60,1)'
      },
      borderWidth: {
        'plus' : "1px",
        'plus-left' : "1px 0 1px 0",
        'plus-right' : "1px 0 1px 1px",
        'plus-bot' : "0 0 1px 0",
      },
      borderRadius: {
        'header-glass': "14px",
      },
    },
  },
  plugins: [],
};

export default config;
