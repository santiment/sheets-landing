import tailwindConfig from "san-webkit-next/tailwind.config.js"

export default {
  presets: [tailwindConfig],
  content: [
    ...tailwindConfig.content,
    "./node_modules/san-webkit-next/dist/**/*.{js,svelte}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        xl: "1172px",
      },
    },
    screens: {
      ...tailwindConfig.theme.screens,
      xl: { max: "1199px" },
    },
    extend: {
      colors: {
        sheets: {
          DEFAULT: "var(--sheets)",
          hover: "var(--sheets-hover)",
          accent: "var(--sheets-accent)",
        },
      },
      dropShadow: {
        panel: "0 10px 40px rgba(24, 27, 43, 0.06)",
      },
      boxShadow: {
        panel: "0px 10px 40px rgba(24, 27, 43, 0.06)",
        popup:
          "0px 4px 50px rgba(24, 27, 43, 0.04), 0px 10px 40px rgba(24, 27, 43, 0.06)",
        code: "0px 4px 50px rgba(56, 74, 167, 0.04), 0px 60px 40px rgba(56, 74, 167, 0.02)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
        leftMoving: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-10px, -10px)" },
        },
        rightMoving: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(10px, 10px)" },
        },
        shiftDown: {
          "0%": {
            transform: "translateY(-40px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        shiftUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        moving: { "100%": { transform: "translate3d(-50%,0,0)" } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        leftPuzzle: "leftMoving 1s ease-in-out infinite alternate",
        rightPuzzle: "rightMoving 1s ease-in-out infinite alternate",
        shiftDown: "shiftDown 0.8s cubic-bezier(0, 0.96, 1, 1) both",
        shiftUp: "shiftUp 0.8s cubic-bezier(0, 0.96, 1, 1) 0.6s both",
        movingLinear: "moving var(--tw-duration,30s) linear infinite",
      },
    },
  },
  plugins: [],
}
