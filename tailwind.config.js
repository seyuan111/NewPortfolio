/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Caprasimo: ['Caprasimo', "cursive"],
        QuickSand: ['Quicksand', "sans-serif"],
        Teko : ["Teko', sans-serif"],
        Cinzel: ["Cinzel, serif"],
        Italliano: ["Italianno, cursive"],
        Rubik: ["Rubik Doodle Triangles, system-ui"],
        Zeyada: ['Zeyada, cursive']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
