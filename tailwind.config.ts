import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sulsans)"],
      },
      colors: {
        "classdrift-gray-100": "#CECECE",
        "classdrift-gray-200": "#5A5A5A",
        "classdrift-accent": "#686EFF",
        "classdrift-background": "#F6F7F9",
        "classdrift-strip-purple": "#C4BBFF",
        "classdrift-strip-pink": "#FFBBEC",
        "classdrift-strip-green": "#BBFFCA",
        "classdrift-strip-yellow": "#FFDCBB",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
