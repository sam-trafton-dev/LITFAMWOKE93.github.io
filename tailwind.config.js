/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mono: ["'Share Tech Mono'", "monospace"],
        terminal: ["'VT323'", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // WY Custom Colors
        wy: {
          black: "#050505",
          dark: "#0a0a0a",
          amber: "#FF9D00",
          "amber-dim": "#B36E00",
          "amber-glow": "#FFBD4A",
          "amber-muted": "#664000",
        },
      },
      borderRadius: {
        lg: "0",
        md: "0",
        sm: "0",
        DEFAULT: "0",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "3%": { opacity: "0.95" },
          "6%": { opacity: "1" },
          "7%": { opacity: "0.9" },
          "8%": { opacity: "1" },
          "50%": { opacity: "1" },
          "51%": { opacity: "0.98" },
          "75%": { opacity: "1" },
          "76%": { opacity: "0.93" },
        },
        "blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "glow-pulse": {
          "0%, 100%": {
            textShadow: "0 0 10px hsl(38 100% 50% / 0.5), 0 0 20px hsl(38 100% 50% / 0.3)",
          },
          "50%": {
            textShadow: "0 0 15px hsl(38 100% 50% / 0.8), 0 0 30px hsl(38 100% 50% / 0.5)",
          },
        },
        "typing": {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "boot-fade": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "flicker": "flicker 4s infinite",
        "blink": "blink 1s step-end infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "typing": "typing 2s steps(40, end)",
        "boot-fade": "boot-fade 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

