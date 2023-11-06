import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
      screens: {
        "2xl": "1025px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        pattern: "url('/looper-pattern.svg')",
        gradient: 'url("/gradient.webp")',
        stars: 'url("/stars.webp")',
      },
      gradientColorStops: {
        "gradient-blue": "#007CF0",
        "gradient-teal": "#00DFD8",
        "gradient-purple": "#7928CA",
        "gradient-pink": "#FF0080",
        "gradient-red": "#FF4D4D",
        "gradient-yellow": "#F9CB28",
      },
      keyframes: {
        "gradient-foreground-1": {
          "from, 16.667%, to": {
            opacity: 1 as unknown as string,
          },
          "33.333%, 83.333%": {
            opacity: 0 as unknown as string,
          },
        },
        "gradient-background-1": {
          "from, 16.667%, to": {
            opacity: 0 as unknown as string,
          },
          "25%, 91.667%": {
            opacity: 1 as unknown as string,
          },
        },
        "gradient-foreground-2": {
          "from, to": {
            opacity: 0 as unknown as string,
          },
          "33.333%, 50%": {
            opacity: 1 as unknown as string,
          },
          "16.667%, 66.667%": {
            opacity: 0 as unknown as string,
          },
        },
        "gradient-background-2": {
          "from, to": {
            opacity: 1 as unknown as string,
          },
          "33.333%, 50%": {
            opacity: 0 as unknown as string,
          },
          "25%, 58.333%": {
            opacity: 1 as unknown as string,
          },
        },
        "gradient-foreground-3": {
          "from, 50%, to": {
            opacity: 0 as unknown as string,
          },
          "66.667%, 83.333%": {
            opacity: 1 as unknown as string,
          },
        },
        "gradient-background-3": {
          "from, 58.333%, 91.667%, to": {
            opacity: 1 as unknown as string,
          },
          "66.667%, 83.333%": {
            opacity: 0 as unknown as string,
          },
        },
        "rotate-360": {
          "0%": {
            transform: "rotate(0deg) scale(1)",
          },
          "50%": {
            transform: "rotate(360deg) scale(3.5)",
          },
          "100%": {
            transform: "rotate(0deg) scale(1)",
          },
        },
        "slow-scale": {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.5)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "gradient-background-1": "gradient-background-1 8s infinite",
        "gradient-foreground-1": "gradient-foreground-1 8s infinite",
        "gradient-background-2": "gradient-background-2 8s infinite",
        "gradient-foreground-2": "gradient-foreground-2 8s infinite",
        "gradient-background-3": "gradient-background-3 8s infinite",
        "gradient-foreground-3": "gradient-foreground-3 8s infinite",
        "r-360": "rotate-360 1225s infinite",
        "slow-scale": "slow-scale 1225s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
