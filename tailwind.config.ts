import type { Config } from 'tailwindcss';

const colors = {
  'eatly-violet': '#6C5FBC',
  'eatly-gray': '#CBCBCB',
  'eatly-gray-300': '#C5C5C5',
  'eatly-gray-400': '#606060',
  'eatly-black': '#282828',
  'eatly-black-300': '#201F1F',
  'eatly-gray-500': '#676767',
  'blue-gray': '#334155',
};
const sizes = {
  '15': '3.75rem',
  '18': '4.5rem',
};
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './react/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        ...colors,
      },
      borderColor: colors,
      backgroundColor: colors,
      fontFamily: {
        popins: 'var(--font-popins)',
        inter: 'Inter',
      },
      fontSize: {
        '4.3xl': ['2.6875rem', '125%'], //43px
        '5xl': ['3.125rem', '125%'], //50px
        '5.1xl': ['3.1875rem', '125%'], //51px
        '7xl': ['4.375rem', '120%'], //70px
        '5.3xl': ['3.2125rem', '120%'], //53px
        '8xl': ['4.6875rem', '120%'], //75px
      },
      padding: { ...sizes },
      margin: { ...sizes },
    },
  },
  plugins: [],
} satisfies Config;
