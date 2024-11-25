import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#172329",
        load: "#455356",
        title: "#bcbcbc",
      },
      fontSize: {
        'custom-size': '1.75rem',
        'extra-large': '12rem',    
      },
      lineHeight: {
        'custom-line': '10rem', 
      },

    },
    fontFamily: {
      'agrandir': ['agrandir', 'sans-serif'],
      'body': ['body', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
