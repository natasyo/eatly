import type { Config } from 'tailwindcss';

const colors = {
  'eatly-violet': '#6C5FBC',
  'eatly-gray': '#CBCBCB',
  'eatly-gray-400': '#606060',
  'eatly-black': '#282828',
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
        popins: 'Poppins Fallback',
        inter: 'Inter',
      },
    },
  },
  plugins: [],
} satisfies Config;
