/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0B1120",
          800: "#1A1F2E",
          700: "#242937",
          600: "#2D3344",
        },
        glow: {
          purple: "#9D4EDD",
          blue: "#4EA8DE",
          aqua: "#2DD4BF",
        },
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        "glow-pulse": "glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: [
    "from-glow-purple",
    "to-glow-blue",
    "from-glow-blue",
    "to-glow-aqua",
    "from-glow-aqua",
    "to-glow-purple",
    "text-glow-purple",
    "text-glow-blue",
    "text-glow-aqua",
    "bg-glow-purple",
    "bg-glow-blue",
    "bg-glow-aqua",
    "hover:bg-glow-purple/90",
    "hover:bg-glow-blue/90",
    "hover:bg-glow-aqua/90",
  ],
};
