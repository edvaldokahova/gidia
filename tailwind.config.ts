import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        noir: { DEFAULT: "#0A0908", 2: "#12100E", 3: "#1A1714" },
        ivory: { DEFAULT: "#F5EFE6", dim: "#B9B0A3" },
        gold: { light: "#EBCB8B", DEFAULT: "#C9A15B", deep: "#8C6A2F" },
      },
      // Tailwind 3.3 não traz estes níveis de transparência por defeito
      opacity: { 15: "0.15", 35: "0.35", 45: "0.45", 55: "0.55", 65: "0.65", 85: "0.85" },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        twinkle: { "0%,100%": { opacity: ".25", transform: "scale(.8)" }, "50%": { opacity: "1", transform: "scale(1)" } },
        draw: { from: { strokeDashoffset: "1400" }, to: { strokeDashoffset: "0" } },
        wave: { "0%,100%": { transform: "scaleY(.35)" }, "50%": { transform: "scaleY(1)" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        twinkle: "twinkle 3.2s ease-in-out infinite",
        draw: "draw 2.6s cubic-bezier(.6,.1,.2,1) .3s both",
        wave: "wave 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
