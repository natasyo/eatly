import type { Config } from 'tailwindcss';

const colors = {
  'eatly-violet-100': '#DBD9EE',
  'eatly-violet': '#6C5FBC',
  'eatly-gray': '#CBCBCB',
  'eatly-gray-10': '#F9F9F9',
  'eatly-gray-50': '#F4F4F6',
  'eatly-gray-300': '#C5C5C5',
  'eatly-gray-400': '#606060',
  'eatly-black': '#282828',
  'eatly-black-300': '#201F1F',
  'eatly-black-600': '#323142',
  'eatly-gray-500': '#676767',
  'eatly-gray-600': '#8E97A6',
  'eatly-gray-700': '#ACADB9',
  'blue-gray': '#334155',
  'eatly-yellow-100': '#F7EDD0',
  'eatly-yellow-700': '#DAA31A',
  'eatly-red-100': '#F7C5BA',
  'eatly-red-700': '#FB471D',
  'eatly-black-500': '#323142',
  'eatly-green-700': '#309D5B',
  'eatly-green-100': '#33AC64',
};
const sizes = {
  '15': '3.75rem',
  '18': '4.5rem',
  '21': '5.25rem',
  '44': '11rem',
  '58': '14.5rem',
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
      boxShadow: {
        'eatly-3xl': '5.94564px 71.3477px 35.6738px rgba(229, 229, 229, 0.7)',
      },
      fontFamily: {
        popins: 'var(--font-popins)',
        inter: 'Inter',
        manrope: 'Manrope',
      },
      fontSize: {
        '4.3xl': ['2.6875rem', '125%'], //43px
        '4.5xl': ['2.8125rem', '125%'], //45px
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
