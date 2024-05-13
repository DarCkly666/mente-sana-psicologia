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
      colors: {
        "nav-text": "#FFFFFF",
        "gradient-start": "#0077B6",
        "gradient-end": "#90E0EF",
        "dark-blue": "#0077B6",
        "light-blue": "#175cff",
        "middle-blue": "#0a1a86",
      },
    },
  },
  plugins: [],
};
export default config;
