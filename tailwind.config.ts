/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
// @ts-ignore
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

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
        bg_new:
          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCIgb3BhY2l0eT0iMSI+PGRlZnM+PGZpbHRlciBpZD0iYmJibHVycnktZmlsdGVyIiB4PSItMTAwJSIgeT0iLTEwMCUiIHdpZHRoPSI0MDAlIiBoZWlnaHQ9IjQwMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgcHJpbWl0aXZlVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgoJPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNjUiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49IlNvdXJjZUdyYXBoaWMiIGVkZ2VNb2RlPSJub25lIiByZXN1bHQ9ImJsdXIiPjwvZmVHYXVzc2lhbkJsdXI+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbHRlcj0idXJsKCNiYmJsdXJyeS1maWx0ZXIpIj48ZWxsaXBzZSByeD0iMjA1IiByeT0iMjA2IiBjeD0iNjkuNzI3MTE5NjAyNDE2IiBjeT0iMTI5Ljk1MDg1NDk5NzgzMDYyIiBmaWxsPSJoc2xhKDAsIDAlLCAwJSwgMS4wMCkiPjwvZWxsaXBzZT48ZWxsaXBzZSByeD0iMjA1IiByeT0iMjA2IiBjeD0iMzg0LjgzODQ5NzEyODMwNDkiIGN5PSIxNzguNDcxMjA1NjM1ODUzODMiIGZpbGw9ImhzbGEoMTY2LCA3NiUsIDI5JSwgMS4wMCkiPjwvZWxsaXBzZT48ZWxsaXBzZSByeD0iMjA1IiByeT0iMjA2IiBjeD0iNzM3Ljg3NDg3MjAyMzA1OTUiIGN5PSIxMjMuODQ1MzM1OTk2NzQ1MjYiIGZpbGw9ImhzbGEoMCwgMCUsIDAlLCAxLjAwKSI+PC9lbGxpcHNlPjxlbGxpcHNlIHJ4PSIyMDUiIHJ5PSIyMDYiIGN4PSI1NDEuOTM1MjY1NTA0NzE5NiIgY3k9IjM1MS40NjQ5NzQ3Njk3NDg5NSIgZmlsbD0iaHNsYSgwLCAwJSwgMCUsIDEuMDApIj48L2VsbGlwc2U+PGVsbGlwc2Ugcng9IjIwNSIgcnk9IjIwNiIgY3g9IjM4MS4zNjU1NzUzNDg1MjY4IiBjeT0iLTMuNzg3NzkyMzUxMjM4ODYzNCIgZmlsbD0iaHNsYSgxNzMsIDEwMCUsIDglLCAxLjAwKSI+PC9lbGxpcHNlPjxlbGxpcHNlIHJ4PSIyMDUiIHJ5PSIyMDYiIGN4PSIyODcuMzE3MjQ3MzE4MDMyOTciIGN5PSI0NzUuNTE1ODkwNzA4NzY2NzMiIGZpbGw9ImhzbGEoMCwgMCUsIDAlLCAxLjAwKSI+PC9lbGxpcHNlPjxlbGxpcHNlIHJ4PSIyMDUiIHJ5PSIyMDYiIGN4PSIxMjAuNTY5MzcyMTM3OTcwMiIgY3k9IjU3Mi4yMDYzMzM1NTE5MzgyIiBmaWxsPSJoc2xhKDAsIDAlLCAwJSwgMS4wMCkiPjwvZWxsaXBzZT48ZWxsaXBzZSByeD0iMjA1IiByeT0iMjA2IiBjeD0iLTMwLjM0NTc3MTI3NDk1ODE5NiIgY3k9IjQ2OS41MTUyNDUzNjQ5MDc5NyIgZmlsbD0iaHNsYSgxNjgsIDEwMCUsIDI1JSwgMS4wMCkiPjwvZWxsaXBzZT48ZWxsaXBzZSByeD0iMjA1IiByeT0iMjA2IiBjeD0iODQ4Ljk2MTAxNjM0NDUzNDUiIGN5PSI0MjAuMzAxMzYzNjc5MzIwOSIgZmlsbD0iaHNsYSgxNjQsIDEwMCUsIDIxJSwgMS4wMCkiPjwvZWxsaXBzZT48L2c+PC9zdmc+Cg==")',
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
            transform: "rotate(360deg) scale(1.5)",
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
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
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
        tilt: "tilt 3s infinite linear",
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  const allColors: any[] = flattenColorPalette(theme("colors")) as any[];
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
