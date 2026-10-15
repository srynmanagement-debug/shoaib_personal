import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ivory: {
          DEFAULT: "#F4F0E8",
          light: "#FAF7F2",
          dark: "#E8E2D4",
        },
        charcoal: {
          DEFAULT: "#222520",
          deep: "#171A15",
          light: "#2F342C",
          muted: "#3F453B",
        },
        stone: {
          brand: "#A4A18F",
          brandLight: "#C4C1B3",
          brandDark: "#787565",
          brandSubtle: "#E4E0D5",
        },
        olive: {
          DEFAULT: "#66715C",
          dark: "#4E5746",
          light: "#7F8C73",
          muted: "#8E9B82",
        },
        sand: {
          DEFAULT: "#E5DFD3",
          light: "#F0ECE3",
          dark: "#D0C8B8",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Manrope", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        widest: ".18em",
        ultra: ".25em",
      },
    },
  },
  plugins: [],
};
export default config;

