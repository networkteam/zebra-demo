/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#282828',
      },
      fontFamily: {
        bayon: ['var(--font-bayon)', '"Roboto Condensed", "Helvetica Neue", Helvetica, Arial'],
      },
    },
  },
  safelist: [
    // add classes to safelist to prevent purgecss from removing them
    // https://tailwindcss.com/docs/content-configuration#safelisting-classes
    {
      pattern: /(mb|mt|my|pb|pt|py)-(12|20|24|28|36)/,
      variants: ['sm'],
    },
    {
      pattern: /col-span-(3|4|6|8|9|12)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
  ],
  plugins: [],
};
