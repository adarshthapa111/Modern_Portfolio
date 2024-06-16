import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'caas': ['Cassandra', 'sans-serif'],
        'playfair': ['Playfair Display', 'erif'],
        'ontserrat': ['Montserrat', 'ans-serif'],
        'great-vibes': ['Great Vibes', 'display'],
      },
      // keyframes: {
      //   scroll: {
      //     '0%': { transform: 'translateX(0)' },
      //     '100%': { transform: 'translateX(-100%)' },
      //   },
      //   scrollReverse: {
      //     '0%': { transform: 'translateX(0)' },
      //     '100%': { transform: 'translateX(20%)' },
      //   },
      // },
      // animation: {
      //   scroll: 'scroll 30s linear infinite',
      //   scrollReverse: 'scrollReverse 30s linear infinite',
      // },
    },
  },
  plugins: [],
};
export default config;
