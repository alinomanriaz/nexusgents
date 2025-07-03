import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      keyframes: {
        'logo-slide': {
          'from': {
            transform: 'translateX(0%)',
          },
          'to': {
            transform: 'translateX(-100%)',
          },
        },
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'logo-slide': 'logo-slide 25s linear infinite', // Corrected 'linear'
        'border-spin': 'border-spin 5s linear infinite',
      },
      screen: {
        "md": "900px",
      },
      fontFamily: {
        Poppins: ["var(--poppins)"],
      },
      backgroundImage: {
        "gradient": "linear-gradient(90deg, rgba(23,179,255,1) 6%, rgba(86,101,255,1) 50%, rgba(128,0,255,1) 92%)",
      },
      backgroundColor:{
        "darkmodebtncolor":"#0f172a"
      }
    },
  },
  plugins: [],
};

export default config;
