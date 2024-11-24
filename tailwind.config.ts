import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-kode-mono)'],
      },
      colors:{
        background: '#F6F4FE',
        foreground: '#8557db',
        'maincolor': {
          '50': '#f6f4fe',
          '100': '#eeebfc',
          '200': '#dfdafa',
          '300': '#c8bdf5',
          '400': '#ab97ee',
          '500': '#906de5',
          '600': '#8557db',
          '700': '#6e3cc5',
          '800': '#5d32a5',
          '900': '#4d2a88',
          '950': '#30195c',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
