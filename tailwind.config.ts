import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f3f1eb",
        ink: "#151515",
        quiet: "#726f67",
        signal: "#ccff38",
        cobalt: "#2d46ff",
        ember: "#ff5833",
      },
      letterSpacing: {
        display: "-0.075em",
        label: "0.13em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
