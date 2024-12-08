/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-14': '#14141B',
        'black-19': '#191920',
        'black-f1': '#1F1F27',
        'black-24': '#24242E',
        'gray-36': '#363643',
        'white-ebe': '#EBEAEA',
        'light-gray-AE': '#AEAEAEFF',
        '5-star-color': '#FFCC33',
        '4-star-color': '#9A69D4',
        '3-star-color': '#70a1e9',
        'pyro-color': '#FF6640',
        'pyro-second-color': '#3D1818',
        'hydro-color': '#00c0ff',
        'hydro-second-color': '#182E3D',
        'dendro-color': '#9be53d',
        'dendro-second-color': '#303D18',
        'electro-color': '#cc80ff',
        'electro-second-color': '#2F183D',
        'anemo-color': '#33d7a0',
        'anemo-second-color': '#183D33',
        'cryo-color': '#7af2f2',
        'cryo-second-color': '#183D3C',
        'geo-color': '#ffb00d',
        'geo-second-color': '#3D3218',
      },
    },
  },
  plugins: [],
};
